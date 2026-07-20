(function () {
  const cfg = window.OMR_CONFIG || {};
  const setAll = (selector, url) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (url) el.setAttribute('href', url);
      if (url && el.tagName === 'A') el.setAttribute('target', url.startsWith('#') ? '_self' : '_blank');
      if (url && el.tagName === 'A' && !url.startsWith('#')) el.setAttribute('rel', 'noopener noreferrer');
    });
  };
  setAll('[data-download-link]', cfg.downloadUrl);
  setAll('[data-release-link]', cfg.releaseNotesUrl);
  setAll('[data-repo-link]', cfg.repoUrl);
  setAll('[data-youtube-link]', cfg.youtubeUrl);
  setAll('[data-blog-link]', cfg.developerBlogUrl);
  setAll('[data-support-link]', cfg.supportUrl);
  document.querySelectorAll('[data-version]').forEach((el) => { el.textContent = cfg.version || 'Latest'; });
  document.querySelectorAll('[data-updated]').forEach((el) => { el.textContent = cfg.lastUpdated || ''; });
})();
