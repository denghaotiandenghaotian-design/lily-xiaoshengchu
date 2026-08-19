/* ===========================================================
   模块四：背诵打卡 recite.js
   古诗文/英语词汇/数学公式 三类；每日上限 RECITE_LIMIT；艾宾浩斯复习 [1,2,4,7,15]
   =========================================================== */
(function (Core) {
  'use strict';

  var cat = '古诗文';
  var EBB = window.EBBINGHAUS || [1, 2, 4, 7, 15];
  var LIMIT = window.RECITE_LIMIT || { '古诗文': 2, '英语词汇': 10, '数学公式': 1 };

  function contentHTML(r) {
    if (r.cat === '古诗文') {
      var lines = (r.text || '').split('\n').map(function (l) { return Core.esc(l); });
      var hint = (r.hint || []).map(function (h) { return '<span class="rec-hint">' + Core.esc(h) + '</span>'; }).join('');
      var hard = (r.hard || []).map(function (h) { return '<span class="rec-hard">⚠ ' + Core.esc(h) + '</span>'; }).join('');
      return '<div class="rec-text">' + lines.join('<br>') + '</div>' +
        (hint ? '<div class="rec-sec rec-hidden"><b>记忆线索：</b><br>' + hint + '</div>' : '') +
        (hard ? '<div class="rec-sec rec-hidden"><b>易错字：</b><br>' + hard + '</div>' : '');
    }
    if (r.cat === '英语词汇') {
      var ws = (r.words || []).map(function (w) {
        return '<div class="rec-word"><span class="rw-en">' + Core.esc(w[0]) + '</span><span class="rw-zh">' + Core.esc(w[1]) + '</span>' +
          '<button class="rw-tts" data-tts="' + Core.esc(w[0]) + '">🔊</button></div>';
      }).join('');
      return '<div class="rec-words">' + ws + '</div>';
    }
    var items = (r.items || []).map(function (it) { return '<div class="rec-formula">' + Core.esc(it) + '</div>'; }).join('');
    return '<div class="rec-formulas">' + items + '</div>';
  }

  function reviewTimeline(id, a) {
    var tk = Core.todayKey();
    var cells = EBB.map(function (off) {
      var dk = Core.addDaysKey(a.start, off);
      var done = a.reviewDone && a.reviewDone['' + off];
      var isDue = dk === tk;
      var cls = done ? 'done' : (isDue ? 'due' : 'future');
      var label = done ? '✓' : (isDue ? '今天' : (Core.mdLabel(dk)));
      return '<span class="rev-cell ' + cls + '" data-rev="' + off + '" data-id="' + id + '">' +
        '<i>第' + off + '天</i>' + label + '</span>';
    }).join('');
    return '<div class="rev-track">' + cells + '</div>';
  }

  function render(box) {
    var s = Core.S();
    var activeIds = Object.keys(s.recite.active || {});
    var activeItems = activeIds.map(function (id) {
      return { r: window.RECITE.filter(function (x) { return x.id === id; })[0], a: s.recite.active[id], id: id };
    }).filter(function (o) { return o.r; });

    var catTabs = ['古诗文', '英语词汇', '数学公式'].map(function (c) {
      return '<button class="tab ' + (c === cat ? 'active' : '') + '" data-cat="' + c + '">' + c +
        ' <small>(' + activeItems.filter(function (o) { return o.r.cat === c; }).length + '/' + LIMIT[c] + ')</small></button>';
    }).join('');

    var activeHTML = activeItems.filter(function (o) { return o.r.cat === cat; }).map(function (o) {
      var r = o.r, a = o.a;
      var tk = Core.todayKey();
      var doneToday = a.done && a.done[tk];
      var recDone = Object.keys(a.reviewDone || {}).length;
      var allDone = recDone >= EBB.length;
      return '<div class="rec-card">' +
        '<div class="rec-card-h">' + Core.subjChip(r.subject) +
        '<span class="rec-title">' + Core.esc(r.title) + '</span>' +
        (r.author ? '<span class="rec-author">' + Core.esc(r.author) + '</span>' : '') +
        '<span class="rec-unit">' + Core.esc(r.unit || '') + '</span></div>' +
        '<div class="rec-body">' + contentHTML(r) + '</div>' +
        (r.tips ? '<div class="rec-tips rec-hidden"><b>💡 记忆窍门：</b>' + Core.esc(r.tips) + '</div>' : '') +
        '<div class="rec-actions">' +
        '<button class="btn btn-sm" data-toggle-sec>显示/隐藏线索</button>' +
        (r.cat === '古诗文' ? '' : '') +
        '<button class="btn btn-sm ' + (doneToday ? 'btn-ok' : 'btn-primary') + '" data-daily="' + o.id + '">' + (doneToday ? '✓ 今日已背' : '今日已背') + '</button>' +
        (allDone ? '<button class="btn btn-sm" data-finish="' + o.id + '">完成退出</button>' : '') +
        '</div>' +
        '<div class="rec-rev"><span class="rec-rev-label">复习节点：</span>' + reviewTimeline(o.id, a) + '</div>' +
        '</div>';
    }).join('');

    if (!activeHTML) activeHTML = '<div class="empty">该分类下还没有进行中的背诵。点击下方「＋ 添加背诵」开始。</div>';

    var pool = window.RECITE.filter(function (r) {
      return r.cat === cat && !s.recite.active[r.id] &&
        activeItems.filter(function (o) { return o.r.cat === cat; }).length < LIMIT[cat];
    });

    box.innerHTML = '<div class="mod-head"><h2>🔖 背诵打卡</h2>' +
      '<button class="btn btn-primary btn-sm" data-act="add">＋ 添加背诵</button></div>' +
      '<div class="tabs">' + catTabs + '</div>' +
      '<div class="rec-grid">' + activeHTML + '</div>' +
      '<div class="rec-pool"><h4>可选背诵（' + cat + '，剩 ' + pool.length + ' 篇未加入）</h4>' +
      (pool.length ? '<div class="pool-chips">' + pool.map(function (r) {
        return '<button class="pool-chip" data-add="' + r.id + '">＋ ' + Core.esc(r.title) + '</button>';
      }).join('') + '</div>' : '<div class="empty small">本分类已全部加入或达每日上限。</div>') +
      '</div>';

    Core.on(box, '[data-cat]', 'click', function (e, t) { cat = t.getAttribute('data-cat'); render(box); });
    Core.on(box, '[data-add]', 'click', function (e, t) { activate(t.getAttribute('data-add')); render(box); });
    Core.on(box, '[data-act="add"]', 'click', function () {
      if (activeItems.filter(function (o) { return o.r.cat === cat; }).length >= LIMIT[cat]) {
        Core.toast('「' + cat + '」已达每日上限 ' + LIMIT[cat] + ' 篇', 'warn'); return;
      }
      pickFromPool(box, cat);
    });
    Core.on(box, '[data-toggle-sec]', 'click', function (e, t) {
      var card = t.closest('.rec-card');
      card.querySelectorAll('.rec-hidden').forEach(function (el) { el.classList.toggle('show'); });
    });
    Core.on(box, '[data-daily]', 'click', function (e, t) {
      var id = t.getAttribute('data-daily');
      var a = Core.S().recite.active[id];
      var tk = Core.todayKey();
      a.done = a.done || {};
      a.done[tk] = !a.done[tk];
      if (a.done[tk]) Core.touchStreak();
      Core.save(); render(box);
    });
    Core.on(box, '[data-rev]', 'click', function (e, t) {
      var id = t.getAttribute('data-id'), off = t.getAttribute('data-rev');
      var a = Core.S().recite.active[id];
      var tk = Core.todayKey();
      var dk = Core.addDaysKey(a.start, +off);
      if (dk !== tk) { Core.toast('该复习节点还没到（' + Core.mdLabel(dk) + '）', 'warn'); return; }
      a.reviewDone = a.reviewDone || {};
      a.reviewDone[off] = !a.reviewDone[off];
      Core.save(); render(box);
    });
    Core.on(box, '[data-finish]', 'click', function (e, t) {
      var id = t.getAttribute('data-finish');
      delete Core.S().recite.active[id];
      Core.save(); Core.toast('已退出，背得真扎实！', 'ok'); render(box);
    });
    Core.on(box, '[data-tts]', 'click', function (e, t) {
      Core.TTS.speak(t.getAttribute('data-tts'), { lang: 'en-US', rate: 0.85 });
    });
  }

  function activate(id) {
    var s = Core.S();
    if (s.recite.active[id]) { Core.toast('该篇已在背诵中', 'warn'); return; }
    s.recite.active[id] = { start: Core.todayKey(), done: {}, reviewDone: {} };
    Core.save(); Core.logAct('背诵', '开始 ' + id);
    Core.toast('已加入背诵计划，记住第 1/2/4/7/15 天回来复习', 'ok');
  }

  function pickFromPool(box, category) {
    var s = Core.S();
    var pool = window.RECITE.filter(function (r) { return r.cat === category && !s.recite.active[r.id]; });
    if (!pool.length) { Core.toast('没有可添加的篇目了', 'warn'); return; }
    var opts = pool.map(function (r) { return '<option value="' + r.id + '">' + Core.esc(r.title) + '（' + Core.esc(r.grade) + '）</option>'; }).join('');
    Core.modal({
      title: '添加背诵 · ' + category, body: '<select id="pool-sel" style="width:100%">' + opts + '</select>',
      buttons: [{ text: '取消' }, { text: '加入', cls: 'btn-primary', onClick: function () {
        activate(document.getElementById('pool-sel').value); render(box); return false;
      } }]
    });
  }

  Core.registerView('recite', { render: render });
})(window.Core);
