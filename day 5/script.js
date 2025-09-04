const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    function setTheme(isDark, persist = true) {
      if (isDark) {
        body.classList.add('dark-mode');
        toggleButton.textContent = '☀️ Light Mode';
        toggleButton.setAttribute('aria-pressed', 'true');
      } else {
        body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙 Dark Mode';
        toggleButton.setAttribute('aria-pressed', 'false');
      }
      if (persist) {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark' || (!savedTheme && prefersDark), false);

    toggleButton.addEventListener('click', () => {
      const isDark = !body.classList.contains('dark-mode');
      setTheme(isDark);
    });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches, false);
      }
    });