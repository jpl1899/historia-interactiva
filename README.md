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


## Project Structure

```text
aicode-starter/
│
├── .context/
│   │
│   ├── README.md
│   │
│   ├── idea/
│   │   ├── README.md
│   │   ├── business-model.md
│   │   ├── market-context.md
│   │   └── legacy-analysis.md
│   │
│   ├── PRD/
│   │   ├── README.md
│   │   ├── executive-summary.md
│   │   ├── user-personas.md
│   │   ├── mvp-scope.md
│   │   └── user-journeys.md
│   │
│   ├── SRS/
│   │   ├── README.md
│   │   ├── functional-specs.md
│   │   ├── non-functional-specs.md
│   │   ├── architecture-specs.md
│   │   └── api-contracts.yaml
│   │
│   ├── PBI/
│   │   ├── README.md
│   │   ├── epic-tree.md
│   │   │
│   │   └── epics/
│   │       │
│   │       └── EPIC-{PROYECTO}-{NUM}-{nombre}/
│   │           │
│   │           ├── epic.md
│   │           ├── feature-test-plan.md
│   │           ├── feature-implementation-plan.md
│   │           │
│   │           └── stories/
│   │               │
│   │               └── STORY-{PROYECTO}-{NUM}-{nombre}/
│   │                   │
│   │                   ├── story.md
│   │                   ├── test-cases.md
│   │                   └── implementation-plan.md
│   │
│   └── guidelines/
│       │
│       ├── README.md
│       │
│       ├── implementation-workflow.md
│       ├── code-standards.md
│       ├── error-handling.md
│       ├── context-loading.md
│       ├── mcp-usage-tips.md
│       │
│       └── TAE/
│           ├── README.md
│           ├── test-strategy.md
│           ├── kata-architecture.md
│           └── automation-standards.md
│
├── .prompts/
│   │
│   ├── README.md
│   │
│   ├── fase-1-constitution/
│   │   ├── business-model.md
│   │   └── market-context.md
│   │
│   ├── fase-2-architecture/
│   │   ├── prd-executive-summary.md
│   │   ├── prd-user-personas.md
│   │   ├── prd-mvp-scope.md
│   │   ├── prd-user-journeys.md
│   │   ├── srs-functional-specs.md
│   │   ├── srs-non-functional-specs.md
│   │   ├── srs-architecture-specs.md
│   │   └── srs-api-contracts.md
│   │
│   ├── fase-3-infrastructure/
│   │   ├── README.md
│   │   ├── backend-setup.md
│   │   └── frontend-setup.md
│   │
│   ├── fase-4-specification/
│   │   ├── pbi-product-backlog.md
│   │   └── pbi-add-feature.md
│   │
│   ├── fase-5-shift-left-testing/
│   │   ├── feature-test-plan.md
│   │   └── story-test-cases.md
│   │
│   ├── fase-6-planning/
│   │   ├── feature-implementation-plan.md
│   │   └── story-implementation-plan.md
│   │
│   ├── fase-7-implementation/
│   │   ├── implement-story.md
│   │   ├── continue-implementation.md
│   │   ├── fix-issues.md
│   │   └── unit-testing.md
│   │
│   ├── fase-8-code-review/
│   │   ├── review-pr.md
│   │   └── setup-linting.md
│   │
│   ├── fase-9-deployment-staging/
│   │   ├── ci-cd-setup.md
│   │   ├── environment-config.md
│   │   └── deploy-to-staging.md
│   │
│   ├── fase-10-exploratory-testing/
│   │   ├── smoke-test.md
│   │   ├── exploratory-test.md
│   │   └── bug-report.md
│   │
│   ├── fase-11-test-documentation/
│   │   ├── test-analysis.md
│   │   ├── test-prioritization.md
│   │   └── test-documentation.md
│   │
│   ├── fase-12-test-automation/
│   │   ├── kata-framework-setup.md
│   │   ├── automation-e2e-test.md
│   │   └── automation-integration-test.md
│   │
│   ├── fase-13-production-deployment/
│   │   ├── pre-deploy-checklist.md
│   │   ├── deploy-to-production.md
│   │   └── rollback-plan.md
│   │
│   ├── fase-14-shift-right-testing/
│   │   ├── monitoring-setup.md
│   │   ├── smoke-tests.md
│   │   └── incident-response.md
│   │
│   ├── git-flow.md
│   ├── git-conflict-fix.md
│   ├── us-dev-workflow.md
│   └── us-qa-workflow.md
│
└── docs/
    │
    ├── README.md
    │
    ├── ai-driven-software-project-blueprint.md
    ├── kata-test-architecture.md
    │
    └── MCP Configuration
        ├── mcp-config-general.md
        ├── mcp-config-claudecode.md
        ├── mcp-config-geminicli.md
        ├── mcp-config-copilotcli.md
        ├── mcp-config-vscode.md
        └── mcp-builder-strategy.md
```
