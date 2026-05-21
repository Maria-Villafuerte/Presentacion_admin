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
          { ciclo: 'Ciclo 6', semanas: '11–12',entregable: 'Control de acceso QR + notificaciones' },
          { ciclo: 'Ciclo 7', semanas: '13–14',entregable: 'Reportes, publicación en internet, operación final' }
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
          { concepto: 'Duración',             valor: '6 meses' },
          { concepto: 'Costo mensual',        valor: 'Q145,000.00' },
          { concepto: 'Total del proyecto',   valor: 'Q870,000.00' },
          { concepto: 'Margen del proveedor', valor: '25%' },
          { concepto: 'Forma de pago',        valor: 'Mensual fijo, días 1–5' },
          { concepto: 'Interés por mora',     valor: '1.5% mensual (>10 días)' }
        ],
        total: 'Q870,000.00',
        mensual: 'Q145,000.00',
        margen: '25%',
        duracion: '6 meses',
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
          { label: 'Poducto Mínimo Viable completo',           valor: 'entregado dentro de 6 meses' },
          { label: 'Variación de costo',     valor: 'máximo 5% del presupuesto aprobado' },
          { label: 'Módulos entregados',     valor: '8 módulos validados al 100%' },
          { label: 'Control de acceso',      valor: 'funcional sin conexión a internet' },
          { label: 'Disponibilidad en producción',   valor: '≥ 99.5% validado en pruebas de carga' }
        ]
      },
      s8: {
        titulo: 'Beneficios para el Inversor',
        tabla: [
          { beneficio: 'Tiempo al mercado más rápido',  descripcion: 'Producto Mínimo Viable listo en 3.5 meses — ingresos desde el mes 4' },
          { beneficio: 'Visibilidad quincenal',          descripcion: 'Review de los ciclos cada 2 semanas con entregables reales' },
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
        { label: 'Integridad de la solución',          target: 99.5, unit: '%',   color: 'orange' },
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
    meta: { duracion: '6', ciclos: 11, tipo: 'sprint' },
    slides: {
      s1: {
        titulo: '¿Quiénes somos?',
        cuerpo: 'Desarrollamos Eventura: una plataforma integral de ticketing y gestión de eventos que permite a organizadores locales publicar, organizar y vender entradas de forma segura, escalable y automatizada.'
      },
      s2: {
        titulo: '¿Qué recibirá?',
        tabla: [
          { ciclo: 'Sprint 1',  semanas: '1–2',   entregable: 'Login, registro, control de accesos, listado y búsqueda de eventos' },
          { ciclo: 'Sprint 2',  semanas: '3–4',   entregable: 'Filtros avanzados, recomendaciones, selección de entradas y carrito' },
          { ciclo: 'Sprint 3',  semanas: '5–6',   entregable: 'Pago, confirmación, facturación, historial, correos y QR' },
          { ciclo: 'Sprint 4',  semanas: '7–8',   entregable: 'Creación de eventos — datos básicos' },
          { ciclo: 'Sprint 5',  semanas: '9–10',  entregable: 'Tipos de entrada, banners, etiquetas y cupones' },
          { ciclo: 'Sprint 6',  semanas: '11–12', entregable: 'Editar, duplicar, borradores, reprogramar y cancelar' },
          { ciclo: 'Sprint 7',  semanas: '13–14', entregable: 'Comentarios, calificaciones y links para compartir' },
          { ciclo: 'Sprint 8',  semanas: '15–16', entregable: 'Validación de entradas QR y check-in' },
          { ciclo: 'Sprint 9',  semanas: '17–18', entregable: 'Notificaciones' },
          { ciclo: 'Sprint 10', semanas: '19–20', entregable: 'Dashboard, métricas, reportes y exportaciones' },
          { ciclo: 'Sprint 11', semanas: '21–22', entregable: 'Monitoreo, bitácoras, alertas y soporte técnico' }
        ]
      },
      s3: {
        titulo: 'Cronograma',
        items: [
          '12 ciclos de 2 semanas = 6 meses en total'
        ]
      },
      s4: {
        titulo: 'Costo',
        total: 'Q870,000.00',
        mensual: 'Q145,000.00',
        margen: '25%',
        duracion: '6   meses',
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
    { escenario: 'Brecha de seguridad en datos',            impacto: 'Alto',  proteccion: 'Protocolos de acceso restringido + revisiones de seguridad periódicas' },
    { escenario: 'Salida simultánea de 2+ desarrolladores', impacto: 'Alto',  proteccion: 'Conocimiento compartido entre el equipo + procesos de reemplazo definidos' },
    { escenario: 'Servidor caído durante preventa',         impacto: 'Alto',  proteccion: 'Simulacros de alta demanda previos al lanzamiento + plan de respuesta inmediata' },
    { escenario: 'Retrasos acumulados entre módulos',       impacto: 'Medio', proteccion: 'Revisión semanal de avance + margen de tiempo reservado por etapa' },
    { escenario: 'Falla en pasarela de pago',               impacto: 'Bajo',  proteccion: 'Proveedor alternativo de respaldo + alertas ante cualquier interrupción' },
    { escenario: 'Cliente no disponible para validaciones', impacto: 'Bajo',  proteccion: 'Sesiones agendadas con anticipación + criterios de aprobación definidos por escrito' },
  ]
      },
      s7: {
        titulo: 'Lo Que Garantizamos',
          items: [
            { label: 'Entregables por ciclo',    valor: 'Demo funcional en vivo al cierre de cada uno de los 12 ciclos' },
            { label: 'Variación máxima de costo', valor: '5% sobre el presupuesto aprobado' },
            { label: 'Integridad de pagos',       valor: '0 transacciones perdidas — trazabilidad completa de pago' },
            { label: 'Integridad de la solución',      valor: '≥ 99.5% validado con pruebas de carga antes de la entrega final' },
            { label: 'Al cierre del proyecto',    valor: 'Código fuente + documentación + credenciales + 2 sesiones de traspaso' }
          ]

      },
      s8: {
        titulo: 'Beneficios para el Inversor',
tabla: [
  { beneficio: 'Ahorro en boletos físicos Q20,000',            descripcion: '' },
  { beneficio: 'Eficiencia de staff en puerta Q350,000',        descripcion: '' },
  { beneficio: 'Mitigación de fraude y falsificación Q185,000', descripcion: '' },
  { beneficio: 'Ahorro administrativo y contable Q40,000',     descripcion: ' ' },
  { beneficio: 'Alcance publicitario digital Q260,000',         descripcion: '' }
]

      },
      s9: {
        titulo: 'Indicadores Financieros',
        nota: 'Basado en flujo mensual proyectado del cliente de Q145,000.00',
        indicadores: [
          { nombre: 'ROI',     valor: '33.39%',  col: '' },
          { nombre: 'TMAR',    valor: '24%',     col: 'purple' },
          { nombre: 'ROA',     valor: '74.70%',  col: '' },
          { nombre: 'Retorno', valor: '6 Meses', col: '' }
        ],
        resumen: [
          { label: 'Beneficio Esperado Anual',              valor: 'Q855,000.00' },
          { label: 'Costo equipo desarrollo',         valor: 'Q490,000.00' },
          { label: 'Otros costos directos',           valor: 'Q152,000.00' },
          { label: 'Mitigación y Gestión de Riesgos', valor: 'Q228,000.00' }
        ],
        clienteIndicadores: [
          { nombre: 'ROI',     valor: '33.39%',  col: '' },
          { nombre: 'TMAR',    valor: '24%',     col: 'purple' },
          { nombre: 'Retorno', valor: '6 Meses', col: '' }
        ],
        clienteResumen: [
          { label: 'Beneficio Esperado Anual', valor: 'Q855,000.00' },
          { label: 'Flujo Mensual',      valor: 'Q145,000.00' }
        ]
      }
    },
    dashboard: {
      kpis: [
        { label: 'Costo Total',           valor: 'Q870,000.00',  acento: 'orange' },
        { label: 'Duración',              valor: '6 meses',      acento: 'purple' },
        { label: 'Cantidad de ciclos',   valor: '12 ciclos',   acento: 'dark'   },
        { label: 'Costo mensual',      valor: 'Q145,000.00',   acento: 'orange' },
        { label: 'Forma de pago',         valor: 'Mensual fijo', acento: 'dark', sub: 'Días 1–5 de cada mes' }
      ],
      ciclosCosto: 145000.00,
      totalCiclos: 12,
      labelCiclos: ['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11'],
      equipo: [
        { rol: 'Gestión (PO + SM)',   cant: 2, color: '#FF4500' },
        { rol: 'Diseño (UI/UX)',      cant: 1, color: '#FF6B35' },
        { rol: 'Backend Senior',      cant: 1, color: '#6B52E8' },
        { rol: 'Frontend Senior',     cant: 1, color: '#8B7AF0' },
        { rol: 'Junior FullStack',    cant: 2, color: '#A094F4' },
        { rol: 'Calidad (QA)',        cant: 1, color: '#6B6B8A' }
      ],
      slas: [
        { label: 'Dentro del presupuesto (±5%)', target: 95,   unit: '%',        color: 'orange' },
        { label: 'Integridad de la solución',          target: 99.5, unit: '%',        color: 'orange' },
        { label: 'Módulos entregados',            target: 100,  unit: '% (11/11)', color: 'purple' }
      ],
      ciclos: [
        { id: 'S1',  semanas: 'S1–2',   nombre: 'Login, registro, control de accesos, listado y búsqueda de eventos', color: '#378ADD' },
        { id: 'S2',  semanas: 'S3–4',   nombre: 'Filtros avanzados, recomendaciones, selección de entradas y carrito', color: '#378ADD' },
        { id: 'S3',  semanas: 'S5–6',   nombre: 'Pago, confirmación, facturación, historial, correos y QR', color: '#378ADD' },
        { id: 'S4',  semanas: 'S7–8',   nombre: 'Creación de eventos — datos básicos',  color: '#1D9E75' },
        { id: 'S5',  semanas: 'S9–10',  nombre: 'Tipos de entrada, banners, etiquetas y cupones', color: '#1D9E75' },
        { id: 'S6',  semanas: 'S11–12', nombre: 'Editar, duplicar, borradores, reprogramar y cancelar', color: '#1D9E75' },
        { id: 'S7',  semanas: 'S13–14', nombre: 'Comentarios, calificaciones y links para compartir', color: '#7F77DD' },
        { id: 'S8',  semanas: 'S15–16', nombre: 'Validación de entradas QR y check-in', color: '#7F77DD' },
        { id: 'S9',  semanas: 'S17–18', nombre: 'Notificaciones',  color: '#7F77DD' },
        { id: 'S10', semanas: 'S19–20 ', nombre: 'Dashboard, métricas, reportes y exportaciones', color: '#BA7517' },
        { id: 'S11', semanas: 'S21–22', nombre: 'Monitoreo, bitácoras, alertas y soporte técnico', color: '#BA7517' }
      ],
      financieros: [
        { label: 'ROI',              valor: '33.39%' },
        { label: 'TMAR',             valor: '24%' },
        { label: 'Retorno',          valor: '6 meses' }
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
          { ciclo: 'Ciclo 6', modulo: 'EP06–07', entregable: 'Dashboards, reportes, notificaciones' },
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
