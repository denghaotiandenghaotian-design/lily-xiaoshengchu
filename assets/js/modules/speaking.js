/* ===========================================================
   模块五：口语练习 speaking.js
   8 个主题包，每包 4 递进任务；TTS 示范 + 录音自检 + 四维评分存档
   =========================================================== */
(function (Core) {
  'use strict';

  var cur = window.SPEAKING[0] ? window.SPEAKING[0].id : null;

  function ttsWarn() { return Core.TTS.warnHTML(); }

  function render(box) {
    var list = window.SPEAKING;
    var mm = cur ? list.filter(function (m) { return m.id === cur; })[0] : list[0];

    var topicList = list.map(function (m) {
      return '<button class="sp-topic ' + (mm && mm.id === m.id ? 'active' : '') + '" data-id="' + m.id + '">' +
        '<span class="sp-dot"></span><span>' + Core.esc(m.title) + '</span>' +
        '<small>' + Core.esc(m.level) + ' · ' + m.mins + '分</small></button>';
    }).join('');

    if (!mm) { box.innerHTML = '<div class="empty">暂无口语素材。</div>'; return; }

    var patterns = (mm.patterns || []).map(function (p) {
      return '<li><span class="sp-en">' + Core.esc(p[0]) + '</span>' +
        '<button class="rw-tts" data-tts="' + Core.esc(p[0]) + '">🔊</button>' +
        '<span class="sp-zh">' + Core.esc(p[1]) + '</span></li>';
    }).join('');
    var words = (mm.words || []).map(function (w) {
      return '<span class="sp-word"><b>' + Core.esc(w[0]) + '</b>' + Core.esc(w[1]) + '</span>';
    }).join('');
    var dialog = (mm.dialog || []).map(function (d) {
      var who = d.who === 'T' || d.who === 'A' ? '师/问' : '生/答';
      return '<div class="sp-line ' + (d.who === 'A' ? 'q' : 'a') + '"><b>' + who + '：</b>' +
        '<span class="sp-en">' + Core.esc(d.en) + '</span>' +
        '<button class="rw-tts" data-tts="' + Core.esc(d.en) + '">🔊</button>' +
        '<span class="sp-zh">' + Core.esc(d.zh) + '</span></div>';
    }).join('');
    var tasks = (mm.tasks || []).map(function (t, i) {
      var steps = (t.steps || []).map(function (s) { return '<li>' + Core.esc(s) + '</li>'; }).join('');
      return '<div class="sp-task">' +
        '<div class="sp-task-h">🎯 ' + Core.esc(t.name) + ' <small>目标：' + Core.esc(t.goal) + '（' + t.mins + '分）</small></div>' +
        (t.text ? '<div class="sp-task-text">' + Core.esc(t.text) + ' <button class="rw-tts" data-tts="' + Core.esc(t.text) + '">🔊</button></div>' : '') +
        (steps ? '<ol class="sp-steps">' + steps + '</ol>' : '') + '</div>';
    }).join('');
    var pron = (mm.pron || []).map(function (p) { return '<li>🔉 ' + Core.esc(p) + '</li>'; }).join('');

    var warn = ttsWarn();
    var recBtn = Core.Recorder.can
      ? '<button class="btn btn-sm" id="sp-rec">● 开始录音自检</button>'
      : '<span class="rec-na">（当前环境不支持录音，可用手机录音后自查）</span>';

    box.innerHTML = '' +
      '<div class="mod-head"><h2>🎤 口语练习</h2>' +
      '<span class="mod-tip">点 🔊 听示范 · 跟读 4 个递进任务 · 自评存档</span></div>' +
      (warn ? warn : '') +
      '<div class="sp-wrap"><div class="sp-side">' + topicList + '</div>' +
      '<div class="sp-main">' +
      '<div class="sp-title">' + Core.subjChip('英语') + ' <b>' + Core.esc(mm.title) + '</b>' +
      '<span class="sp-goal">🎯 ' + Core.esc(mm.goal) + '</span></div>' +
      '<div class="panel"><h3>📚 核心句型</h3><ul class="sp-patterns">' + patterns + '</ul></div>' +
      '<div class="panel"><h3>🔑 重点词汇</h3><div class="sp-words">' + words + '</div></div>' +
      '<div class="panel"><h3>💬 情景对话</h3>' + dialog + '</div>' +
      '<div class="panel"><h3>📝 四个递进任务</h3>' + tasks + '</div>' +
      '<div class="panel"><h3>🗣️ 发音要点</h3><ul class="sp-pron">' + pron + '</ul></div>' +
      '<div class="panel sp-score-panel"><h3>✍️ 自评打分（保存后计入练习记录）</h3>' +
      '<div class="sp-score">' + rubricRows() + '</div>' +
      '<div class="sp-score-act">' + recBtn + '<button class="btn btn-primary btn-sm" id="sp-save">保存评分</button></div>' +
      '</div>' +
      '<div class="panel"><h3>📈 我的口语记录</h3>' + scoreLog() + '</div>' +
      '</div></div>';

    Core.on(box, '.sp-topic', 'click', function (e, t) { cur = t.getAttribute('data-id'); render(box); });
    Core.on(box, '[data-tts]', 'click', function (e, t) {
      Core.TTS.speak(t.getAttribute('data-tts'), { lang: 'en-US', rate: 0.85 });
    });
    if (Core.Recorder.can) bindRec(box);
    Core.on(box, '#sp-save', 'click', function () { saveScore(mm); });
  }

  function rubricRows() {
    return window.SPEAK_RUBRIC.map(function (r) {
      var opts = [1, 2, 3, 4, 5].map(function (n) { return '<option value="' + n + '">' + n + '分</option>'; }).join('');
      return '<div class="score-row"><label>' + r.name + '<small>' + Core.esc(r.desc) + '</small></label>' +
        '<select data-rub="' + r.key + '">' + opts + '</select></div>';
    }).join('');
  }

  function scoreLog() {
    var arr = Core.S().speaking.scores || [];
    if (!arr.length) return '<div class="empty small">还没有评分记录。</div>';
    var html = arr.slice(0, 12).map(function (s) {
      var m = window.SPEAKING.filter(function (x) { return x.id === s.topicId; })[0];
      var avg = Math.round((s.pron + s.gram + s.flu + s.cont) / 4 * 10) / 10;
      return '<li><span class="sl-date">' + Core.mdLabel(s.date) + '</span>' +
        '<span class="sl-topic">' + Core.esc(m ? m.title : s.topicId) + ' · 任务' + (s.taskId + 1) + '</span>' +
        '<span class="sl-avg">均 ' + avg + '</span>' +
        '<span class="sl-det">发' + s.pron + '/法' + s.gram + '/流' + s.flu + '/内' + s.cont + '</span></li>';
    }).join('');
    return '<ul class="sl-list">' + html + '</ul>';
  }

  function bindRec(box) {
    var recBtn = box.querySelector('#sp-rec');
    if (!recBtn) return;
    var recording = false;
    recBtn.addEventListener('click', function () {
      if (!recording) {
        Core.Recorder.start(function (err) {
          if (err) { Core.toast('无法录音：' + err.message, 'err'); return; }
          recording = true; recBtn.textContent = '■ 停止并回听'; recBtn.classList.add('rec-on');
        });
      } else {
        Core.Recorder.stop(function (err, url) {
          recording = false; recBtn.textContent = '● 开始录音自检'; recBtn.classList.remove('rec-on');
          if (url) { var a = new Audio(url); a.controls = true; var wrap = box.querySelector('.sp-score-act'); if (wrap) { var old = wrap.querySelector('audio'); if (old) old.remove(); wrap.appendChild(a); } }
        });
      }
    });
  }

  function saveScore(mm) {
    var box = document.getElementById('view-speaking');
    var rec = {};
    window.SPEAK_RUBRIC.forEach(function (r) {
      var sel = box.querySelector('[data-rub="' + r.key + '"]');
      rec[r.key] = sel ? (+sel.value) : 3;
    });
    var s = Core.S();
    s.speaking.scores = s.speaking.scores || [];
    // 每个主题最多保留一条「最新综合」+ 按任务追加；这里存一条综合（taskId 取当前任务 0）
    s.speaking.scores.unshift({
      date: Core.todayKey(), topicId: mm.id, taskId: 0,
      pron: rec.pron, gram: rec.gram, flu: rec.flu, cont: rec.cont, note: ''
    });
    Core.save(); Core.touchStreak();
    Core.toast('评分已保存，继续加油！', 'ok');
    render(box);
  }

  Core.registerView('speaking', { render: render });
})(window.Core);
