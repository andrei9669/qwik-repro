# Qwik Issues reproduction repo

Aim of this repo is to store different reproductions of bugs/issues that were discovered.  
Each issue is stored in a separate branch.

## Branches

### master

no issue, blank create qwik app in v2.

### eslint-lexical-scope

#### Error

>   13:22  error  When referencing "hookSignal" inside a different scope (useTask$), Qwik needs to serialize the value, however "hookSignal.trigger" is a function, which is not serializable.
Check out https://qwik.dev/docs/advanced/dollar/ for more details  qwik/valid-lexical-scope

#### Steps to reproduce

1. `pnpm install`
2. `pnpm run lint`