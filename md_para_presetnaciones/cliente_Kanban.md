# Eventura — Propuesta Kanban

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

### Metodología: Kanban | Flujo Continuo | 7 meses | 214 tareas

---

## Intro ¿Quiénes somos?

Desarrollamos **Eventura**: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada.

---

## ¿Qué recibirá?

| Ciclos          | Módulo                           | Entregable principal                                 | Descripción                                                                      |
| --------------- | --------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| Ciclo 1         | EP01 — Identidad y Seguridad     | Login, Google Auth, roles y permisos                 | Base segura: cada usuario accede solo a lo que le corresponde                     |
| Ciclo 2         | EP02 — Motor de Descubrimiento   | Búsqueda geolocalizada, filtros, eventos destacados | Los eventos aparecen según ubicación — más visibilidad para sus organizadores |
| Ciclo 3         | EP03 — E-commerce Transaccional  | Carrito, pagos, FEL, boletos QR únicos              | Primera transacción real posible — pago seguro con factura FEL incluida         |
| Ciclo 4         | EP04 — CMS del Organizador       | Creación/edición de eventos, aforos, borradores    | Sus organizadores publican y gestionan eventos de forma completamente autónoma   |
| Ciclo 5         | EP05 — Control de Acceso Offline | Escáner QR, modo sin internet, sincronización      | Validación de entradas en puerta aunque falle el internet del recinto            |
| Ciclo 6         | EP06 — Inteligencia de Negocio   | Dashboards, reportes Excel/PDF                       | Decisiones basadas en datos — ventas, asistencia y tendencias en tiempo real     |
| Ciclo 6         | EP07 — Notificaciones            | Recordatorios 24h, alertas push, emergencias         | Comunicación automática con asistentes antes, durante y después del evento     |
| Ciclo 7         | EP08 — Infraestructura / DevOps  | Cloud, auto-scaling, CI/CD, backups                  | La plataforma soporta sold-outs masivos sin caerse                                |
| **TOTAL** | **214 tareas**              | **Producto completo**                          | **8 módulos funcionales entregados y validados**                           |

---

## Cronograma

- **7 meses** de flujo continuo — sin cortes ni plazos intermedios
- Velocidad sostenida: **2.43 tareas/día**
- Reporte de avance cada **viernes**
- Reunión de revisión cada **2 semanas**
- Entrega final del Producto Completo: **cierre del mes 7**

---

## Costo

| Concepto                      | Valor                              |
| ----------------------------- | ---------------------------------- |
| Duración contractual         | **7 meses**                  |
| Costo mensual fijo            | **Q94,000.00**               |
| **Total del proyecto**  | **Q658,000.00**              |
| Margen del proveedor          | 71%                                |
| Forma de pago                 | Mensual, días 1–5 de cada mes    |
| Interés por mora (>10 días) | 1.5% mensual sobre saldo pendiente |

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

| Escenario                                          | Impacto | Protección incluida                                        |
| -------------------------------------------------- | ------- | ----------------------------------------------------------- |
| Velocidad <1.74 tareas/día por 2 semanas seguidas | Alto    | Plan de recuperación en 3 días; proveedor absorbe horas   |
| Entrega fuera del mes 7 (causa proveedor)          | Alto    | 5% de descuento por cada semana de atraso                   |
| API supera 500ms sostenidamente                    | Medio   | Corrección prioritaria sin costo, SLA de 48 horas          |
| Falla de seguridad en módulo de pagos             | Alto    | Suspensión inmediata + corrección 24h + auditoría gratis |

---

## Lo Que Garantizamos

- Tiempo máximo por tarea M: **5 días hábiles**
- Tiempo máximo por tarea L/XL: **10 días hábiles**
- Respuesta de API: ≤500ms en 95% de las peticiones
- Cobertura de pruebas críticas: **70% mínimo** (pagos, auth, QR)
- Al cierre: **código fuente + documentación + credenciales** + 2 sesiones de traspaso

---

## Beneficios para el Inversor

| Beneficio                      | Descripción                                               |
| ------------------------------ | ---------------------------------------------------------- |
| Flujo predecible               | Reporte semanal de avance — total visibilidad del proceso |
| Mayor margen para el proveedor | 71% garantiza equipo estable durante los 7 meses           |
| Sin presión de sprints        | El equipo trabaja a ritmo óptimo sin fechas artificiales  |
| Propiedad total del producto   | Código fuente + documentación entregados al cierre       |

---

## Indicadores Financieros

| Indicador                      | Valor |
| ------------------------------ | ----- |
| ROI                            |       |
| ROA                            |       |
| Meses de Retorno de Inversión |       |

---

*SLA Kanban — Eventura | Marzo 2026 | UVG Facultad de Ingeniería*
