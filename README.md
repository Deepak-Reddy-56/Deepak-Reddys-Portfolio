# Deepak Reddy — Interactive Portfolio

An interactive software engineering portfolio presented through a custom 3D workspace and a lightweight, editorial desktop interface.

The experience is intentionally restrained: warm neutrals, expressive typography, purposeful motion and project-led storytelling. The 3D workspace is the entry point; the work itself stays fast, readable HTML rather than being rendered as 3D objects.

## Current experience

- A Three.js / React Three Fiber workspace with an interactive monitor.
- DeepOS, a custom desktop interface inside the monitor.
- Three project dossiers with context, approach, engineering notes and repository links.
- Profile and contact panels.
- Framer Motion transitions with reduced-motion support.
- Keyboard dismissal, focus management and semantic dialog roles.

## Technology

| Area | Technology |
|---|---|
| UI | React 19, TypeScript |
| Build | Vite |
| Styling | Tailwind CSS 4, custom CSS design tokens |
| UI motion | Framer Motion |
| 3D | Three.js, React Three Fiber, React Three Drei |
| Camera timelines | GSAP reserved for camera choreography where needed |
| Shared state | Zustand (only where cross-system state is required) |
| Hosting | Vercel |
| Source control | GitHub |

## Local development

Use Node.js 22.x and npm.

```bash
git clone https://github.com/Deepak-Reddy-56/Deepak-Reddys-Portfolio.git
cd Deepak-Reddys-Portfolio
npm ci
npm run dev
```

Vite prints the local development URL in the terminal.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

The production output is generated in `dist/`.

## Project structure

```text
src/
├── os/
│   ├── Desktop.tsx             # DeepOS desktop experience
│   ├── PortfolioPanel.tsx      # Project, profile and contact dialogs
│   ├── portfolioData.ts        # Typed portfolio content
│   └── deepos.css              # Editorial interface and motion states
├── scene/
│   └── Workspace.tsx           # Canonical workspace GLB and monitor target
├── systems/
│   ├── camera/                  # Named camera states and transitions
│   ├── input/                   # Pointer and keyboard input pipeline
│   ├── interaction/             # Interactable registry and event flow
│   └── scene-interaction/       # Scene-to-interaction bridge
└── styles/
    └── globals.css
assets/
├── models/workspace.glb        # Runtime 3D workspace
└── workspace.blend             # Editable Blender source
docs/                            # Product and engineering documentation
```

## Content updates

Project and profile content lives in `src/os/portfolioData.ts`. Keep claims tied to the corresponding repository or project documentation. Do not add invented performance metrics, customer counts, production usage or outcomes.

The public contact link currently points to the GitHub profile. Add other contact destinations only after confirming the exact public URLs.

## Deployment on Vercel

1. Import `Deepak-Reddy-56/Deepak-Reddys-Portfolio` into Vercel.
2. Select **Vite** as the framework preset.
3. Keep the project root as the repository root.
4. Set the install command to `npm ci`.
5. Set the build command to `npm run build`.
6. Set the output directory to `dist`.
7. Deploy a preview from the feature branch before promoting a reviewed commit to production.

No backend service or runtime environment secret is required by the current portfolio UI.

## Performance considerations

- The workspace GLB is currently approximately 32 MB. It should be measured and optimized (geometry compression, texture sizing and draw-call review) before treating the 3D experience as fully production-ready.
- The portfolio UI uses HTML/CSS inside the existing monitor so the content is not dependent on additional 3D geometry.
- Google Fonts are loaded with system fallbacks. Self-host them if the final performance/privacy budget requires it.
- Test the experience on a low-power laptop as well as a modern desktop.
- Keep a usable fallback or bypass path for visitors whose browser cannot render WebGL.

## Development approach

The project is developed milestone by milestone. Preserve existing scene, camera and interaction systems unless a change is explicitly planned and reviewed. Append milestone history to `docs/project_log.md`; do not rewrite historical entries.
