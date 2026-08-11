// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () { nav.classList.toggle('open'); });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }
});

// Newsletter forms (footer + Stories panel) -> SendX form v80cnDw7d7fJeVdhsfFYDl.
// Email only, no captcha; SendX double opt-in confirms the address.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form.nlform').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var row = form.querySelector('.nlrow');
      var msg = form.querySelector('.nlmsg');
      var btn = form.querySelector('button');
      if (btn) btn.disabled = true;
      fetch('https://api.sendx.io/api/v1/form/v80cnDw7d7fJeVdhsfFYDl', { method: 'POST', mode: 'no-cors', body: new FormData(form) })
        .then(function () {
          if (row) row.style.display = 'none';
          if (msg) { msg.innerHTML = 'Thanks! Check your inbox to confirm your subscription.'; msg.style.display = 'block'; }
        })
        .catch(function () {
          if (btn) btn.disabled = false;
          if (msg) { msg.innerHTML = 'Something went wrong. Please try again.'; msg.style.display = 'block'; }
        });
    });
  });
});

// Review mode: add ?review=1 to any page URL to reveal section codes for board feedback.
// Hidden by default. Codes auto-number top-to-bottom using a per-page prefix.
document.addEventListener('DOMContentLoaded', function () {
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.get('review') !== '1') return;

    var PREFIX = {
      'index.html': 'HOME', '': 'HOME', '/': 'HOME',
      'our-cause.html': 'CAUSE', 'denise-story.html': 'DENISE',
      'who-we-walk-for.html': 'WALK', 'advocacy.html': 'ADV',
      'stories.html': 'STORIES', 'stories-what-is-a-previvor.html': 'POST',
      'share-your-story.html': 'SHARE', 'volunteer.html': 'VOLUNTEER',
      'events.html': 'EVENTS', 'get-involved.html': 'INVOLVE',
      'donate.html': 'DONATE', 'shop.html': 'SHOP', 'about.html': 'ABOUT',
      'partners.html': 'PARTNERS', 'press.html': 'PRESS', 'photos.html': 'PHOTOS',
      'resources.html': 'RESOURCES', 'register.html': 'REGISTER',
      'contact.html': 'CONTACT', 'privacy.html': 'PRIVACY', 'terms.html': 'TERMS',
      'accessibility.html': 'ACCESS'
    };
    var file = (window.location.pathname.split('/').pop() || 'index.html');
    var prefix = PREFIX[file];
    if (!prefix) {
      prefix = file.replace(/\.html?$/, '').replace(/[^a-z0-9]+/gi, '-')
                   .replace(/^-|-$/g, '').toUpperCase() || 'PAGE';
    }

    var css = ''
      + 'section.mm-rev{position:relative;outline:1px dashed rgba(178,54,102,.45);outline-offset:-1px}'
      + '.mm-badge{position:absolute;top:6px;left:6px;z-index:60;background:#B23666;color:#fff;'
      + 'font:700 11px/1 ui-monospace,Menlo,Consolas,monospace;letter-spacing:.04em;'
      + 'padding:5px 8px;border-radius:6px;cursor:pointer;border:0;box-shadow:0 1px 5px rgba(0,0,0,.35);opacity:.92}'
      + '.mm-badge:hover{opacity:1;background:#8514A1}'
      + '.mm-bar{position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#262928;color:#fff;'
      + 'font:600 13px/1.4 Inter,system-ui,sans-serif;padding:11px 16px;text-align:center;box-shadow:0 -2px 12px rgba(0,0,0,.25)}'
      + '.mm-bar b{color:#F2C334}.mm-bar code{background:#3a3e3c;padding:1px 6px;border-radius:4px;font-size:12px}'
      + '.mm-bar a{color:#F2C334;text-decoration:underline;cursor:pointer}'
      + '.mm-toast{position:fixed;bottom:58px;left:50%;transform:translateX(-50%) translateY(8px);'
      + 'background:#1F641D;color:#fff;padding:8px 14px;border-radius:8px;font:600 13px Inter,sans-serif;'
      + 'z-index:10000;opacity:0;pointer-events:none;transition:.18s;box-shadow:0 4px 14px rgba(0,0,0,.3)}'
      + '.mm-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}';
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var sections = document.querySelectorAll('#main > section');
    sections.forEach(function (sec, i) {
      var code = prefix + '-' + (i + 1);
      sec.classList.add('mm-rev');
      var b = document.createElement('button');
      b.className = 'mm-badge';
      b.type = 'button';
      b.textContent = code;
      b.title = 'Click to copy "' + code + '"';
      b.addEventListener('click', function (e) {
        e.preventDefault();
        copy(code);
      });
      sec.appendChild(b);
    });

    var toast = document.createElement('div');
    toast.className = 'mm-toast';
    document.body.appendChild(toast);
    var toastTimer;
    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 1400);
    }
    function copy(code) {
      var done = function () { showToast('Copied  ' + code); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(done, function () { legacyCopy(code); done(); });
      } else { legacyCopy(code); done(); }
    }
    function legacyCopy(text) {
      var t = document.createElement('textarea');
      t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
      document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(t);
    }

    var bar = document.createElement('div');
    bar.className = 'mm-bar';
    bar.innerHTML = '<b>Review mode.</b> Click any <code>' + prefix + '-#</code> tag to copy it, '
      + 'then paste it into the feedback sheet’s “Section code” column. '
      + '<a id="mm-exit">Exit review mode</a>';
    document.body.appendChild(bar);
    document.getElementById('mm-exit').addEventListener('click', function () {
      params.delete('review');
      var q = params.toString();
      window.location.href = window.location.pathname + (q ? '?' + q : '') + window.location.hash;
    });
  } catch (err) { /* review mode is non-critical; never break the page */ }
});
