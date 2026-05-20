/* ══════════════════════════════════════════════════════════════
   EVENTURA — data.js
   Datos de todas las metodologías. La metodología activa nunca
   se muestra en el contenido principal, solo en el menú.
══════════════════════════════════════════════════════════════ */

const METODOLOGIAS = {

  /* ────────────────────────────────────────────────
     A — PMI / Scrum (Predeterminada / Recomendada)
  ──────────────────────────────────────────────── */
  A: {
    meta: { duracion: '3.5', ciclos: 7, tipo: 'sprint' },
    slides: {
      s1: {
        titulo: '¿Quiénes somos?',
        cuerpo: 'Desarrollamos Eventura: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada.'
      },
      s2: {
        titulo: '¿Qué recibirá?',
        tabla: [
          { ciclo: 'Ciclo 1', semanas: '1–2',  entregable: 'Login, autenticación Google, búsqueda básica de eventos' },
          { ciclo: 'Ciclo 2', semanas: '3–4',  entregable: 'Búsqueda avanzada + flujo completo de compra y pagos' },
          { ciclo: 'Ciclo 3', semanas: '5–6',  entregable: 'Creación de eventos, tipos de entrada, carga de imágenes' },
          { ciclo: 'Ciclo 4', semanas: '7–8',  entregable: 'Edición, duplicado y borradores de eventos' },
          { ciclo: 'Ciclo 5', semanas: '9–10', entregable: 'Reprogramar, cancelar y compartir eventos' },
          { ciclo: 'Ciclo 6', semanas: '11–12',entregable: 'Control de acceso QR + notificaciones push' },
          { ciclo: 'Ciclo 7', semanas: '13–14',entregable: 'Reportes, infraestructura DevOps, operación final' }
        ]
      },
      s3: {
        titulo: 'Cronograma',
        items: [
          '7 ciclos de 2 semanas = 3.5 meses en total',
          'Revisión en vivo al cierre de cada ciclo',
          'Entrega final: cierre del mes 3.5'
        ]
      },
      s4: {
        titulo: 'Costo',
        tabla: [
          { concepto: 'Duración',             valor: '3.5 meses' },
          { concepto: 'Costo mensual',        valor: 'Q95,312.50' },
          { concepto: 'Total del proyecto',   valor: 'Q333,593.75' },
          { concepto: 'Margen del proveedor', valor: '36.79%' },
          { concepto: 'Forma de pago',        valor: 'Mensual fijo, días 1–5' },
          { concepto: 'Interés por mora',     valor: '1.5% mensual (>10 días)' }
        ],
        total: 'Q333,593.75',
        mensual: 'Q95,312.50',
        margen: '36.79%',
        duracion: '3.5 meses',
        pago: 'Mensual fijo, días 1–5 de cada mes · Mora: 1.5% mensual sobre saldo pendiente (>10 días)'
      },
      s5: {
        titulo: 'El Equipo',
        roles: [
          { rol: 'Product Owner',              tipo: 'Gestión' },
          { rol: 'Diseñador UI/UX',            tipo: 'Freelance' },
          { rol: 'Scrum Master / Coach',       tipo: 'Liderazgo' },
          { rol: 'Senior Backend Developer',   tipo: 'Desarrollo' },
          { rol: 'Senior Frontend Developer',  tipo: 'Desarrollo' },
          { rol: 'Junior FullStack',           tipo: 'Desarrollo' },
          { rol: 'Junior FullStack',           tipo: 'Desarrollo' },
          { rol: 'Analista QA',                tipo: 'Calidad' }
        ]
      },
      s6: {
        titulo: 'Riesgos y Protecciones',
        tabla: [
          { escenario: 'Cambios en API de pasarela de pagos',    impacto: 'Alto',  proteccion: 'Capa de abstracción + pruebas automáticas desde Ciclo 2' },
          { escenario: 'Cambios regulatorios FEL/SAT',           impacto: 'Medio', proteccion: 'Monitoreo semanal + buffer de contingencia en Ciclo 7' },
          { escenario: 'Rotación del equipo de desarrollo',      impacto: 'Alto',  proteccion: 'Documentación continua + pair programming en cada módulo' },
          { escenario: 'Caída del sistema en picos de tráfico',  impacto: 'Medio', proteccion: 'Pruebas de carga desde Ciclo 5 + auto-scaling en nube' },
          { escenario: 'Alcance fuera de control (scope creep)', impacto: 'Alto',  proteccion: 'Control de cambios formal; backlog congelado por ciclo' },
          { escenario: 'Baja adopción inicial de organizadores', impacto: 'Alto',  proteccion: 'Validación con usuarios reales desde Ciclo 3' }
        ]
      },
      s7: {
        titulo: 'Lo Que Garantizamos',
        items: [
          { label: 'MVP completo',           valor: 'entregado dentro de 3.5 meses' },
          { label: 'Variación de costo',     valor: 'máximo 5% del presupuesto aprobado' },
          { label: 'Módulos entregados',     valor: '8 módulos validados al 100%' },
          { label: 'Control de acceso',      valor: 'funcional sin conexión a internet' },
          { label: 'Uptime en producción',   valor: '≥ 99.5% validado en pruebas de carga' }
        ]
      },
      s8: {
        titulo: 'Beneficios para el Inversor',
        tabla: [
          { beneficio: 'Tiempo al mercado más rápido',  descripcion: 'MVP listo en 3.5 meses — ingresos desde el mes 4' },
          { beneficio: 'Visibilidad quincenal',          descripcion: 'Sprint Reviews cada 2 semanas con entregables reales' },
          { beneficio: 'Riesgo financiero controlado',   descripcion: 'Pagos mensuales fijos, sin sorpresas de presupuesto' },
          { beneficio: 'Propiedad total del producto',   descripcion: 'Código fuente + documentación entregados al cierre' }
        ]
      },
      s9: {
        titulo: 'Indicadores Financieros',
        nota: 'Valores a calcular con el cliente'
      }
    },
    dashboard: {
      kpis: [
        { label: 'Costo Total',      valor: 'Q333,593.75', acento: 'orange' },
        { label: 'Duración',         valor: '3.5 meses',   acento: 'purple' },
        { label: 'Ciclos',           valor: '7 × 2 sem',   acento: 'dark'   },
        { label: 'Costo por ciclo',  valor: 'Q47,656.25',  acento: 'orange' },
        { label: 'Forma de pago',    valor: 'Mensual fijo', acento: 'dark', sub: 'Días 1–5 de cada mes' }
      ],
      ciclosCosto: 47656.25,
      totalCiclos: 7,
      labelCiclos: ['C1','C2','C3','C4','C5','C6','C7'],
      equipo: [
        { rol: 'Gestión (PO + SM)',   cant: 2, color: '#FF4500' },
        { rol: 'Diseño (UI/UX)',      cant: 1, color: '#FF6B35' },
        { rol: 'Backend Senior',      cant: 1, color: '#6B52E8' },
        { rol: 'Frontend Senior',     cant: 1, color: '#8B7AF0' },
        { rol: 'Junior FullStack',    cant: 2, color: '#A094F4' },
        { rol: 'Calidad (QA)',        cant: 1, color: '#6B6B8A' }
      ],
      slas: [
        { label: 'Dentro del presupuesto (±5%)', target: 95,   unit: '%',   color: 'orange' },
        { label: 'Uptime en producción',          target: 99.5, unit: '%',   color: 'orange' },
        { label: 'Módulos entregados',            target: 100,  unit: '% (8/8)', color: 'purple' }
      ],
      ciclos: [
        { id: 'C1', semanas: 'S1–2',   nombre: 'Auth & búsqueda básica',           color: '#378ADD' },
        { id: 'C2', semanas: 'S3–4',   nombre: 'Pagos, boletos QR & FEL',          color: '#378ADD' },
        { id: 'C3', semanas: 'S5–6',   nombre: 'Creación de eventos',              color: '#1D9E75' },
        { id: 'C4', semanas: 'S7–8',   nombre: 'Edición & borradores',             color: '#1D9E75' },
        { id: 'C5', semanas: 'S9–10',  nombre: 'Operación completa',               color: '#7F77DD' },
        { id: 'C6', semanas: 'S11–12', nombre: 'QR offline & calificaciones',      color: '#7F77DD' },
        { id: 'C7', semanas: 'S13–14', nombre: 'Notificaciones, reportes, DevOps', color: '#BA7517' }
      ]
    }
  },

  /* ────────────────────────────────────────────────
     B — Scrum
  ──────────────────────────────────────────────── */
  B: {
    meta: { duracion: '3.5', ciclos: 7, tipo: 'sprint' },
    slides: {
      s1: {
        titulo: '¿Quiénes somos?',
        cuerpo: 'Desarrollamos Eventura: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada.'
      },
      s2: {
        titulo: '¿Qué recibirá?',
        tabla: [
          { ciclo: 'Ciclo 1', semanas: '1–2',  entregable: 'Login + búsqueda básica de eventos + infraestructura' },
          { ciclo: 'Ciclo 2', semanas: '3–4',  entregable: 'Flujo completo de compra, pagos y boletos QR' },
          { ciclo: 'Ciclo 3', semanas: '5–6',  entregable: 'Creación de eventos — CMS del organizador' },
          { ciclo: 'Ciclo 4', semanas: '7–8',  entregable: 'Gestión avanzada de eventos — parte 1' },
          { ciclo: 'Ciclo 5', semanas: '9–10', entregable: 'Gestión avanzada de eventos — parte 2' },
          { ciclo: 'Ciclo 6', semanas: '11–12',entregable: 'Control de acceso QR + notificaciones' },
          { ciclo: 'Ciclo 7', semanas: '13–14',entregable: 'Reportes + publicación en internet + operación final' }
        ]
      },
      s3: {
        titulo: 'Cronograma',
        items: [
          '7 ciclos de 2 semanas = 3.5 meses en total',
          'Velocidad promedio: 63 puntos por ciclo',
          'Revisión en vivo al cierre de cada ciclo',
          'Entrega final: cierre del mes 3.5'
        ]
      },
      s4: {
        titulo: 'Costo',
        total: 'Q333,593.75',
        mensual: 'Q95,312.50',
        margen: '36.79%',
        duracion: '3.5 meses',
        pago: 'Mensual fijo, días 1–5 de cada mes · Mora: 1.5% mensual sobre saldo pendiente (>10 días)'
      },
      s5: {
        titulo: 'El Equipo',
        roles: [
          { rol: 'Product Owner',              tipo: 'Gestión' },
          { rol: 'Diseñador UI/UX',            tipo: 'Freelance' },
          { rol: 'Scrum Master / Coach',       tipo: 'Liderazgo' },
          { rol: 'Senior Backend Developer',   tipo: 'Desarrollo' },
          { rol: 'Senior Frontend Developer',  tipo: 'Desarrollo' },
          { rol: 'Junior FullStack',           tipo: 'Desarrollo' },
          { rol: 'Junior FullStack',           tipo: 'Desarrollo' },
          { rol: 'Analista QA',                tipo: 'Calidad' }
        ]
      },
      s6: {
        titulo: 'Riesgos y Protecciones',
        tabla: [
          { escenario: 'Cambios en pasarela de pagos',  impacto: 'Alto',  proteccion: 'Capa de abstracción + pruebas automáticas desde Ciclo 2' },
          { escenario: 'Cambios regulatorios FEL/SAT',  impacto: 'Medio', proteccion: 'Monitoreo semanal + buffer en Ciclo 7' },
          { escenario: 'Rotación del equipo',           impacto: 'Alto',  proteccion: 'Documentación continua + pair programming' },
          { escenario: 'Picos de tráfico (sold-outs)',  impacto: 'Medio', proteccion: 'Pruebas de carga Ciclo 5 + auto-scaling en nube' }
        ]
      },
      s7: {
        titulo: 'Lo Que Garantizamos',
        items: [
          { label: 'Variación máxima de costo',  valor: '5% sobre el presupuesto aprobado' },
          { label: 'Mora >30 días',              valor: 'permite suspensión del servicio' },
          { label: 'Al cierre del proyecto',     valor: 'código fuente + documentación + credenciales + 2 sesiones de traspaso' },
          { label: 'Uptime en producción',       valor: '≥ 99.5% validado antes de la entrega final' }
        ]
      },
      s8: {
        titulo: 'Beneficios para el Inversor',
        tabla: [
          { beneficio: 'Costo transparente por ciclo',  descripcion: 'Sabe exactamente qué se entrega con cada pago quincenal' },
          { beneficio: 'Menor riesgo de exposición',    descripcion: '3.5 meses — la mitad del tiempo de ciclos más largos' },
          { beneficio: 'Margen sostenible',             descripcion: '36.79% garantiza un equipo estable durante todo el proyecto' },
          { beneficio: 'Propiedad total del producto',  descripcion: 'Código fuente + documentación entregados al cierre' }
        ]
      },
      s9: { titulo: 'Indicadores Financieros', nota: 'Valores a calcular con el cliente' }
    },
    dashboard: {
      kpis: [
        { label: 'Costo Total',           valor: 'Q333,593.75', acento: 'orange' },
        { label: 'Duración',              valor: '3.5 meses',   acento: 'purple' },
        { label: 'Velocidad promedio',    valor: '63 pts/ciclo', acento: 'dark'  },
        { label: 'Costo por ciclo',       valor: 'Q47,656.25',  acento: 'orange' },
        { label: 'Forma de pago',         valor: 'Mensual fijo', acento: 'dark', sub: 'Días 1–5 de cada mes' }
      ],
      ciclosCosto: 47656.25,
      totalCiclos: 7,
      labelCiclos: ['C1','C2','C3','C4','C5','C6','C7'],
      equipo: [
        { rol: 'Gestión (PO + SM)',   cant: 2, color: '#FF4500' },
        { rol: 'Diseño (UI/UX)',      cant: 1, color: '#FF6B35' },
        { rol: 'Backend Senior',      cant: 1, color: '#6B52E8' },
        { rol: 'Frontend Senior',     cant: 1, color: '#8B7AF0' },
        { rol: 'Junior FullStack',    cant: 2, color: '#A094F4' },
        { rol: 'Calidad (QA)',        cant: 1, color: '#6B6B8A' }
      ],
      slas: [
        { label: 'Dentro del presupuesto (±5%)', target: 95,   unit: '%',   color: 'orange' },
        { label: 'Uptime en producción',          target: 99.5, unit: '%',   color: 'orange' },
        { label: 'Módulos entregados',            target: 100,  unit: '% (8/8)', color: 'purple' }
      ],
      ciclos: [
        { id: 'C1', semanas: 'S1–2',   nombre: 'Login + búsqueda básica',          color: '#378ADD' },
        { id: 'C2', semanas: 'S3–4',   nombre: 'Compra, pagos y boletos QR',       color: '#378ADD' },
        { id: 'C3', semanas: 'S5–6',   nombre: 'Creación de eventos — CMS',        color: '#1D9E75' },
        { id: 'C4', semanas: 'S7–8',   nombre: 'Gestión avanzada — parte 1',       color: '#1D9E75' },
        { id: 'C5', semanas: 'S9–10',  nombre: 'Gestión avanzada — parte 2',       color: '#7F77DD' },
        { id: 'C6', semanas: 'S11–12', nombre: 'Control QR + notificaciones',      color: '#7F77DD' },
        { id: 'C7', semanas: 'S13–14', nombre: 'Reportes + publicación + DevOps',  color: '#BA7517' }
      ]
    }
  },

  /* ────────────────────────────────────────────────
     C — Kanban
  ──────────────────────────────────────────────── */
  C: {
    meta: { duracion: '7', ciclos: 7, tipo: 'kanban' },
    slides: {
      s1: {
        titulo: '¿Quiénes somos?',
        cuerpo: 'Desarrollamos Eventura: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada.'
      },
      s2: {
        titulo: '¿Qué recibirá?',
        tabla: [
          { ciclo: 'Ciclo 1', modulo: 'EP01', entregable: 'Login, Google Auth, roles y permisos' },
          { ciclo: 'Ciclo 2', modulo: 'EP02', entregable: 'Búsqueda geolocalizada, filtros, eventos destacados' },
          { ciclo: 'Ciclo 3', modulo: 'EP03', entregable: 'Carrito, pagos, FEL, boletos QR únicos' },
          { ciclo: 'Ciclo 4', modulo: 'EP04', entregable: 'Creación/edición de eventos, aforos, borradores' },
          { ciclo: 'Ciclo 5', modulo: 'EP05', entregable: 'Escáner QR, modo sin internet, sincronización' },
          { ciclo: 'Ciclo 6', modulo: 'EP06–07', entregable: 'Dashboards, reportes, notificaciones push' },
          { ciclo: 'Ciclo 7', modulo: 'EP08', entregable: 'Cloud, auto-scaling, CI/CD, backups' }
        ]
      },
      s3: {
        titulo: 'Cronograma',
        items: [
          '7 meses de flujo continuo — sin cortes ni plazos intermedios',
          '214 tareas totales · Velocidad sostenida: 2.43 tareas/día',
          'Reporte de avance cada viernes',
          'Reunión de revisión cada 2 semanas',
          'Entrega final: cierre del mes 7'
        ]
      },
      s4: {
        titulo: 'Costo',
        total: 'Q658,000.00',
        mensual: 'Q94,000.00',
        margen: '71%',
        duracion: '7 meses',
        pago: 'Mensual, días 1–5 de cada mes · Mora: 1.5% mensual sobre saldo pendiente (>10 días)'
      },
      s5: {
        titulo: 'El Equipo',
        roles: [
          { rol: 'Product Owner',              tipo: 'Gestión' },
          { rol: 'Diseñador UI/UX',            tipo: 'Freelance' },
          { rol: 'Scrum Master / Coach',       tipo: 'Liderazgo' },
          { rol: 'Senior Backend Developer',   tipo: 'Desarrollo' },
          { rol: 'Senior Frontend Developer',  tipo: 'Desarrollo' },
          { rol: 'Junior FullStack',           tipo: 'Desarrollo' },
          { rol: 'Junior FullStack',           tipo: 'Desarrollo' },
          { rol: 'Analista QA',                tipo: 'Calidad' }
        ]
      },
      s6: {
        titulo: 'Riesgos y Protecciones',
        tabla: [
          { escenario: 'Velocidad <1.74 tareas/día por 2 semanas',    impacto: 'Alto',  proteccion: 'Plan de recuperación en 3 días; proveedor absorbe las horas adicionales' },
          { escenario: 'Entrega fuera del mes 7 (causa proveedor)',   impacto: 'Alto',  proteccion: '5% de descuento por cada semana adicional de atraso' },
          { escenario: 'API supera 500ms de manera sostenida',        impacto: 'Medio', proteccion: 'Corrección prioritaria sin costo, SLA de 48 horas de resolución' },
          { escenario: 'Falla de seguridad en módulo de pagos',       impacto: 'Alto',  proteccion: 'Suspensión inmediata + corrección en 24h + auditoría gratuita' }
        ]
      },
      s7: {
        titulo: 'Lo Que Garantizamos',
        items: [
          { label: 'Tiempo máximo por tarea M',    valor: '5 días hábiles' },
          { label: 'Tiempo máximo por tarea L/XL', valor: '10 días hábiles' },
          { label: 'Respuesta de API',              valor: '≤500ms en el 95% de las peticiones' },
          { label: 'Cobertura de pruebas críticas', valor: '70% mínimo (pagos, auth, QR)' },
          { label: 'Al cierre del proyecto',        valor: 'código fuente + documentación + credenciales + 2 sesiones de traspaso' }
        ]
      },
      s8: {
        titulo: 'Beneficios para el Inversor',
        tabla: [
          { beneficio: 'Flujo predecible',               descripcion: 'Reporte semanal de avance — total visibilidad del proceso' },
          { beneficio: 'Mayor margen para el proveedor', descripcion: '71% garantiza equipo estable durante los 7 meses completos' },
          { beneficio: 'Sin presión de fechas fijas',    descripcion: 'El equipo trabaja a ritmo óptimo sin plazos de sprint artificiales' },
          { beneficio: 'Propiedad total del producto',   descripcion: 'Código fuente + documentación entregados al cierre' }
        ]
      },
      s9: { titulo: 'Indicadores Financieros', nota: 'Valores a calcular con el cliente' }
    },
    dashboard: {
      kpis: [
        { label: 'Costo Total',           valor: 'Q658,000.00',   acento: 'orange' },
        { label: 'Duración',              valor: '7 meses',       acento: 'purple' },
        { label: 'Velocidad sostenida',   valor: '2.43 tar./día', acento: 'dark'  },
        { label: 'Total de tareas',       valor: '214 tareas',    acento: 'orange' },
        { label: 'Forma de pago',         valor: 'Mensual',       acento: 'dark',  sub: 'Días 1–5 de cada mes' }
      ],
      ciclosCosto: 94000,
      totalCiclos: 7,
      labelCiclos: ['Mes 1','Mes 2','Mes 3','Mes 4','Mes 5','Mes 6','Mes 7'],
      equipo: [
        { rol: 'Gestión (PO + SM)',   cant: 2, color: '#FF4500' },
        { rol: 'Diseño (UI/UX)',      cant: 1, color: '#FF6B35' },
        { rol: 'Backend Senior',      cant: 1, color: '#6B52E8' },
        { rol: 'Frontend Senior',     cant: 1, color: '#8B7AF0' },
        { rol: 'Junior FullStack',    cant: 2, color: '#A094F4' },
        { rol: 'Calidad (QA)',        cant: 1, color: '#6B6B8A' }
      ],
      slas: [
        { label: 'Respuesta de API ≤500ms',     target: 95, unit: '%',              color: 'orange' },
        { label: 'Cobertura de pruebas',         target: 70, unit: '% (mínimo)',     color: 'purple' },
        { label: 'Tiempo tarea M (≤5 días)',     target: 100, unit: '% cumplimiento', color: 'orange' }
      ],
      ciclos: [
        { id: 'M1', semanas: 'Mes 1', nombre: 'Login, Auth, roles y permisos',           color: '#378ADD' },
        { id: 'M2', semanas: 'Mes 2', nombre: 'Búsqueda, filtros, eventos destacados',   color: '#378ADD' },
        { id: 'M3', semanas: 'Mes 3', nombre: 'Carrito, pagos, FEL, boletos QR',         color: '#1D9E75' },
        { id: 'M4', semanas: 'Mes 4', nombre: 'Creación/edición de eventos',             color: '#1D9E75' },
        { id: 'M5', semanas: 'Mes 5', nombre: 'Escáner QR, modo sin internet',           color: '#7F77DD' },
        { id: 'M6', semanas: 'Mes 6', nombre: 'Dashboards, reportes, notificaciones',    color: '#7F77DD' },
        { id: 'M7', semanas: 'Mes 7', nombre: 'Cloud, auto-scaling, CI/CD',              color: '#BA7517' }
      ]
    }
  },

  /* ────────────────────────────────────────────────
     D — Scrumban
  ──────────────────────────────────────────────── */
  D: {
    meta: { duracion: '3.5', ciclos: 7, tipo: 'sprint' },
    slides: {
      s1: {
        titulo: '¿Quiénes somos?',
        cuerpo: 'Desarrollamos Eventura: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada.'
      },
      s2: {
        titulo: '¿Qué recibirá?',
        tabla: [
          { ciclo: 'Ciclo 1', semanas: '1–2',  entregable: 'Login, autenticación Google, búsqueda básica de eventos' },
          { ciclo: 'Ciclo 2', semanas: '3–4',  entregable: 'Búsqueda avanzada, compra completa, pagos y boletos QR' },
          { ciclo: 'Ciclo 3', semanas: '5–6',  entregable: 'Creación de eventos, tipos de entradas, imágenes' },
          { ciclo: 'Ciclo 4', semanas: '7–8',  entregable: 'Edición, duplicado y borradores de eventos' },
          { ciclo: 'Ciclo 5', semanas: '9–10', entregable: 'Reprogramar, cancelar y compartir eventos' },
          { ciclo: 'Ciclo 6', semanas: '11–12',entregable: 'Calificaciones, control de acceso QR offline' },
          { ciclo: 'Ciclo 7', semanas: '13–14',entregable: 'Notificaciones, reportes, infraestructura, DevOps' }
        ]
      },
      s3: {
        titulo: 'Cronograma',
        items: [
          '7 ciclos de 2 semanas = 3.5 meses en total',
          'Planificación estructurada + flujo continuo en cada ciclo',
          'Velocidad objetivo: 44 pts · Mínimo garantizado: 31 pts',
          'Entrega final: cierre del mes 3.5'
        ]
      },
      s4: {
        titulo: 'Costo',
        total: 'Q228,667.00',
        mensual: 'Q65,333.00',
        margen: '31%',
        duracion: '3.5 meses',
        pago: '4 pagos (3 completos + 1 proporcional) · Mora: 1.5% mensual sobre saldo pendiente (>10 días)'
      },
      s5: {
        titulo: 'El Equipo',
        roles: [
          { rol: 'Product Owner',              tipo: 'Gestión' },
          { rol: 'Diseñador UI/UX',            tipo: 'Freelance' },
          { rol: 'Scrum Master / Coach',       tipo: 'Liderazgo' },
          { rol: 'Senior Backend Developer',   tipo: 'Desarrollo' },
          { rol: 'Senior Frontend Developer',  tipo: 'Desarrollo' },
          { rol: 'Junior FullStack',           tipo: 'Desarrollo' },
          { rol: 'Junior FullStack',           tipo: 'Desarrollo' },
          { rol: 'Analista QA',                tipo: 'Calidad' }
        ]
      },
      s6: {
        titulo: 'Riesgos y Protecciones',
        tabla: [
          { escenario: 'Velocidad <31 pts/ciclo por 2 ciclos consecutivos',  impacto: 'Alto',  proteccion: 'Plan de recuperación en 3 días; proveedor absorbe horas adicionales' },
          { escenario: 'Entrega fuera del Ciclo 7 (causa proveedor)',        impacto: 'Alto',  proteccion: '5% de descuento por cada semana adicional de atraso' },
          { escenario: 'Ciclo Review cancelado por el proveedor',            impacto: 'Medio', proteccion: '2% de descuento sobre la facturación del ciclo' },
          { escenario: 'Falla de seguridad en módulo de pagos',              impacto: 'Alto',  proteccion: 'Suspensión inmediata + corrección 24h + auditoría gratuita' }
        ]
      },
      s7: {
        titulo: 'Lo Que Garantizamos',
        items: [
          { label: 'Respuesta de API',               valor: '≤500ms en el 95% de las peticiones' },
          { label: 'Cobertura de pruebas críticas',  valor: '70% mínimo (pagos, auth, QR)' },
          { label: 'Disponibilidad staging',         valor: '99% en horario laboral' },
          { label: 'Al cierre del proyecto',         valor: 'código fuente + documentación + credenciales + 2 sesiones de traspaso' }
        ]
      },
      s8: {
        titulo: 'Beneficios para el Inversor',
        tabla: [
          { beneficio: 'Menor inversión total',    descripcion: 'Q228,667 — opción de menor costo con igual plazo de entrega' },
          { beneficio: 'Mismo tiempo al mercado',  descripcion: '3.5 meses idéntico a otras opciones, con mayor flexibilidad de flujo' },
          { beneficio: 'Revisiones quincenales',   descripcion: 'Validación de avance cada 2 semanas sin estructura rígida de sprint' },
          { beneficio: 'Propiedad total del producto', descripcion: 'Código fuente + documentación entregados al cierre' }
        ]
      },
      s9: { titulo: 'Indicadores Financieros', nota: 'Valores a calcular con el cliente' }
    },
    dashboard: {
      kpis: [
        { label: 'Costo Total',          valor: 'Q228,667.00',   acento: 'orange' },
        { label: 'Duración',             valor: '3.5 meses',     acento: 'purple' },
        { label: 'Velocidad objetivo',   valor: '44 pts/ciclo',  acento: 'dark'   },
        { label: 'Mínimo garantizado',   valor: '31 pts/ciclo',  acento: 'orange' },
        { label: 'Forma de pago',        valor: '4 pagos',       acento: 'dark',  sub: '3 completos + 1 prop.' }
      ],
      ciclosCosto: 32666.71,
      totalCiclos: 7,
      labelCiclos: ['C1','C2','C3','C4','C5','C6','C7'],
      equipo: [
        { rol: 'Gestión (PO + SM)',   cant: 2, color: '#FF4500' },
        { rol: 'Diseño (UI/UX)',      cant: 1, color: '#FF6B35' },
        { rol: 'Backend Senior',      cant: 1, color: '#6B52E8' },
        { rol: 'Frontend Senior',     cant: 1, color: '#8B7AF0' },
        { rol: 'Junior FullStack',    cant: 2, color: '#A094F4' },
        { rol: 'Calidad (QA)',        cant: 1, color: '#6B6B8A' }
      ],
      slas: [
        { label: 'Respuesta de API ≤500ms',  target: 95, unit: '%',              color: 'orange' },
        { label: 'Cobertura de pruebas',      target: 70, unit: '% (mínimo)',     color: 'purple' },
        { label: 'Disponibilidad staging',    target: 99, unit: '%',              color: 'orange' }
      ],
      ciclos: [
        { id: 'C1', semanas: 'S1–2',   nombre: 'Login, Auth Google, búsqueda básica',  color: '#378ADD' },
        { id: 'C2', semanas: 'S3–4',   nombre: 'Búsqueda avanzada, pagos, boletos QR', color: '#378ADD' },
        { id: 'C3', semanas: 'S5–6',   nombre: 'Creación de eventos',                  color: '#1D9E75' },
        { id: 'C4', semanas: 'S7–8',   nombre: 'Edición, duplicado y borradores',      color: '#1D9E75' },
        { id: 'C5', semanas: 'S9–10',  nombre: 'Reprogramar, cancelar, compartir',     color: '#7F77DD' },
        { id: 'C6', semanas: 'S11–12', nombre: 'Calificaciones, QR offline',           color: '#7F77DD' },
        { id: 'C7', semanas: 'S13–14', nombre: 'Notificaciones, reportes, DevOps',     color: '#BA7517' }
      ]
    }
  },

  /* ────────────────────────────────────────────────
     E — XP (Extreme Programming) — Próximamente
  ──────────────────────────────────────────────── */
  E: {
    meta: { duracion: null, ciclos: 0, tipo: 'blank' },
    slides: 'blank',
    dashboard: 'blank'
  }

};
