# Design System

# Interactive 3D Portfolio

Version: 1.0

---

# 1. Purpose

The Design System defines the visual language of the Interactive 3D Portfolio.

Its purpose is to ensure that every interface, interaction, animation, and visual element feels like part of one cohesive software product.

This document is the single source of truth for UI and UX consistency.

Every future component must follow these standards.

---

# 2. Design Philosophy

The portfolio follows five fundamental principles.

## Immersion

The visitor should forget they are browsing a website.

Every interaction should reinforce the illusion of using a real digital workspace.

---

## Simplicity

Interfaces should remain clean.

Remove unnecessary clutter.

Information should breathe.

Whitespace is intentional.

---

## Familiarity

The interface should feel intuitive.

Users should immediately understand interactions without needing explanations.

DeepOS should feel inspired by real operating systems while maintaining its own identity.

---

## Elegance

Animations should feel effortless.

Spacing should feel intentional.

Nothing should appear randomly positioned.

Every visual decision should feel deliberate.

---

## Consistency

Every screen should belong to the same ecosystem.

Typography

Spacing

Colors

Animations

Icons

Windows

Buttons

Menus

Dialogs

All should follow one unified language.

---

# 3. Visual Identity

The overall aesthetic should be:

Modern

Minimal

Premium

Professional

Technical

Calm

Immersive

Architectural

The experience should resemble premium productivity software rather than a gaming interface.

---

# 4. Color Philosophy

Colors communicate hierarchy.

Avoid highly saturated interfaces.

The room should feel warm and natural.

DeepOS should feel modern and calm.

Accent colors should only communicate interaction.

---

# 5. Color Palette

## Background

Near Black

Dark Charcoal

Graphite

---

## Surfaces

Dark Gray

Elevated Gray

Glass Surface

---

## Text

Primary White

Secondary Gray

Muted Gray

Disabled Gray

---

## Semantic Colors

Primary Accent

Cool Blue

Success

Green

Warning

Amber

Danger

Red

Information

Cyan

Exact hexadecimal values should be defined inside the application's theme configuration rather than scattered throughout the project.

---

# 6. Typography

Typography should prioritize readability.

Avoid decorative fonts.

Recommended categories:

Modern Sans Serif

Variable Fonts

System-friendly fonts

Typography hierarchy:

Display

Heading

Subheading

Body

Caption

Label

Code

Monospace fonts should only be used in:

Developer Console

Terminal

Logs

Technical Information

---

# 7. Spacing System

Spacing should follow predefined tokens.

Avoid arbitrary margins.

Suggested scale:

XXS

XS

SM

MD

LG

XL

2XL

Sections should breathe naturally.

---

# 8. Corner Radius

Corner radius should remain consistent throughout the application.

Buttons

Inputs

Cards

Dialogs

Windows

Menus

Search Results

All derive from the same radius scale.

Avoid mixing different rounding styles.

---

# 9. Shadows

Shadows communicate elevation.

Three shadow levels:

Low

Medium

High

Use soft layered shadows.

Avoid harsh drop shadows.

---

# 10. Glassmorphism

Glass effects should be used selectively.

Examples:

Taskbar

Window Headers

Dialogs

Context Menus

Notification Center

Glass should include:

Background Blur

Low Opacity

Soft Border

Subtle Shadow

Glass should improve depth without harming readability.

---

# 11. Icons

Icons should belong to one icon family.

Prefer:

Outlined icons

Minimal icons

Consistent stroke width

Avoid mixing icon styles.

---

# 12. Buttons

Every button supports:

Default

Hover

Pressed

Focused

Disabled

Loading

Success

Buttons should animate smoothly.

Hover states should remain subtle.

---

# 13. Inputs

Input fields should emphasize clarity.

Focus should be visually obvious.

Validation should guide the user.

Avoid aggressive error styling.

---

# 14. Window Design

Every application window contains:

Title Bar

Close Button

Minimize Button

Maximize Button

Glass Header

Content Area

Shadow

Rounded Corners

Optional Status Bar

Window transitions should feel natural.

---

# 15. Desktop

Desktop icons should align consistently.

Wallpaper should remain clean.

Avoid unnecessary desktop clutter.

Selection behavior should feel familiar.

---

# 16. Taskbar

The taskbar should remain visually lightweight.

It should communicate:

Running Applications

Focused Applications

Notifications

Hover States

The taskbar should never dominate the interface.

---

# 17. Browser

The browser should feel familiar but remain visually integrated with DeepOS.

Navigation should remain simple.

Avoid excessive browser chrome.

The browser exists to present portfolio content.

---

# 18. Portfolio Pages

Portfolio pages should prioritize storytelling.

Avoid large walls of text.

Projects should communicate:

Problem

Solution

Architecture

Challenges

Outcome

Images should support the narrative.

---

# 19. Motion Philosophy

Motion exists to communicate.

Animations should indicate:

Focus

Navigation

State Changes

Loading

Completion

Avoid decorative movement.

---

# 20. Animation Durations

Use predefined timing tokens.

Instant

Fast

Normal

Slow

Cinematic

Avoid arbitrary durations.

Maintain consistency.

---

# 21. Animation Curves

Motion should feel physically believable.

Prefer easing.

Avoid linear animations.

Camera movement should feel cinematic.

Window movement should feel responsive.

Hover animations should remain subtle.

---

# 22. Cursor Behaviour

Cursor should communicate interaction.

Supported states:

Default

Pointer

Text

Resize

Move

Loading

Disabled

Future custom cursors should preserve usability.

---

# 23. Lighting Philosophy

Lighting should guide attention.

Natural light should dominate.

Artificial lighting should complement.

Preferred characteristics:

Soft

Warm

Directional

Realistic

Avoid:

Overexposure

Heavy Bloom

Aggressive Lens Flares

Extreme Contrast

---

# 24. Depth

Depth should create hierarchy.

Primary focus receives highest visual priority.

Background elements remain visually quieter.

Shadows and blur should reinforce depth.

---

# 25. Responsiveness

The application targets desktop-first.

Future support includes:

Laptop

Tablet

Large Displays

Small desktop resolutions should preserve usability.

Mobile support may be limited depending on interaction requirements.

---

# 26. Accessibility

Support:

Keyboard Navigation

Focus Indicators

Readable Contrast

Reduced Motion

Semantic Labels

Accessibility should enhance usability without compromising immersion.

---

# 27. Empty States

Empty states should remain informative.

Avoid blank interfaces.

Provide guidance.

Examples:

No Search Results

No Projects

Loading

Offline

Errors

---

# 28. Notifications

Notifications should be subtle.

They should not interrupt exploration.

Support:

Success

Warning

Information

Error

Progress

Notifications should auto-dismiss when appropriate.

---

# 29. Loading Experience

Loading should feel intentional.

Avoid generic spinners.

Prefer branded transitions.

Critical assets should load before interaction begins.

---

# 30. Design Tokens

The application should expose reusable design tokens.

Examples:

Colors

Spacing

Radius

Typography

Elevation

Shadows

Blur

Animation Durations

Animation Curves

Transitions

Never hardcode visual values directly into components.

---

# 31. Future Themes

The system should support future themes without architectural changes.

Examples:

Morning

Sunset

Night

Rain

Cyberpunk

Minimal

Winter

Themes should modify appearance without affecting functionality.

---

# 32. Final Design Principle

Every visual decision should answer one question:

"Does this improve clarity, immersion, or consistency?"

If the answer is no, the design should be reconsidered.

Visual complexity should never exist for its own sake.

The best interface is the one that feels natural, intentional, and memorable without drawing unnecessary attention to itself.

---

## 33. DeepOS Editorial Interface — 2026-11-02

The desktop content surface uses an editorial visual language rather than imitating a consumer operating system.

### Palette
- Paper: `#efeee7`
- Paper deep: `#e7e5db`
- Ink: `#252821`
- Muted text: `#77796f`
- Sage accent: `#8c9879`
- Clay accent: `#bc8062`

Use low-contrast gradients only to create material depth. Do not use neon, bloom, glowing borders or high-saturation gradients.

### Typography
- UI and reading text: DM Sans with an accessible system sans-serif fallback.
- Editorial accent: Instrument Serif italic, with Georgia as the fallback.
- Use large, tightly tracked display type for the primary statement. Use the italic serif only to create emphasis, not as a second body font.

### Composition
- The 3D workspace remains the opening environment.
- The monitor interface is HTML/CSS, not another 3D model.
- The home surface introduces the engineer and selected work immediately.
- Projects are presented as an index with detail panels for context, approach, engineering notes and technology.
- Skills are grouped in the profile panel; no progress bars or arbitrary skill percentages.
- Do not use a generic profile-photo/skills split layout.

### Motion
- Framer Motion owns interface transitions, panel entry/exit and small interaction feedback.
- GSAP is reserved for complex camera choreography where it is justified.
- Hover movement is limited to a few pixels. Avoid looping decorative animation; one quiet diagram pulse is permitted.
- Respect `prefers-reduced-motion` and keep all content accessible without animation.

### Accessibility
- Dialogs expose `role="dialog"` and `aria-modal`.
- Provide keyboard close via Escape, managed focus and visible focus indicators.
- All interactive controls remain semantic buttons or links.
