(function () {
  const cfg = window.OMR_CONFIG || {};
  const editions = cfg.editions || {};

  const setAll = (selector, url) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!url) return;
      el.setAttribute('href', url);
      if (el.tagName === 'A') {
        el.setAttribute('target', url.startsWith('#') ? '_self' : '_blank');
        if (!url.startsWith('#')) el.setAttribute('rel', 'noopener noreferrer');
      }
    });
  };

  setAll('[data-repo-link]', cfg.repoUrl);
  setAll('[data-youtube-link]', cfg.youtubeUrl);
  setAll('[data-blog-link]', cfg.developerBlogUrl);
  setAll('[data-support-link]', cfg.supportUrl);

  Object.entries(editions).forEach(([key, edition]) => {
    setAll(`[data-download="${key}"]`, edition.downloadUrl);
    setAll(`[data-release="${key}"]`, edition.releaseUrl);
    document.querySelectorAll(`[data-version="${key}"]`).forEach((el) => {
      el.textContent = edition.version || '';
    });
  });

  document.querySelectorAll('[data-updated]').forEach((el) => {
    el.textContent = cfg.lastUpdated || '';
  });
})();
