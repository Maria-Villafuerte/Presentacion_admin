/* ══════════════════════════════════════════════════════════════
   EVENTURA — app.js
   Lógica principal: tabs, menú, metodología, teclado
══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Estado global ── */
  let activeMethod = 'B';
  let activeView   = 'presentation';

  /* ── Referencias DOM ── */
  const logoBtn    = document.getElementById('logoBtn');
  const methodMenu = document.getElementById('methodMenu');
  const methodItems = document.querySelectorAll('.method-item');
  const tabBtns    = document.querySelectorAll('.tab-btn');
  const views      = document.querySelectorAll('.view');

  /* ════════════════════════════════════════
     TOPBAR — Tabs
  ════════════════════════════════════════ */
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.view;
      if (target === activeView) return;
      activeView = target;

      tabBtns.forEach(b => b.classList.toggle('active', b.dataset.view === target));

      views.forEach(v => {
        const isTarget = v.id === 'view-' + target;
        v.classList.toggle('active', isTarget);
      });

      if (target === 'dashboard') {
        renderDashboard(METODOLOGIAS[activeMethod]);
      }
    });
  });

  /* ════════════════════════════════════════
     LOGO — Dropdown metodología
  ════════════════════════════════════════ */
  logoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    methodMenu.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!methodMenu.contains(e.target) && e.target !== logoBtn) {
      methodMenu.classList.remove('open');
    }
  });

  methodItems.forEach(item => {
    item.addEventListener('click', () => {
      const method = item.dataset.method;
      if (method === activeMethod) {
        methodMenu.classList.remove('open');
        return;
      }
      activeMethod = method;
      methodMenu.classList.remove('open');

      /* Actualizar indicador visual (solo un punto, sin nombre en el contenido) */
      methodItems.forEach(m => m.classList.toggle('active', m.dataset.method === method));

      /* Recargar vistas */
      renderAllSlides(METODOLOGIAS[activeMethod]);
      if (activeView === 'dashboard') {
        renderDashboard(METODOLOGIAS[activeMethod]);
      }
    });
  });

  /* ════════════════════════════════════════
     CANVAS SCALING — adapta 1920×1080 al viewport
  ════════════════════════════════════════ */
  function scaleCanvas() {
    const stage  = document.getElementById('slideStage');
    const canvas = document.getElementById('slideCanvas');
    const sw = stage.clientWidth;
    const sh = stage.clientHeight;
    const scale = Math.min(sw / 1920, sh / 1080);
    const ox = (sw - 1920 * scale) / 2;
    const oy = (sh - 1080 * scale) / 2;
    canvas.style.transform = 'translate(' + ox + 'px,' + oy + 'px) scale(' + scale + ')';
  }

  window.addEventListener('resize', scaleCanvas);

  /* ════════════════════════════════════════
     TECLADO — ← →, Escape
  ════════════════════════════════════════ */
  document.addEventListener('keydown', (e) => {
    if (activeView !== 'presentation') return;
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Escape') {
      methodMenu.classList.remove('open');
    }
  });

  /* ════════════════════════════════════════
     INICIO
  ════════════════════════════════════════ */
  function init() {
    scaleCanvas();
    renderAllSlides(METODOLOGIAS[activeMethod]);
    /* Nav buttons conectados en slides.js después de render */
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
  }

  /* Iniciar: los scripts están al final del body, DOM ya disponible */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
