/* ===========================================================
   模块三：知识点思维导图 mindmap.js
   左侧主题列表 + 右侧层级树（可折叠），关联考点跳转
   =========================================================== */
(function (Core) {
  'use strict';

  var cur = null;

  function kidName(k) { return typeof k === 'string' ? k : (k.name || ''); }
  function kidHasKids(k) { return k && typeof k === 'object' && k.kids && k.kids.length; }

  function renderNode(node, depth) {
    if (typeof node === 'string') {
      return '<li class="mm-leaf">' + Core.esc(node) + '</li>';
    }
    var name = node.name || '';
    var kids = node.kids || [];
    var cls = 'mm-node depth-' + depth;
    var hasKids = kids.length > 0;
    var inner = '<div class="mm-head" data-toggle>' +
      (hasKids ? '<span class="mm-caret">▾</span>' : '<span class="mm-dot">•</span>') +
      '<span class="mm-name">' + Core.esc(name) + '</span></div>';
    var childHTML = hasKids ? '<ul class="mm-kids">' +
      kids.map(function (k) { return renderNode(k, depth + 1); }).join('') + '</ul>' : '';
    return '<li class="' + cls + '">' + inner + childHTML + '</li>';
  }

  function renderTree(mm) {
    var branches = (mm.branches || []).map(function (b) {
      var summary = b.sum ? '<div class="mm-sum">' + Core.esc(b.sum) + '</div>' : '';
      var kids = (b.kids || []).map(function (k) { return renderNode(k, 1); }).join('');
      var linkTags = (b.kids || []).map(function () { return ''; }).join('');
      return '<div class="mm-branch">' +
        '<div class="mm-branch-h">' + Core.esc(b.name) + '</div>' + summary +
        '<ul class="mm-kids">' + kids + '</ul></div>';
    }).join('');
    var links = (mm.link || []).map(function (id) {
      var k = window.KAODIAN.filter(function (x) { return x.id === id; })[0];
      return '<button class="mm-link" data-kd="' + id + '">📍 ' + Core.esc(k ? (k.subject + '·' + k.point) : id) + '</button>';
    }).join('');
    return '<div class="mm-tree">' + branches + (links ? '<div class="mm-links"><h4>关联考点</h4>' + links + '</div>' : '') + '</div>';
  }

  function render(box) {
    var list = window.MINDMAPS;
    var curMM = cur ? list.filter(function (m) { return m.id === cur; })[0] : null;
    if (!curMM && list.length) curMM = list[0];

    var items = list.map(function (m) {
      return '<button class="mm-topic ' + (curMM && curMM.id === m.id ? 'active' : '') + '" data-id="' + m.id + '">' +
        Core.subjChip(m.subject) + '<span>' + Core.esc(m.title) + '</span></button>';
    }).join('');

    var tree = curMM ? renderTree(curMM) :
      '<div class="empty">选择左侧一个主题开始查看思维导图。</div>';

    box.innerHTML = '<div class="mod-head"><h2>🧠 思维导图</h2>' +
      '<span class="mod-tip">点击分支可折叠/展开 · 📍 可跳转到对应考点</span></div>' +
      '<div class="mm-wrap"><div class="mm-side">' + items + '</div>' +
      '<div class="mm-main" id="mm-main">' + tree + '</div></div>';

    Core.on(box, '.mm-topic', 'click', function (e, t) { cur = t.getAttribute('data-id'); render(box); });
    Core.on(box, '[data-toggle]', 'click', function (e, t) {
      var node = t.closest('.mm-node'); if (!node) return;
      var kids = node.querySelector(':scope > .mm-kids');
      if (kids) kids.classList.toggle('collapsed');
      var caret = t.querySelector('.mm-caret');
      if (caret) caret.textContent = kids && kids.classList.contains('collapsed') ? '▸' : '▾';
    });
    Core.on(box, '.mm-link', 'click', function (e, t) {
      var id = t.getAttribute('data-kd');
      Core.S()._kaodianFocus = id; // 供考点页定位（轻量，不入存档）
      Core.go('kaodian');
      Core.toast('已为你定位考点：' + id, 'ok');
    });
  }

  Core.registerView('mindmap', { render: render });
})(window.Core);
