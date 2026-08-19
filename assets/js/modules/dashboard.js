/* ===========================================================
   首页仪表盘 dashboard.js
   汇总六模块进度 + 今日学习建议 + 轻量图表
   =========================================================== */
(function (Core) {
  'use strict';

  function stats() {
    var s = Core.S();
    // 考点
    var total = window.KAODIAN.length + (s.kaodian.custom || []).length;
    var mastered = 0;
    for (var i = 0; i < window.KAODIAN.length; i++) {
      if (s.kaodian.mastered[window.KAODIAN[i].id] || s.kaodian.customMastered && s.kaodian.customMastered[window.KAODIAN[i].id]) {}
    }
    var kdAll = window.KAODIAN.concat(s.kaodian.custom || []);
    kdAll.forEach(function (k) { if (s.kaodian.mastered[k.id]) mastered++; });
    var weak = Object.keys(s.kaodian.weak || {}).length;

    // 背诵
    var recTotal = window.RECITE.length;
    var recActive = Object.keys(s.recite.active || {}).length;
    var recDoneToday = 0;
    var tk = Core.todayKey();
    Object.keys(s.recite.active).forEach(function (id) {
      var a = s.recite.active[id];
      if (a.done && a.done[tk]) recDoneToday++;
    });

    // 口语 / 听力
    var speakCnt = (s.speaking.scores || []).length;
    var listenRec = s.listening.records || {};
    var listenDone = Object.keys(listenRec).filter(function (k) { return listenRec[k].done; }).length;

    return {
      total: kdAll.length, mastered: mastered, weak: weak,
      recTotal: recTotal, recActive: recActive, recDoneToday: recDoneToday,
      speakCnt: speakCnt, listenTotal: window.LISTENING.length, listenDone: listenDone,
      streak: s.streak.days || 0
    };
  }

  function subjectDist() {
    var m = { '语文': 0, '数学': 0, '英语': 0 };
    window.KAODIAN.forEach(function (k) { m[k.subject]++; });
    return m;
  }

  function todayTasks() {
    var s = Core.S();
    var tk = Core.todayKey();
    var items = [];
    // 计划
    if (s.plan && s.plan.days) {
      var key = tk;
      var day = s.plan.days[key];
      if (day && day.tasks) {
        day.tasks.forEach(function (t) {
          var done = !!s.planCheck[tk + '#' + t.idx];
          items.push({ kind: '复习计划', text: t.subject + ' · ' + (t.title || t.point || ''), done: done, view: 'plan' });
        });
      }
    }
    // 背诵复习
    var ebb = window.EBBINGHAUS;
    Object.keys(s.recite.active).forEach(function (id) {
      var a = s.recite.active[id];
      if (!a.start) return;
      ebb.forEach(function (off) {
        var dk = Core.addDaysKey(a.start, off);
        if (dk === tk && (!a.reviewDone || !a.reviewDone[off + ''])) {
          var r = window.RECITE.filter(function (x) { return x.id === id; })[0];
          items.push({ kind: '背诵复习', text: (r ? r.title : id) + '（第' + off + '天）', done: false, view: 'recite' });
        }
      });
    });
    if (!items.length) items.push({ kind: '自由练习', text: '今日无既定任务，可自选薄弱考点/听力练一练', done: false, view: 'kaodian' });
    return items;
  }

  function render(box) {
    var st = stats();
    var dist = subjectDist();
    var dl = Core.daysLeft();
    var tasks = todayTasks();

    var examHTML = dl == null
      ? '<div class="dash-exam warn">尚未设置考试日期，点击右上角 ⚙️ → 设置，开始倒计时与计划生成。</div>'
      : '<div class="dash-exam ' + (dl < 0 ? 'over' : (dl <= 30 ? 'near' : '')) + '">' +
        '距离小升初考试还有 <b>' + (dl < 0 ? '已结束' : dl + ' 天') + '</b>。' +
        (dl <= 30 && dl >= 0 ? '冲刺阶段，按艾宾浩斯曲线巩固薄弱点最有效。' : '按部就班，保持每日节奏即可。') +
        '</div>';

    var cards = [
      { k: '考点库', n: st.total, sub: '已掌握 ' + st.mastered + ' · 薄弱 ' + st.weak, view: 'kaodian', ico: '📗' },
      { k: '背诵打卡', n: st.recTotal, sub: '进行中 ' + st.recActive + ' · 今日完成 ' + st.recDoneToday, view: 'recite', ico: '🔖' },
      { k: '口语练习', n: st.speakCnt, sub: '累计评分 ' + st.speakCnt + ' 次', view: 'speaking', ico: '🎤' },
      { k: '听力训练', n: st.listenTotal, sub: '已完成 ' + st.listenDone, view: 'listening', ico: '🎧' },
      { k: '连续打卡', n: st.streak + ' 天', sub: '坚持就是胜利', view: 'dashboard', ico: '🔥' },
      { k: '复习计划', n: (Core.S().plan ? '已生成' : '未生成'), sub: '个性化每日任务', view: 'plan', ico: '🗓️' }
    ];

    var cardsHTML = cards.map(function (c) {
      return '<button class="stat-card" data-goto="' + c.view + '">' +
        '<div class="stat-ico">' + c.ico + '</div>' +
        '<div class="stat-n">' + c.n + '</div>' +
        '<div class="stat-k">' + c.k + '</div>' +
        '<div class="stat-sub">' + c.sub + '</div></button>';
    }).join('');

    var tasksHTML = tasks.map(function (t) {
      return '<li class="todo-item ' + (t.done ? 'done' : '') + '" data-goto="' + t.view + '">' +
        '<span class="todo-check">' + (t.done ? '✓' : '○') + '</span>' +
        '<span class="todo-kind">' + t.kind + '</span>' +
        '<span class="todo-text">' + Core.esc(t.text) + '</span></li>';
    }).join('');

    var html = '' +
      '<div class="dash-wrap">' +
      '<div class="dash-head"><h2>🏠 学习总览</h2>' + examHTML + '</div>' +
      '<div class="stat-grid">' + cardsHTML + '</div>' +
      '<div class="dash-cols">' +
      '<div class="dash-col">' +
      '<div class="panel"><h3>📊 考点学科分布</h3><canvas id="dash-bar"></canvas></div>' +
      '<div class="panel"><h3>✅ 今日学习任务</h3><ul class="todo-list">' + tasksHTML + '</ul></div>' +
      '</div>' +
      '<div class="dash-col">' +
      '<div class="panel"><h3>🎯 考点掌握度</h3><canvas id="dash-donut"></canvas>' +
      '<div class="dash-note">已掌握 ' + st.mastered + ' / ' + st.total + ' 个考点</div></div>' +
      '<div class="panel"><h3>🚀 快速入口</h3>' +
      '<div class="quick-grid">' +
      '<button class="quick-btn" data-goto="mindmap">🧠 思维导图</button>' +
      '<button class="quick-btn" data-goto="speaking">🎤 口语练习</button>' +
      '<button class="quick-btn" data-goto="listening">🎧 听力训练</button>' +
      '<button class="quick-btn" data-goto="plan">🗓️ 复习计划</button>' +
      '</div></div>' +
      '</div>' +
      '</div>' +
      '</div>';

    box.innerHTML = html;

    // 图表
    setTimeout(function () {
      var bar = box.querySelector('#dash-bar');
      if (bar) Core.barChart(bar, [
        { label: '语文', value: dist['语文'], color: '#e23b3b' },
        { label: '数学', value: dist['数学'], color: '#3457d5' },
        { label: '英语', value: dist['英语'], color: '#1f9d55' }
      ]);
      var don = box.querySelector('#dash-donut');
      if (don) {
        var pct = st.total ? Math.round(100 * st.mastered / st.total) : 0;
        Core.donutChart(don, pct, { color: '#e2a252', label: '掌握率' });
      }
    }, 30);

    Core.on(box, '[data-goto]', 'click', function (e, t) {
      Core.go(t.getAttribute('data-goto') || 'dashboard');
    });
  }

  Core.registerView('dashboard', { render: render });
})(window.Core);
