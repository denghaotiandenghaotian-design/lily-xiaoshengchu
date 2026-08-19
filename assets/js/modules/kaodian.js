/* ===========================================================
   模块一：考点库 kaodian.js
   浏览 / 筛选 / 标记薄弱·已掌握 / 备注 / 自建考点
   =========================================================== */
(function (Core) {
  'use strict';

  var filter = { subject: '', grade: '', freq: '' };

  function allKd() {
    var s = Core.S();
    return window.KAODIAN.concat(s.kaodian.custom || []);
  }

  function render(box) {
    var s = Core.S();
    var list = allKd();
    if (filter.subject) list = list.filter(function (k) { return k.subject === filter.subject; });
    if (filter.grade) list = list.filter(function (k) { return k.grade === filter.grade; });
    if (filter.freq) list = list.filter(function (k) { return k.freq === filter.freq; });

    var subjOpts = ['', '语文', '数学', '英语'].map(function (v) {
      return '<option value="' + v + '"' + (filter.subject === v ? ' selected' : '') + '>' + (v || '全部学科') + '</option>';
    }).join('');
    var gradeOpts = ['', '5A', '5B', '6A', '6B'].map(function (v) {
      return '<option value="' + v + '"' + (filter.grade === v ? ' selected' : '') + '>' + (v ? Core.GRADE_LABEL[v] : '全部年级') + '</option>';
    }).join('');
    var freqOpts = ['', '高频', '中频', '低频'].map(function (v) {
      return '<option value="' + v + '"' + (filter.freq === v ? ' selected' : '') + '>' + (v || '全部考频') + '</option>';
    }).join('');

    var rows = list.map(function (k) {
      var weak = s.kaodian.weak[k.id];
      var mast = s.kaodian.mastered[k.id];
      var note = s.kaodian.notes[k.id] || '';
      var tag = mast ? '<span class="tag tag-ok">已掌握</span>' : (weak ? '<span class="tag tag-warn">薄弱</span>' : '');
      var basis = window.KD_BASIS[k.basis] || '';
      return '<div class="kd-card ' + (mast ? 'is-mast' : '') + (weak ? 'is-weak' : '') + '" data-id="' + k.id + '">' +
        '<div class="kd-top">' + Core.subjChip(k.subject) + Core.freqChip(k.freq) + tag +
        '<span class="kd-grade">' + (Core.GRADE_LABEL[k.grade] || k.grade) + '</span></div>' +
        '<div class="kd-unit">' + Core.esc(k.unit || '') + '</div>' +
        '<div class="kd-point">' + Core.esc(k.point) + '</div>' +
        '<div class="kd-meta">建议用时 ' + (k.min || '-') + ' 分 · 典型 ' + (k.score || '-') + ' 分 · ' + Core.stars(k.diff || 2) + '</div>' +
        (basis ? '<div class="kd-basis" title="考频依据">📌 ' + Core.esc(basis) + '</div>' : '') +
        (k.example ? '<div class="kd-ex">例：' + Core.esc(k.example) + '</div>' : '') +
        (note ? '<div class="kd-note">📝 ' + Core.esc(note) + '</div>' : '') +
        '<div class="kd-actions">' +
        '<button class="btn btn-sm ' + (weak ? 'btn-warn' : '') + '" data-act="weak">' + (weak ? '取消薄弱' : '标薄弱') + '</button>' +
        '<button class="btn btn-sm ' + (mast ? 'btn-ok' : '') + '" data-act="mast">' + (mast ? '取消掌握' : '标掌握') + '</button>' +
        '<button class="btn btn-sm" data-act="note">备注</button>' +
        '</div></div>';
    }).join('');

    if (!rows) rows = '<div class="empty">没有符合筛选条件的考点。</div>';

    box.innerHTML = '' +
      '<div class="mod-head"><h2>📗 考点库</h2>' +
      '<button class="btn btn-primary btn-sm" data-act="add">＋ 自建考点</button></div>' +
      '<div class="filters">' +
      '<select data-f="subject">' + subjOpts + '</select>' +
      '<select data-f="grade">' + gradeOpts + '</select>' +
      '<select data-f="freq">' + freqOpts + '</select>' +
      '<span class="filter-count">共 ' + list.length + ' 条</span>' +
      '</div>' +
      '<div class="kd-grid">' + rows + '</div>';

    // 筛选
    Core.on(box, '[data-f]', 'change', function (e, t) {
      filter[t.getAttribute('data-f')] = t.value;
      render(box);
    });
    // 自建
    Core.on(box, '[data-act="add"]', 'click', function () { addCustom(box); });
    // 卡片操作
    Core.on(box, '.kd-card', 'click', function (e, card) {
      var id = card.getAttribute('data-id');
      var btn = e.target.closest('[data-act]');
      if (!btn) return;
      var act = btn.getAttribute('data-act');
      var s2 = Core.S();
      if (act === 'weak') { if (s2.kaodian.weak[id]) delete s2.kaodian.weak[id]; else s2.kaodian.weak[id] = true; }
      else if (act === 'mast') { if (s2.kaodian.mastered[id]) delete s2.kaodian.mastered[id]; else s2.kaodian.mastered[id] = true; }
      else if (act === 'note') { editNote(box, id); return; }
      Core.save(); Core.logAct('考点', act + ' ' + id);
      render(box);
    });
  }

  function editNote(box, id) {
    var s = Core.S();
    var cur = s.kaodian.notes[id] || '';
    Core.modal({
      title: '添加备注', body: '<textarea id="note-ta" rows="4" style="width:100%">' + Core.esc(cur) + '</textarea>',
      buttons: [
        { text: '取消' },
        { text: '保存', cls: 'btn-primary', onClick: function () {
          s.kaodian.notes[id] = document.getElementById('note-ta').value.trim();
          Core.save(); Core.toast('已保存备注', 'ok');
          render(box); return false;
        } }
      ]
    });
  }

  function addCustom(box) {
    Core.modal({
      title: '自建考点', body:
        '<div class="form-row"><label>学科</label><select id="c-subj"><option>语文</option><option>数学</option><option>英语</option></select></div>' +
        '<div class="form-row"><label>年级</label><select id="c-grade"><option value="5A">五上</option><option value="5B">五下</option><option value="6A">六上</option><option value="6B">六下</option><option value="">不限</option></select></div>' +
        '<div class="form-row"><label>单元/来源</label><input id="c-unit" placeholder="如：学校模拟卷/自测"></div>' +
        '<div class="form-row"><label>考点内容</label><textarea id="c-point" rows="3" placeholder="描述这个考点"></textarea></div>' +
        '<div class="form-row"><label>考频</label><select id="c-freq"><option>高频</option><option>中频</option><option>低频</option></select></div>',
      buttons: [
        { text: '取消' },
        { text: '添加', cls: 'btn-primary', onClick: function () {
          var p = document.getElementById('c-point').value.trim();
          if (!p) { Core.toast('请填写考点内容', 'warn'); return true; }
          var s = Core.S();
          var id = 'CU-' + Date.now();
          s.kaodian.custom = s.kaodian.custom || [];
          s.kaodian.custom.push({
            id: id, subject: document.getElementById('c-subj').value,
            grade: document.getElementById('c-grade').value, unit: document.getElementById('c-unit').value,
            point: p, freq: document.getElementById('c-freq').value, basis: '', types: [], score: 0, diff: 3, mastery: '识记', min: 15, example: ''
          });
          Core.save(); Core.toast('已添加自建考点', 'ok'); render(box); return false;
        } }
      ]
    });
  }

  Core.registerView('kaodian', { render: render });
})(window.Core);
