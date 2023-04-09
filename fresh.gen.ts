// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/[slug]/p.tsx";
import * as $2 from "./routes/api/cart/index.ts";
import * as $3 from "./routes/api/cart/items.ts";
import * as $4 from "./routes/cart.tsx";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/inspect-vscode.ts";
import * as $7 from "./routes/search.tsx";
import * as $8 from "./routes/start.tsx";
import * as $$0 from "./islands/AddToCart.tsx";
import * as $$1 from "./islands/Editor.tsx";
import * as $$2 from "./islands/InspectVSCode.tsx";
import * as $$3 from "./islands/Minicart.tsx";
import * as $$4 from "./islands/SearchBar.tsx";

const manifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/[slug]/p.tsx": $1,
    "./routes/api/cart/index.ts": $2,
    "./routes/api/cart/items.ts": $3,
    "./routes/cart.tsx": $4,
    "./routes/index.tsx": $5,
    "./routes/inspect-vscode.ts": $6,
    "./routes/search.tsx": $7,
    "./routes/start.tsx": $8,
  },
  islands: {
    "./islands/AddToCart.tsx": $$0,
    "./islands/Editor.tsx": $$1,
    "./islands/InspectVSCode.tsx": $$2,
    "./islands/Minicart.tsx": $$3,
    "./islands/SearchBar.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
