# Qwik Issues reproduction repo

Aim of this repo is to store different reproductions of bugs/issues that were discovered.  
Each issue is stored in a separate branch.

## Branches

### master

no issue, blank create qwik app in v2.

### conditional-rendering

#### Error

> Error: Code(Q8): Actual value for useContext(context-c) can not be found, make sure some ancestor component has set a value using useContextProvider().
> In the browser make sure that the context was used during SSR so its state was serialized.

#### steps to reproduce

1. `pnpm install`
2. `pnpm run dev`
3. open up the page
4. click the `navigate` button
5. Ctrl + R (refresh the page)