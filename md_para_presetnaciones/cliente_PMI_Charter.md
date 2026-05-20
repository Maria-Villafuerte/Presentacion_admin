# Eventura — Resumen Ejecutivo del Proyecto

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

### Metodología: Scrum (PMI Framework) | Recomendada

---

## Intro ¿Quiénes somos?

Desarrollamos **Eventura**: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada.

---

## ¿Qué recibirá?

| Ciclos          | Semanas | Entregable principal                                       | Descripción                                                                      |
| --------------- | ------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Ciclo 1         | 1–2    | Login, autenticación Google, búsqueda básica de eventos | Sus usuarios ya pueden registrarse y explorar eventos desde el día 14            |
| Ciclo 2         | 3–4    | Búsqueda avanzada + flujo completo de compra y pagos      | Primera transacción real posible — pago seguro, factura FEL y QR en segundos    |
| Ciclo 3         | 5–6    | Creación de eventos, tipos de entrada, carga de imágenes | Sus organizadores publican y configuran eventos sin necesidad de soporte técnico |
| Ciclo 4         | 7–8    | Edición, duplicado y borradores de eventos                | Gestión completa del ciclo de vida de cada evento desde el panel del organizador |
| Ciclo 5         | 9–10   | Reprogramar, cancelar y compartir eventos                  | Operación total: cambios, cancelaciones y difusión en redes sociales            |
| Ciclo 6         | 11–12  | Control de acceso QR + notificaciones push                 | Staff valida entradas sin internet; asistentes reciben alertas automáticas       |
| Ciclo 7         | 13–14  | Reportes, infraestructura DevOps, operación final         | Métricas de ventas disponibles y plataforma en producción, lista para escalar   |
| **TOTAL** |         | **Producto completo**                                | **8 módulos funcionales entregados y validados**                           |

---

## Cronograma

- **7 ciclos de 2 semanas** = **3.5 meses en total**
- Cada ciclo termina con una revisión en vivo donde usted valida el avance
- Entrega final del Producto Completo: **cierre del mes 3.5**

---

## Costo

| Concepto                      | Valor                                |
| ----------------------------- | ------------------------------------ |
| Duración                     | **3.5 meses**                  |
| Costo mensual al cliente      | **Q95,312.50**                 |
| **Total del proyecto**  | **Q333,593.75**                |
| Margen del proveedor          | 36.79%                               |
| Forma de pago                 | Mensual fijo, días 1–5 de cada mes |
| Interés por mora (>10 días) | 1.5% mensual sobre saldo pendiente   |

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

| Escenario                               | Impacto | Protección incluida                                      |
| --------------------------------------- | ------- | --------------------------------------------------------- |
| Cambios en API de pasarela de pagos     | Alto    | Capa de abstracción + pruebas automáticas desde Ciclo 2 |
| Cambios regulatorios FEL/SAT            | Medio   | Monitoreo semanal + buffer en Ciclo 7                     |
| Rotación del equipo de desarrollo      | Alto    | Documentación continua + pair programming                |
| Caída del sistema en picos de tráfico | Medio   | Pruebas de carga desde Ciclo 5 + auto-scaling en nube     |
| Alcance fuera de control (scope creep)  | Alto    | Control de cambios formal; backlog congelado por ciclo    |
| Baja adopción inicial de organizadores | Alto    | Validación con usuarios reales desde Ciclo 3             |

---

## Lo Que Garantizamos

- MVP completo entregado dentro de 3.5 meses
- Costo final con variación máxima del 5% del presupuesto aprobado
- 8 módulos entregados y validados al 100%
- Control de acceso funcional sin internet
- Uptime ≥ 99.5% validado en pruebas de carga

---

## Beneficios para el Inversor

| Beneficio                       | Descripción                                         |
| ------------------------------- | ---------------------------------------------------- |
| Tiempo al mercado más rápido  | MVP listo en 3.5 meses — ingresos desde el mes 4    |
| Visibilidad de avance quincenal | Sprint Reviews cada 2 semanas con entregables reales |
| Riesgo financiero controlado    | Pagos mensuales fijos, sin sorpresas de presupuesto  |
| Propiedad total del producto    | Código fuente + documentación entregados al cierre |

---

## Indicadores Financieros

| Indicador                      | Valor |
| ------------------------------ | ----- |
| ROI                            |       |
| ROA                            |       |
| Meses de Retorno de Inversión |       |

---

*Governed under PMI PM² Framework v3.0 | Proveedor: Equipo Eventura — UVG Facultad de Ingeniería | Mayo 2026*
