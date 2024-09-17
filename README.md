```
pnpm run typecheck

> frogpodspec@1.0.0 typecheck frogpodspec
> tsc --noEmit

src/index.ts:3:14 - error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '../node_modules/@pcd/podspec/dist/types/src/types/cryptographic'. This is likely not portable. A type annotation is necessary.

3 export const FrogSpec = p.entries({
               ~~~~~~~~

src/index.ts:3:14 - error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '../node_modules/@pcd/podspec/dist/types/src/types/entries'. This is likely not portable. A type annotation is necessary.

3 export const FrogSpec = p.entries({
               ~~~~~~~~

src/index.ts:3:14 - error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '../node_modules/@pcd/podspec/dist/types/src/types/int'. This is likely not portable. A type annotation is necessary.

3 export const FrogSpec = p.entries({
               ~~~~~~~~

src/index.ts:3:14 - error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '../node_modules/@pcd/podspec/dist/types/src/types/string'. This is likely not portable. A type annotation is necessary.

3 export const FrogSpec = p.entries({
               ~~~~~~~~

src/index.ts:3:14 - error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '.pnpm/@pcd+pod@0.1.5/node_modules/@pcd/pod'. This is likely not portable. A type annotation is necessary.

3 export const FrogSpec = p.entries({
               ~~~~~~~~


Found 5 errors in the same file, starting at: src/index.ts:3

 ELIFECYCLE  Command failed with exit code 2.
```

```
pnpm run build

> tsup --onSuccess "tsc --declaration --emitDeclarationOnly"

CLI Building entry: src/index.ts
CLI Using tsconfig: tsconfig.json
CLI tsup v8.3.0
CLI Target: es2020
CLI Cleaning output folder
ESM Build start
CJS Build start
CJS dist/index.js     2.00 KB
CJS dist/index.js.map 1.85 KB
CJS ⚡️ Build success in 11ms
ESM dist/index.mjs     831.00 B
ESM dist/index.mjs.map 1.80 KB
ESM ⚡️ Build success in 12ms
DTS Build start
src/index.ts:3:14 - error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '../node_modules/@pcd/podspec/dist/types/src/types/cryptographic'. This is likely not portable. A type annotation is necessary.

3 export const FrogSpec = p.entries({
               ~~~~~~~~

src/index.ts:3:14 - error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '../node_modules/@pcd/podspec/dist/types/src/types/entries'. This is likely not portable. A type annotation is necessary.

3 export const FrogSpec = p.entries({
               ~~~~~~~~

src/index.ts:3:14 - error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '../node_modules/@pcd/podspec/dist/types/src/types/int'. This is likely not portable. A type annotation is necessary.

3 export const FrogSpec = p.entries({
               ~~~~~~~~

src/index.ts:3:14 - error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '../node_modules/@pcd/podspec/dist/types/src/types/string'. This is likely not portable. A type annotation is necessary.

3 export const FrogSpec = p.entries({
               ~~~~~~~~

src/index.ts:3:14 - error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '.pnpm/@pcd+pod@0.1.5/node_modules/@pcd/pod'. This is likely not portable. A type annotation is necessary.

3 export const FrogSpec = p.entries({
               ~~~~~~~~


Found 5 errors in the same file, starting at: src/index.ts:3

src/index.ts(3,14): error TS2742: The inferred type of 'FrogSpec' cannot be named without a reference to '.pnpm/@pcd+pod@0.1.5/node_modules/@pcd/pod'. This is likely not portable. A type annotation is necessary.

Error: error occured in dts build
    at Worker.emit (node:events:519:28)
    at MessagePort.<anonymous> (node:internal/worker:263:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:825:20)
    at MessagePort.<anonymous> (node:internal/per_context/messageport:23:28)
DTS Build error
 ELIFECYCLE  Command failed with exit code 1.
```
