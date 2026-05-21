/* ══════════════════════════════════════════════════════════════
   EVENTURA — slides.js v2
   9 plantillas rediseñadas: image-slots, glassmorphism,
   animaciones de entrada, layouts cinematográficos
   Los nombres de metodología NUNCA aparecen en el contenido.
══════════════════════════════════════════════════════════════ */

var currentSlide = 0;
var TOTAL_SLIDES = 12;

/* ════════════════════════════════════════
   RENDER PRINCIPAL
════════════════════════════════════════ */
function renderAllSlides(data) {
  currentSlide = 0;
  var track = document.getElementById('slidesTrack');
  var html = '';

  if (!data || data.slides === 'blank') {
    for (var b = 1; b <= TOTAL_SLIDES; b++) html += renderBlank(b);
  } else {
    html += renderSImg1(data);
    html += renderSImg(data);
    html += renderS1(data);
    html += renderS2b(data);
    html += renderS2(data);
    html += renderS3(data);
    html += renderS4(data);
    html += renderS5(data);
    html += renderS6(data);
    html += renderS7(data);
    html += renderS8(data);
    html += renderS9(data);
  }

  track.innerHTML = html;
  var slides = track.querySelectorAll('.slide');
  if (slides[0]) slides[0].classList.add('active');
  renderDots(TOTAL_SLIDES);
  updateNavArrows();
}

/* ════════════════════════════════════════
   NAVEGACIÓN
════════════════════════════════════════ */
function goToSlide(index) {
  if (index < 0 || index >= TOTAL_SLIDES) return;
  document.querySelectorAll('#slidesTrack .slide').forEach(function(s, i) {
    s.classList.toggle('active', i === index);
  });
  document.querySelectorAll('.dot').forEach(function(d, i) {
    d.classList.toggle('active', i === index);
  });
  currentSlide = index;
  updateNavArrows();
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide()  { goToSlide(currentSlide - 1); }

function updateNavArrows() {
  var prev = document.getElementById('prevBtn');
  var next = document.getElementById('nextBtn');
  if (prev) prev.style.opacity = currentSlide === 0 ? '0.35' : '1';
  if (next) next.style.opacity = currentSlide === TOTAL_SLIDES - 1 ? '0.35' : '1';
}

function renderDots(total) {
  var container = document.getElementById('slideDots');
  if (!container) return;
  var html = '';
  for (var i = 0; i < total; i++) {
    html += '<button class="dot' + (i === 0 ? ' active' : '') + '" data-slide="' + i + '"></button>';
  }
  container.innerHTML = html;
  container.querySelectorAll('.dot').forEach(function(dot) {
    dot.addEventListener('click', function() { goToSlide(parseInt(this.dataset.slide)); });
  });
}

/* ════════════════════════════════════════
   HELPERS
════════════════════════════════════════ */
function colorAlt(i) { return i % 2 === 0 ? 'orange' : 'purple'; }

var CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

function pad2(n) { return n < 10 ? '0' + n : '' + n; }

/* ════════════════════════════════════════
   SLIDE 1 — ¿Quiénes somos?
   Cinematográfico: imagen full-bleed + overlay diagonal
════════════════════════════════════════ */
function renderS1(data) {
  var s = data.slides.s1;
  return '<div class="slide s-cover">' +
    /* Imagen de fondo — arrastra tu foto aquí */
    '<image-slot id="ev-s1-bg" class="slide-bg-slot"' +
      ' placeholder="Arrastra aquí una foto: ciudad, evento, equipo o abstracto"' +
      ' shape="rect"></image-slot>' +
    /* Círculos decorativos sobre la imagen */
    '<div style="position:absolute;width:600px;height:600px;background:#FF4500;opacity:.09;top:-180px;right:-100px;border-radius:50%;z-index:1;pointer-events:none;"></div>' +
    '<div style="position:absolute;width:360px;height:360px;background:#6B52E8;opacity:.12;bottom:60px;right:120px;border-radius:50%;z-index:1;pointer-events:none;"></div>' +
    /* Overlay gradiente */
    '<div class="cover-overlay"></div>' +
    /* Contenido */
    '<div class="cover-content">' +
      '<img src="assets/img/logo.png" class="cover-logo anim-1" alt="Eventura">' +
      '<div class="cover-brand anim-2">EVENTURA</div>' +
      '<h1 class="cover-title anim-3"><span>¿Quiénes</span><br>somos?</h1>' +
      '<p class="cover-body anim-4">' + s.cuerpo + '</p>' +
    '</div>' +
    /* Ticket decorativo — derecha, 30° de inclinación */
    '<img src="assets/img/ticket.png" class="s1-ticket anim-fade" alt="Eventura Ticket">' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

/* ════════════════════════════════════════
   SLIDE IMG 1 — Imagen full-bleed (Eventura 1)
════════════════════════════════════════ */
function renderSImg1(data) {
  return '<div class="slide s-cover">' +
    '<img src="assets/img/Eventura (1).png" class="slide-bg-slot" style="width:100%;height:100%;object-fit:cover;display:block;" alt="Eventura">' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

/* ════════════════════════════════════════
   SLIDE IMG — Imagen full-bleed
   Solo imagen, sin texto
════════════════════════════════════════ */
function renderSImg(data) {
  return '<div class="slide s-cover">' +
    '<img src="assets/img/Eventura.png" class="slide-bg-slot" style="width:100%;height:100%;object-fit:cover;display:block;" alt="Eventura">' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

/* ════════════════════════════════════════
   SLIDE 2b — ¿Qué recibirá? (primeras 7 tarjetas)
   Copia de S2 limitada a 7 items
════════════════════════════════════════ */
function renderS2b(data) {
  var MODULOS = [
    { emoji: '🔐', titulo: 'Gestión de cuentas y acceso' },
    { emoji: '🔍', titulo: 'Descubrimiento de eventos' },
    { emoji: '🎫', titulo: 'Compra de boletos' },
    { emoji: '🗓️', titulo: 'Gestión de eventos (organizador)' },
    { emoji: '📲', titulo: 'Control de acceso en puerta' },
    { emoji: '📊', titulo: 'Panel de administración y reportes' },
    { emoji: '🔔', titulo: 'Notificaciones y comunicación' }
  ];

  function makeCard(mod, i) {
    var col = colorAlt(i);
    return '<div class="cycle-card-v2 ' + col + '" style="justify-content:center;gap:14px;">' +
      '<div class="cycle-emoji-wrap ' + col + '">' + mod.emoji + '</div>' +
      '<div class="cycle-num-badge ' + col + '">Módulo ' + (i + 1) + '</div>' +
      '<div class="cycle-entry-v2" style="flex:none;display:flex;align-items:center;justify-content:center;">' + mod.titulo + '</div>' +
    '</div>';
  }

  var row1 = MODULOS.slice(0, 4).map(function(m, i) { return makeCard(m, i); }).join('');
  var row2 = MODULOS.slice(4).map(function(m, i)    { return makeCard(m, i + 4); }).join('');

  var grid = '<div class="cycle-2rows anim-3">' +
    '<div class="cycle-inner-row">' + row1 + '</div>' +
    '<div class="cycle-inner-row">' + row2 + '</div>' +
  '</div>';

  return '<div class="slide s-light">' +
    '<div class="left-panel">' +
      '<img src="assets/img/logo.png" class="panel-logo" alt="Eventura">' +
      '<div class="panel-line"></div>' +
    '</div>' +
    '<div class="slide-content">' +
      '<div class="overline anim-1">PLATAFORMA</div>' +
      '<div class="slide-title anim-2">Módulos del sistema</div>' +
      grid +
    '</div>' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}


/* ════════════════════════════════════════
   SLIDE 2 — ¿Qué recibirá?
   Dos filas de cards mejor organizadas
════════════════════════════════════════ */
function renderS2(data) {
  var s = data.slides.s2;
  var tabla = s.tabla;

  /* Emojis representativos por ciclo */
  var CYCLE_EMOJIS = ['🔐','🛒','💳','✏️','🎫','✏️','💬','📲','🔔','📊','🛡️'];

  function makeCard(item, i) {
    var col   = colorAlt(i);
    var emoji = CYCLE_EMOJIS[i] || '🔧';
    return '<div class="cycle-card-v2 ' + col + '">' +
      '<div class="cycle-emoji-wrap ' + col + '">' + emoji + '</div>' +
      '<div class="cycle-num-badge ' + col + '">' + pad2(i + 1) + '</div>' +
      (item.semanas ? '<div class="cycle-weeks-v2">Sem.\u00a0' + item.semanas + '</div>' : '') +
      (item.modulo  ? '<div class="cycle-module-v2">' + item.modulo + '</div>' : '') +
      '<div class="cycle-entry-v2">' + item.entregable + '</div>' +
    '</div>';
  }

  var split = Math.floor(tabla.length / 2);
  var row1 = tabla.slice(0, split).map(function(it, i) { return makeCard(it, i); }).join('');
  var row2 = tabla.slice(split).map(function(it, i)  { return makeCard(it, i + split); }).join('');

  var grid = '<div class="cycle-2rows anim-3">' +
    '<div class="cycle-inner-row">' + row1 + '</div>' +
    (row2 ? '<div class="cycle-inner-row">' + row2 + '</div>' : '') +
  '</div>';

  return '<div class="slide s-light">' +
    '<div class="left-panel">' +
      '<img src="assets/img/logo.png" class="panel-logo" alt="Eventura">' +
      '<div class="panel-line"></div>' +
    '</div>' +
    '<div class="slide-content">' +
      '<div class="overline anim-1">ENTREGABLES</div>' +
      '<div class="slide-title anim-2">' + s.titulo + '</div>' +
      grid +
    '</div>' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

/* ════════════════════════════════════════
   SLIDE 3 — Cronograma
   Split: izquierda datos, derecha imagen
════════════════════════════════════════ */
function renderS3(data) {
  var s    = data.slides.s3;
  var meta = data.meta;

  var bullets = s.items.map(function(item, i) {
    return '<div class="s3-bullet">' +
      '<div class="s3-bullet-dot' + (i % 2 ? ' purple' : '') + '"></div>' +
      '<div class="s3-bullet-text">' + item + '</div>' +
    '</div>';
  }).join('');

  var timelineHtml = meta.tipo === 'kanban'
    ? '<div class="anim-5" style="margin-top:32px;">' + buildKanbanTimeline(data.slides.s2.tabla) + '</div>'
    : '';

  return '<div class="slide s-split s-split-right">' +
    /* Panel izquierdo: datos */
    '<div class="split-dark">' +
      '<div class="overline anim-1">CRONOGRAMA</div>' +
      '<div class="s3-dur-num anim-2">' + meta.duracion + '</div>' +
      '<div class="s3-dur-unit anim-3">MESES</div>' +
      '<div class="anim-4">' + bullets + '</div>' +
      timelineHtml +
    '</div>' +
      '<img src="assets/img/presentacionClinica (9).png" class="split-img-slot" style="width:100%;height:100%;object-fit:cover;display:block;" alt="">' +
      '<div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(26,23,69,0.45) 0%,transparent 40%);z-index:1;pointer-events:none;"></div>' +
    '</div>' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

function buildSprintTimeline() {
  var months = [
    { label: 'MES\u00a01', cycles: [{n:1,sem:'1\u20132'},{n:2,sem:'3\u20134'}] },
    { label: 'MES\u00a02', cycles: [{n:3,sem:'5\u20136'},{n:4,sem:'7\u20138'}] },
    { label: 'MES\u00a03', cycles: [{n:5,sem:'9\u201310'},{n:6,sem:'11\u201312'}] },
    { label: 'MES\u00a04', cycles: [{n:7,sem:'13\u201314'},{n:8,sem:'15\u201316'}] },
    { label: 'MES\u00a05', cycles: [{n:9,sem:'17\u201318'},{n:10,sem:'19\u201320'}] },
    { label: 'MES\u00a06', cycles: [{n:11,sem:'21\u201322'},{n:12,sem:'23\u201324'}], half: true }
  ];
  var html = '<div class="s3-months-row">';
  months.forEach(function(m) {
    html += '<div class="s3-month-group' + (m.half ? ' half' : '') + '">';
    html +=   '<div class="s3-month-label">' + m.label + '</div>';
    html +=   '<div class="s3-cycles-in-month">';
    m.cycles.forEach(function(c, ci) {
      var p = ci % 2 === 1;
      html += '<div class="s3-cycle-block' + (p ? ' purple' : '') + '">';
      html +=   '<div class="s3-cycle-label' + (p ? ' purple' : '') + '">S' + c.n + '</div>';
      html +=   '<div class="s3-cycle-sem">Sem.\u00a0' + c.sem + '</div>';
      html += '</div>';
    });
    html +=   '</div>';
    html += '</div>';
  });
  html += '</div>';
  return html;
}

function buildKanbanTimeline(tabla) {
  var html = '<div class="s3-months-row s3-kanban-months">';
  tabla.forEach(function(item, i) {
    var p = i % 2 === 1;
    var label = item.modulo || item.ciclo;
    html += '<div class="s3-month-group">';
    html +=   '<div class="s3-month-label s3-kan-label">MES\u00a0' + (i + 1) + '</div>';
    html +=   '<div class="s3-cycles-in-month">';
    html +=     '<div class="s3-kan-block' + (p ? ' purple' : '') + '">';
    html +=       '<div class="s3-kan-ep' + (p ? ' purple' : '') + '">' + label + '</div>';
    html +=       '<div class="s3-kan-name">' + item.entregable + '</div>';
    html +=     '</div>';
    html +=   '</div>';
    html += '</div>';
  });
  html += '</div>';
  return html;
}

/* ════════════════════════════════════════
   SLIDE 4 — Costo
   Imagen de fondo + glassmorphism
════════════════════════════════════════ */
function renderS4(data) {
  var s = data.slides.s4;
  return '<div class="slide s-cover">' +
    /* Imagen de fondo */
    '<image-slot id="ev-s4-bg" class="slide-bg-slot"' +
      ' placeholder="Arrastra aquí: ciudad de Guatemala, negocios, abstracto oscuro"' +
      ' shape="rect"></image-slot>' +
    /* Overlay */
    '<div style="position:absolute;inset:0;background:rgba(26,23,69,0.82);z-index:1;pointer-events:none;"></div>' +
    /* Círculo decorativo */
    '<div style="position:absolute;width:700px;height:700px;background:#FF4500;opacity:.06;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;z-index:1;pointer-events:none;"></div>' +
    /* Contenido */
    '<div class="s4-glass-layout">' +
      '<div class="s4-overline anim-1">INVERSI\u00d3N DEL PROYECTO</div>' +
      '<div class="cost-total-huge anim-2">' + s.total + '</div>' +
      '<div class="s4-glass-row anim-3">' +
        '<div class="glass-kpi">' +
          '<div class="glass-kpi-label">Costo mensual</div>' +
          '<div class="glass-kpi-value orange">' + s.mensual + '</div>' +
        '</div>' +
        '<div class="glass-kpi">' +
          '<div class="glass-kpi-label">Duraci\u00f3n contractual</div>' +
          '<div class="glass-kpi-value">' + s.duracion + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="cost-pago-note anim-4">' + s.pago + '</div>' +
    '</div>' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

/* ════════════════════════════════════════
   SLIDE 5 — El Equipo
   Imágenes de íconos asignadas por rol
════════════════════════════════════════ */
function renderS5(data) {
  var s = data.slides.s5;

  /* Asignación de íconos por posición — variados */
  var TEAM_IMGS = [
    'assets/img/team-f2.png',   /* 0  Product Owner           */
    'assets/img/team-f1.webp',  /* 1  Diseñador UI/UX         */
    'assets/img/team-m2.jpg',   /* 2  Scrum Master / Coach    */
    'assets/img/team-m1.jpg',   /* 3  Senior Backend          */
    'assets/img/team-m2.jpg',   /* 4  Senior Frontend         */
    'assets/img/team-m1.jpg',   /* 5  Junior FullStack #1     */
    'assets/img/team-f1.webp',  /* 6  Junior FullStack #2     */
    'assets/img/team-f2.png'    /* 7  Analista QA             */
  ];

  var typeColors = { 'Gestión': 'orange', 'Liderazgo': 'orange', 'Calidad': 'orange', 'Freelance': 'purple', 'Desarrollo': 'purple' };

  var cards = s.roles.map(function(r, i) {
    var col = typeColors[r.tipo] || 'purple';
    return '<div class="team-card-v2">' +
      '<div class="team-portrait-wrap ' + col + '">' +
        '<img src="' + TEAM_IMGS[i] + '" alt="' + r.rol + '" class="team-portrait-img">' +
      '</div>' +
      '<div class="team-role-v2">' + r.rol + '</div>' +
      '<div class="team-type-v2">' + r.tipo + '</div>' +
    '</div>';
  }).join('');

  return '<div class="slide s-light">' +
    '<div class="left-panel">' +
      '<img src="assets/img/logo.png" class="panel-logo" alt="Eventura">' +
      '<div class="panel-line"></div>' +
    '</div>' +
    '<div class="slide-content">' +
      '<div class="overline anim-1">EL EQUIPO</div>' +
      '<div class="slide-title anim-2">Nuestros Especialistas</div>' +
      '<div class="team-grid-v2 anim-3">' + cards + '</div>' +
    '</div>' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

/* ════════════════════════════════════════
   SLIDE 6 — Riesgos y Protecciones
   Cards + imagen pequeña a la derecha
════════════════════════════════════════ */
function renderS6(data) {
  var s = data.slides.s6;
  var cards = s.tabla.map(function(r) {
    var medio = r.impacto === 'Medio';
    return '<div class="risk-card-v2' + (medio ? ' medio' : '') + '">' +
      '<div class="risk-impact-pill' + (medio ? ' medio' : '') + '">' + r.impacto + '</div>' +
      '<div class="risk-scenario-v2">' + r.escenario + '</div>' +
      '<div class="risk-protection-v2">' +
        '<i class="risk-protect-icon">\u2736</i>' + r.proteccion +
      '</div>' +
    '</div>';
  }).join('');

  return '<div class="slide s-dark">' +
    '<div class="s6-layout">' +
      '<div class="s6-header">' +
        '<div class="overline anim-1">GESTI\u00d3N DE RIESGOS</div>' +
        '<div class="slide-title white anim-2">Protecciones Incluidas</div>' +
      '</div>' +
      '<div class="risk-grid anim-3">' + cards + '</div>' +
    '</div>' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

/* ════════════════════════════════════════
   SLIDE 7 — Lo Que Garantizamos
   Fondo degradado + valores en negrita
════════════════════════════════════════ */
function renderS7(data) {
  var s = data.slides.s7;
  var items = s.items.map(function(item, i) {
    return '<div class="guarantee-item-v2 anim-' + (i + 3) + '">' +
      '<div class="g-check-v2">' + CHECK_SVG + '</div>' +
      '<div class="g-label-v2">' + item.label + '</div>' +
      '<div class="g-value-v2">' + item.valor + '</div>' +
    '</div>';
  }).join('');

  return '<div class="slide">' +
    '<div class="s7-bg"></div>' +
    '<div class="s7-layout">' +
      '<div class="overline anim-1">COMPROMISOS</div>' +
      '<div class="slide-title white anim-2">' + s.titulo + '</div>' +
      '<div class="guarantee-list">' + items + '</div>' +
    '</div>' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

/* ════════════════════════════════════════
   SLIDE 8 — Beneficios para el Inversor
   Split: imagen izquierda, contenido derecho
════════════════════════════════════════ */
function renderS8(data) {
  var s = data.slides.s8;
  var nums = ['01', '02', '03', '04','05','06','07','08'];
  var numColors = ['orange', 'purple', 'orange', 'purple'];

  var items = s.tabla.map(function(b, i) {
    return '<div class="benefit-item-v2">' +
      '<div class="benefit-num ' + numColors[i] + '">' + nums[i] + '</div>' +
      '<div class="benefit-content-v2">' +
        '<div class="benefit-title-v2">' + b.beneficio + '</div>' +
        '<div class="benefit-desc-v2">' + b.descripcion + '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  return '<div class="slide s-split s-split-left">' +
    /* Panel izquierdo: imagen */
    '<div class="split-img-panel anim-fade">' +
      '<img src="assets/img/presentacionClinica (5).png" class="split-img-slot" style="width:100%;height:100%;object-fit:cover;display:block;" alt="">' +
      '<div style="position:absolute;inset:0;background:linear-gradient(to left,rgba(45,42,94,0.60) 0%,transparent 60%);z-index:1;pointer-events:none;"></div>' +
    '</div>' +
    /* Panel derecho: beneficios */
    '<div class="s8-dark-content">' +
      '<div class="overline anim-1">PARA EL INVERSOR</div>' +
      '<div class="slide-title white anim-2">Beneficios</div>' +
      '<div class="anim-3">' + items + '</div>' +
    '</div>' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

/* ════════════════════════════════════════
   SLIDE 9 — helper: contenido vista cliente
════════════════════════════════════════ */
function renderS9ClienteInner(s) {
  var inds = s.clienteIndicadores || s.indicadores || [];
  var cards = inds.map(function(ind) {
    var body = ind.valor
      ? '<div class="indicator-value-v2">' + ind.valor + '</div>'
      : '<div class="indicator-ring' + (ind.col ? ' ' + ind.col : '') + '"><div class="indicator-ring-inner">?</div></div>' +
        '<div class="indicator-pending-v2">Por definir</div>';
    return '<div class="indicator-card-v2">' +
      '<div class="indicator-name-v2' + (ind.col ? ' ' + ind.col : '') + '">' + ind.nombre + '</div>' +
      body +
    '</div>';
  }).join('');

  var resumen = s.clienteResumen || [];
  var resumenHTML = resumen.length
    ? '<div class="s9-resumen anim-5">' +
        resumen.map(function(r) {
          return '<div class="s9-resumen-item">' +
            '<span class="s9-resumen-label">' + r.label + '</span>' +
            '<span class="s9-resumen-valor">' + r.valor + '</span>' +
          '</div>';
        }).join('') +
      '</div>'
    : '';

  return '<div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 110%,rgba(107,82,232,.18) 0%,transparent 70%);pointer-events:none;"></div>' +
    '<div class="s9-layout">' +
      '<div class="overline anim-1">RETORNO DE INVERSIÓN</div>' +
      '<div class="slide-title white anim-2">' + s.titulo + '</div>' +
      '<div class="indicator-cards anim-3">' + cards + '</div>' +
      resumenHTML +
      (s.nota ? '<div class="s9-note anim-4">' + s.nota + '</div>' : '') +
    '</div>';
}

/* ════════════════════════════════════════
   SLIDE 9 — Indicadores Financieros
   Placeholders premium estilo dashboard
════════════════════════════════════════ */
function renderS9(data) {
  var s = data.slides.s9;
  var inds = s.indicadores || [
    { nombre: 'ROI',     valor: null, col: '' },
    { nombre: 'TMAR',    valor: null, col: 'purple' },
    { nombre: 'Retorno', valor: null, col: '' }
  ];

  var cards = inds.map(function(ind) {
    var body = ind.valor
      ? '<div class="indicator-value-v2">' + ind.valor + '</div>'
      : '<div class="indicator-ring' + (ind.col ? ' ' + ind.col : '') + '"><div class="indicator-ring-inner">?</div></div>' +
        '<div class="indicator-pending-v2">Por definir</div>';
    return '<div class="indicator-card-v2">' +
      '<div class="indicator-name-v2' + (ind.col ? ' ' + ind.col : '') + '">' + ind.nombre + '</div>' +
      body +
    '</div>';
  }).join('');

  var resumenHTML = '';
  if (s.resumen) {
    resumenHTML = '<div class="s9-resumen anim-5">' +
      s.resumen.map(function(r) {
        return '<div class="s9-resumen-item">' +
          '<span class="s9-resumen-label">' + r.label + '</span>' +
          '<span class="s9-resumen-valor">' + r.valor + '</span>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  return '<div class="slide s-dark">' +
    /* Vista normal \u2014 indicadores (oculta por defecto) */
    '<div class="s9-normal-view hidden">' +
      '<div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 110%,rgba(107,82,232,.18) 0%,transparent 70%);pointer-events:none;"></div>' +
      '<div class="s9-layout">' +
        '<div class="overline anim-1">RETORNO DE INVERSI\u00d3N</div>' +
        '<div class="slide-title white anim-2">' + s.titulo + '</div>' +
        '<div class="indicator-cards anim-3">' + cards + '</div>' +
        resumenHTML +
        (s.nota ? '<div class="s9-note anim-4">' + s.nota + '</div>' : '') +
      '</div>' +
    '</div>' +
    /* Vista cliente \u2014 mismo layout, datos simplificados (visible por defecto) */
    '<div class="s9-client-view visible">' +
      renderS9ClienteInner(s) +
    '</div>' +
    /* Bot\u00f3n toggle */
    '<button class="s9-toggle-btn" onclick="toggleS9View(this)" title="Cambiar vista"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="2" y="3" width="9" height="9" rx="1.5"/><rect x="13" y="3" width="9" height="9" rx="1.5"/><rect x="2" y="14" width="9" height="9" rx="1.5"/><rect x="13" y="14" width="9" height="9" rx="1.5"/></svg></button>' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}

function toggleS9View(btn) {
  var slide = btn.closest('.slide');
  var normal = slide.querySelector('.s9-normal-view');
  var client = slide.querySelector('.s9-client-view');
  var showingClient = client.classList.contains('visible');
  if (showingClient) {
    client.classList.remove('visible');
    normal.classList.remove('hidden');
  } else {
    normal.classList.add('hidden');
    client.classList.add('visible');
  }
}


/* ════════════════════════════════════════
   SLIDE — XP / Próximamente
════════════════════════════════════════ */
function renderBlank(num) {
  var titles = [
    '\u00bfQui\u00e9nes somos?', 'Imagen 1', 'Imagen 2', '\u00bfQu\u00e9 recibir\u00e1? (7 tarjetas)',
    '\u00bfQu\u00e9 recibir\u00e1?', 'Cronograma',
    'Costo', 'El Equipo', 'Riesgos', 'Garant\u00edas',
    'Beneficios', 'Indicadores'
  ];
  return '<div class="slide s-dark">' +
    '<div style="position:absolute;width:500px;height:500px;background:#FF4500;opacity:.05;top:-100px;left:-100px;border-radius:50%;pointer-events:none;"></div>' +
    '<div class="s-blank-center">' +
      '<img src="assets/img/logo.png" class="s-blank-logo" alt="Eventura">' +
      '<div class="s-blank-title">' + titles[num - 1] + '</div>' +
      '<div class="s-blank-badge">Pr\u00f3ximamente</div>' +
    '</div>' +
    '<div class="gradient-strip"></div>' +
  '</div>';
}
