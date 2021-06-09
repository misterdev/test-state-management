# test-state-management


## Redux Toolkit
**FEATURES**:
- Shared root store.
- Built-in Immer integration.
- JSX Wrapper

**PRO**:
-

**CONS**:
-

## Zustand
**FEATURES**:
- Each slice has a separate state.
- Immer middleware available.
- Middlewares are added using nested function.
- No JSX Wrapper

**PRO**: 
- Easy to use (everything in on file, objects with functions).
- Compatibility with Redux Dev Tools.

**CONS**:
- Actions without name in devtools.

## Recoil
- Not slices-based but atom-based.
- No actions flow.
- JSX Wrapper.

**PRO**
- React-friendly: similar to the useState.
- Async queries management.
- Experimental: side effects on atoms.

**CONS**
- Dev tools "not available".
- Some `_UNSTABLE` API

## Reatom
-

**PRO**
-

**CONS**
- No middleware: use subscribe to actions instead.
