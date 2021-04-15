# Tailwind JIT Issue

> Update: This issue can be solved by creating a `.env` file in the workspace root and adding `TAILWIND_MODE=watch`...

To run:
`yarn install`

`yarn nx serve next-tailwind`

To recreate:

- `_app.tsx` has a couple "Welcome to next-tailwind strings" - changing the text color and saving shows the updates in the browser.
- enable JIT by uncommenting the mode line in the tailwind.config.js
- changing one of the next colors will see the styles removed and the only way to get it back is to start the nextjs app again from scratch.
- alternatively, if you change a color, hit save, the refreshing of the page will remove the style. If you Cmd+Z to undo, and then save again, the style will be put back. Put another way, changing to something "new" will result in the color disappearing. Only the "initial state" of the styles seems to be respected.
