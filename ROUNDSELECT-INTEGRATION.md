# RoundSelect V2 integration: MyPortfolio (GitHub Pages export)

This update targets the deployed static build you provided. Its `assets/index-*.js`
files are already compiled/minified; none of them are edited. If you later share
its **Angular source project**, the reusable TypeScript directive can be wired
into the root Angular component instead.

## Changed files
- `index.html` — adds two relative asset references after polish.css / polish.js.
- `404.html` — adds the same assets using `/MyPortfolio/` absolute URLs (matching
  its existing GitHub Pages subpath conventions).
- `rounded-selection.js` — standalone RoundSelect V2 SVG/Selection/Range engine (new).
- `rounded-selection.css` — rounded SVG styling and theme tokens (new).

## Preserved selection palette (from original polish.css)
- Dark: `rgba(0, 229, 255, 0.28)` / selected text `#eafcff` when native.
- Light: `rgba(0, 111, 130, 0.24)` / selected text `#07242c` when native.

The SVG overlay uses exactly those semi-transparent highlight colors and keeps
text's computed color while enabled, avoiding invisible selected text in light mode.
The existing `polish.css` has NOT been modified. The overlay ignores pointer events
and does not rewrite HTML or interfere with the underlying native selection/copy.
Native fallback remains for touch/coarse pointer, forced-colors, editable controls,
overly complex selections and geometry errors. SVG rows can join adjacent fragments.

## Deployment
Copy the four changed site files into the published `MyPortfolio/` directory.
Maintain both new assets at the SAME level as `index.html` and `polish.css`.
If you deploy somewhere other than `/MyPortfolio/`, adjust the two absolute
asset URLs in `404.html` accordingly. For the main page `./` paths work naturally.

## Verify
- Desktop: drag over the title and multi-line body/links; copy selected text.
- Change the site's light/dark theme with selection active; highlight changes cyan.
- Change language and move through portfolio chapters; dynamically updated text works.
- Check inputs, touch/mobile, and high-contrast fallback.
- Check Network tab: both new files should respond 200, not 404.
