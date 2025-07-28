# Historia Interactiva

## Descripción

“Historia Interactiva” es una plataforma web educativa destinada a usuarios interesados en aprender sobre distintas etapas de la historia. Permite registro y login de usuarios, exploración de contenido histórico segmentado por etapas, visualización de recursos educativos, y participación mediante comentarios.

## Tecnologías

- Backend: Node.js con Express.js  
- Frontend: EJS para renderizado dinámico  
- Base de datos: MongoDB (Mongoose)  
- Testing: Postman (manual), Playwright (automatización)  
- Deployment: Render.com o Railway.app (plan gratuito)

## Funcionalidades principales (Sprint 1)

| Funcionalidad                          | Descripción                                       |
|--------------------------------------|-------------------------------------------------|
| Registro y login                     | Usuarios pueden crear cuenta y acceder a la plataforma |
| Dashboard básico                    | Vista inicial tras login                         |

## Estructura del proyecto

- Backend: Node.js con Express.js  
- Frontend: EJS para renderizado dinámico  
- Base de datos: MongoDB (Mongoose)  
- Testing: Postman (manual), Playwright (automatización)  
- Deployment: Render.com o Railway.app (plan gratuito)


## API Endpoints (Sprint 1)

| Método | Ruta        | Descripción                  |
|--------|-------------|------------------------------|
| GET    | /register   | Mostrar formulario de registro |
| POST   | /register   | Procesar registro de usuario  |
| GET    | /login      | Mostrar formulario de login   |
| POST   | /login      | Procesar login                |
| GET    | /dashboard  | Mostrar dashboard de usuario  |
| GET    | /logout     | Cerrar sesión                |

## Seguridad

- Contraseñas almacenadas con hash bcrypt  
- Sesiones gestionadas con express-session y almacenadas en MongoDB  
- Rutas privadas protegidas para usuarios autenticados

## Próximos pasos

- Implementar exploración de etapas históricas  
- Añadir sistema de comentarios y aportes  
- Integrar APIs externas (Wikipedia, YouTube)  
- Automatización de testing con Playwright  
- Despliegue en Render o Railway

## Contacto

Juan Leites - [LinkedIn](https://www.linkedin.com/in/juanleites)  
Email: jplmontevideo@gmail.com

---

*Proyecto en desarrollo como parte de formación en desarrollo web y testing automatizado.*
