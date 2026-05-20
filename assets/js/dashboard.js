/* ══════════════════════════════════════════════════════════════
   EVENTURA — dashboard.js
   Dashboard interactivo con Chart.js. Muestra datos de la
   metodología activa sin revelar su nombre en el contenido.
══════════════════════════════════════════════════════════════ */

var donutChartInst = null;

/* ════════════════════════════════════════
   RENDER PRINCIPAL
════════════════════════════════════════ */
function renderDashboard(data) {
  var container = document.getElementById('dashboardContainer');
  if (!container) return;

  /* Destruir gráficas anteriores para evitar errores de Canvas */
  if (donutChartInst) { donutChartInst.destroy();  donutChartInst = null; }

  /* Caso: XP (blank) */
  if (!data || data.dashboard === 'blank') {
    container.innerHTML =
      '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:75vh;gap:20px;">' +
        '<img src="assets/img/logo.png" style="width:64px;opacity:0.2;border-radius:50%;">' +
        '<div style="font-size:28px;font-weight:700;color:#6B6B8A;font-family:Outfit,sans-serif;">XP \u2014 Extreme Programming</div>' +
        '<div style="font-size:14px;font-weight:700;color:#FF4500;text-transform:uppercase;letter-spacing:0.15em;background:rgba(255,69,0,.1);padding:10px 28px;border-radius:100px;border:1px solid rgba(255,69,0,.25);font-family:Outfit,sans-serif;">Pr\u00f3ximamente</div>' +
      '</div>';
    return;
  }

  var dash = data.dashboard;

  /* ── KPI Cards ── */
  var kpiHTML = dash.kpis.map(function(kpi) {
    var cls = kpi.acento === 'purple' ? ' kpi-purple' : kpi.acento === 'dark' ? ' kpi-dark' : '';
    return '<div class="kpi-card' + cls + '">' +
      '<div class="kpi-label">' + kpi.label + '</div>' +
      '<div class="kpi-value">' + kpi.valor + '</div>' +
      (kpi.sub ? '<div style="font-size:11px;color:var(--ev-gray);margin-top:-2px;">' + kpi.sub + '</div>' : '') +
    '</div>';
  }).join('');

  /* ── Ciclos ── */
  var ciclosHTML = dash.ciclos.map(function(c, i) {
    var border = i < dash.ciclos.length - 1 ? 'border-bottom:0.5px solid var(--color-border-tertiary);' : '';
    return '<div style="display:flex;align-items:center;gap:10px;padding:5px 0;' + border + '">' +
      '<span style="font-size:11px;font-weight:500;color:var(--color-text-tertiary);width:20px;flex-shrink:0;">' + c.id + '</span>' +
      '<span style="font-size:11px;color:var(--color-text-tertiary);width:34px;flex-shrink:0;">' + c.semanas + '</span>' +
      '<div style="flex:1;height:6px;border-radius:3px;background:var(--color-border-tertiary);overflow:hidden;">' +
        '<div style="width:100%;height:100%;background:' + c.color + ';border-radius:3px;"></div>' +
      '</div>' +
      '<span style="font-size:11px;color:var(--color-text-secondary);min-width:0;flex:2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + c.nombre + '</span>' +
    '</div>';
  }).join('');

  /* ── Donut Legend ── */
  var legendHTML = dash.equipo.map(function(e) {
    return '<div class="legend-item">' +
      '<div class="legend-dot" style="background:' + e.color + '"></div>' +
      '<span>' + e.rol + '</span>' +
      '<span class="legend-pct">' + e.cant + '</span>' +
    '</div>';
  }).join('');

  /* ── HTML completo ── */
  container.innerHTML =
    '<div class="dash-header">' +
      '<div>' +
        '<div class="dash-title">Panel de Seguimiento</div>' +
        '<div class="dash-subtitle">Datos de la metodolog\u00eda activa \u00b7 Mayo 2026</div>' +
      '</div>' +
    '</div>' +

    '<div class="kpi-grid">' + kpiHTML + '</div>' +

    '<div class="charts-row">' +
      '<div class="chart-card">' +
        '<div class="chart-card-title">Distribuci\u00f3n del Equipo</div>' +
        '<div class="donut-wrap">' +
          '<canvas id="donutChart" width="200" height="200"></canvas>' +
          '<div class="donut-legend">' + legendHTML + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="chart-card">' +
        '<div class="chart-card-title">Indicadores Financieros</div>' +
        '<div class="fin-cards">' +
          '<div class="fin-card"><span class="fin-card-label">ROI</span><span class="fin-card-value">\u2014 Por calcular</span></div>' +
          '<div class="fin-card"><span class="fin-card-label">ROA</span><span class="fin-card-value">\u2014 Por calcular</span></div>' +
          '<div class="fin-card"><span class="fin-card-label">Meses de Retorno</span><span class="fin-card-value">\u2014 Por calcular</span></div>' +
        '</div>' +
        '<div class="fin-note">Valores a definir con el cliente al inicio del proyecto.</div>' +
      '</div>' +
      '<div class="chart-card">' +
        '<div class="chart-card-title">Cronograma de ciclos</div>' +
        '<div id="cycles-list">' + ciclosHTML + '</div>' +
      '</div>' +
    '</div>';

  /* Inicializar charts tras pintado del DOM */
  setTimeout(function() {
    initDonutChart(dash.equipo);
  }, 60);
}

/* ════════════════════════════════════════
   GRÁFICA DONUT — Distribución del equipo
════════════════════════════════════════ */
function initDonutChart(equipo) {
  var canvas = document.getElementById('donutChart');
  if (!canvas) return;

  donutChartInst = new Chart(canvas.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: equipo.map(function(e) { return e.rol; }),
      datasets: [{
        data:            equipo.map(function(e) { return e.cant; }),
        backgroundColor: equipo.map(function(e) { return e.color; }),
        hoverBackgroundColor: equipo.map(function(e) { return e.color; }),
        borderWidth: 3,
        borderColor: '#FFFFFF',
        hoverOffset: 6
      }]
    },
    options: {
      responsive: false,
      cutout: '62%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1A1745',
          titleFont: { family: 'Outfit', size: 13, weight: '600' },
          bodyFont:  { family: 'Outfit', size: 13 },
          callbacks: {
            label: function(ctx) {
              return ' ' + ctx.label + ': ' + ctx.parsed + (ctx.parsed > 1 ? ' personas' : ' persona');
            }
          }
        }
      }
    }
  });
}
