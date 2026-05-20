# Brief para Claude Design — Eventura HTML Presentación + Dashboard

## Contexto

El cliente (UVG, proyecto Eventura) necesita un HTML interactivo de presentación comercial para mostrar a un inversor. El archivo funciona como herramienta de ventas que muestra la propuesta de Eventura según la metodología seleccionada, **sin revelar al visitante cuál metodología está activa** (los nombres solo aparecen en el menú dropdown).

---

## Archivos de referencia — ubicación real

Todos los archivos están en `e:\Clases_S9\Admin_de_proyectos\FINAL_EVENTURA\`

```
FINAL_EVENTURA/
├── brief_claude_design.md          ← este archivo
├── Logo.png                        ← logo circular naranja "e" de Eventura
├── Eventrura_Esqueleto.png         ← wireframe del layout
├── Brand Book Eventura.md          ← sistema de diseño completo
└── md_para_presetnaciones/
    ├── cliente_PMI_Charter.md      ← Metodología A: Scrum (PMI Framework) — DATOS REALES
    ├── cliente_Scrum_Costos.md     ← Metodología B: Scrum — DATOS REALES
    ├── cliente_Kanban.md           ← Metodología C: Kanban — DATOS REALES
    ├── cliente_Scrumban.md         ← Metodología D: Scrumban — DATOS REALES
    └── cliente_Resumen_Eventura.md ← Comparativo general (referencia interna, no se muestra)
```

> **Nota:** Ya existe un build parcial anterior en `e:\Clases_S9\Admin_de_proyectos\Eventura\Presetnación\eventura-presentacion\`. Se puede tomar como referencia de estructura de carpetas, pero se construye desde cero en `FINAL_EVENTURA`.

---

## Sistema de Diseño (del Brand Book Eventura.md)

### Paleta de Colores

```css
--ev-orange:      #FF4500   /* primario — CTAs, acentos, logo | 55% del uso */
--ev-orange-lt:   #FF6B35   /* hover, variantes */
--ev-orange-tint: #FFE8DE   /* fondos de tarjetas cálidas */
--ev-purple:      #6B52E8   /* secundario — íconos, gráficas, badges | 25% del uso */
--ev-purple-lt:   #8B7AF0
--ev-purple-tint: #EDEAFF   /* fondos de tarjetas frías */
--ev-cream:       #F5F1EC   /* fondos cálidos de sección | 10% del uso */
--ev-dark:        #1A1745   /* fondos oscuros, texto principal dark | 10% del uso */
--ev-dark-2:      #2D2A5E
--ev-white:       #FFFFFF
--ev-gray:        #6B6B8A   /* texto secundario, etiquetas */
--ev-gray-light:  #E8E4EF   /* separadores, bordes sutiles */
```

**Combinaciones de contraste aprobadas:**
- Texto blanco sobre naranja `#FF4500` ✓
- Texto blanco sobre oscuro `#1A1745` ✓
- Texto blanco sobre morado `#6B52E8` ✓
- Texto oscuro sobre blanco ✓

### Tipografía — Outfit (Google Fonts CDN)

```
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
```

| Nivel   | Tamaño | Peso | Uso                               |
|---------|--------|------|-----------------------------------|
| H1      | 72 px  | 900  | Título principal, portadas        |
| H2      | 52 px  | 700  | Título secundario                 |
| H3      | 40 px  | 600  | Subtítulo de sección              |
| Body    | 34 px  | 400  | Texto de cuerpo                   |
| Small   | 28 px  | 500  | Texto secundario, etiquetas       |
| Caption | 24 px  | 400  | Notas, metadatos (uppercase)      |

### Íconos
Estilo **outline redondeado**, trazo 2 px, sobre fondos tintados (`#FFE8DE` o `#EDEAFF`). Nunca sobre fondos de bajo contraste.

### Plantillas de slide definidas en Brand Book

**Portada (Slide oscuro):**
- Fondo `#1A1745`
- Círculos decorativos naranja y morado al 6–14% de opacidad en segundo plano
- Tira degradada inferior: Naranja `#FF4500` → Morado `#6B52E8`, 6 px de alto
- Título en Outfit Black, blanco, tracking −2 px
- Subtítulo en naranja, uppercase, espaciado amplio

**Diapositiva de contenido (Slide claro):**
- Panel izquierdo oscuro `#1A1745` con logo (ancla visual)
- Fondo crema `#F5F1EC`
- Overline en naranja (uppercase, peso 700)
- Título en Outfit Black, color oscuro
- Tarjetas items en blanco puro con sombra sutil
- Numeración alternada naranja/morado

**Diapositiva de datos (Slide oscuro con cifras):**
- Fondo `#1A1745`
- Cifras clave en Outfit Black, color naranja o morado claro
- Tarjetas semitransparentes: blanco al 6% u opacidad morado al 22%
- Tira degradada Naranja → Morado al pie

> **Libertad creativa:** Claude Design puede usar glassmorphism, gradientes animados, micro-animaciones, lo que haga la presentación impresionante — siempre dentro de la paleta y tipografía del brand book.

---

## Estructura de Archivos del Proyecto

```
eventura-presentacion/
├── index.html
├── assets/
│   ├── css/
│   │   ├── styles.css          ← variables globales, reset, layout base
│   │   ├── topbar.css          ← barra superior, tabs, botón logo
│   │   ├── menu.css            ← dropdown del logo oculto
│   │   ├── presentation.css    ← slides del carrusel
│   │   └── dashboard.css       ← tarjetas, gráficas, KPIs
│   ├── js/
│   │   ├── data.js             ← TODOS los datos de contenido por metodología
│   │   ├── navigation.js       ← lógica de tabs, menú, cambio de metodología
│   │   ├── slides.js           ← carrusel: avance, puntos, teclado
│   │   └── dashboard.js        ← renderizado de gráficas (Chart.js)
│   └── img/
│       └── logo.png            ← copiar desde FINAL_EVENTURA/Logo.png
```

---

## Layout General

```
┌─────────────────────────────────────────────────────┐
│  [Presentación]    [Dashboard]          [logo 40px] │  ← Top bar
├─────────────────────────────────────────────────────┤
│                                                     │
│                CONTENIDO PRINCIPAL                  │  ← 100vh - topbar
│         (slides o dashboard según tab activo)       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Logo dropdown (aparece DEBAJO del logo al hacer clic):**
```
              ┌───────────────┐
              │  ● PMI/Scrum  │  ← punto naranja = metodología activa
              │    Scrum      │
              │    Kanban     │
              │    Scrumban   │
              │    XP         │
              └───────────────┘
```

---

## Comportamiento de Navegación

### Reglas absolutas
1. **Los nombres de metodologías JAMÁS aparecen en el contenido principal** — solo en el menú dropdown
2. **Las metodologías NUNCA se comparan** entre sí — cada una muestra solo sus propios datos
3. El logo (40–50 px) en esquina superior derecha es el ÚNICO toggle del menú
4. Al cargar la página, la metodología activa es **A (PMI/Scrum)**
5. El menú es `display: none` por defecto; aparece al clicar el logo
6. Los dos tabs (Presentación / Dashboard) son independientes del menú

### Flujo de interacción
1. Clic en logo → dropdown aparece con animación suave hacia abajo
2. Selección de opción → menú se cierra, contenido cambia
3. Tab "Presentación" → carrusel de 9 slides
4. Tab "Dashboard" → dashboard con gráficas
5. Cambiar metodología recarga ambas vistas

---

## Vista PRESENTACIÓN — Carrusel de Slides

- **Modo:** Fullscreen (100vw × 100vh)
- **Navegación:** Puntos de paginación inferiores + flechas izquierda/derecha + teclas ← →
- **Transición:** Claude Design elige (recomendado: fade o slide horizontal)
- **Slides:** 9 por metodología

### Estructura de 9 slides (misma para todas las metodologías)

| # | Slide |
|---|-------|
| 1 | Intro / ¿Quiénes somos? |
| 2 | ¿Qué recibirá? |
| 3 | Cronograma |
| 4 | Costo |
| 5 | El Equipo |
| 6 | Riesgos y Protecciones |
| 7 | Lo Que Garantizamos |
| 8 | Beneficios para el Inversor |
| 9 | Indicadores Financieros |

---

## Vista DASHBOARD

- **Modo:** Fullscreen (100vw × 100vh), scrollable si es necesario
- **Visualizaciones:** Chart.js CDN — barras, donuts, progress bars
- **Idioma:** 100% Español
- **Contenido:** Solo datos de la metodología activa

### Secciones del dashboard

1. **KPIs principales** — Costo total, duración, velocidad (cards grandes)
2. **Desglose por ciclos** — Tabla o barras con entregables por período
3. **Distribución del equipo** — Roles con donut o cards
4. **Métricas de calidad** — Progress bars para SLAs y garantías
5. **Indicadores financieros** — ROI, ROA, payback (con placeholders donde no hay datos)

---

## DATOS POR METODOLOGÍA (para `data.js`)

### Metodología A — PMI/Scrum (Predeterminada) `cliente_PMI_Charter.md`

> Mismo equipo y estructura de ciclos que Scrum, presentado bajo el framework PMI. Marcada como "Recomendada" internamente.

```javascript
metodologiaA: {
  slides: {
    slide1: {
      titulo: "¿Quiénes somos?",
      cuerpo: "Desarrollamos Eventura: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada."
    },
    slide2: {
      titulo: "¿Qué recibirá?",
      tabla: [
        { ciclo: "Ciclo 1", semanas: "1–2",  entregable: "Login, autenticación Google, búsqueda básica de eventos", descripcion: "Sus usuarios ya pueden registrarse y explorar eventos desde el día 14" },
        { ciclo: "Ciclo 2", semanas: "3–4",  entregable: "Búsqueda avanzada + flujo completo de compra y pagos",     descripcion: "Primera transacción real posible — pago seguro, factura FEL y QR en segundos" },
        { ciclo: "Ciclo 3", semanas: "5–6",  entregable: "Creación de eventos, tipos de entrada, carga de imágenes", descripcion: "Sus organizadores publican y configuran eventos sin soporte técnico" },
        { ciclo: "Ciclo 4", semanas: "7–8",  entregable: "Edición, duplicado y borradores de eventos",               descripcion: "Gestión completa del ciclo de vida desde el panel del organizador" },
        { ciclo: "Ciclo 5", semanas: "9–10", entregable: "Reprogramar, cancelar y compartir eventos",                descripcion: "Operación total: cambios, cancelaciones y difusión en redes sociales" },
        { ciclo: "Ciclo 6", semanas: "11–12",entregable: "Control de acceso QR + notificaciones push",               descripcion: "Staff valida entradas sin internet; asistentes reciben alertas automáticas" },
        { ciclo: "Ciclo 7", semanas: "13–14",entregable: "Reportes, infraestructura DevOps, operación final",        descripcion: "Métricas de ventas y plataforma en producción, lista para escalar" }
      ]
    },
    slide3: {
      titulo: "Cronograma",
      items: [
        "7 ciclos de 2 semanas = 3.5 meses en total",
        "Cada ciclo termina con una revisión en vivo donde usted valida el avance",
        "Entrega final del Producto Completo: cierre del mes 3.5"
      ]
    },
    slide4: {
      titulo: "Costo",
      tabla: [
        { concepto: "Duración",              valor: "3.5 meses" },
        { concepto: "Costo mensual",         valor: "Q95,312.50" },
        { concepto: "Total del proyecto",    valor: "Q333,593.75" },
        { concepto: "Margen del proveedor",  valor: "36.79%" },
        { concepto: "Forma de pago",         valor: "Mensual fijo, días 1–5 de cada mes" },
        { concepto: "Interés por mora",      valor: "1.5% mensual sobre saldo pendiente (>10 días)" }
      ]
    },
    slide5: {
      titulo: "El Equipo",
      roles: [
        "Product Owner",
        "Diseñador UI/UX (Freelance)",
        "Scrum Master / Coach",
        "Senior Backend Developer",
        "Senior Frontend Developer",
        "Junior FullStack (×2)",
        "Analista QA"
      ]
    },
    slide6: {
      titulo: "Riesgos y Protecciones",
      tabla: [
        { escenario: "Cambios en API de pasarela de pagos",     impacto: "Alto",  proteccion: "Capa de abstracción + pruebas automáticas desde Ciclo 2" },
        { escenario: "Cambios regulatorios FEL/SAT",            impacto: "Medio", proteccion: "Monitoreo semanal + buffer en Ciclo 7" },
        { escenario: "Rotación del equipo de desarrollo",       impacto: "Alto",  proteccion: "Documentación continua + pair programming" },
        { escenario: "Caída del sistema en picos de tráfico",   impacto: "Medio", proteccion: "Pruebas de carga desde Ciclo 5 + auto-scaling en nube" },
        { escenario: "Alcance fuera de control (scope creep)",  impacto: "Alto",  proteccion: "Control de cambios formal; backlog congelado por ciclo" },
        { escenario: "Baja adopción inicial de organizadores",  impacto: "Alto",  proteccion: "Validación con usuarios reales desde Ciclo 3" }
      ]
    },
    slide7: {
      titulo: "Lo Que Garantizamos",
      items: [
        { label: "MVP completo",              valor: "entregado dentro de 3.5 meses" },
        { label: "Variación de costo",        valor: "máximo 5% del presupuesto aprobado" },
        { label: "Módulos entregados",        valor: "8 módulos validados al 100%" },
        { label: "Control de acceso",         valor: "funcional sin internet" },
        { label: "Uptime",                    valor: "≥ 99.5% validado en pruebas de carga" }
      ]
    },
    slide8: {
      titulo: "Beneficios para el Inversor",
      tabla: [
        { beneficio: "Tiempo al mercado más rápido",   descripcion: "MVP listo en 3.5 meses — ingresos desde el mes 4" },
        { beneficio: "Visibilidad quincenal",           descripcion: "Sprint Reviews cada 2 semanas con entregables reales" },
        { beneficio: "Riesgo financiero controlado",    descripcion: "Pagos mensuales fijos, sin sorpresas de presupuesto" },
        { beneficio: "Propiedad total del producto",    descripcion: "Código fuente + documentación entregados al cierre" }
      ]
    },
    slide9: {
      titulo: "Indicadores Financieros",
      indicadores: [
        { nombre: "ROI",                           valor: null },
        { nombre: "ROA",                           valor: null },
        { nombre: "Meses de Retorno de Inversión", valor: null }
      ],
      nota: "Valores a calcular con el cliente"
    }
  },
  dashboard: {
    kpis: [
      { label: "Costo Total",     valor: "Q333,593.75" },
      { label: "Duración",        valor: "3.5 meses" },
      { label: "Ciclos",          valor: "7 ciclos de 2 semanas" },
      { label: "Costo por ciclo", valor: "Q47,656.25" }
    ],
    equipo: 8,
    slas: [
      { label: "Variación de costo",   target: 95, unit: "% ≤ 5% de desviación" },
      { label: "Uptime producción",    target: 99.5, unit: "%" },
      { label: "Módulos entregados",   target: 100, unit: "% (8/8)" }
    ],
    financiero: { roi: null, roa: null, payback: null }
  }
}
```

---

### Metodología B — Scrum `cliente_Scrum_Costos.md`

> Mismos costos que PMI/Scrum pero presentado como Scrum puro. Velocidad promedio: 63 puntos/ciclo.

```javascript
metodologiaB: {
  slides: {
    slide1: {
      titulo: "¿Quiénes somos?",
      cuerpo: "Desarrollamos Eventura: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada."
    },
    slide2: {
      titulo: "¿Qué recibirá?",
      tabla: [
        { ciclo: "Ciclo 1", semanas: "1–2",  entregable: "Login + búsqueda básica de eventos + infraestructura", descripcion: "Sus usuarios ya pueden registrarse y explorar eventos desde el día 14" },
        { ciclo: "Ciclo 2", semanas: "3–4",  entregable: "Flujo completo de compra, pagos y boletos QR",          descripcion: "Primera transacción real posible — pago seguro, factura FEL y QR en segundos" },
        { ciclo: "Ciclo 3", semanas: "5–6",  entregable: "Creación de eventos — CMS del organizador",            descripcion: "Sus organizadores publican y configuran eventos sin soporte técnico" },
        { ciclo: "Ciclo 4", semanas: "7–8",  entregable: "Gestión avanzada de eventos — parte 1",                descripcion: "Gestión completa del ciclo de vida desde el panel del organizador" },
        { ciclo: "Ciclo 5", semanas: "9–10", entregable: "Gestión avanzada de eventos — parte 2",                descripcion: "Operación total: cambios, cancelaciones y difusión en redes sociales" },
        { ciclo: "Ciclo 6", semanas: "11–12",entregable: "Control de acceso QR + notificaciones",                descripcion: "Staff valida entradas sin internet; asistentes reciben alertas automáticas" },
        { ciclo: "Ciclo 7", semanas: "13–14",entregable: "Reportes + Publicación en internet + operación final", descripcion: "Métricas de ventas y plataforma en producción, lista para escalar" }
      ]
    },
    slide3: {
      titulo: "Cronograma",
      items: [
        "7 ciclos de 2 semanas = 3.5 meses en total",
        "Cada ciclo termina con una revisión en vivo donde usted valida el avance",
        "Velocidad promedio: 63 puntos por ciclo",
        "Entrega final del Producto Completo: cierre del mes 3.5"
      ]
    },
    slide4: {
      titulo: "Costo",
      tabla: [
        { concepto: "Costo por ciclo (2 semanas)", valor: "Q47,656.25" },
        { concepto: "Costo mensual",               valor: "Q95,312.50" },
        { concepto: "Total del proyecto",          valor: "Q333,593.75" },
        { concepto: "Margen del proveedor",        valor: "36.79%" },
        { concepto: "Forma de pago",               valor: "Mensual fijo, días 1–5 de cada mes" },
        { concepto: "Interés por mora",            valor: "1.5% mensual sobre saldo pendiente (>10 días)" }
      ]
    },
    slide5: {
      titulo: "El Equipo",
      roles: [
        "Product Owner", "Diseñador UI/UX (Freelance)", "Scrum Master / Coach",
        "Senior Backend Developer", "Senior Frontend Developer",
        "Junior FullStack (×2)", "Analista QA"
      ]
    },
    slide6: {
      titulo: "Riesgos y Protecciones",
      tabla: [
        { escenario: "Cambios en pasarela de pagos",  impacto: "Alto",  proteccion: "Capa de abstracción + pruebas automáticas desde Ciclo 2" },
        { escenario: "Cambios regulatorios FEL/SAT",  impacto: "Medio", proteccion: "Monitoreo semanal + buffer en Ciclo 7" },
        { escenario: "Rotación del equipo",           impacto: "Alto",  proteccion: "Documentación continua + pair programming" },
        { escenario: "Picos de tráfico (sold-outs)",  impacto: "Medio", proteccion: "Pruebas de carga Ciclo 5 + auto-scaling en nube" }
      ]
    },
    slide7: {
      titulo: "Lo Que Garantizamos",
      items: [
        { label: "Variación máxima de costo",  valor: "5% sobre el presupuesto aprobado" },
        { label: "Mora >30 días",              valor: "permite suspensión del servicio" },
        { label: "Al cierre",                  valor: "código fuente + documentación + credenciales + 2 sesiones de traspaso" },
        { label: "Uptime",                     valor: "≥ 99.5% validado antes de la entrega final" }
      ]
    },
    slide8: {
      titulo: "Beneficios para el Inversor",
      tabla: [
        { beneficio: "Costo transparente por ciclo", descripcion: "Sabe exactamente qué se entrega con cada pago quincenal" },
        { beneficio: "Menor riesgo que Kanban",      descripcion: "3.5 meses vs 7 meses — la mitad del tiempo de exposición" },
        { beneficio: "Margen sostenible",            descripcion: "36.79% garantiza un equipo estable durante todo el ciclo" },
        { beneficio: "Propiedad total del producto", descripcion: "Código fuente + documentación entregados al cierre" }
      ]
    },
    slide9: {
      titulo: "Indicadores Financieros",
      indicadores: [
        { nombre: "ROI", valor: null }, { nombre: "ROA", valor: null },
        { nombre: "Meses de Retorno de Inversión", valor: null }
      ],
      nota: "Valores a calcular con el cliente"
    }
  },
  dashboard: {
    kpis: [
      { label: "Costo Total",            valor: "Q333,593.75" },
      { label: "Duración",               valor: "3.5 meses" },
      { label: "Velocidad promedio",     valor: "63 pts/ciclo" },
      { label: "Costo por ciclo",        valor: "Q47,656.25" }
    ],
    equipo: 8,
    slas: [
      { label: "Variación de costo",   target: 95, unit: "% dentro del presupuesto" },
      { label: "Uptime producción",    target: 99.5, unit: "%" },
      { label: "Módulos entregados",   target: 100, unit: "% (8/8)" }
    ],
    financiero: { roi: null, roa: null, payback: null }
  }
}
```

---

### Metodología C — Kanban `cliente_Kanban.md`

> Flujo continuo de 7 meses, 214 tareas totales. Mayor margen (71%), mayor costo total.

```javascript
metodologiaC: {
  slides: {
    slide1: {
      titulo: "¿Quiénes somos?",
      cuerpo: "Desarrollamos Eventura: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada."
    },
    slide2: {
      titulo: "¿Qué recibirá?",
      tabla: [
        { ciclo: "Ciclo 1", modulo: "EP01 — Identidad y Seguridad",     entregable: "Login, Google Auth, roles y permisos",             descripcion: "Base segura: cada usuario accede solo a lo que le corresponde" },
        { ciclo: "Ciclo 2", modulo: "EP02 — Motor de Descubrimiento",   entregable: "Búsqueda geolocalizada, filtros, eventos destacados",descripcion: "Los eventos aparecen según ubicación — más visibilidad para sus organizadores" },
        { ciclo: "Ciclo 3", modulo: "EP03 — E-commerce Transaccional",  entregable: "Carrito, pagos, FEL, boletos QR únicos",            descripcion: "Primera transacción real posible — pago seguro con factura FEL incluida" },
        { ciclo: "Ciclo 4", modulo: "EP04 — CMS del Organizador",       entregable: "Creación/edición de eventos, aforos, borradores",   descripcion: "Sus organizadores publican y gestionan eventos de forma completamente autónoma" },
        { ciclo: "Ciclo 5", modulo: "EP05 — Control de Acceso Offline", entregable: "Escáner QR, modo sin internet, sincronización",     descripcion: "Validación de entradas en puerta aunque falle el internet del recinto" },
        { ciclo: "Ciclo 6", modulo: "EP06 — Inteligencia de Negocio",   entregable: "Dashboards, reportes Excel/PDF",                   descripcion: "Decisiones basadas en datos — ventas, asistencia y tendencias en tiempo real" },
        { ciclo: "Ciclo 6", modulo: "EP07 — Notificaciones",            entregable: "Recordatorios 24h, alertas push, emergencias",     descripcion: "Comunicación automática con asistentes antes, durante y después del evento" },
        { ciclo: "Ciclo 7", modulo: "EP08 — Infraestructura / DevOps",  entregable: "Cloud, auto-scaling, CI/CD, backups",              descripcion: "La plataforma soporta sold-outs masivos sin caerse" }
      ]
    },
    slide3: {
      titulo: "Cronograma",
      items: [
        "7 meses de flujo continuo — sin cortes ni plazos intermedios",
        "214 tareas totales | Velocidad sostenida: 2.43 tareas/día",
        "Reporte de avance cada viernes",
        "Reunión de revisión cada 2 semanas",
        "Entrega final del Producto Completo: cierre del mes 7"
      ]
    },
    slide4: {
      titulo: "Costo",
      tabla: [
        { concepto: "Duración contractual", valor: "7 meses" },
        { concepto: "Costo mensual fijo",   valor: "Q94,000.00" },
        { concepto: "Total del proyecto",   valor: "Q658,000.00" },
        { concepto: "Margen del proveedor", valor: "71%" },
        { concepto: "Forma de pago",        valor: "Mensual, días 1–5 de cada mes" },
        { concepto: "Interés por mora",     valor: "1.5% mensual sobre saldo pendiente (>10 días)" }
      ]
    },
    slide5: {
      titulo: "El Equipo",
      roles: [
        "Product Owner", "Diseñador UI/UX (Freelance)", "Scrum Master / Coach",
        "Senior Backend Developer", "Senior Frontend Developer",
        "Junior FullStack (×2)", "Analista QA"
      ]
    },
    slide6: {
      titulo: "Riesgos y Protecciones",
      tabla: [
        { escenario: "Velocidad <1.74 tareas/día por 2 semanas seguidas", impacto: "Alto",  proteccion: "Plan de recuperación en 3 días; proveedor absorbe horas" },
        { escenario: "Entrega fuera del mes 7 (causa proveedor)",         impacto: "Alto",  proteccion: "5% de descuento por cada semana de atraso" },
        { escenario: "API supera 500ms sostenidamente",                   impacto: "Medio", proteccion: "Corrección prioritaria sin costo, SLA de 48 horas" },
        { escenario: "Falla de seguridad en módulo de pagos",             impacto: "Alto",  proteccion: "Suspensión inmediata + corrección 24h + auditoría gratis" }
      ]
    },
    slide7: {
      titulo: "Lo Que Garantizamos",
      items: [
        { label: "Tiempo máximo por tarea M",   valor: "5 días hábiles" },
        { label: "Tiempo máximo por tarea L/XL", valor: "10 días hábiles" },
        { label: "Respuesta de API",             valor: "≤500ms en 95% de las peticiones" },
        { label: "Cobertura de pruebas críticas",valor: "70% mínimo (pagos, auth, QR)" },
        { label: "Al cierre",                   valor: "código fuente + documentación + credenciales + 2 sesiones de traspaso" }
      ]
    },
    slide8: {
      titulo: "Beneficios para el Inversor",
      tabla: [
        { beneficio: "Flujo predecible",               descripcion: "Reporte semanal de avance — total visibilidad del proceso" },
        { beneficio: "Mayor margen para el proveedor", descripcion: "71% garantiza equipo estable durante los 7 meses" },
        { beneficio: "Sin presión de sprints",         descripcion: "El equipo trabaja a ritmo óptimo sin fechas artificiales" },
        { beneficio: "Propiedad total del producto",   descripcion: "Código fuente + documentación entregados al cierre" }
      ]
    },
    slide9: {
      titulo: "Indicadores Financieros",
      indicadores: [
        { nombre: "ROI", valor: null }, { nombre: "ROA", valor: null },
        { nombre: "Meses de Retorno de Inversión", valor: null }
      ],
      nota: "Valores a calcular con el cliente"
    }
  },
  dashboard: {
    kpis: [
      { label: "Costo Total",           valor: "Q658,000.00" },
      { label: "Duración",              valor: "7 meses" },
      { label: "Velocidad sostenida",   valor: "2.43 tareas/día" },
      { label: "Total de tareas",       valor: "214 tareas" }
    ],
    equipo: 8,
    slas: [
      { label: "Respuesta API",           target: 95, unit: "% ≤500ms" },
      { label: "Cobertura pruebas",       target: 70, unit: "%" },
      { label: "Tiempo tarea M",          target: 100, unit: "% ≤5 días hábiles" }
    ],
    financiero: { roi: null, roa: null, payback: null }
  }
}
```

---

### Metodología D — Scrumban `cliente_Scrumban.md`

> Híbrido Scrum + Kanban. 7 ciclos de 2 semanas. La opción de menor costo (Q228,667).

```javascript
metodologiaD: {
  slides: {
    slide1: {
      titulo: "¿Quiénes somos?",
      cuerpo: "Desarrollamos Eventura: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada."
    },
    slide2: {
      titulo: "¿Qué recibirá?",
      tabla: [
        { ciclo: "Ciclo 1", semanas: "1–2",  entregable: "Login, autenticación Google, búsqueda básica de eventos",descripcion: "Sus usuarios ya pueden registrarse y explorar eventos desde el día 14" },
        { ciclo: "Ciclo 2", semanas: "3–4",  entregable: "Búsqueda avanzada, compra completa, pagos y boletos QR", descripcion: "Primera transacción real posible — pago seguro, factura FEL y QR en segundos" },
        { ciclo: "Ciclo 3", semanas: "5–6",  entregable: "Creación de eventos, tipos de entradas, imágenes",       descripcion: "Sus organizadores publican y configuran eventos sin soporte técnico" },
        { ciclo: "Ciclo 4", semanas: "7–8",  entregable: "Edición, duplicado y borradores de eventos",             descripcion: "Gestión completa del ciclo de vida desde el panel del organizador" },
        { ciclo: "Ciclo 5", semanas: "9–10", entregable: "Reprogramar, cancelar y compartir eventos",              descripcion: "Operación total: cambios, cancelaciones y difusión en redes sociales" },
        { ciclo: "Ciclo 6", semanas: "11–12",entregable: "Calificaciones, control de acceso QR offline",           descripcion: "Staff valida entradas sin internet; asistentes califican el evento en tiempo real" },
        { ciclo: "Ciclo 7", semanas: "13–14",entregable: "Notificaciones, reportes, infraestructura, DevOps",      descripcion: "Métricas de ventas y plataforma en producción, lista para escalar" }
      ]
    },
    slide3: {
      titulo: "Cronograma",
      items: [
        "7 ciclos de 2 semanas = 3.5 meses en total",
        "Cada ciclo combina planificación estructurada (Scrum) con flujo continuo (Kanban)",
        "Velocidad objetivo: 44 puntos por ciclo (mínimo garantizado: 31 pts)",
        "Entrega final del Producto Completo: cierre del mes 3.5"
      ]
    },
    slide4: {
      titulo: "Costo",
      tabla: [
        { concepto: "Duración contractual", valor: "3.5 meses (7 ciclos)" },
        { concepto: "Costo mensual fijo",   valor: "Q65,333.00" },
        { concepto: "Total del proyecto",   valor: "Q228,667.00" },
        { concepto: "Margen del proveedor", valor: "31%" },
        { concepto: "Forma de pago",        valor: "4 pagos (3 completos + 1 proporcional)" },
        { concepto: "Interés por mora",     valor: "1.5% mensual sobre saldo pendiente (>10 días)" }
      ]
    },
    slide5: {
      titulo: "El Equipo",
      roles: [
        "Product Owner", "Diseñador UI/UX (Freelance)", "Scrum Master / Coach",
        "Senior Backend Developer", "Senior Frontend Developer",
        "Junior FullStack (×2)", "Analista QA"
      ]
    },
    slide6: {
      titulo: "Riesgos y Protecciones",
      tabla: [
        { escenario: "Velocidad <31 pts/ciclo por 2 ciclos consecutivos", impacto: "Alto",  proteccion: "Plan de recuperación en 3 días; proveedor absorbe horas" },
        { escenario: "Entrega fuera del Ciclo 7 (causa proveedor)",       impacto: "Alto",  proteccion: "5% de descuento por cada semana adicional" },
        { escenario: "Ciclo Review cancelado por el proveedor",           impacto: "Medio", proteccion: "2% de descuento sobre la facturación del ciclo" },
        { escenario: "Falla de seguridad en módulo de pagos",             impacto: "Alto",  proteccion: "Suspensión inmediata + corrección 24h + auditoría gratis" }
      ],
      aviso: "A partir de la 3ra interrupción del cliente (cambios urgentes, reuniones no planificadas, cancelación de revisiones), se cobrará Q5,000.00 por cada interrupción adicional."
    },
    slide7: {
      titulo: "Lo Que Garantizamos",
      items: [
        { label: "Respuesta de API",              valor: "≤500ms en 95% de las peticiones" },
        { label: "Cobertura de pruebas críticas", valor: "70% mínimo (pagos, auth, QR)" },
        { label: "Disponibilidad staging",        valor: "99% en horario laboral" },
        { label: "Al cierre",                     valor: "código fuente + documentación + credenciales + 2 sesiones de traspaso" }
      ]
    },
    slide8: {
      titulo: "Beneficios para el Inversor",
      tabla: [
        { beneficio: "Menor inversión total",   descripcion: "Q228,667 vs Q333,594 (Scrum) — ahorro de Q104,927" },
        { beneficio: "Mismo tiempo al mercado", descripcion: "3.5 meses idéntico a Scrum, con mayor flexibilidad de flujo" },
        { beneficio: "Revisiones quincenales",  descripcion: "Validación de avance cada 2 semanas sin estructura rígida" },
        { beneficio: "Propiedad total del producto", descripcion: "Código fuente + documentación entregados al cierre" }
      ]
    },
    slide9: {
      titulo: "Indicadores Financieros",
      indicadores: [
        { nombre: "ROI", valor: null }, { nombre: "ROA", valor: null },
        { nombre: "Meses de Retorno de Inversión", valor: null }
      ],
      nota: "Valores a calcular con el cliente"
    }
  },
  dashboard: {
    kpis: [
      { label: "Costo Total",          valor: "Q228,667.00" },
      { label: "Duración",             valor: "3.5 meses" },
      { label: "Velocidad objetivo",   valor: "44 pts/ciclo" },
      { label: "Mínimo garantizado",   valor: "31 pts/ciclo" }
    ],
    equipo: 8,
    slas: [
      { label: "Respuesta API",         target: 95, unit: "% ≤500ms" },
      { label: "Cobertura pruebas",     target: 70, unit: "%" },
      { label: "Disponibilidad staging",target: 99, unit: "%" }
    ],
    financiero: { roi: null, roa: null, payback: null }
  }
}
```

---

### Metodología E — XP (Extreme Programming)

> No existe archivo de datos aún. Mostrar estructura vacía con estado "loading" o "próximamente".

```javascript
metodologiaE: {
  slides: "blank", // 9 slides en blanco — estructura visible, contenido vacío
  dashboard: "blank"
}
```

---

## Reglas de Implementación Críticas

1. **Nunca** mostrar el nombre de la metodología activa en el contenido (solo en el menú dropdown)
2. **Nunca** mostrar comparativas entre metodologías en el contenido principal
3. El menú dropdown se abre al clicar el logo y se cierra al clicar fuera o al seleccionar
4. La metodología activa tiene indicador visual discreto en el menú — solo un punto o borde de color (sin texto)
5. El logo button tiene efecto hover sutil
6. Todo el texto en **español** (incluyendo labels del dashboard)
7. Usar `Chart.js` desde CDN para visualizaciones
8. El HTML funciona abriendo `index.html` directamente en el navegador — **sin servidor**
9. El logo se referencia desde `assets/img/logo.png`

---

## Verificación / Testing

Al finalizar, verificar:

- [ ] Abrir `index.html` en Chrome/Firefox — sin errores de consola
- [ ] Clic en logo → dropdown con 5 opciones
- [ ] Seleccionar cada opción → contenido cambia, nombre NO aparece en contenido
- [ ] Tab "Presentación" → carrusel de 9 slides funciona con flechas y puntos
- [ ] Tab "Dashboard" → gráficas renderizan correctamente
- [ ] Metodología A (PMI/Scrum) → costo Q333,593.75 aparece correctamente
- [ ] Metodología B (Scrum) → costo Q333,593.75 y velocidad 63 pts/ciclo
- [ ] Metodología C (Kanban) → costo Q658,000 y duración 7 meses
- [ ] Metodología D (Scrumban) → costo Q228,667 y mínimo garantizado 31 pts/ciclo
- [ ] Metodología E (XP) → slides y dashboard en blanco sin errores
- [ ] Pantalla completa: layout no se rompe a 1920×1080
- [ ] Clic fuera del menú → menú se cierra
