/* ===========================================================
   应用入口 app.js
   加载存档 → 初始化 UI（导航/设置/版本条/倒计时）→ 路由
   =========================================================== */
(function (Core) {
  'use strict';

  function init() {
    Core.load();
    var loading = Core.el('app-loading');
    if (loading) loading.style.display = 'none';

    Core.refreshBookUI();
    Core.refreshCountdown();

    // 导航
    Core.on(Core.el('mainnav'), 'button', 'click', function (e, t) {
      Core.go(t.getAttribute('data-view') || 'dashboard');
    });

    // 设置
    Core.el('btn-settings').addEventListener('click', openSettings);
    Core.el('countdown-chip').addEventListener('click', openSettings);

    // 版本条
    Core.el('vb-confirm').addEventListener('click', function () {
      Core.S().profile.enBook = 'PEP'; Core.S().profile.enBookConfirmed = true; Core.save();
      Core.refreshBookUI(); Core.toast('已锁定为 PEP 版', 'ok');
    });
    Core.el('vb-switch').addEventListener('click', function () {
      Core.S().profile.enBook = '译林'; Core.S().profile.enBookConfirmed = true; Core.save();
      Core.refreshBookUI(); Core.toast('已切换为译林版（请按手中教材核对）', 'ok');
    });

    // 弹窗关闭
    Core.el('modal-close').addEventListener('click', Core.closeModal);
    Core.el('modal-mask').addEventListener('click', function (e) {
      if (e.target === Core.el('modal-mask')) Core.closeModal();
    });

    // 初始路由
    var hash = (location.hash || '').replace('#', '');
    if (hash && ['dashboard', 'kaodian', 'plan', 'mindmap', 'recite', 'speaking', 'listening', 'exams'].indexOf(hash) >= 0) {
      Core.go(hash);
    } else {
      Core.go('dashboard');
    }
  }

  function openSettings() {
    var s = Core.S();
    Core.modal({
      title: '⚙️ 学习设置',
      body:
        '<div class="form-row"><label>学生姓名</label><input id="set-name" value="' + Core.esc(s.profile.student) + '"></div>' +
        '<div class="form-row"><label>考试日期</label><input id="set-exam" type="date" value="' + Core.esc(s.profile.examDate) + '"></div>' +
        '<div class="form-row"><label>平日时长(分)</label><input id="set-daily" type="number" min="10" max="300" value="' + (s.profile.dailyMinutes || 60) + '"></div>' +
        '<div class="form-row"><label>周末时长(分)</label><input id="set-weekend" type="number" min="10" max="400" value="' + (s.profile.weekendMinutes || 90) + '"></div>' +
        '<div class="form-row"><label>英语教材</label><select id="set-book"><option value="PEP"' + (s.profile.enBook === 'PEP' ? ' selected' : '') + '>人教 PEP</option><option value="译林"' + (s.profile.enBook === '译林' ? ' selected' : '') + '>译林版</option></select></div>' +
        '<div class="set-actions">' +
        '<button class="btn btn-sm" id="set-export">⬇ 导出备份</button>' +
        '<button class="btn btn-sm" id="set-import">⬆ 导入备份</button>' +
        '<button class="btn btn-sm btn-warn" id="set-clear">🗑 清空数据</button>' +
        '</div>' +
        '<p class="set-tip">数据保存在本机浏览器。换设备/换浏览器请用「导出备份」保存为文件，「导入备份」恢复。' +
        '设置考试日期后，可在「复习计划」一键生成每日任务。</p>',
      buttons: [
        { text: '取消' },
        { text: '保存', cls: 'btn-primary', onClick: function () {
          var name = document.getElementById('set-name').value.trim();
          var exam = document.getElementById('set-exam').value;
          var daily = Math.max(10, Math.min(300, +document.getElementById('set-daily').value || 60));
          var weekend = Math.max(10, Math.min(400, +document.getElementById('set-weekend').value || 90));
          var book = document.getElementById('set-book').value;
          s.profile.student = name || 'Lily';
          var examChanged = s.profile.examDate !== exam;
          s.profile.examDate = exam;
          s.profile.dailyMinutes = daily;
          s.profile.weekendMinutes = weekend;
          s.profile.enBook = book;
          s.profile.enBookConfirmed = true;
          Core.save();
          Core.refreshBookUI(); Core.refreshCountdown();
          Core.toast('设置已保存', 'ok');
          if (examChanged) Core.toast('考试日期已更新，可到「复习计划」重新生成', 'ok');
          return false;
        } }
      ],
      onOpen: function (body) {
        body.querySelector('#set-export').addEventListener('click', exportBackup);
        body.querySelector('#set-import').addEventListener('click', importBackup);
        body.querySelector('#set-clear').addEventListener('click', clearData);
      }
    });
  }

  function exportBackup() {
    var data = JSON.stringify(Core.S(), null, 2);
    Core.download('lily_xiaoshengchu_backup_' + Core.todayKey() + '.json', data, 'application/json');
    Core.toast('备份已下载', 'ok');
  }

  function importBackup() {
    var inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'application/json,.json';
    inp.onchange = function () {
      var f = inp.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var obj = JSON.parse(rd.result);
          // 合并到默认结构，避免字段缺失
          var merged = Object.assign(Core.defaultState(), obj);
          Core.S().profile = merged.profile;
          Core.S().kaodian = merged.kaodian;
          Core.S().plan = merged.plan;
          Core.S().planCheck = merged.planCheck;
          Core.S().recite = merged.recite;
          Core.S().speaking = merged.speaking;
          Core.S().listening = merged.listening;
          Core.S().streak = merged.streak;
          Core.S().log = merged.log;
          Core.save();
          Core.refreshBookUI(); Core.refreshCountdown();
          Core.toast('备份已导入', 'ok'); Core.closeModal();
          Core.rerender('dashboard');
        } catch (e) { Core.toast('导入失败：文件格式不正确', 'err'); }
      };
      rd.readAsText(f);
    };
    inp.click();
  }

  function clearData() {
    Core.modal({
      title: '确认清空？', body: '<p style="color:#c0392b">将删除本机全部学习数据（考点标记、计划、背诵、口语、听力记录），此操作不可恢复！建议先「导出备份」。</p>',
      buttons: [
        { text: '取消' },
        { text: '确认清空', cls: 'btn-warn', onClick: function () {
          try { localStorage.removeItem(Core.STORE_KEY); } catch (e) { }
          Core.load();
          Core.refreshBookUI(); Core.refreshCountdown();
          Core.closeModal();
          Core.go('dashboard');
          Core.toast('数据已清空', 'ok');
          return false;
        } }
      ]
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})(window.Core);
