# TypeScript Starter – Agent Instructions

A TypeScript learning/playground workspace. See [README.md](README.md) for full setup notes.

## Commands

| Task | Command |
|------|---------|
| Compile TypeScript | `npm run tsc` |
| Run app | `npm start` (runs `dist/index.js`) |
| Dev mode (watch) | `npm run dev` (nodemon, auto-reloads) |
| Run all tests | `npm test` |
| Run single test | `npx jest --testPathPattern=<pattern>` |
| Bundle (webpack) | `npm run build` (**requires `npm run tsc` first**) |

## Architecture

- **Entry point:** `src/index.ts`
- **Utilities:** `src/util/` (e.g., `Calculator`)
- **Notes/exercises:** `src/notes/` (personal TypeScript exercises, not production code)
- **Tests:** `test/*.spec.ts` — imports from `../src/`, uses `ts-jest`
- **Build pipeline:** `tsc` compiles `src/` → `dist/`, then webpack bundles `dist/index.js` → `dist/bundle.js`

## Key Details

- Run `npm run tsc` before `npm run build` — webpack reads from `dist/`, not `src/`
- Tests import from `../src/`, not from `dist/`
- TypeScript strict mode is enabled
- Target: ES2016, module: CommonJS
- Runtime dependency: `ajv` (JSON schema validation)
- VS Code debugger configured in `.vscode/launch.json`; `preLaunchTask` runs `tsc` automatically
