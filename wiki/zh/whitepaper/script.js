function switchTab(tabId) {
  // 移除所有 active 类
  document.querySelectorAll('.tab').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });

  // 添加 active 到目标
  const targetTab = document.querySelector(`[data-tab="${tabId}"]`);
  const targetContent = document.getElementById(tabId);

  if (targetTab && targetContent) {
    targetTab.classList.add('active');
    targetContent.classList.add('active');
  }
}

// 初始化：绑定事件
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      switchTab(tabId);
    });
  });
});
