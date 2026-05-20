# Eventura — Propuesta Scrumban

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

### Metodología: Scrumban (Híbrido Scrum + Kanban) | 7 Ciclos | 3.5 meses

---

## Intro ¿Quiénes somos?

Desarrollamos **Eventura**: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada.

---

## ¿Qué recibirá?

| Ciclos          | Semanas | Entregable principal                                       | Descripción                                                                      |
| --------------- | ------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Ciclo 1         | 1–2    | Login, autenticación Google, búsqueda básica de eventos | Sus usuarios ya pueden registrarse y explorar eventos desde el día 14            |
| Ciclo 2         | 3–4    | Búsqueda avanzada, compra completa, pagos y boletos QR    | Primera transacción real posible — pago seguro, factura FEL y QR en segundos    |
| Ciclo 3         | 5–6    | Creación de eventos, tipos de entradas, imágenes         | Sus organizadores publican y configuran eventos sin necesidad de soporte técnico |
| Ciclo 4         | 7–8    | Edición, duplicado y borradores de eventos                | Gestión completa del ciclo de vida de cada evento desde el panel del organizador |
| Ciclo 5         | 9–10   | Reprogramar, cancelar y compartir eventos                  | Operación total: cambios, cancelaciones y difusión en redes sociales            |
| Ciclo 6         | 11–12  | Calificaciones, control de acceso QR offline               | Staff valida entradas sin internet; asistentes califican el evento en tiempo real |
| Ciclo 7         | 13–14  | Notificaciones, reportes, infraestructura, DevOps          | Métricas de ventas disponibles y plataforma en producción, lista para escalar   |
| **TOTAL** |         | **Producto completo**                                | **8 módulos funcionales entregados y validados**                           |

---

## Cronograma

- **7 ciclos de 2 semanas** = **3.5 meses en total**
- Cada ciclo combina planificación estructurada (Scrum) con flujo continuo (Kanban)
- Velocidad objetivo: **44 puntos por ciclo** (mínimo garantizado: 31 pts)
- Entrega final del Producto Completo: **cierre del mes 3.5**

---

## Costo

| Concepto                      | Valor                                  |
| ----------------------------- | -------------------------------------- |
| Duración contractual         | **3.5 meses (7 ciclos)**         |
| Costo mensual fijo            | **Q65,333.00**                   |
| **Total del proyecto**  | **Q228,667.00**                  |
| Margen del proveedor          | 31%                                    |
| Forma de pago                 | 4 pagos (3 completos + 1 proporcional) |
| Interés por mora (>10 días) | 1.5% mensual sobre saldo pendiente     |

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

| Escenario                                         | Impacto | Protección incluida                                        |
| ------------------------------------------------- | ------- | ----------------------------------------------------------- |
| Velocidad <31 pts/ciclo por 2 ciclos consecutivos | Alto    | Plan de recuperación en 3 días; proveedor absorbe horas   |
| Entrega fuera del Ciclo 7 (causa proveedor)       | Alto    | 5% de descuento por cada semana adicional                   |
| Ciclo Review cancelado por el proveedor           | Medio   | 2% de descuento sobre la facturación del ciclo             |
| Falla de seguridad en módulo de pagos            | Alto    | Suspensión inmediata + corrección 24h + auditoría gratis |

> **Aviso:** A partir de la **3ra interrupción** del cliente (cambios urgentes, reuniones no planificadas, cancelación de revisiones), se cobrará **Q5,000.00 por cada interrupción adicional**.

---

## Lo Que Garantizamos

- Respuesta de API: ≤500ms en 95% de las peticiones
- Cobertura de pruebas críticas: **70% mínimo** (pagos, auth, QR)
- Disponibilidad staging: **99%** en horario laboral
- Al cierre: **código fuente + documentación + credenciales** + 2 sesiones de traspaso

---

## Beneficios para el Inversor

| Beneficio                    | Descripción                                                 |
| ---------------------------- | ------------------------------------------------------------ |
| Menor inversión total       | Q228,667 vs Q333,594 (Scrum) — ahorro de Q104,927           |
| Mismo tiempo al mercado      | 3.5 meses idéntico a Scrum, con mayor flexibilidad de flujo |
| Revisiones quincenales       | Validación de avance cada 2 semanas sin estructura rígida  |
| Propiedad total del producto | Código fuente + documentación entregados al cierre         |

---

## Indicadores Financieros

| Indicador                      | Valor |
| ------------------------------ | ----- |
| ROI                            |       |
| ROA                            |       |
| Meses de Retorno de Inversión |       |

---

*SLA Scrumban — Eventura | Marzo 2026 | UVG Facultad de Ingeniería*
