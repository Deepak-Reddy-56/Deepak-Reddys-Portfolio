# Coding Guidelines

# Interactive 3D Portfolio

Version: 1.0

---

# 1. Purpose

This document defines the engineering standards for the Interactive 3D Portfolio.

Every line of code written throughout the project should follow these guidelines.

The objective is to create a maintainable, scalable and production-quality codebase.

These guidelines apply equally to human contributors and AI-assisted development.

---

# 2. Engineering Philosophy

The project should be treated as production software.

Prioritize:

Readability

Maintainability

Scalability

Performance

Consistency

Correctness

Avoid writing code solely because it is shorter.

Prefer understandable code over clever code.

Future maintainability is more valuable than short-term implementation speed.

---

# 3. General Principles

Every file should have one clear responsibility.

Every function should solve one problem.

Every component should have one purpose.

Avoid unnecessary abstraction.

Avoid unnecessary complexity.

Prefer explicit code over implicit behaviour.

Document unusual implementation decisions.

---

# 4. File Organization

Each file should remain focused.

Recommended limits:

Components:
One primary responsibility.

Hooks:
One feature.

Utility files:
One category of utilities.

Configuration files:
One configuration domain.

Avoid "miscellaneous" files.

Avoid dumping unrelated utilities together.

---

# 5. Naming Conventions

Names should describe intent.

Components:

PascalCase

Example:

BrowserWindow

DesktopIcon

MonitorBoot

Hooks:

camelCase

Example:

useCamera

useDesktop

useSearch

Functions:

camelCase

Variables:

camelCase

Constants:

UPPER_SNAKE_CASE

Folders:

kebab-case or feature folders.

Choose one convention and use it consistently.

---

# 6. Component Rules

Components should remain small.

Avoid components exceeding roughly 300 lines without good reason.

Split responsibilities when necessary.

Presentation components should avoid business logic.

Business logic belongs in:

Hooks

Services

Stores

Utility modules

---

# 7. Hook Rules

Hooks should expose only public APIs.

Never expose unnecessary implementation details.

Hooks should remain reusable.

Avoid creating hooks that depend heavily on unrelated systems.

---

# 8. State Management

Local state first.

Global state only when necessary.

Do not move every value into Zustand.

Only global concerns belong in global state.

Examples:

Camera

Desktop

Search

Environment

Loading

Theme

Audio

Examples that should remain local:

Input fields

Dropdown visibility

Temporary UI state

Hover state

Local validation

---

# 9. Props

Keep props minimal.

Avoid passing large objects.

Prefer explicit properties.

Avoid deeply nested prop chains.

If multiple unrelated components require the same data, consider global state instead.

---

# 10. Styling

Use Tailwind CSS.

Avoid inline styles except for dynamic values.

Avoid duplicated utility combinations.

Extract reusable styling into components when appropriate.

Spacing should follow the design system.

Never hardcode arbitrary colors.

Use design tokens.

---

# 11. TypeScript

Avoid "any".

Prefer explicit interfaces.

Use descriptive type names.

Separate shared types into dedicated files.

Type safety is mandatory.

Suppressing TypeScript errors requires documented justification.

---

# 12. Comments

Comments should explain:

Why

Not:

What

Bad:

// increment counter

Good:

// Delay transition until monitor boot animation completes to preserve immersion.

Avoid redundant comments.

---

# 13. Error Handling

Never silently ignore errors.

Handle:

Asset failures

Search failures

Loading failures

Animation failures

Unexpected states

Provide graceful fallbacks.

---

# 14. Logging

Logs should be meaningful.

Examples:

Scene Loaded

Browser Started

Search Executed

Window Opened

Application Registered

Avoid excessive console output.

Production builds should remove development logs.

---

# 15. Performance

Performance is a feature.

Prefer:

Memoization

Lazy loading

Code splitting

Asset compression

Texture optimization

Efficient rendering

Avoid unnecessary rerenders.

Measure before optimizing.

---

# 16. React Rules

Prefer functional components.

Avoid class components.

Avoid deeply nested JSX.

Extract reusable sections.

Keep render methods readable.

---

# 17. Three.js Rules

The scene should remain declarative.

React manages state.

Three.js manages rendering.

Avoid mixing responsibilities.

Do not store application logic inside Three.js objects.

---

# 18. Animation Rules

Animations should remain reusable.

Create animation utilities.

Avoid duplicated timelines.

Every animation should have a purpose.

Avoid excessive simultaneous animations.

---

# 19. Accessibility

Support keyboard interaction.

Maintain focus visibility.

Provide descriptive labels where applicable.

Respect reduced motion preferences.

Readable contrast should always be maintained.

---

# 20. Asset Rules

Large assets should remain compressed.

Avoid unnecessary textures.

Prefer reusable materials.

Reuse geometry where possible.

Optimize before shipping.

---

# 21. Git Philosophy

Every commit should represent one logical change.

Avoid mixing unrelated changes.

Commit messages should be descriptive.

Examples:

feat(camera): implement cinematic intro

fix(browser): resolve search focus issue

refactor(window): simplify state handling

Avoid generic commit messages.

---

# 22. Documentation

Every major feature requires documentation updates.

When introducing:

New systems

Architectural changes

New stores

Configuration

Folder restructuring

Update:

architecture.md

project_log.md

Relevant documentation

Documentation is part of the implementation.

---

# 23. AI Collaboration Rules

When using AI assistance:

Never accept generated code blindly.

Review architecture.

Review performance.

Review consistency.

Review naming.

Review documentation.

AI accelerates implementation.

Human review ensures quality.

---

# 24. Definition of Done

A feature is considered complete only when:

Code compiles.

Types are correct.

Linting passes.

No console errors.

Documentation updated.

Project log updated.

Architecture remains consistent.

Performance impact evaluated.

User experience reviewed.

If any item is incomplete, the feature is not considered finished.

---

# 25. Final Engineering Principle

Every contributor should leave the project in a better state than they found it.

When adding new features:

Reduce complexity where possible.

Improve readability where practical.

Preserve architectural consistency.

Respect existing documentation.

The quality of the codebase is as important as the quality of the final user experience.