/* ===========================================================
   模块六：听力训练 listening.js
   4 题型 16 份材料；TTS 朗读（题干/对话/短文）；答题后解析 + 原文
   =========================================================== */
(function (Core) {
  'use strict';

  var cur = window.LISTENING[0] ? window.LISTENING[0].id : null;
  var answers = {};      // materialId -> { idx: optionIndex }
  var submitted = {};    // materialId -> true

  function ttsWarn() { return Core.TTS.warnHTML(); }

  function playText(txt, rate) {
    if (!txt) return;
    if (!Core.TTS.speak(txt, { lang: 'en-US', rate: rate || 0.9 })) {
      Core.toast('当前环境无法朗读，请看下方原文由家长朗读', 'warn');
    }
  }

  function render(box) {
    var list = window.LISTENING;
    var mm = cur ? list.filter(function (m) { return m.id === cur; })[0] : list[0];

    var groups = {};
    window.LISTEN_TYPES.forEach(function (t) { groups[t] = []; });
    list.forEach(function (m) { (groups[m.type] || (groups[m.type] = [])).push(m); });

    var side = window.LISTEN_TYPES.map(function (t) {
      var items = (groups[t] || []).map(function (m) {
        var rec = Core.S().listening.records[m.id];
        var badge = rec && rec.done ? '<span class="ls-badge ok">✓' + rec.correct + '/' + rec.total + '</span>' : '';
        return '<button class="ls-item ' + (mm && mm.id === m.id ? 'active' : '') + '" data-id="' + m.id + '">' +
          '<span>' + Core.esc(m.title) + '</span>' + badge + '</button>';
      }).join('');
      return '<div class="ls-group"><h4>' + t + '</h4>' + items + '</div>';
    }).join('');

    if (!mm) { box.innerHTML = '<div class="empty">暂无听力素材。</div>'; return; }

    var hasMatAudio = !!mm.audio;
    var itemsHTML = (mm.items || []).map(function (it, i) {
      var isWord = (mm.type === '听词辨音' || mm.type === '听句选答');
      var playBtn = isWord && it.audio
        ? '<button class="btn btn-sm ls-play" data-play="' + Core.esc(it.audio) + '">▶ 播放</button>'
        : '';
      var opts = (it.options || []).map(function (o, oi) {
        var correct = submitted[mm.id] && it.answer === String.fromCharCode(65 + oi);
        var chosen = answers[mm.id] && answers[mm.id][i] === oi;
        var cls = submitted[mm.id] ? (correct ? 'opt-correct' : (chosen ? 'opt-wrong' : '')) : '';
        return '<label class="ls-opt ' + cls + '"><input type="radio" name="ls-' + mm.id + '-' + i + '" data-q="' + i + '" data-o="' + oi + '"' +
          (chosen ? ' checked' : '') + (submitted[mm.id] ? ' disabled' : '') + '><span>' + Core.esc(o) + '</span></label>';
      }).join('');
      var exp = submitted[mm.id]
        ? '<div class="ls-exp"><b>解析：</b>' + Core.esc(it.explain) +
          (isWord && it.audio ? ' <span class="ls-key">（原文：' + Core.esc(it.audio) + '）</span>' : '') + '</div>'
        : '';
      return '<div class="ls-q">' + playBtn +
        '<div class="ls-q-text">' + (i + 1) + '. ' + Core.esc(it.q) + '</div>' +
        '<div class="ls-opts">' + opts + '</div>' + exp + '</div>';
    }).join('');

    var submitBtn = submitted[mm.id] ? '<button class="btn" data-redo="' + mm.id + '">再听一遍 / 重做</button>'
      : '<button class="btn btn-primary" data-submit="' + mm.id + '">提交作答</button>';
    var scriptBlock = (hasMatAudio && submitted[mm.id])
      ? '<div class="ls-script"><b>📜 录音原文（供核对）：</b><div class="ls-script-txt">' + Core.esc(mm.audio) + '</div>' +
        '<button class="btn btn-sm" data-play="' + Core.esc(mm.audio) + '">▶ 重听原文</button></div>'
      : (hasMatAudio ? '<div class="ls-script-hint">答题后可查看原文。</div>' : '');

    var warn = ttsWarn();
    var rec = Core.S().listening.records[mm.id];

    box.innerHTML = '' +
      '<div class="mod-head"><h2>🎧 听力训练</h2>' +
      '<span class="mod-tip">' + Core.esc(mm.grade ? Core.GRADE_LABEL[mm.grade] : '') + ' · ' + Core.esc(mm.unit || '') +
      ' · 语速 ' + Core.esc(mm.speed || '') + '</span></div>' +
      (warn ? warn : '') +
      '<div class="ls-wrap"><div class="ls-side">' + side + '</div>' +
      '<div class="ls-main">' +
      '<div class="ls-paper-h"><b>' + Core.esc(mm.title) + '</b><span class="ls-type">' + Core.esc(mm.type) + '</span></div>' +
      '<div class="ls-intro">📝 ' + Core.esc(mm.intro || '') + '</div>' +
      (hasMatAudio && !submitted[mm.id] ? '<button class="btn btn-primary btn-sm ls-play-main" data-play="' + Core.esc(mm.audio) + '">▶ 播放录音（可重复）</button>' : '') +
      '<div class="ls-questions">' + itemsHTML + '</div>' +
      scriptBlock +
      '<div class="ls-actions">' + submitBtn +
      (rec && rec.done && !submitted[mm.id] ? '' : '') +
      '</div>' +
      (submitted[mm.id] && rec ? '<div class="ls-result">本材料正确率：' + rec.correct + ' / ' + rec.total + '</div>' : '') +
      '</div></div>';

    Core.on(box, '.ls-item', 'click', function (e, t) { cur = t.getAttribute('data-id'); render(box); });
    Core.on(box, '[data-play]', 'click', function (e, t) { playText(t.getAttribute('data-play')); });
    Core.on(box, 'input[type=radio]', 'change', function (e, t) {
      var q = +t.getAttribute('data-q'), o = +t.getAttribute('data-o');
      answers[mm.id] = answers[mm.id] || {};
      answers[mm.id][q] = o;
    });
    Core.on(box, '[data-submit]', 'click', function () { submit(mm.id); render(box); });
    Core.on(box, '[data-redo]', 'click', function () {
      answers[mm.id] = {}; submitted[mm.id] = false; render(box);
    });
  }

  function submit(id) {
    var mm = window.LISTENING.filter(function (m) { return m.id === id; })[0];
    if (!mm) return;
    var ans = answers[id] || {};
    if (Object.keys(ans).length < (mm.items || []).length) {
      Core.toast('还有题目未作答', 'warn'); return;
    }
    var correct = 0, total = (mm.items || []).length;
    (mm.items || []).forEach(function (it, i) {
      if (answers[id][i] != null && String.fromCharCode(65 + answers[id][i]) === it.answer) correct++;
    });
    var s = Core.S();
    s.listening.records = s.listening.records || {};
    s.listening.records[id] = { done: true, correct: correct, total: total, date: Core.todayKey(), answers: ans };
    Core.save(); Core.touchStreak();
    submitted[id] = true;
    Core.toast(correct === total ? '全对，太棒了！' : ('答对 ' + correct + ' / ' + total), correct === total ? 'ok' : 'warn');
  }

  Core.registerView('listening', { render: render });
})(window.Core);
