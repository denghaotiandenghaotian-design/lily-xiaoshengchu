/* ===========================================================
   模块：模考真题 exams.js
   - 试卷列表（类型/学科筛选）
   - 开卷答题：客观题（选择/完形）自动判分；主观题（填空/计算/应用/阅读/写作）对照解析自评
   - 成绩存档 state.exams.records[examId]
   =========================================================== */
(function (Core) {
  'use strict';

  var cur = null;            // 当前试卷 id（null=列表）
  var filter = { kind: 'all', subject: 'all' };
  var answers = {};         // no -> optionIndex（客观题）
  var revealed = {};        // no -> true（主观题显示答案）
  var submitted = false;
  var result = null;

  function recStore() {
    var s = Core.S();
    s.exams = s.exams || { records: {} };
    s.exams.records = s.exams.records || {};
    return s.exams.records;
  }
  function getExam(id) {
    return window.EXAMS.filter(function (e) { return e.id === id; })[0] || null;
  }
  function isObjective(q) { return q.type === 'choice' || q.type === 'cloze'; }

  /* ---------------- 列表视图 ---------------- */
  function renderList(box) {
    var list = window.EXAMS.slice();
    if (filter.kind !== 'all') list = list.filter(function (e) { return e.kind === filter.kind; });
    if (filter.subject !== 'all') list = list.filter(function (e) { return e.subject === filter.subject; });

    var recs = recStore();
    var cards = list.map(function (e) {
      var qTotal = 0; e.parts.forEach(function (p) { qTotal += p.questions.length; });
      var rec = recs[e.id];
      var badge = rec && rec.done
        ? '<span class="ex-badge ok">最佳 客观 ' + rec.objScore + '/' + (rec.objTotalScore || '—') + ' 分</span>'
        : '<span class="ex-badge">未做过</span>';
      var kindCls = e.kind === '真题' ? 'chip-real' : 'chip-mock';
      return '' +
        '<div class="ex-card">' +
        '<div class="ex-card-top">' +
        '<span class="chip ' + (Core.SUBJ_CLASS[e.subject] ? 'chip-' + Core.SUBJ_CLASS[e.subject] : '') + '">' + Core.esc(e.subject) + '</span>' +
        '<span class="chip ' + kindCls + '">' + Core.esc(e.kind) + '</span>' +
        (e.note ? '<span class="ex-note-flag" title="' + Core.esc(e.note) + '">代表性汇编</span>' : '') +
        '</div>' +
        '<h3 class="ex-card-title">' + Core.esc(e.title) + '</h3>' +
        '<div class="ex-card-meta">' + Core.esc(e.focus || '') + '</div>' +
        '<div class="ex-card-info">⏱ ' + (e.duration || '—') + ' 分钟 · 📝 ' + qTotal + ' 题 · 满分 ' + (e.totalScore || '—') + '</div>' +
        '<div class="ex-card-foot">' + badge +
        '<button class="btn btn-sm btn-primary" data-start="' + e.id + '">开始答题</button></div>' +
        '</div>';
    }).join('');

    box.innerHTML = '' +
      '<div class="mod-head"><h2>📝 模考真题</h2>' +
      '<span class="mod-tip">模拟题 10 套 · 真题 5 套（台州地区代表性汇编）· 点开即做</span></div>' +
      '<div class="ex-filters">' +
      '<div class="ex-fgrp"><span class="ex-flabel">类型</span>' +
      ['all', '模拟', '真题'].map(function (k) {
        return '<button class="ex-fbtn ' + (filter.kind === k ? 'active' : '') + '" data-kind="' + k + '">' + (k === 'all' ? '全部' : k) + '</button>';
      }).join('') + '</div>' +
      '<div class="ex-fgrp"><span class="ex-flabel">学科</span>' +
      ['all', '语文', '数学', '英语'].map(function (s) {
        return '<button class="ex-fbtn ' + (filter.subject === s ? 'active' : '') + '" data-subj="' + s + '">' + (s === 'all' ? '全部' : s) + '</button>';
      }).join('') + '</div>' +
      '</div>' +
      (list.length ? '<div class="ex-grid">' + cards + '</div>'
        : '<div class="empty">没有符合条件的试卷。</div>');

    Core.on(box, '[data-kind]', 'click', function (e, t) { filter.kind = t.getAttribute('data-kind'); renderList(box); });
    Core.on(box, '[data-subj]', 'click', function (e, t) { filter.subject = t.getAttribute('data-subj'); renderList(box); });
    Core.on(box, '[data-start]', 'click', function (e, t) { cur = t.getAttribute('data-start'); resetWork(); render(box); });
  }

  function resetWork() {
    answers = {}; revealed = {}; submitted = false; result = null;
  }

  /* ---------------- 答题视图 ---------------- */
  function renderExam(box) {
    var ex = getExam(cur);
    if (!ex) { cur = null; return renderList(box); }

    var recs = recStore();
    var rec = recs[ex.id];

    var partsHTML = ex.parts.map(function (p, pi) {
      var qs = p.questions.map(function (q) {
        if (isObjective(q)) return objQ(q);
        return subjQ(q);
      }).join('');
      return '<div class="ex-part"><div class="ex-part-name">' + Core.esc(p.name) + '</div>' + qs + '</div>';
    }).join('');

    var actionBar = submitted
      ? '<button class="btn" data-redo="' + ex.id + '">重做本卷</button>'
      : '<button class="btn btn-primary" data-submit="' + ex.id + '">提交并评分</button>';

    box.innerHTML = '' +
      '<div class="ex-detail-head">' +
      '<button class="btn btn-sm" data-back>← 返回试卷列表</button>' +
      '<div class="ex-detail-title">' +
      '<span class="chip ' + (Core.SUBJ_CLASS[ex.subject] ? 'chip-' + Core.SUBJ_CLASS[ex.subject] : '') + '">' + Core.esc(ex.subject) + '</span> ' +
      '<span class="chip ' + (ex.kind === '真题' ? 'chip-real' : 'chip-mock') + '">' + Core.esc(ex.kind) + '</span> ' +
      Core.esc(ex.title) + '</div>' +
      '<div class="ex-detail-meta">⏱ ' + (ex.duration || '—') + ' 分 · 满分 ' + (ex.totalScore || '—') + '</div>' +
      '</div>' +
      (ex.note ? '<div class="ex-note">' + Core.esc(ex.note) + '</div>' : '') +
      partsHTML +
      '<div class="ex-actions">' + actionBar + '</div>' +
      (submitted && result ? resultHTML(ex) : '');

    Core.on(box, '[data-back]', 'click', function () { cur = null; renderList(box); });
    Core.on(box, 'input[type=radio]', 'change', function (e, t) {
      var no = +t.getAttribute('data-no'), oi = +t.getAttribute('data-o');
      answers[no] = oi;
    });
    Core.on(box, '[data-reveal]', 'click', function (e, t) {
      var no = +t.getAttribute('data-reveal'); revealed[no] = true; renderExam(box);
    });
    Core.on(box, '[data-submit]', 'click', function () { doSubmit(ex); renderExam(box); });
    Core.on(box, '[data-redo]', 'click', function () { resetWork(); renderExam(box); });
  }

  function objQ(q) {
    var opts = (q.options || []).map(function (o, oi) {
      var correct = submitted && q.answer === String.fromCharCode(65 + oi);
      var chosen = answers[q.no] === oi;
      var cls = submitted ? (correct ? 'opt-correct' : (chosen ? 'opt-wrong' : '')) : '';
      return '<label class="ex-opt ' + cls + '"><input type="radio" name="ex-' + q.no + '" data-no="' + q.no + '" data-o="' + oi + '"' +
        (chosen ? ' checked' : '') + (submitted ? ' disabled' : '') + '><span>' + Core.esc(o) + '</span></label>';
    }).join('');
    var exp = submitted
      ? '<div class="ex-exp"><b>答案：' + Core.esc(q.answer) + '</b> · ' + Core.esc(q.explain || '') + '</div>'
      : '';
    return '<div class="ex-q"><div class="ex-q-no">' + q.no + '.</div>' +
      '<div class="ex-q-body"><div class="ex-q-stem">' + Core.esc(q.stem) + ' <span class="ex-q-score">(' + q.score + '分)</span></div>' +
      '<div class="ex-opts">' + opts + '</div>' + exp + '</div></div>';
  }

  function subjQ(q) {
    var answerBlock = revealed[q.no] || submitted
      ? '<div class="ex-exp"><b>参考答案：</b>' + Core.esc(q.answer || '') +
        (q.explain ? ' <span class="ex-key">（' + Core.esc(q.explain) + '）</span>' : '') + '</div>'
      : '';
    var revealBtn = (revealed[q.no] || submitted) ? '' :
      '<button class="btn btn-sm ex-reveal" data-reveal="' + q.no + '">显示参考答案</button>';
    return '<div class="ex-q"><div class="ex-q-no">' + q.no + '.</div>' +
      '<div class="ex-q-body"><div class="ex-q-stem">' + Core.esc(q.stem) + ' <span class="ex-q-score">(' + q.score + '分)</span></div>' +
      '<textarea class="ex-textarea" data-no="' + q.no + '" placeholder="在此作答…"' + (submitted ? ' disabled' : '') + '></textarea>' +
      '<div class="ex-reveal-row">' + revealBtn + '</div>' + answerBlock + '</div></div>';
  }

  function doSubmit(ex) {
    var objCorrect = 0, objTotal = 0, objScore = 0, objTotalScore = 0, subjTotal = 0;
    ex.parts.forEach(function (p) {
      p.questions.forEach(function (q) {
        if (isObjective(q)) {
          objTotal++; objTotalScore += q.score || 0;
          if (answers[q.no] != null && String.fromCharCode(65 + answers[q.no]) === q.answer) {
            objCorrect++; objScore += q.score || 0;
          }
        } else {
          subjTotal += q.score || 0;
        }
      });
    });
    var recs = recStore();
    var prev = recs[ex.id];
    var best = prev && prev.done ? Math.max(prev.objScore || 0, objScore) : objScore;
    var rec = {
      done: true, date: Core.todayKey(),
      objCorrect: objCorrect, objTotal: objTotal, objScore: objScore, objTotalScore: objTotalScore,
      subjTotal: subjTotal, best: best
    };
    recs[ex.id] = rec;
    Core.save(); Core.touchStreak();
    result = rec;
    submitted = true;
    Core.toast(objCorrect === objTotal && objTotal ? '客观题全对！' : ('客观题答对 ' + objCorrect + '/' + objTotal), objCorrect === objTotal && objTotal ? 'ok' : 'warn');
  }

  function resultHTML(ex) {
    var r = result;
    var objLine = r.objTotal
      ? '客观题：答对 <b>' + r.objCorrect + '/' + r.objTotal + '</b> ，得分 <b>' + r.objScore + '/' + r.objTotalScore + '</b>'
      : '本卷无客观题';
    var subjLine = r.subjTotal ? '主观题：' + r.subjTotal + ' 分（请对照上方参考答案自评）' : '';
    return '<div class="ex-result">' +
      '<div class="ex-result-h">📊 本次成绩</div>' +
      '<div class="ex-result-line">' + objLine + '</div>' +
      (subjLine ? '<div class="ex-result-line">' + subjLine + '</div>' : '') +
      '<div class="ex-result-tip">💡 客观题已自动判分；主观题请对照解析红字自评，重点看思路而非死记答案。</div>' +
      '</div>';
  }

  function render(box) {
    if (cur) renderExam(box); else renderList(box);
  }

  Core.registerView('exams', { render: render });
})(window.Core);
