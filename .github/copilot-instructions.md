
<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Vibe Farm Copilot Instructions

This workspace is for "Vibe Farm", a farming game inspired by Stardew Valley, built with Angular and Phaser. Please follow these guidelines to generate code and suggestions:

## Game Vision and Core Gameplay Loop
- The player primarily manages a farm: planting, watering, and harvesting crops.
- Crafting is a key feature: players can create items to aid their adventure.
- Goods can be processed or transformed for higher value or new uses.
- Additional activities like fishing and mining will be included.

## Art Style and Tone
- Visuals inspired by Cuphead: cartoonish, clean, and visually pleasing.
- The game should feel cozy, but with fantasy elements to create an airy, slightly mysterious vibe.

## Target Platforms
- The game is intended to run in web browsers only.

## Coding Patterns and Architecture
- Use Angular’s component-based architecture for UI, and keep Phaser game logic in dedicated services or components (e.g., a `PhaserGameComponent`).
- Organize Phaser scenes modularly (separate files for each scene: MainMenu, Game, Inventory, etc.).
- Use Angular services for global state management (e.g., player inventory, game progress).
- Prefer strict TypeScript settings for type safety.
- Use feature-based folder structure (e.g., `src/app/inventory/`, `src/app/crafting/`).
- Keep game assets (sprites, audio) in a dedicated `public/assets/` folder.
- Use dependency injection for services and avoid singletons unless necessary.
- Comment code where logic is non-obvious, but avoid over-commenting.
- Use Angular’s reactive forms and RxJS for UI interactions when possible.
- Write unit tests for Angular services and components, and integration tests for game logic.
- Prefer SCSS or CSS modules for styling, keeping styles scoped to components.

## Feature Priorities
- Start with basic world creation and populating it with objects.
- Prioritize implementing a day/night cycle early.
- Add other features (farming, crafting, inventory, fishing, mining, etc.) incrementally after the basics are in place.

## Testing and Code Quality
- Use Jasmine for unit testing.
- Always suggest writing tests for new features.
- Enforce ESLint and Prettier rules for code quality and formatting.

## Localization and Accessibility
- The game will not be localized initially, but all in-game text should be centralized to facilitate future localization.

## Libraries and Comments
- No specific libraries are forbidden, but always ask before adding new dependencies.
- Use minimal comments; only heavily comment non-obvious logic.
- When responding to requests, proceed step by step and ask for all necessary information as needed.
