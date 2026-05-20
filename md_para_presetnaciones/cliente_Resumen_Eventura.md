# Eventura — Resumen General

<div id="eye-ctrl" style="position:fixed;top:10px;right:10px;z-index:999;opacity:0.05;transition:opacity 0.3s;" onmouseenter="this.style.opacity='1'" onmouseleave="this.style.opacity='0.05'">
  <button id="eye-btn" onclick="toggleFS()" style="background:none;border:none;cursor:pointer;font-size:1.5rem;color:white;" title="Modo presentación">👁️</button>
</div>
<script>
function toggleFS() {
  var btn = document.getElementById('eye-btn');
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    btn.textContent = '🙈';
  } else {
    document.exitFullscreen();
    btn.textContent = '👁️';
  }
}
</script>

### Plataforma Integral de Ticketing y Gestión de Eventos | Guatemala, 2026

---

## Intro ¿Quiénes somos?

Desarrollamos **Eventura**: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada.

---

## ¿Qué recibirá?

| Ciclos          | Módulo                           | Entregable principal                                  | Descripción                                                                      |
| --------------- | --------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------- |
| Ciclo 1         | EP01 — Identidad y Seguridad     | Login, Google Auth, roles y permisos                  | Base segura: cada usuario accede solo a lo que le corresponde                     |
| Ciclo 2         | EP02 — Motor de Descubrimiento   | Búsqueda geolocalizada, filtros, "Últimas entradas" | Los eventos aparecen según ubicación — más visibilidad para sus organizadores |
| Ciclo 3         | EP03 — E-commerce Transaccional  | Carrito, pagos, FEL, boletos QR únicos               | Primera transacción real posible — pago seguro con factura FEL incluida         |
| Ciclo 4         | EP04 — CMS del Organizador       | Creación/edición de eventos, aforos, borradores     | Sus organizadores publican y gestionan eventos de forma completamente autónoma   |
| Ciclo 5         | EP05 — Control de Acceso Offline | Escáner QR, modo sin internet, sincronización       | Validación de entradas en puerta aunque falle el internet del recinto            |
| Ciclo 6         | EP06 — Inteligencia de Negocio   | Dashboards, reportes Excel/PDF                        | Decisiones basadas en datos — ventas, asistencia y tendencias en tiempo real     |
| Ciclo 7         | EP07 — Notificaciones            | Recordatorios 24h, alertas push, emergencias masivas  | Comunicación automática con asistentes antes, durante y después del evento     |
| Ciclo 8         | EP08 — Infraestructura / DevOps  | Cloud, auto-scaling, CI/CD, uptime ≥99.5%            | La plataforma soporta sold-outs masivos sin caerse                                |
| **TOTAL** | **8 módulos**              | **Producto completo**                           | **8 módulos funcionales entregados y validados**                           |

---

## Cronograma

| Metodología       | Duración           | Ciclos | Hitos visibles        | Recomendado   |
| ------------------ | ------------------- | ------ | --------------------- | ------------- |
| **Scrum ★** | **3.5 meses** | 7      | Sí — cada 2 semanas | **SÍ** |
| Kanban             | 7 meses             | —     | No                    | No            |
| Scrumban           | 3.5 meses           | 7      | Sí — cada 2 semanas | No            |

---

## Costo

| Metodología       | Costo mensual | Costo total           | Margen |
| ------------------ | ------------- | --------------------- | ------ |
| **Scrum ★** | Q95,312.50    | **Q333,593.75** | 36.79% |
| Kanban             | Q94,000.00    | Q658,000.00           | 71%    |
| Scrumban           | Q65,333.00    | Q228,667.00           | 31%    |

---

## El Equipo

| Rol                          |
| ---------------------------- |
| Product Owner                |
| Diseñador UI/UX (Freelance) |
| Scrum Master / Coach         |
| Senior Backend Developer     |
| Senior Frontend Developer    |
| Junior FullStack (×2)       |
| Analista QA                  |

---

## Riesgos y Protecciones

| Riesgo                          | Por qué nos importa          | Cómo lo mitigamos                              |
| ------------------------------- | ----------------------------- | ----------------------------------------------- |
| Baja adopción de organizadores | Sin oferta, no hay demanda    | Validación con usuarios reales desde Ciclo 3   |
| Problemas de confianza en pagos | Crítico para la conversión  | Integración FEL + pasarela certificada Ciclo 2 |
| Fallas en acceso offline        | Afecta operación en recintos | Arquitectura offline-first con sincronización  |
| Escalabilidad en sold-outs      | Caída en el peor momento     | Auto-scaling en nube desde Ciclo 7              |

---

## Lo Que Garantizamos

- **MVP completo en 3.5 meses** con 8 módulos funcionales
- Usted ve avance real cada 2 semanas (Ciclo Reviews)
- Control de acceso funcional **sin internet**
- Uptime ≥ 99.5% validado en pruebas de carga
- Código fuente, documentación y credenciales entregadas al cierre

---

## Beneficios para el Inversor

| Beneficio                         | Descripción                                                      |
| --------------------------------- | ----------------------------------------------------------------- |
| Tiempo al mercado más rápido    | MVP listo en 3.5 meses — ingresos desde el mes 4                 |
| Democratización del mercado      | Organizadores locales de Guatemala con herramientas profesionales |
| Escalabilidad sin costo adicional | Infraestructura cloud crece con la demanda                        |
| Propiedad total del producto      | Código fuente + documentación entregados al cierre              |

---

## Indicadores Financieros

| Indicador                      | Valor |
| ------------------------------ | ----- |
| ROI                            |       |
| ROA                            |       |
| Meses de Retorno de Inversión |       |

---

*Eventura | Mayo 2026 | Administración de Proyectos de TI — UVG*
