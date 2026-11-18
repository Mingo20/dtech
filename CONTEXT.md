# CONTEXT.md · DGTech

Documento maestro para cualquier agente de IA o persona que se incorpore al ecosistema DGTech. Léelo primero.

## Quién es DGTech

DGTech es un estudio de software de la **República Dominicana**, fundado por **Domingo Guerra**. Construye aplicaciones web instalables (PWA) que resuelven problemas reales de energía, comercio, educación, finanzas, legal y gobierno, con apoyo de inteligencia artificial.

- Contacto: WhatsApp 829-646-9885
- Hub de aplicaciones: https://mingo20.github.io/dtech/
- GitHub: https://github.com/Mingo20

## Principios del estudio

1. **Hecho para el dominicano.** Español dominicano, horas en formato de 12 horas, moneda en RD$, ITBIS 18 %, calendario escolar oficial.
2. **Celular primero.** Todo se diseña para el teléfono y luego se adapta a la computadora.
3. **Sin fricción.** Instalable sin tiendas, sin registros innecesarios, funcionando sin internet cuando es posible.
4. **Automatizar, no dar trabajo.** Si el sistema puede deducir un dato, no se lo pide al usuario.
5. **Apariencia premium.** Limpia, rápida y fluida. La estética no es un adorno.
6. **Datos con respeto.** Se aplica la Ley 172-13 de protección de datos. Nada sensible en el código.

## Mapa de aplicaciones

| Aplicación | Categoría | Estado | Versión | Repositorio |
|---|---|---|---|---|
| [POSChat IA](https://mingo20.github.io/poschat-agent-ui/) | Comercio | Producción | 1.0.0 | [`poschat-agent-ui`](https://github.com/Mingo20/poschat-agent-ui) |
| [PediPOS](https://mingo20.github.io/pedipos/) | Comercio | Producción | 1.0.0 | [`pedipos`](https://github.com/Mingo20/pedipos) |
| [Delega IA · Agente 24/7](https://mingo20.github.io/delegaia/) | Educación | Producción | 1.0.0 | [`delegaia`](https://github.com/Mingo20/delegaia) |
| [Delega IA · Asistente Docente](https://mingo20.github.io/agentia/) | Educación | Producción | 1.0.0 | [`agentia`](https://github.com/Mingo20/agentia) |
| [NeuroLearn AI](https://mingo20.github.io/neurolearn-ai/) | Educación | Producción | 1.0.0 | [`neurolearn-ai`](https://github.com/Mingo20/neurolearn-ai) |
| [PlanApp · Panel Docente](https://mingo20.github.io/colegio-reformado-esperanza/) | Educación | Producción | 26.0.0 | [`colegio-reformado-esperanza`](https://github.com/Mingo20/colegio-reformado-esperanza) |
| [Planes de clase](https://mingo20.github.io/planes-clase-colegio-esperanza/) | Educación | Producción | 1.0.0 | [`planes-clase-colegio-esperanza`](https://github.com/Mingo20/planes-clase-colegio-esperanza) |
| [Skios Educativo](https://mingo20.github.io/skios-educativo/) | Educación | Producción | 1.0.0 | [`skios-educativo`](https://github.com/Mingo20/skios-educativo) |
| [SuperKilo](https://mingo20.github.io/prekilo/) | Energía | Producción | 2.4.0 | [`prekilo`](https://github.com/Mingo20/prekilo) |
| [FAC IA](https://mingo20.github.io/fac-ia-pwa/) | Finanzas | Producción | 1.0.0 | [`fac-ia-pwa`](https://github.com/Mingo20/fac-ia-pwa) |
| [FirmAbal](https://mingo20.github.io/firmabal-pwa/) | Gobierno y política | Producción | 13.0.0 | [`firmabal-pwa`](https://github.com/Mingo20/firmabal-pwa) |
| [Andrea IA](https://mingo20.github.io/andrea-ia-pwa/) | Inteligencia artificial | Producción | 1.2.0 | [`andrea-ia-pwa`](https://github.com/Mingo20/andrea-ia-pwa) |
| [Forja](https://mingo20.github.io/forja-chat/) | Inteligencia artificial | Producción | 2.0.0 | [`forja-chat`](https://github.com/Mingo20/forja-chat) |
| [Tendy](https://mingo20.github.io/tendy/) | Inteligencia artificial | Producción | 2.0.0 | [`tendy`](https://github.com/Mingo20/tendy) |
| [LexGoAI](https://mingo20.github.io/lexgoai/) | Legal | Producción | 1.0.0 | [`lexgoai`](https://github.com/Mingo20/lexgoai) |
| [TranscribeAI Pro](https://mingo20.github.io/transcribeai-pro/) | Productividad | Producción | 1.0.0 | [`transcribeai-pro`](https://github.com/Mingo20/transcribeai-pro) |
| [FirmAbal (versión base)](https://mingo20.github.io/firmabal/) | Gobierno y política | Archivo / legado | 1.0.0 | [`firmabal`](https://github.com/Mingo20/firmabal) |
| [Andrea Chat (anterior)](https://mingo20.github.io/andrea-chat/) | Inteligencia artificial | Archivo / legado | 1.0.0 | [`andrea-chat`](https://github.com/Mingo20/andrea-chat) |
| [Andrea IA (anterior)](https://mingo20.github.io/andrea-ia/) | Inteligencia artificial | Archivo / legado | 1.0.0 | [`andrea-ia`](https://github.com/Mingo20/andrea-ia) |

## Arquitectura común

- **Frontend:** HTML, CSS y JavaScript sin frameworks, publicado en **GitHub Pages**.
- **PWA:** cada app lleva `manifest` y Service Worker. Al cambiar archivos hay que subir la versión de la caché.
- **Backend:** funciones **Deno en Base44**, con entidades para los datos. Las llamadas viajan desde el navegador con un token de sesión.
- **IA:** modelos vía Puter.js en el cliente o funciones en Base44 en el servidor.
- **Automatización:** workflows programados en Base44 (por ejemplo, la sincronización diaria de SuperKilo a la 1:00 a. m.).
- **Agente operativo:** Delega, asistente administrativa por WhatsApp del Colegio Reformado la Esperanza.

## Cómo se versiona

- **SemVer** en cada repositorio: mayor.menor.parche.
- Cada repositorio tiene `CHANGELOG.md` con todas las versiones.
- El hub y este documento se actualizan cuando cambia el estado o la versión de una aplicación.

## Reglas para agentes de IA

1. Antes de cambiar nada, lee `README.md`, `AGENTS.md` y `CHANGELOG.md` del proyecto.
2. Todo repositorio es **público**. Jamás escribas claves, tokens, PIN ni contraseñas.
3. Prueba en el navegador antes de dar algo por terminado.
4. Cambia lo mínimo necesario y registra el cambio en el `CHANGELOG.md`.
5. Si dudas, pregunta al dueño. Si encuentras una credencial expuesta, avísale.
6. Responde siempre en español dominicano.

## Urgente

1. **FirmAbal** · rotar la clave que está en js/sync.js y reemplazarla por una sesión por usuario

## Dominio y marca

- La marca es **DGTech**. El nombre de usuario de GitHub todavía es `Mingo20` porque el nombre `dgtech` ya está ocupado.
- Plan: comprar el dominio de DGTech y publicar cada app en un subdominio (por ejemplo `superkilo.dgtech.com`), con el hub en la raíz.

## Licencia

Todos los derechos reservados. Ver `NOTICE` en cada repositorio.
