# Historia Interactiva
 

Una plataforma educativa para aprender Historia de manera estructurada, interactiva y accesible.

## 🚀 Descripción

**Historia Interactiva** es un proyecto web que recorre las etapas clave de la Historia, desde el Paleolítico hasta la Edad Contemporánea, integrando recursos digitales, enlaces externos, y eventualmente APIs públicas relacionadas.

Incluye:

- Registro e inicio de sesión de usuarios.
- Sección de comentarios y discusión.
- Contenido basado en un plan de estudio curado.
- Diseño centrado en la experiencia de aprendizaje.

## 🛠️ Tecnologías utilizadas

- **Frontend:**
  - HTML5, CSS3, EJS
  - JavaScript (ES6+)
  - Bootstrap 

- **Backend:**
  - Node.js
  - Express.js

- **Base de datos:**
  - MongoDB con Mongoose

- **Testing:**
  - Postman (API testing)
  - Playwright (automatización UI - por implementar)

- **Control de versiones:**
  - Git & GitHub

## 📦 Estado del proyecto

> 🔧 En desarrollo — primera etapa: estructura, login y rutas básicas.

## 🌐 Deployment

Se planea hostear en:
- GitHub Pages (Frontend)
- Render / Railway / Vercel / Cyclic (Backend)


Historia-interavtiva/
│
├── .context/                           Para: Documentacion de ingenieria de contexto (IA lee esto)
│   │
│   ├── README.md                       Para: Indice maestro del proyecto, punto de entrada
│   │
│   ├── idea/                           Para: FASE 1 - Constitucion del negocio
│   │   ├── README.md                   Para: Explicar Fase 1
│   │   ├── business-model.md           Para: Business Model Canvas (9 bloques)
│   │   ├── market-context.md           Para: Analisis de mercado y competencia
│   │   └── legacy-analysis.md          Para: Analisis de codigo existente (solo proyectos legacy)
│   │
│   ├── PRD/                            Para: FASE 2 - Product Requirements (vision de negocio)
│   │   ├── README.md                   Para: Explicar que es PRD
│   │   ├── executive-summary.md        Para: Problem statement + KPIs + target users
│   │   ├── user-personas.md            Para: 2-3 perfiles de usuarios detallados
│   │   ├── mvp-scope.md                Para: Epicas y user stories del MVP
│   │   └── user-journeys.md            Para: Flujos de usuario (happy path + edge cases)
│   │
│   ├── SRS/                            Para: FASE 2 - Software Requirements (vision tecnica)
│   │   ├── README.md                   Para: Explicar que es SRS
│   │   ├── functional-specs.md         Para: Requerimientos funcionales (FRs mapeados 1:1)
│   │   ├── non-functional-specs.md     Para: Performance, security, scalability
│   │   ├── architecture-specs.md       Para: C4 diagrams, ERD, tech stack
│   │   └── api-contracts.yaml          Para: OpenAPI 3.0 spec de todos los endpoints
│   │
│   ├── PBI/                            Para: FASES 4-6 - Product Backlog (tareas concretas)
│   │   ├── README.md                   Para: Explicar estructura de PBI
│   │   ├── epic-tree.md                Para: Vista high-level de todas las epicas
│   │   │
│   │   └── epics/                      Para: Contener todas las epicas del proyecto
│   │       │
│   │       └── EPIC-{PROYECTO}-{NUM}-{nombre}/  Para: Una epica (ej: EPIC-MYM-13-mentor-discovery)
│   │           │
│   │           ├── epic.md             Para: FASE 4 - Descripcion, scope, criteria
│   │           ├── feature-test-plan.md   Para: FASE 5 - Plan de pruebas a nivel feature
│   │           ├── feature-implementation-plan.md  Para: FASE 6 - Decisiones tecnicas de la epica
│   │           │
│   │           └── stories/            Para: Contener todas las stories de esta epica
│   │               │
│   │               └── STORY-{PROYECTO}-{NUM}-{nombre}/  Para: Una story (ej: STORY-MYM-14-view-mentors)
│   │                   │
│   │                   ├── story.md       Para: FASE 4 - User story + acceptance criteria
│   │                   ├── test-cases.md  Para: FASE 5 - 6+ test cases detallados
│   │                   └── implementation-plan.md  Para: FASE 6 - Plan tecnico step-by-step
│   │
│   └── guidelines/                     Para: FASES 7-14 - Reference material para la IA
│       ├── README.md                   Para: Explicar guidelines y su uso
│       │
│       ├── Workflow y Estandares:
│       ├── implementation-workflow.md  Para: Workflow paso a paso de implementacion
│       ├── code-standards.md           Para: DRY, naming, TypeScript strict
│       ├── error-handling.md           Para: NO hardcodear, error classes, logging
│       ├── context-loading.md          Para: Que archivos leer en cada fase
│       ├── mcp-usage-tips.md           Para: Cuando usar Supabase/Atlassian MCP
│       │
│       └── TAE/                        Para: FASE 12 - Test Automation Engineering
│           ├── README.md               Para: Explicar TAE y workflow de uso
│           ├── test-strategy.md        Para: Estrategia general de testing del proyecto
│           ├── kata-architecture.md    Para: Arquitectura KATA adaptada al proyecto
│           ├── automation-standards.md Para: Estandares de codigo para tests
│           └── ...
│
├── .prompts/                           Para: Prompts copy-paste para generar documentacion
│   │
│   ├── README.md                       Para: Instrucciones de como usar los prompts
│   │
│   ├── fase-1-constitution/            Para: Generar docs de negocio
│   │   ├── business-model.md           Para: Prompt de Business Model Canvas
│   │   └── market-context.md           Para: Prompt de analisis de mercado
│   │
│   ├── fase-2-architecture/            Para: Generar specs de producto y arquitectura
│   │   ├── prd-executive-summary.md    Para: Prompt de executive summary
│   │   ├── prd-user-personas.md        Para: Prompt de user personas
│   │   ├── prd-mvp-scope.md            Para: Prompt de epicas iniciales
│   │   ├── prd-user-journeys.md        Para: Prompt de user journeys
│   │   ├── srs-functional-specs.md     Para: Prompt de FRs
│   │   ├── srs-non-functional-specs.md Para: Prompt de NFRs
│   │   ├── srs-architecture-specs.md   Para: Prompt de arquitectura + C4
│   │   └── srs-api-contracts.md        Para: Prompt de OpenAPI spec
│   │
│   ├── fase-3-infrastructure/          Para: Setup tecnico base (una sola vez)
│   │   ├── README.md                   Para: Guia de la fase
│   │   ├── backend-setup.md            Para: DB schemas + API boilerplate
│   │   └── frontend-setup.md           Para: Design System + proyecto frontend
│   │
│   ├── fase-4-specification/           Para: Generar product backlog (PBI)
│   │   ├── pbi-product-backlog.md      Para: Setup MVP - epic-tree + epicas/stories (Jira-First)
│   │   └── pbi-add-feature.md          Para: Post-MVP - Analiza + crea features (3 niveles)
│   │
│   ├── fase-5-shift-left-testing/      Para: Generar docs de testing
│   │   ├── feature-test-plan.md        Para: Prompt de plan de pruebas (epica)
│   │   └── story-test-cases.md         Para: Prompt de test cases (story)
│   │
│   ├── fase-6-planning/                Para: Generar planes de implementacion
│   │   ├── feature-implementation-plan.md Para: Prompt de plan tecnico (epica)
│   │   └── story-implementation-plan.md   Para: Prompt de plan tecnico (story)
│   │
│   ├── fase-7-implementation/          Para: Guias de implementacion de codigo
│   │   ├── README.md                   Para: Guia de uso de prompts de implementacion
│   │   ├── implement-story.md          Para: Implementar story desde cero
│   │   ├── continue-implementation.md  Para: Retomar story pausada
│   │   ├── fix-issues.md               Para: Debuggear y corregir errores
│   │   └── unit-testing.md             Para: Agregar unit tests
│   │
│   ├── fase-8-code-review/             Para: Guias de code review estatico
│   │   ├── README.md                   Para: Guia de uso de prompts de review
│   │   ├── review-pr.md                Para: Review completo de codigo
│   │   └── setup-linting.md            Para: Configurar ESLint + Prettier
│   │
│   ├── fase-9-deployment-staging/      Para: Deploy a ambiente de pruebas
│   │   ├── README.md                   Para: Guia de la fase
│   │   ├── ci-cd-setup.md              Para: GitHub Actions workflow
│   │   ├── environment-config.md       Para: Configurar secrets por ambiente
│   │   └── deploy-to-staging.md        Para: Deploy automatizado
│   │
│   ├── fase-10-exploratory-testing/    Para: Testing manual rapido
│   │   ├── README.md                   Para: Guia de la fase
│   │   ├── smoke-test.md               Para: Validar deployment
│   │   ├── exploratory-test.md         Para: Exploracion profunda con Playwright MCP
│   │   └── bug-report.md               Para: Reportar bugs
│   │
│   ├── fase-11-test-documentation/     Para: Documentacion de tests en Jira
│   │   ├── README.md                   Para: Guia de la fase
│   │   ├── test-analysis.md            Para: Analizar candidatos para regression
│   │   ├── test-prioritization.md      Para: Priorizar tests
│   │   └── test-documentation.md       Para: Crear Test issues en Jira
│   │
│   ├── fase-12-test-automation/        Para: Automation con KATA framework
│   │   ├── README.md                   Para: Guia de la fase
│   │   ├── kata-framework-setup.md     Para: Setup inicial KATA
│   │   ├── automation-e2e-test.md      Para: Implementar tests E2E
│   │   └── automation-integration-test.md Para: Implementar tests API
│   │
│   ├── fase-13-production-deployment/  Para: Deploy a produccion
│   │   ├── README.md                   Para: Guia de la fase
│   │   ├── pre-deploy-checklist.md     Para: Validaciones pre-deploy
│   │   ├── deploy-to-production.md     Para: Estrategia de deploy
│   │   └── rollback-plan.md            Para: Plan de contingencia
│   │
│   ├── fase-14-shift-right-testing/    Para: Monitoring y observabilidad
│   │   ├── README.md                   Para: Guia de la fase
│   │   ├── monitoring-setup.md         Para: Configurar Sentry/logs
│   │   ├── smoke-tests.md              Para: Tests post-deploy
│   │   └── incident-response.md        Para: Playbook de incidentes
│   │
│   ├── git-flow.md                     Para: Estrategia de branching
│   ├── git-conflict-fix.md             Para: Resolver conflictos de merge
│   ├── us-dev-workflow.md              Para: Workflow completo de desarrollo (Fases 6-9)
│   └── us-qa-workflow.md               Para: Workflow completo de QA (Fases 10-12)
│
└── docs/                               Para: Documentacion maestra del sistema
    ├── README.md                       Para: Indice de toda la documentacion
    │
    ├── Arquitectura y Blueprint
    │   ├── ai-driven-software-project-blueprint.md  Para: Metodologia de 14 fases
    │   └── kata-test-architecture.md   Para: Framework de testing KATA
    │
    └── MCP Configuration (Model Context Protocol)
        ├── mcp-config-general.md       Para: Conceptos fundamentales de MCP
        ├── mcp-config-claudecode.md    Para: Configuracion Claude Code
        ├── mcp-config-geminicli.md     Para: Configuracion Gemini CLI
        ├── mcp-config-copilotcli.md    Para: Configuracion GitHub Copilot CLI
        ├── mcp-config-vscode.md        Para: Configuracion VS Code + Copilot
        └── mcp-builder-strategy.md     Para: Optimizacion de tokens (session-based)

## 📄 Licencia

MIT License

---

**Desarrollado por [Juan Leites](www.linkedin.com/in/juan-pablo-leites-738b0696)** 
