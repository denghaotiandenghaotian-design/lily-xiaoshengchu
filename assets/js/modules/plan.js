/* ===========================================================
   模块二：复习计划 plan.js
   依据考试日期、每日时长、学科优先级、薄弱点，生成每日任务清单
   =========================================================== */
(function (Core) {
  'use strict';

  var FREQ_W = { '高频': 3, '中频': 2, '低频': 1 };

  function buildCandidates() {
    var s = Core.S();
    var prio = s.profile.priority || ['数学', '语文', '英语'];
    var cand = window.KAODIAN.filter(function (k) { return !s.kaodian.mastered[k.id]; });
    cand.sort(function (a, b) {
      var wa = s.kaodian.weak[a.id] ? 100 : 0, wb = s.kaodian.weak[b.id] ? 100 : 0;
      if (wb !== wa) return wb - wa;
      var pa = prio.indexOf(a.subject), pb = prio.indexOf(b.subject);
      if (pa !== pb) return pa - pb;
      var fa = FREQ_W[a.freq] || 1, fb = FREQ_W[b.freq] || 1;
      if (fa !== fb) return fb - fa;
      return (b.diff || 2) - (a.diff || 2);
    });
    return cand;
  }

  function generate() {
    var s = Core.S();
    var dl = Core.daysLeft();
    if (dl == null) { Core.toast('请先在设置中填写考试日期', 'warn'); return false; }
    if (dl < 1) { Core.toast('考试日期已过，请更新', 'warn'); return false; }
    var cand = buildCandidates();
    if (!cand.length) { Core.toast('考点已全部掌握，无需生成计划', 'ok'); }

    var days = {};
    var ci = 0;
    for (var d = 0; d <= dl; d++) {
      var key = Core.addDaysKey(Core.todayKey(), d);
      var budget = Core.isWeekend(key) ? (s.profile.weekendMinutes || 90) : (s.profile.dailyMinutes || 60);
      var tasks = [];
      var idx = 0;
      while (budget > 0 && ci < cand.length) {
        var k = cand[ci];
        var need = Math.min(k.min || 15, budget);
        if (need < 5) break;
        tasks.push({ idx: idx++, kdId: k.id, subject: k.subject, title: k.point, unit: k.unit, min: need, weak: !!s.kaodian.weak[k.id] });
        budget -= need; ci++;
      }
      days[key] = { tasks: tasks, total: tasks.reduce(function (a, t) { return a + t.min; }, 0) };
      if (ci >= cand.length) { /* 剩下天数留空 */ }
    }
    s.plan = { created: Date.now(), examDate: s.profile.examDate, days: days };
    Core.save(); Core.logAct('计划', '生成复习计划');
    Core.toast('已生成 ' + Object.keys(days).length + ' 天复习计划', 'ok');
    return true;
  }

  function render(box) {
    var s = Core.S();
    if (!s.plan) { /* 引导生成 */ }

    if (!s.plan) {
      box.innerHTML = '<div class="mod-head"><h2>🗓️ 复习计划</h2></div>' +
        '<div class="empty big">' +
        '<p>还没有复习计划。</p>' +
        (Core.daysLeft() == null ? '<p>请先在右上角 ⚙️ 设置里填写<b>考试日期</b>与每日学习时长。</p>' : '') +
        '<button class="btn btn-primary" data-act="gen">⚡ 一键生成复习计划</button>' +
        '</div>';
      Core.on(box, '[data-act="gen"]', 'click', function () {
        if (generate()) rerenderPlan(box);
      });
      return;
    }

    var keys = Object.keys(s.plan.days).sort();
    var tk = Core.todayKey();
    var dayCards = keys.map(function (key) {
      var day = s.plan.days[key];
      var isToday = key === tk;
      var doneCnt = day.tasks.filter(function (t) { return s.planCheck[key + '#' + t.idx]; }).length;
      var head = '<div class="plan-date ' + (isToday ? 'today' : '') + '">' +
        '<b>' + Core.mdLabel(key) + '</b> <span class="plan-wd">' + Core.weekdayCN(key) + (Core.isWeekend(key) ? '·周末' : '') + '</span>' +
        (day.tasks.length ? '<span class="plan-prog">已完成 ' + doneCnt + '/' + day.tasks.length + '</span>' : '<span class="plan-free">自由复习</span>') +
        '</div>';
      var tasks = day.tasks.map(function (t) {
        var done = !!s.planCheck[key + '#' + t.idx];
        return '<li class="plan-task ' + (done ? 'done' : '') + '">' +
          '<label><input type="checkbox" data-chk="' + key + '#' + t.idx + '"' + (done ? ' checked' : '') + '>' +
          '<span class="pt-subj">' + Core.subjChip(t.subject) + '</span>' +
          '<span class="pt-title">' + Core.esc(t.title) + '</span>' +
          (t.weak ? '<span class="tag tag-warn">薄弱</span>' : '') +
          '<span class="pt-min">' + t.min + '分</span></label></li>';
      }).join('');
      return '<div class="plan-day">' + head + (tasks ? '<ul class="plan-list">' + tasks + '</ul>' : '') + '</div>';
    }).join('');

    var totalMin = keys.reduce(function (a, k) { return a + (s.plan.days[k].total || 0); }, 0);

    box.innerHTML = '<div class="mod-head"><h2>🗓️ 复习计划</h2>' +
      '<button class="btn btn-sm" data-act="reg">重新生成</button></div>' +
      '<div class="plan-summary">计划区间 ' + Core.mdLabel(keys[0]) + ' → ' + Core.mdLabel(keys[keys.length - 1]) +
      ' · 共 ' + keys.length + ' 天 · 累计 ' + totalMin + ' 分钟任务' +
      (Object.keys(s.kaodian.weak).length ? ' · 含 ' + Object.keys(s.kaodian.weak).length + ' 个薄弱点优先' : '') + '</div>' +
      '<div class="plan-scroll">' + dayCards + '</div>';

    Core.on(box, '[data-act="reg"]', 'click', function () {
      Core.modal({ title: '重新生成计划', body: '<p>将按当前薄弱点与优先级覆盖旧计划，已打卡记录保留。确认重新生成？</p>',
        buttons: [{ text: '取消' }, { text: '重新生成', cls: 'btn-primary', onClick: function () { if (generate()) rerenderPlan(box); return false; } }] });
    });
    Core.on(box, '[data-chk]', 'change', function (e, t) {
      var key = t.getAttribute('data-chk');
      Core.S().planCheck[key] = t.checked;
      if (t.checked) { Core.touchStreak(); }
      Core.save();
      rerenderPlan(box);
    });
  }

  function rerenderPlan(box) { render(box); }

  Core.registerView('plan', { render: render });

  // 暴露给 app 设置后调用
  window.PlanGen = { generate: generate };
})(window.Core);
