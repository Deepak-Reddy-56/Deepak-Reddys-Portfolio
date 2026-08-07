# Project Log

## Project Status

Current Phase:
Planning Complete

Next Phase:
Project Initialization

Completed:
- Blender workspace (initial version)
- Documentation suite
- Product architecture
- Design language
- Development guidelines

Pending:
- Project initialization
- React setup
- React Three Fiber integration
- Blender asset import
- Camera system
- Intro animation
- DeepOS
- Browser
- Search engine

Known Issues:
None

Notes:
This project should always prioritize experience over feature count.

---

## 2026-08-02 — Phase 1: Project Initialization

Task Completed:
- Initialized the Vite, React, TypeScript, Tailwind, and ESLint toolchain.
- Added the documented core runtime dependencies without creating application systems.
- Added the minimum React mount required to validate startup, build, linting, and type checking.

Files Created:
- `.gitignore`
- `index.html`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `eslint.config.js`
- `src/main.tsx`
- `src/styles/globals.css`
- `src/vite-env.d.ts`
- `package-lock.json`

Files Modified:
- `package.json`

Reasoning:
- Established a strict, reproducible frontend toolchain before beginning any feature system.
- Kept the application bootstrap intentionally empty so that Phase 1 does not introduce UI, state, routing, rendering, or placeholder architecture.

Architectural Decisions:
- React is mounted directly from `src/main.tsx`; no application component or system boundary has been introduced yet.
- Tailwind uses its Vite integration and a single stylesheet import. Design tokens remain deferred until their values are specified for a UI milestone.
- The documented 3D, state, and animation libraries are installed but not imported or initialized.

Verification:
- Development server started successfully and returned HTTP 200 from `http://127.0.0.1:5173/`.
- Production build completed successfully.
- Linting completed successfully.
- Type checking completed successfully.

Known Issues:
- The canonical Blender source asset and exported runtime GLB are not present in the repository; they are required before Phase 2.

Technical Debt:
- None introduced in this milestone.

Recommended Next Step:
- Review and test the Phase 1 bootstrap. After explicit approval, provide or confirm the canonical workspace GLB and begin Phase 2: Import Blender Scene.

---

## 2026-08-03 — Phase 4: Camera behaviour foundation

Task Completed:
- Implemented the Camera Behaviour architecture foundation: manager, registry, and request API.
- Registered default camera states (Landing, Idle, Desk, Monitor, Desktop, Browser) with the approved inspection camera as the Landing/initial state.

Files Created:
- `src/systems/camera/types.ts`
- `src/systems/camera/cameraConfig.ts`
- `src/systems/camera/registry.ts`
- `src/systems/camera/cameraController.ts`
- `src/systems/camera/CameraManager.tsx`

Files Modified:
- `src/App.tsx` (now mounts `CameraManager`)
- `src/systems/camera/CameraSystem.tsx` (now only exports the component and imports `INITIAL_CAMERA`)

Reasoning:
- Establish a minimal, extensible camera behaviour surface so other systems can request camera states without directly manipulating the camera.
- Preserve the approved static inspection camera exactly as the canonical initial state.
- Keep the implementation intentionally simple: immediate application of registered states without interpolation or animation.

Verification:
- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm run build` passed.
- `npm run dev` served the app and the rendered view remained visually identical to the approved Phase 2 composition.

Known Issues / Notes:
- No runtime errors observed. Upstream Three.js deprecation warnings remain and are non-blocking.

Recommended Next Step:
- Phase 5: Camera Transitions — introduce a `CameraController` that consumes the registry and performs smooth interpolation between named states. Keep animation logic internal and avoid external dependencies unless justified.

---

## 2026-08-04 — Phase 6: Scene ↔ Interaction Bridge

Task Completed:
- Implemented the Scene ↔ Interaction Bridge so scene objects can register declaratively without touching the Interaction Registry directly.
- Added the bridge context, hook, and target component to support lifecycle-managed registration for future scene objects.

Files Created:
- `src/systems/scene-interaction/types.ts`
- `src/systems/scene-interaction/bridgeContext.ts`
- `src/systems/scene-interaction/SceneInteractionBridge.tsx`
- `src/systems/scene-interaction/useSceneInteractionBridge.ts`
- `src/systems/scene-interaction/SceneInteractionTarget.tsx`

Files Modified:
- `src/App.tsx` (wraps the scene in `SceneInteractionBridgeProvider`)

Reasoning:
- Keep the Scene System and Interaction System independent while providing a single declarative bridge between them.
- Allow future scene objects to register stable interaction metadata through lifecycle-managed scene components.

Verification:
- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm run build` passed.
- `npm run dev` served the app and the rendered view remained visually identical to the approved Phase 5 composition.

Known Issues / Notes:
- No runtime errors observed. Upstream Three.js deprecation warnings remain and are non-blocking.

Recommended Next Step:
- Phase 7: Monitor Registration — register the canonical monitor through `SceneInteractionTarget` using a stable interaction ID and verify it appears in the Interaction Registry.


---

## 2026-08-04 — Phase 5: Interaction foundation

Task Completed:
- Implemented the Interaction foundation with a manager, registry, controller, and typed request/event interfaces.
- Established the registration lifecycle for future interactable objects without implementing any interaction behaviour.

Files Created:
- `src/systems/interaction/types.ts`
- `src/systems/interaction/registry.ts`
- `src/systems/interaction/controller.ts`
- `src/systems/interaction/InteractionManager.tsx`

Files Modified:
- `src/App.tsx` (now mounts `InteractionManager` alongside the camera system)

Reasoning:
- Provide a modular interaction surface that future systems can request and observe without direct coupling.
- Keep the interaction layer inert for now so the existing scene and camera remain visually unchanged.

Verification:
- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm run build` passed.
- `npm run dev` served the app and the rendered view remained visually identical to the approved Phase 2/3 composition.

Known Issues / Notes:
- No runtime errors observed. Upstream Three.js deprecation warnings remain and are non-blocking.

Recommended Next Step:
- Phase 6: Scene ↔ Interaction Bridge — add declarative scene registration so scene objects can register themselves with the interaction system through a dedicated bridge layer.

---

## 2026-08-04 — Phase 7: Monitor registration

Task Completed:
- Registered the canonical monitor through `SceneInteractionTarget` using a stable interaction ID.
- Verified the monitor registration appears in the Interaction Registry and remains lifecycle-managed through the Scene ↔ Interaction Bridge.

Files Modified:
- `src/scene/Workspace.tsx`

Reasoning:
- Establish the first concrete interactable target without introducing interaction behavior.
- Preserve the declarative scene-to-interaction registration path for future interactable objects.

Verification:
- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm run build` passed.
- `npm run dev` served the app and the rendered view remained visually identical to the approved composition.

Known Issues / Notes:
- No runtime errors observed. Upstream Three.js deprecation warnings remain and are non-blocking.

Recommended Next Step:
- Phase 8: Input System Foundation — establish the input pipeline that translates device events into abstract interaction requests without coupling to scene or camera logic.


## Phase 9 – Pointer Detection Foundation

### Objective
Implemented the first behavioral milestone by introducing pointer-based detection of registered interaction targets while preserving the existing system architecture. This milestone enables detection only; it does not introduce any visible interaction behavior.

### Files Created
- `src/systems/input/PointerDetection.tsx`

### Files Modified
- `src/App.tsx`

### Implementation Summary
- Added the `PointerDetection` system and mounted it alongside the existing Camera, Interaction, and Input systems.
- Implemented pointer raycasting using Three.js `Raycaster`.
- Used React Three Fiber's camera and normalized pointer coordinates to cast rays into the scene.
- Queried the Interaction Registry for registered interactables instead of relying on hard-coded scene objects.
- Resolved the stable interaction ID from the registered interactable.
- Emitted an abstract interaction request through the existing Interaction System when the pointer first intersected a registered target.
- Added internal state tracking to prevent duplicate interaction requests from being emitted every render frame while the pointer remained over the same object.

### Detection Pipeline

## Phase 10 – Hover Interaction Lifecycle

### Completed
- Added hover lifecycle management to the Interaction System.
- InteractionManager now tracks the currently hovered interaction target.
- Emits `hover` when the pointer enters a registered interactable.
- Emits `hoverEnd` when the pointer leaves a registered interactable.
- PointerDetection emits interaction requests only when the detected target changes.
- Removed direct Input → Interaction forwarding from InputManager, making PointerDetection the sole producer of interaction requests.
- Preserved the existing architecture and separation of concerns.

### Validation
- npm run typecheck
- npm run lint
- npm run build
- npm run dev
- Hover lifecycle verified manually.
- No visual regressions observed.

## Phase 11 – Click Interaction Foundation

### Completed
- Extended the Interaction System to support click interactions.
- InteractionManager now listens for pointer input events.
- Click interactions are emitted only when the primary mouse button is pressed while hovering a registered interactable.
- Reused the existing hover lifecycle to determine valid click targets.
- Extended the Input System with typed pointer payloads, including mouse button information.
- Strengthened input payload typing by introducing dedicated input payload interfaces.
- Disabled the browser context menu for the interactive scene to provide a consistent interaction experience.
- Preserved the existing system architecture and separation of concerns.

### Validation
- npm run typecheck
- npm run lint
- npm run build
- npm run dev
- Left-click interaction verified manually.
- Right-click ignored and browser context menu disabled.
- No visual regressions observed.

## Phase 12 – Focus Interaction Foundation

### Completed
- Added focus state management to the Interaction System.
- Introduced focused target tracking within InteractionManager.
- Click interactions now assign focus to interactables.
- Prevented duplicate focus events for already focused interactables.
- Prepared the interaction lifecycle for future blur transitions and multi-target interactions.
- Preserved the existing interaction architecture and event flow.

### Validation
- npm run typecheck
- npm run lint
- npm run build
- npm run dev
- Hover, click, focus and hoverEnd verified manually.
- Repeated clicks on the focused interactable do not emit duplicate focus events.
- No visual regressions observed.

## Phase 13 – Camera Request Integration

### Completed
- Connected the Interaction System to the Camera System.
- Camera requests are now issued on monitor click events.
- Separated camera requests from focus state changes, allowing repeated clicks to trigger camera requests without emitting duplicate focus events.
- Preserved the event-driven architecture between interaction and camera systems.
- Maintained separation of responsibilities between InteractionManager and CameraManager.

### Validation
- npm run typecheck
- npm run lint
- npm run build
- npm run dev
- Camera requests verified on every monitor click.
- Focus events emitted only on the initial focus transition.
- No visual regressions observed.

## Phase 15 – Data-Driven Camera Routing

### Completed
- Removed object-specific camera routing from the interaction pipeline.
- Extended interactable registrations with an optional `cameraState` property.
- Updated the Scene Interaction Bridge to forward camera state metadata.
- Assigned the Monitor interactable to the `Monitor` camera state.
- InteractionManager now requests camera states dynamically from interactable metadata instead of relying on hardcoded object names.
- Preserved the event-driven communication between the Interaction and Camera systems.

### Validation
- npm run typecheck
- npm run lint
- npm run build
- Verified monitor interaction correctly requests the configured camera state.
- Verified smooth camera transition remains functional after refactoring.