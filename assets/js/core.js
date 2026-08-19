/* ===========================================================
   台州小升初学习辅助系统 · 核心运行时 core.js
   - 存储层（localStorage，纯本地，无后端）
   - 教材版本锁定（语文统编 / 数学人教 / 英语 PEP|译林）
   - 路由、Toast、Modal、轻量 Canvas 图表
   - TTS 引擎（Web Speech API + 微信内嵌浏览器降级）
   =========================================================== */
(function (global) {
  'use strict';

  /* ---------------- 常量 ---------------- */
  var STORE_KEY = 'tzxsc_v1';
  var SUBJECTS = ['语文', '数学', '英语'];
  var SUBJ_CLASS = { '语文': 'cn', '数学': 'ma', '英语': 'en' };
  var GRADE_LABEL = { '5A': '五上', '5B': '五下', '6A': '六上', '6B': '六下' };

  /* ---------------- 默认状态 ---------------- */
  function defaultState() {
    return {
      profile: {
        student: 'Lily',
        examDate: '',                 // 未设置 → 首页引导
        dailyMinutes: 60,
        weekendMinutes: 90,
        priority: ['数学', '语文', '英语'],
        enBook: 'PEP',                // PEP | 译林
        enBookConfirmed: false
      },
      kaodian: {
        custom: [],                   // 用户自建考点
        weak: {},                     // id -> true 薄弱
        mastered: {},                 // id -> true 已掌握
        notes: {}                     // id -> 备注
      },
      plan: null,                     // 生成后的计划对象
      planCheck: {},                  // "日期#任务序号" -> true
      recite: {
        active: {},                   // itemId -> {start:'YYYY-MM-DD', done:{dateKey:true}, reviewDone:{}}
      },
      speaking: {
        scores: []                    // {date, topicId, taskId, pron, gram, flu, cont, note}
      },
      listening: {
        records: {},                  // materialId -> {done:true, correct:n, total:n, date, answers:{}}
        planStart: ''
      },
      streak: { last: '', days: 0 },
      log: []                         // 行为流水（最近 200 条）
    };
  }

  /* ---------------- 存储 ---------------- */
  var state = null;

  function deepMerge(base, patch) {
    if (patch === null || typeof patch !== 'object' || Array.isArray(patch)) return patch;
    var out = Array.isArray(base) ? base.slice() : Object.assign({}, base);
    Object.keys(patch).forEach(function (k) {
      if (patch[k] && typeof patch[k] === 'object' && !Array.isArray(patch[k]) &&
        base && typeof base[k] === 'object' && !Array.isArray(base[k])) {
        out[k] = deepMerge(base[k], patch[k]);
      } else out[k] = patch[k];
    });
    return out;
  }

  function load() {
    var raw = null;
    try { raw = localStorage.getItem(STORE_KEY); } catch (e) { raw = null; }
    if (!raw) { state = defaultState(); return state; }
    try {
      state = deepMerge(defaultState(), JSON.parse(raw));
    } catch (e) {
      console.warn('存档解析失败，已重置', e);
      state = defaultState();
    }
    return state;
  }

  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      toast('保存失败：浏览器存储空间不足或处于隐私模式', 'err');
      return false;
    }
  }

  function S() { return state; }

  function logAct(type, text) {
    state.log.unshift({ t: Date.now(), type: type, text: text });
    if (state.log.length > 200) state.log.length = 200;
  }

  /* ---------------- 日期工具 ---------------- */
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function todayKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  function parseKey(k) {
    if (!k) return null;
    var p = String(k).split('-');
    if (p.length !== 3) return null;
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return isNaN(d.getTime()) ? null : d;
  }
  function addDays(dateOrKey, n) {
    var d = typeof dateOrKey === 'string' ? parseKey(dateOrKey) : new Date(dateOrKey);
    if (!d) return null;
    d.setDate(d.getDate() + n);
    return d;
  }
  function addDaysKey(key, n) { var d = addDays(key, n); return d ? todayKey(d) : ''; }
  function diffDays(fromKey, toKey) {
    var a = parseKey(fromKey), b = parseKey(toKey);
    if (!a || !b) return 0;
    return Math.round((b - a) / 86400000);
  }
  function weekdayCN(dateOrKey) {
    var d = typeof dateOrKey === 'string' ? parseKey(dateOrKey) : dateOrKey;
    return d ? '日一二三四五六'[d.getDay()] : '';
  }
  function isWeekend(dateOrKey) {
    var d = typeof dateOrKey === 'string' ? parseKey(dateOrKey) : dateOrKey;
    if (!d) return false;
    var w = d.getDay();
    return w === 0 || w === 6;
  }
  function mdLabel(key) {
    var d = parseKey(key);
    return d ? (d.getMonth() + 1) + '/' + d.getDate() : key;
  }

  /* ---------------- DOM 工具 ---------------- */
  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function on(root, sel, evt, fn) {
    root.addEventListener(evt, function (e) {
      var t = e.target.closest(sel);
      if (t && root.contains(t)) fn(e, t);
    });
  }
  function subjChip(s) {
    return '<span class="chip chip-' + (SUBJ_CLASS[s] || '') + '">' + esc(s) + '</span>';
  }
  function freqChip(f) {
    var cls = f === '高频' ? 'chip-hi' : (f === '中频' ? 'chip-mid' : 'chip-lo');
    return '<span class="chip ' + cls + '">' + esc(f) + '</span>';
  }
  function stars(n) {
    n = Math.max(1, Math.min(5, n | 0));
    return '<span class="stars" title="难度 ' + n + '/5">' + '★'.repeat(n) + '☆'.repeat(5 - n) + '</span>';
  }

  /* ---------------- Toast ---------------- */
  function toast(msg, kind, ms) {
    var wrap = el('toast-wrap');
    if (!wrap) { console.log(msg); return; }
    var d = document.createElement('div');
    d.className = 'toast ' + (kind || '');
    d.textContent = msg;
    wrap.appendChild(d);
    setTimeout(function () {
      d.style.transition = 'opacity .25s'; d.style.opacity = '0';
      setTimeout(function () { d.remove(); }, 260);
    }, ms || 2000);
  }

  /* ---------------- Modal ---------------- */
  function modal(opts) {
    var mask = el('modal-mask');
    el('modal-title').textContent = opts.title || '';
    el('modal-body').innerHTML = opts.body || '';
    var foot = el('modal-foot');
    foot.innerHTML = '';
    (opts.buttons || [{ text: '关闭' }]).forEach(function (b) {
      var btn = document.createElement('button');
      btn.className = 'btn ' + (b.cls || '');
      btn.textContent = b.text;
      btn.onclick = function () {
        var keep = b.onClick ? b.onClick() : false;
        if (!keep) closeModal();
      };
      foot.appendChild(btn);
    });
    mask.classList.remove('hidden');
    if (opts.onOpen) opts.onOpen(el('modal-body'));
  }
  function closeModal() { el('modal-mask').classList.add('hidden'); }

  /* ---------------- 轻量 Canvas 图表（无外部依赖） ---------------- */
  function setupCanvas(canvas, h) {
    var dpr = window.devicePixelRatio || 1;
    var w = canvas.parentNode.clientWidth || 600;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.height = h + 'px';
    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.font = '12px "PingFang SC","Microsoft YaHei",sans-serif';
    return { ctx: ctx, w: w, h: h };
  }

  function barChart(canvas, data, opt) {
    opt = opt || {};
    var H = opt.height || 200;
    var c = setupCanvas(canvas, H), ctx = c.ctx, W = c.w;
    var padL = 34, padR = 10, padT = 14, padB = 30;
    var innerW = W - padL - padR, innerH = H - padT - padB;
    var max = opt.max || Math.max.apply(null, data.map(function (d) { return d.value; }).concat([1]));
    max = Math.ceil(max * 1.12) || 1;
    ctx.strokeStyle = '#e2e8f2'; ctx.fillStyle = '#7b8794';
    for (var i = 0; i <= 4; i++) {
      var y = padT + innerH - innerH * i / 4;
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
      ctx.textAlign = 'right'; ctx.fillText(Math.round(max * i / 4), padL - 6, y + 4);
    }
    var n = data.length, slot = innerW / Math.max(n, 1), bw = Math.min(46, slot * 0.58);
    data.forEach(function (d, idx) {
      var x = padL + slot * idx + slot / 2;
      var bh = innerH * (d.value / max);
      ctx.fillStyle = d.color || '#3457d5';
      var yTop = padT + innerH - bh;
      var r = Math.min(5, bw / 2);
      ctx.beginPath();
      ctx.moveTo(x - bw / 2, padT + innerH);
      ctx.lineTo(x - bw / 2, yTop + r);
      ctx.quadraticCurveTo(x - bw / 2, yTop, x - bw / 2 + r, yTop);
      ctx.lineTo(x + bw / 2 - r, yTop);
      ctx.quadraticCurveTo(x + bw / 2, yTop, x + bw / 2, yTop + r);
      ctx.lineTo(x + bw / 2, padT + innerH);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#4b5563'; ctx.textAlign = 'center';
      ctx.fillText(d.label, x, H - 10);
      if (d.value > 0) { ctx.fillStyle = '#1f2937'; ctx.fillText(d.value, x, yTop - 5); }
    });
  }

  function donutChart(canvas, pct, opt) {
    opt = opt || {};
    var H = opt.height || 150;
    var c = setupCanvas(canvas, H), ctx = c.ctx, W = c.w;
    var cx = W / 2, cy = H / 2, R = Math.min(W, H) / 2 - 8, lw = opt.lw || 16;
    pct = Math.max(0, Math.min(100, pct || 0));
    ctx.lineWidth = lw; ctx.strokeStyle = '#eef2f9';
    ctx.beginPath(); ctx.arc(cx, cy, R - lw / 2, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = opt.color || '#3457d5'; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(cx, cy, R - lw / 2, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * pct / 100);
    ctx.stroke();
    ctx.fillStyle = '#1f2937'; ctx.textAlign = 'center';
    ctx.font = 'bold 22px "PingFang SC",sans-serif';
    ctx.fillText(Math.round(pct) + '%', cx, cy + 4);
    if (opt.label) {
      ctx.font = '11.5px "PingFang SC",sans-serif'; ctx.fillStyle = '#7b8794';
      ctx.fillText(opt.label, cx, cy + 22);
    }
  }

  function lineChart(canvas, points, opt) {
    opt = opt || {};
    var H = opt.height || 180;
    var c = setupCanvas(canvas, H), ctx = c.ctx, W = c.w;
    var padL = 30, padR = 12, padT = 12, padB = 26;
    var innerW = W - padL - padR, innerH = H - padT - padB;
    var max = Math.max.apply(null, points.map(function (p) { return p.value; }).concat([1]));
    max = Math.ceil(max * 1.15) || 1;
    ctx.strokeStyle = '#e2e8f2'; ctx.fillStyle = '#7b8794'; ctx.textAlign = 'right';
    for (var i = 0; i <= 3; i++) {
      var y = padT + innerH - innerH * i / 3;
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
      ctx.fillText(Math.round(max * i / 3), padL - 5, y + 4);
    }
    if (!points.length) return;
    var step = points.length > 1 ? innerW / (points.length - 1) : 0;
    ctx.beginPath();
    points.forEach(function (p, i) {
      var x = padL + step * i, y = padT + innerH - innerH * (p.value / max);
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.strokeStyle = opt.color || '#e2a252'; ctx.lineWidth = 2.2; ctx.stroke();
    ctx.fillStyle = opt.color || '#e2a252';
    points.forEach(function (p, i) {
      var x = padL + step * i, y = padT + innerH - innerH * (p.value / max);
      ctx.beginPath(); ctx.arc(x, y, 3.2, 0, Math.PI * 2); ctx.fill();
    });
    ctx.fillStyle = '#7b8794'; ctx.textAlign = 'center';
    points.forEach(function (p, i) {
      if (points.length > 8 && i % 2) return;
      ctx.fillText(p.label, padL + step * i, H - 8);
    });
  }

  /* ---------------- TTS 引擎 ---------------- */
  var TTS = (function () {
    var ua = navigator.userAgent || '';
    var isWeChat = /MicroMessenger/i.test(ua);
    var supported = 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';
    var voices = [];
    var current = null;

    function refresh() {
      if (!supported) return;
      try { voices = window.speechSynthesis.getVoices() || []; } catch (e) { voices = []; }
    }
    if (supported) {
      refresh();
      try { window.speechSynthesis.onvoiceschanged = refresh; } catch (e) { }
    }
    function pickVoice(lang) {
      refresh();
      var want = (lang || 'en-US').toLowerCase().slice(0, 2);
      var exact = voices.filter(function (v) { return (v.lang || '').toLowerCase().replace('_', '-').indexOf(want) === 0; });
      // 优先挑质量较好的英文音色
      var prefer = ['samantha', 'karen', 'daniel', 'google us english', 'microsoft aria', 'microsoft zira', 'microsoft guy'];
      for (var i = 0; i < prefer.length; i++) {
        var hit = exact.filter(function (v) { return (v.name || '').toLowerCase().indexOf(prefer[i]) >= 0; })[0];
        if (hit) return hit;
      }
      return exact[0] || null;
    }
    function speak(text, o) {
      o = o || {};
      if (!supported) { return false; }
      try {
        window.speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(String(text));
        u.lang = o.lang || 'en-US';
        u.rate = o.rate == null ? 0.9 : o.rate;
        u.pitch = o.pitch == null ? 1 : o.pitch;
        var v = pickVoice(u.lang);
        if (v) u.voice = v;
        u.onend = function () { current = null; if (o.onEnd) o.onEnd(); };
        u.onerror = function () { current = null; if (o.onEnd) o.onEnd(); };
        current = u;
        window.speechSynthesis.speak(u);
        return true;
      } catch (e) { return false; }
    }
    function stop() {
      if (!supported) return;
      try { window.speechSynthesis.cancel(); } catch (e) { }
      current = null;
    }
    function warnHTML() {
      if (isWeChat) {
        return '<div class="tts-warn">🔇 检测到<b>微信内置浏览器</b>：它不支持网页朗读（Web Speech API）。' +
          '请点右上角「···」→「在浏览器打开」（Safari / Chrome / 夸克均可）即可听到真人语音；' +
          '或由家长按下方脚本朗读，效果同样有效。</div>';
      }
      if (!supported) {
        return '<div class="tts-warn">🔇 当前浏览器不支持网页朗读。建议换用 Chrome / Edge / Safari；' +
          '或由家长按脚本朗读（脚本已标注语速建议）。</div>';
      }
      return '';
    }
    return {
      supported: supported, isWeChat: isWeChat, speak: speak, stop: stop,
      warnHTML: warnHTML, refresh: refresh,
      usable: function () { return supported && !isWeChat; }
    };
  })();

  /* ---------------- 录音（口语自评用，可用则用） ---------------- */
  var Recorder = (function () {
    var rec = null, chunks = [], stream = null;
    var can = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    function start(cb) {
      if (!can) { cb(new Error('当前浏览器/环境不支持录音')); return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
        stream = s; chunks = [];
        try { rec = new MediaRecorder(s); } catch (e) { cb(e); return; }
        rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
        rec.start();
        cb(null);
      }).catch(function (err) { cb(err); });
    }
    function stop(cb) {
      if (!rec) { cb(new Error('未在录音')); return; }
      rec.onstop = function () {
        var blob = new Blob(chunks, { type: 'audio/webm' });
        if (stream) stream.getTracks().forEach(function (t) { t.stop(); });
        rec = null; stream = null;
        cb(null, URL.createObjectURL(blob));
      };
      try { rec.stop(); } catch (e) { cb(e); }
    }
    return { can: can, start: start, stop: stop, active: function () { return !!rec; } };
  })();

  /* ---------------- 教材版本 ---------------- */
  function bookLabel() {
    return '语文·统编版 / 数学·人教版 / 英语·' + state.profile.enBook;
  }
  function refreshBookUI() {
    var sub = el('brand-sub'); if (sub) sub.textContent = bookLabel();
    var fe = el('foot-en'); if (fe) fe.textContent = state.profile.enBook;
    var vb = el('version-banner');
    if (vb) {
      if (state.profile.enBookConfirmed) vb.classList.add('hidden');
      else { vb.classList.remove('hidden'); el('vb-cur').textContent = state.profile.enBook; }
    }
  }

  /* ---------------- 倒计时 ---------------- */
  function daysLeft() {
    var ed = state.profile.examDate;
    if (!ed) return null;
    return diffDays(todayKey(), ed);
  }
  function refreshCountdown() {
    var n = daysLeft();
    var box = el('cd-num');
    if (!box) return;
    box.textContent = n == null ? '--' : (n < 0 ? '已考' : n);
  }

  /* ---------------- 打卡连续天数 ---------------- */
  function touchStreak() {
    var tk = todayKey();
    if (state.streak.last === tk) return;
    if (state.streak.last && diffDays(state.streak.last, tk) === 1) state.streak.days += 1;
    else state.streak.days = 1;
    state.streak.last = tk;
  }

  /* ---------------- 导出 / 导入 ---------------- */
  function download(filename, content, mime) {
    var blob = new Blob([content], { type: mime || 'text/plain;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function copyText(txt) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { toast('已复制到剪贴板', 'ok'); },
        function () { fallbackCopy(txt); });
    } else fallbackCopy(txt);
  }
  function fallbackCopy(txt) {
    var ta = document.createElement('textarea');
    ta.value = txt; ta.style.position = 'fixed'; ta.style.left = '-9999px';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); toast('已复制到剪贴板', 'ok'); }
    catch (e) { toast('复制失败，请手动选择文本', 'warn'); }
    ta.remove();
  }

  /* ---------------- 路由 ---------------- */
  var views = {};
  var currentView = '';
  function registerView(name, obj) { views[name] = obj; }
  function go(name) {
    if (!views[name]) name = 'dashboard';
    SUBJECTS.length; // noop
    Object.keys(views).forEach(function (k) {
      var v = el('view-' + k);
      if (v) v.classList.toggle('hidden', k !== name);
    });
    Array.prototype.forEach.call(document.querySelectorAll('#mainnav button'), function (b) {
      b.classList.toggle('active', b.dataset.view === name);
    });
    currentView = name;
    try { history.replaceState(null, '', '#' + name); } catch (e) { }
    if (views[name].render) views[name].render(el('view-' + name));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    TTS.stop();
  }
  function rerender(name) {
    if (views[name] && views[name].render && currentView === name) views[name].render(el('view-' + name));
  }

  /* ---------------- 导出 ---------------- */
  global.Core = {
    STORE_KEY: STORE_KEY, SUBJECTS: SUBJECTS, SUBJ_CLASS: SUBJ_CLASS, GRADE_LABEL: GRADE_LABEL,
    load: load, save: save, S: S, defaultState: defaultState, logAct: logAct,
    todayKey: todayKey, parseKey: parseKey, addDays: addDays, addDaysKey: addDaysKey,
    diffDays: diffDays, weekdayCN: weekdayCN, isWeekend: isWeekend, mdLabel: mdLabel, pad: pad,
    el: el, esc: esc, on: on, subjChip: subjChip, freqChip: freqChip, stars: stars,
    toast: toast, modal: modal, closeModal: closeModal,
    barChart: barChart, donutChart: donutChart, lineChart: lineChart,
    TTS: TTS, Recorder: Recorder,
    bookLabel: bookLabel, refreshBookUI: refreshBookUI,
    daysLeft: daysLeft, refreshCountdown: refreshCountdown, touchStreak: touchStreak,
    download: download, copyText: copyText,
    registerView: registerView, go: go, rerender: rerender,
    currentView: function () { return currentView; }
  };
})(window);
