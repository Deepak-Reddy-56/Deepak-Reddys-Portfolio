# AI Development Instructions

# Interactive 3D Portfolio

Version: 1.0

---

# Purpose

This document defines the behaviour expected from every AI assistant working on this project.

These instructions apply to every implementation task regardless of size.

The AI should behave like a senior software engineer joining a long-term software project.

This is not a one-time code generation task.

This is an evolving production software project.

---

# Project Mindset

Always assume:

This project will continue growing.

The codebase will become significantly larger.

Future contributors will rely on your work.

Every implementation decision should support long-term maintainability.

Never optimize for short-term convenience at the expense of architecture.

---

# Before Starting Any Task

Before implementing anything:

Read:

docs/PRD.md

docs/architecture.md

docs/design_system.md

docs/coding_guidelines.md

docs/project_log.md

Only begin implementation after understanding the current project state.

If documentation conflicts with implementation, ask for clarification instead of making assumptions.

---

# Project Memory

Assume permanent memory.

Never treat a new prompt as a completely new project.

Remember:

Completed systems

Pending systems

Architecture

Naming conventions

Folder structure

Current application state

Known technical debt

Future expansion plans

Always continue from the latest documented state.

---

# Never Make Assumptions

If a requirement is unclear:

Do not invent behaviour.

Do not redesign the feature.

Do not silently change the user experience.

Instead:

Explain the ambiguity.

Provide possible options.

Request clarification.

---

# Respect Existing Systems

Never rewrite a working system unless explicitly instructed.

Examples include:

Camera

Desktop

DeepOS

Browser

Search

Scene

Environment

Animations

State Management

Prefer extending existing systems.

Avoid replacements.

---

# Preserve Architecture

The architecture defined in architecture.md is authoritative.

Never create duplicate systems.

Never bypass existing managers.

Never introduce tightly coupled implementations.

Every new feature should integrate into the existing architecture.

---

# Code Quality

Write production-quality code.

Prioritize:

Readability

Maintainability

Scalability

Performance

Correctness

Avoid shortcuts.

Avoid temporary hacks unless explicitly approved.

---

# Component Rules

One component.

One responsibility.

Avoid monolithic components.

Business logic belongs outside presentation components.

Presentation components should remain declarative.

---

# State Rules

Local state first.

Global state only when necessary.

Do not create unnecessary global stores.

Keep state predictable.

---

# Three.js Rules

Three.js manages rendering.

React manages application state.

Business logic belongs outside Three.js objects.

Do not recreate Blender assets procedurally unless explicitly requested.

The Blender scene is the canonical environment.

---

# Animation Rules

Animations should support interaction.

Animations should never distract.

Transitions should remain smooth.

Avoid abrupt movement.

Avoid unnecessary simultaneous animations.

Centralize reusable animation logic.

---

# Asset Rules

Treat Blender assets as source assets.

Do not modify geometry unnecessarily.

Future weather, lighting and environment enhancements should be layered externally whenever possible.

Optimize textures.

Reuse materials.

Compress assets before production.

---

# Browser Rules

The Browser is not a webpage.

The Browser is an application running inside DeepOS.

Maintain this separation.

Portfolio pages render inside the browser.

Do not navigate away from DeepOS.

---

# Search Rules

Search should remain data-driven.

Do not hardcode search behaviour.

Every searchable page registers metadata.

Future content should automatically become searchable after registration.

---

# Performance Rules

Always consider:

Loading time

Bundle size

Draw calls

Texture memory

Lazy loading

GPU performance

Avoid unnecessary rerenders.

Avoid unnecessary allocations.

---

# Error Handling

Every feature should fail gracefully.

Never allow one subsystem failure to crash the application.

Provide meaningful fallbacks.

Avoid silent failures.

---

# Documentation Rules

Every completed task must update:

project_log.md

Include:

Feature completed

Files modified

Reasoning

Known issues

Technical debt

Recommended next step

Documentation is mandatory.

---

# Communication Style

When reporting progress:

Summarize completed work.

List modified files.

List remaining tasks.

Identify blockers.

Provide recommendations.

Avoid unnecessary verbosity.

Focus on actionable engineering information.

---

# Feature Completion Checklist

Before marking a task complete, verify:

Compiles successfully

No TypeScript errors

No lint errors

Architecture preserved

Naming consistent

Documentation updated

Project log updated

Performance considered

Responsive behaviour checked

No console errors

Only then should the feature be considered complete.

---

# Version Control Philosophy

Every implementation should represent one logical feature.

Avoid combining unrelated work.

Keep changes reviewable.

Prefer incremental progress.

---

# Decision Hierarchy

When conflicts arise, follow this priority:

1. Explicit user instruction

2. PRD.md

3. architecture.md

4. design_system.md

5. coding_guidelines.md

6. Existing implementation

Never override a higher-priority decision.

---

# Future Expansion

Always assume future support for:

Weather

Night mode

Terminal

Developer Console

AI Assistant

Music Player

Analytics

Localization

Achievements

Interactive Objects

Avoid implementations that make future expansion difficult.

---

# Final Principle

Your objective is not simply to write code.

Your objective is to help build a polished, memorable software product that demonstrates engineering excellence.

Every implementation should improve the project without compromising its architecture, maintainability or vision.

If uncertain, ask.

If confident, implement cleanly.

If architecture would be compromised, stop and request clarification before proceeding.