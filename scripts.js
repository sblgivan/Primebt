document.addEventListener('DOMContentLoaded', () => {
  const drawerToggle = document.getElementById('drawer-toggle');
  const drawerContent = document.getElementById('drawer-content');

  drawerToggle.addEventListener('click', () => {
    drawerContent.classList.toggle('hidden');
    if (!drawerContent.classList.contains('hidden')) {
      drawerToggle.textContent = 'Hide Bots';
    } else {
      drawerToggle.textContent = 'Show Bots';
    }
  });
});
