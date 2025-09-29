# philosophers-visualizer-v2

Philosophers visualizer v2 is a lightweight log visualizer for the 42 school "Philosophers" assignment.

Paste your program output and inspect each philosopher's state on an interactive timeline.

## Live demo

- https://nafuka11.github.io/philosophers-visualizer-v2/

## Key features

- Render a timeline of `is eating`, `is sleeping`, and `is thinking` intervals for every philosopher.
- Highlight parsing problems and inconsistent logs directly in the UI.
- Stay entirely client-side—no log data leaves your browser.

## Log format

Supported lines are:

```
<timestamp_ms> <philosopher_id> is eating
<timestamp_ms> <philosopher_id> is sleeping
<timestamp_ms> <philosopher_id> is thinking
<timestamp_ms> <philosopher_id> died
<timestamp_ms> <philosopher_id> has taken a fork
```

`has taken a fork` entries are ignored for the timeline but kept for validation. Any other line will be reported as an error.  
When a philosopher dies, subsequent actions for that philosopher are flagged as errors.

## Local development

Prerequisites: Node.js >= 18 and Yarn.

```bash
yarn install --frozen-lockfile
yarn dev
```

The Vite dev server runs on http://localhost:5173/philosophers-visualizer-v2/ by default.

To lint the project:

```bash
yarn lint
```

## Storybook

Component previews are available through Storybook.

```bash
yarn storybook
```

Storybook starts on http://localhost:6006/.

## Build & preview

Build a production bundle with:

```bash
yarn build
```

The build output is generated in `dist/`. Run the production preview locally with:

```bash
yarn preview
```

The site is deployed automatically to GitHub Pages on every push to the `main` branch.
