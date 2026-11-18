const APPS = [
  {id:'superkilo', name:'SuperKilo', cat:'Energía', feat:true,
   tag:'Energía prepago Edesur', desc:'Consulta tu consumo real del medidor, proyección de factura y alertas de irregularidad. Funciona con tu número de contrato.',
   url:'https://mingo20.github.io/prekilo/', shot:'superkilo',
   feats:['Consumo acumulado de 3, 7 y 30 días','Semáforo de consumo atípico','Alertas push por escenario','Ficha completa del contrato']},
  {id:'pedipos', name:'PediPOS', cat:'Comercio', feat:true,
   tag:'Punto de venta con voz', desc:'Punto de venta que se maneja por voz, con ITBIS 18% y funcionamiento sin internet.',
   url:'https://mingo20.github.io/pedipos/', shot:'pedipos',
   feats:['Ventas por comandos de voz','ITBIS calculado al instante','Trabaja sin conexión','Comprobantes listos']},
  {id:'tendy', name:'Tendy', cat:'IA y agentes', feat:true,
   tag:'Tu agente personal', desc:'Agente de IA con avatar interactivo que navega, busca, redacta y gestiona tareas por ti.',
   url:'https://mingo20.github.io/tendy/', shot:'tendy',
   feats:['Avatar conversacional','Tareas delegadas 24/7','Desde celular o PC','Conectado a Superagent']},
  {id:'firmabal', name:'FirmAbal', cat:'Datos y campo',
   tag:'Captura territorial', desc:'Captura de afiliaciones en campo con validación de cédula y firma manuscrita.',
   url:'https://mingo20.github.io/firmabal-pwa/', shot:'firmabal',
   feats:['Validación de cédula','Firma manuscrita','Modo offline en campo','Exportación ordenada']},
  {id:'forja', name:'Forja', cat:'IA y agentes',
   tag:'Agente creador de apps', desc:'Agente conversacional que construye aplicaciones completas bajo demanda.',
   url:'https://mingo20.github.io/forja-chat/', shot:'forja',
   feats:['Describe y se construye','Interfaz conversacional','Iteración rápida','Sin instalar nada']},
  {id:'colegio', name:'Panel Docente', cat:'Educación',
   tag:'Colegio Reformado la Esperanza', desc:'Panel de control docente con planificaciones, asistencia, calificaciones y supervisión.',
   url:'https://mingo20.github.io/colegio-reformado-esperanza/', shot:'colegio',
   feats:['Planificaciones del currículo oficial','Asistencia y calificaciones','Boletines por nivel','Panel de coordinación']},
  {id:'planes', name:'Plan de Clase', cat:'Educación',
   tag:'Ejemplo de planificación', desc:'Plan de clase diario de Matemática para 3er grado, con estructura oficial y rúbrica.',
   url:'https://mingo20.github.io/planes-clase-colegio-esperanza/', shot:'planes',
   feats:['Formato oficial dominicano','Actividades por momento','Evaluación incluida','Listo para imprimir']},
  {id:'lexgo', name:'LexGoAI', cat:'Legal',
   tag:'Asistencia jurídica digital', desc:'Plataforma de asistencia jurídica para República Dominicana con agentes de IA especializados.',
   url:'https://mingo20.github.io/lexgoai/', shot:'lexgo',
   feats:['Agentes por área legal','Consulta guiada','Documentos asistidos','Enfoque dominicano']},
  {id:'facia', name:'FAC IA', cat:'Facturación',
   tag:'Facturación electrónica', desc:'Plataforma SaaS de facturación electrónica inteligente, alineada con la DGII.',
   url:'https://mingo20.github.io/fac-ia-pwa/', shot:'facia',
   feats:['Comprobantes electrónicos','Motor de IA integrado','Multiempresa','Cumplimiento DGII']},
  {id:'transcribe', name:'TranscribeAI Pro', cat:'Audio',
   tag:'Transcripción profesional', desc:'Transcribe audio con IA y entrega texto limpio, listo para trabajar.',
   url:'https://mingo20.github.io/transcribeai-pro/', shot:'transcribe',
   feats:['Audio a texto','Limpieza automática','Formatos comunes','Rápido y sin instalar']},
  {id:'neurolearn', name:'NeuroLearn AI', cat:'Educación',
   tag:'Aprende IA desde cero', desc:'Plataforma de aprendizaje de inteligencia artificial, de los fundamentos a los agentes.',
   url:'https://mingo20.github.io/neurolearn-ai/', shot:'neurolearn',
   feats:['Ruta de aprendizaje','Del cero a agentes','Contenido guiado','A tu ritmo']},
  {id:'skios', name:'Skios Educativo', cat:'Educación',
   tag:'Menos burocracia docente', desc:'Asistente docente inteligente que reduce el trabajo administrativo del aula.',
   url:'https://mingo20.github.io/skios-educativo/', shot:'skios',
   feats:['Automatiza lo repetitivo','Enfoque docente RD','Interfaz simple','Ahorra horas de trabajo']},
  {id:'andrea', name:'Andrea IA', cat:'IA y agentes',
   tag:'Asistente de voz y chat', desc:'Asistente inteligente con voz y chat, instalable como aplicación.',
   url:'https://mingo20.github.io/andrea-ia-pwa/', shot:'andrea',
   feats:['Conversación por voz','Instalable (PWA)','Respuestas al instante','En español']},
  {id:'poschat', name:'POSChat IA', cat:'Comercio',
   tag:'Chat agéntico para POS', desc:'Interfaz conversacional para punto de venta, con backend agéntico.',
   url:'https://mingo20.github.io/poschat-agent-ui/', shot:'poschat',
   feats:['Chat para operar el POS','Respuestas contextuales','Integrado a backend','Flujo rápido']},
  {id:'agentia', name:'Agentia', cat:'IA y agentes',
   tag:'Automatiza desde WhatsApp', desc:'Automatización de negocio directamente desde WhatsApp, sin instalar software.',
   url:'https://mingo20.github.io/agentia/', shot:'agentia',
   feats:['Flujos por WhatsApp','Atención automática','Sin instalaciones','Escalable']},
  {id:'delega', name:'Delega IA', cat:'IA y agentes',
   tag:'Agente operativo 24/7', desc:'Agente operativo que atiende, organiza y responde por tu negocio todo el día.',
   url:'https://mingo20.github.io/delegaia/', shot:'delega',
   feats:['Operación continua','Tareas automatizadas','Interfaz simple','Pensado para RD']}
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
let filtro = 'Todas';
let busqueda = '';

function cardHTML(a) {
  return `<article class="card" data-id="${a.id}" tabindex="0" role="button" aria-label="${a.name}, abrir vista previa">
    <div class="card-shot"><img src="assets/shots/${a.shot}.jpg" alt="Vista previa de ${a.name}" loading="lazy" width="1280" height="800"></div>
    <div class="card-body">
      <div class="card-top"><h3>${a.name}</h3><span class="chip-mini">${a.cat}</span></div>
      <p>${a.tag}</p>
      <div class="card-foot">
        <button class="preview-btn" data-preview="${a.id}" type="button">Vista previa</button>
        <a class="open-pill" href="${a.url}" target="_blank" rel="noopener" data-open="${a.id}">Abrir
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
        </a>
      </div>
    </div>
  </article>`;
}

function pinta() {
  const q = busqueda.trim().toLowerCase();
  const lista = APPS.filter((a) => {
    const okCat = filtro === 'Todas' || a.cat === filtro;
    const okQ = !q || (a.name + ' ' + a.cat + ' ' + a.tag + ' ' + a.desc + ' ' + a.feats.join(' ')).toLowerCase().includes(q);
    return okCat && okQ;
  });
  $('#grid').innerHTML = lista.map(cardHTML).join('');
  $('#empty').hidden = lista.length > 0;
  $('#count').textContent = lista.length;
  setTimeout(() => $$('#grid .card').forEach((c, i) => { c.style.transitionDelay = Math.min(i * 45, 260) + 'ms'; c.classList.add('is-in'); }), 20);
}

function pintaDestacadas() {
  $('#feat-grid').innerHTML = APPS.filter((a) => a.feat).slice(0, 3).map((a) => `
    <article class="feat" data-id="${a.id}" tabindex="0" role="button" aria-label="${a.name}">
      <img src="assets/shots/${a.shot}.jpg" alt="Vista previa de ${a.name}" loading="lazy">
      <span class="chip-mini">${a.cat}</span>
      <h3>${a.name}</h3><p>${a.tag}</p>
    </article>`).join('');
}

function pintaChips() {
  const cats = ['Todas', ...Array.from(new Set(APPS.map((a) => a.cat)))];
  $('#chips').innerHTML = cats.map((c) => `<button class="chip${c === 'Todas' ? ' is-on' : ''}" data-cat="${c}" role="tab" type="button">${c}</button>`).join('');
  $('#st-apps').textContent = APPS.length;
  $('#st-cats').textContent = cats.length - 1;
}

function pintaCategorias() {
  const cats = Array.from(new Set(APPS.map((a) => a.cat)));
  $('#cat-grid').innerHTML = cats.map((c) => {
    const n = APPS.filter((a) => a.cat === c).length;
    return `<button class="cat" data-cat="${c}" type="button"><strong>${c}</strong><span>${n} ${n === 1 ? 'aplicación' : 'aplicaciones'}</span></button>`;
  }).join('');
}

function abrir(id) {
  const a = APPS.find((x) => x.id === id); if (!a) return;
  $('#m-img').src = `assets/shots/${a.shot}.jpg`;
  $('#m-img').alt = 'Vista previa de ' + a.name;
  $('#m-cat').textContent = a.cat;
  $('#m-title').textContent = a.name;
  $('#m-desc').textContent = a.desc;
  $('#m-feats').innerHTML = a.feats.map((f) => `<li>${f}</li>`).join('');
  $('#m-open').href = a.url;
  $('#m-url').textContent = a.url.replace('https://', '');
  $('#modal').hidden = false;
  document.body.style.overflow = 'hidden';
  $('.modal-x').focus();
}

function cerrar() {
  $('#modal').hidden = true;
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  const p = e.target.closest('[data-preview]');
  if (p) { e.preventDefault(); e.stopPropagation(); abrir(p.dataset.preview); return; }
  const c = e.target.closest('.card, .feat');
  if (c && !e.target.closest('[data-open]')) { abrir(c.dataset.id); return; }
  const chip = e.target.closest('.chip');
  if (chip) {
    filtro = chip.dataset.cat;
    $$('.chip').forEach((x) => x.classList.toggle('is-on', x.dataset.cat === filtro));
    pinta(); return;
  }
  const cat = e.target.closest('.cat');
  if (cat) {
    filtro = cat.dataset.cat;
    $$('.chip').forEach((x) => x.classList.toggle('is-on', x.dataset.cat === filtro));
    pinta();
    $('#apps').scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  if (e.target.closest('[data-close]')) cerrar();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrar();
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault(); $('#q').focus(); $('#apps').scrollIntoView({ behavior: 'smooth' });
  }
  if (e.key === 'Enter') {
    const c = document.activeElement.closest('.card, .feat');
    if (c) abrir(c.dataset.id);
  }
});

$('#q').addEventListener('input', (e) => { busqueda = e.target.value; pinta(); });
$('#search-btn').addEventListener('click', () => { $('#q').focus(); $('#apps').scrollIntoView({ behavior: 'smooth' }); });
$('#hero-explore').addEventListener('click', () => $('#apps').scrollIntoView({ behavior: 'smooth' }));

function onScroll() {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  $('#progress').style.width = pct + '%';
  $('#topbar').classList.toggle('is-scrolled', h.scrollTop > 8);
}
window.addEventListener('scroll', onScroll, { passive: true });

const io = new IntersectionObserver((ent) => {
  ent.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('is-in'); io.unobserve(x.target); } });
}, { threshold: 0.14 });

pintaChips(); pintaDestacadas(); pintaCategorias(); pinta(); onScroll();
$$('.reveal').forEach((el) => io.observe(el));
