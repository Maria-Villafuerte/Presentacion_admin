/* ══════════════════════════════════════════════════════════════
   EVENTURA — dashboard.js
   Dashboard interactivo con Chart.js. Muestra datos de la
   metodología activa sin revelar su nombre en el contenido.
══════════════════════════════════════════════════════════════ */

var barChartInst   = null;
var donutChartInst = null;

/* ════════════════════════════════════════
   RENDER PRINCIPAL
════════════════════════════════════════ */
function renderDashboard(data) {
  var container = document.getElementById('dashboardContainer');
  if (!container) return;

  /* Destruir gráficas anteriores para evitar errores de Canvas */
  if (barChartInst)   { barChartInst.destroy();   barChartInst   = null; }
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

  /* Inversi\u00f3n acumulada por per\u00edodo */
  var cumulative = [];
  for (var p = 0; p < dash.totalCiclos; p++) {
    cumulative.push(Math.round(dash.ciclosCosto * (p + 1)));
  }

  /* ── KPI Cards ── */
  var kpiHTML = dash.kpis.map(function(kpi) {
    var cls = kpi.acento === 'purple' ? ' kpi-purple' : kpi.acento === 'dark' ? ' kpi-dark' : '';
    return '<div class="kpi-card' + cls + '">' +
      '<div class="kpi-label">' + kpi.label + '</div>' +
      '<div class="kpi-value">' + kpi.valor + '</div>' +
    '</div>';
  }).join('');

  /* ── SLA Bars ── */
  var slaHTML = dash.slas.map(function(sla) {
    var target = Math.min(sla.target, 100);
    var cls    = sla.color === 'purple' ? ' purple' : '';
    return '<div class="sla-item">' +
      '<div class="sla-header">' +
        '<span class="sla-label">' + sla.label + '</span>' +
        '<span class="sla-pct">' + sla.target + sla.unit + '</span>' +
      '</div>' +
      '<div class="sla-bar">' +
        '<div class="sla-fill' + cls + '" data-target="' + target + '" style="width:0%"></div>' +
      '</div>' +
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
        '<div class="chart-card-title">Inversi\u00f3n Acumulada por Per\u00edodo (Q)</div>' +
        '<div class="chart-card-inner"><canvas id="barChart"></canvas></div>' +
      '</div>' +
      '<div class="chart-card">' +
        '<div class="chart-card-title">Distribuci\u00f3n del Equipo</div>' +
        '<div class="donut-wrap">' +
          '<canvas id="donutChart" width="200" height="200"></canvas>' +
          '<div class="donut-legend">' + legendHTML + '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<div class="bottom-row">' +
      '<div class="chart-card">' +
        '<div class="chart-card-title">M\u00e9tricas de Calidad y SLA</div>' +
        slaHTML +
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
    '</div>';

  /* Inicializar charts tras pintado del DOM */
  setTimeout(function() {
    initBarChart(cumulative, dash.labelCiclos);
    initDonutChart(dash.equipo);
    /* Animar SLA bars */
    setTimeout(function() {
      document.querySelectorAll('.sla-fill').forEach(function(fill) {
        fill.style.width = fill.dataset.target + '%';
      });
    }, 120);
  }, 60);
}

/* ════════════════════════════════════════
   GRÁFICA DE BARRAS — Inversión acumulada
════════════════════════════════════════ */
function initBarChart(cumulative, labels) {
  var canvas = document.getElementById('barChart');
  if (!canvas) return;

  barChartInst = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Inversión Acumulada',
        data: cumulative,
        backgroundColor: labels.map(function(_, i) {
          return i === labels.length - 1 ? '#FF4500' : 'rgba(255,69,0,0.52)';
        }),
        hoverBackgroundColor: labels.map(function(_, i) {
          return i === labels.length - 1 ? '#FF6B35' : 'rgba(255,69,0,0.75)';
        }),
        borderRadius: 7,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1A1745',
          titleFont: { family: 'Outfit', size: 13, weight: '600' },
          bodyFont:  { family: 'Outfit', size: 13 },
          callbacks: {
            label: function(ctx) {
              return ' Q\u00a0' + ctx.parsed.y.toLocaleString('es-GT', { minimumFractionDigits: 2 });
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: {
            font: { family: 'Outfit', size: 13, weight: '600' },
            color: '#6B6B8A'
          }
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.06)', drawBorder: false },
          border: { display: false },
          ticks: {
            font: { family: 'Outfit', size: 12 },
            color: '#6B6B8A',
            callback: function(val) {
              if (val >= 1000000) return 'Q' + (val / 1000000).toFixed(1) + 'M';
              return 'Q' + (val / 1000).toFixed(0) + 'k';
            }
          }
        }
      }
    }
  });
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
