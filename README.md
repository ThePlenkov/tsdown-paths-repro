# tsdown paths reproduction

Minimal reproduction for [rolldown/tsdown#655](https://github.com/rolldown/tsdown/issues/655)

## Issue

When using tsconfig `paths` aliases, tsdown correctly resolves them in the JavaScript output, but the generated `.d.ts` declaration files retain the original alias paths.

## Steps to reproduce

```bash
npm install
npm run build
```

## Expected behavior

The `dist/index.d.mts` should have resolved imports:

```typescript
import { type HttpClient } from './base';
```

## Actual behavior

The `dist/index.d.mts` retains the path alias:

```typescript
import { type HttpClient } from '#base';  // ❌ Consumers can't resolve this
```

## Files

- `src/base.ts` - Exports `HttpClient` interface and `createClient` function
- `src/index.ts` - Imports from `#base` alias and re-exports
- `tsconfig.json` - Defines `#base` path alias
- `tsdown.config.ts` - Enables dts generation
