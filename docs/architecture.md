# Architecture Document

# Interactive 3D Portfolio

Version: 1.0

---

# 1. Purpose

This document defines the software architecture of the Interactive 3D Portfolio.

Unlike the PRD, this document does not describe user-facing behaviour.

Instead, it specifies how the software should be organized internally.

The objective is to create an architecture that remains maintainable, scalable and extensible throughout the lifetime of the project.

Every implementation must follow this architecture unless explicitly modified by the project owner.

---

# 2. Architectural Philosophy

The application should behave like a modern software product rather than a traditional website.

Every major feature should exist as an independent system.

Systems should communicate through clearly defined interfaces.

No feature should directly manipulate unrelated systems.

The architecture should prioritize:

• Separation of concerns

• Modularity

• Scalability

• Maintainability

• Predictability

• Testability

---

# 3. High-Level System Architecture

Application

│

├── Asset System

├── Scene System

├── Camera System

├── Interaction System

├── Desktop System (DeepOS)

├── Browser System

├── Search System

├── Portfolio Content System

├── Animation System

├── Environment System

├── Audio System

├── Theme System

└── Future Systems

Every system should remain isolated.

Systems communicate through shared state and events rather than direct dependencies.

---

# 4. Application Layers

The application is divided into five primary layers.

Layer 1

Presentation

Responsible for:

React Components

UI

Rendering

---

Layer 2

Interaction

Responsible for:

Mouse

Keyboard

Hover

Selection

Dragging

Shortcuts

---

Layer 3

Application Logic

Responsible for:

Desktop

Browser

Search

Portfolio

Window Manager

---

Layer 4

Shared Services

Responsible for:

Animations

Assets

Audio

Configuration

State

Events

---

Layer 5

Data

Responsible for:

Portfolio Data

Project Metadata

Search Index

Configuration Files

Application Registry

No presentation component should directly manipulate data storage.

---

# 5. Folder Structure

The project should follow feature-first organization.

src/

assets/

components/

systems/

hooks/

store/

services/

utils/

types/

styles/

config/

constants/

data/

pages/

public/

docs/

Each directory should have a single responsibility.

---

# 6. Asset System

Responsibilities

Loading GLB models

Loading HDRIs

Loading Textures

Loading Icons

Loading Fonts

Loading Audio

Asset Caching

Asset Registry

Loading Progress

Error Recovery

The asset system should expose loaded assets through reusable hooks.

---

# 7. Scene System

The Scene System manages:

Workspace

Lighting

Environment

Object References

Interaction Layers

Render Settings

Camera Targets

The Scene System should never contain application logic.

It only represents the 3D world.

---

# 8. Camera System

The Camera System is a finite state machine.

Named camera states include:

Landing

Idle

Desk

Monitor

Desktop

Browser

Portfolio

Settings

Future

Every camera state defines:

Position

Rotation

Target

FOV

Transition Duration

Transition Curve

No component should directly animate the camera.

Instead:

Request Camera State

↓

Camera Manager

↓

Animation

↓

Completion Event

---

# 9. Interaction System

Every interactable object registers itself.

Objects include:

Monitor

Desktop Icons

Taskbar

Browser

Buttons

Windows

Future Objects

The interaction system emits events.

Examples:

Hover Started

Hover Ended

Clicked

Double Clicked

Dragged

Focused

Blurred

Other systems subscribe to these events.

---

# 10. Animation System

Animations are centralized.

Animation Categories

Camera

Boot

Desktop

Windows

Browser

Search

Results

Portfolio

Transitions

Loading

Hover

Every animation should be reusable.

No duplicated animation timelines.

---

# 11. Environment System

The environment should remain independent of the Blender scene.

Responsibilities include:

HDRIs

Sky

Weather

Fog

Particles

Ambient Light

Sun

Moon

Clouds

Future Seasons

The Blender file should never contain environment-specific logic.

---

# 12. DeepOS

DeepOS behaves as an operating system.

It contains:

Desktop

Taskbar

Applications

Window Manager

Notifications

Wallpaper

Clock

Settings

DeepOS should never directly manage application logic.

Applications register themselves.

---

# 13. Window Manager

Every application opens inside a managed window.

Window State includes:

Position

Size

Focus

Visibility

Minimized

Maximized

Closed

History

The Window Manager controls:

Opening

Closing

Dragging

Focus

Stack Order

Window Animations

Applications never control themselves directly.

---

# 14. Browser System

The Browser System contains:

Navigation

History

Tabs

Address Bar

Search

Rendering

Portfolio Viewer

Internal Routing

Future Downloads

Future Extensions

Browser should function independently from DeepOS.

---

# 15. Search Engine

Search is entirely local.

Search indexes structured metadata.

Each searchable page exposes:

Title

Keywords

Aliases

Category

Priority

Tags

Route

Description

Search supports:

Partial Matching

Synonyms

Misspellings

Related Results

Ranking

Search never queries external services.

---

# 16. Portfolio Content

Portfolio content is data-driven.

Every page should be generated from structured content.

Examples:

About

Projects

Skills

Experience

Education

Resume

Achievements

Contact

This allows future filtering and search.

---

# 17. Shared State

Global state should remain small.

Suggested stores include:

Application

Camera

Desktop

Browser

Search

Environment

Audio

Loading

Theme

Future

Each store owns only its own domain.

Avoid one massive store.

---

# 18. Event System

Systems communicate through events.

Examples:

Scene Ready

Monitor Activated

Boot Finished

Browser Opened

Search Submitted

Window Focus Changed

Portfolio Loaded

Weather Changed

Events reduce coupling.

---

# 19. Configuration

Magic numbers should never exist.

Configurable values include:

Animation Speed

Camera Positions

Colors

Shadows

Fonts

Environment

Window Sizes

Spacing

Transitions

Every configurable value belongs inside config files.

---

# 20. Logging

Development logging should be structured.

Categories include:

Scene

Camera

Assets

Desktop

Browser

Search

Animations

Performance

Logs should assist debugging.

Production should remove unnecessary logs.

---

# 21. Error Handling

Every system should fail gracefully.

Examples:

Missing Model

↓

Fallback UI

Missing Texture

↓

Fallback Material

Failed Search

↓

Empty State

No runtime failure should crash the application.

---

# 22. Performance

Architecture decisions should prioritize:

Minimal rerenders

Lazy Loading

Asset Compression

GPU Efficiency

Draw Call Reduction

Code Splitting

Texture Streaming

Frustum Culling

Every new feature should consider its performance impact.

---

# 23. Future Compatibility

The architecture should already support:

Weather

Night Mode

AI Assistant

Terminal

Music Player

Interactive Objects

Dynamic Wallpapers

Analytics

Localization

Achievements

Without requiring architectural rewrites.

New features should extend existing systems.

They should not replace them.

---

# 24. Final Principle

Every engineering decision should answer one question:

"Does this make the architecture easier to maintain six months from now?"

If the answer is no, the implementation should be reconsidered.

Long-term maintainability always takes precedence over short-term convenience.