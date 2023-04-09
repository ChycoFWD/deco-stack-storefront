// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { context } from "$live/live.ts";
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/api/[...catchall].tsx";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/inspect-vscode.ts";
import * as $$0 from "./islands/AddToCartButton.tsx";
import * as $$1 from "./islands/CartButton.tsx";
import * as $$2 from "./islands/CartModal.tsx";
import * as $$3 from "./islands/LiveControls.tsx";
import * as $$4 from "./islands/Menu.tsx";
import * as $$5 from "./islands/SearchControls.tsx";
import * as $$6 from "./islands/Slider.tsx";
import * as $$$0 from "./sections/Button.story.tsx";
import * as $$$1 from "./sections/Carousel.tsx";
import * as $$$2 from "./sections/Features.tsx";
import * as $$$3 from "./sections/Footer.tsx";
import * as $$$4 from "./sections/Head.tsx";
import * as $$$5 from "./sections/Header.tsx";
import * as $$$6 from "./sections/Highlights.tsx";
import * as $$$7 from "./sections/Newsletter.tsx";
import * as $$$8 from "./sections/ProductDetails.tsx";
import * as $$$9 from "./sections/ProductGallery.tsx";
import * as $$$10 from "./sections/ProductShelf.tsx";
import * as $$$11 from "./sections/SearchControls.tsx";
import * as $$$12 from "./sections/Spacer.tsx";
import * as $$$13 from "./sections/vtexconfig.global.tsx";
import * as $$$$0 from "./functions/nuvemShopProductList.ts";
import * as $$$$1 from "./functions/occProductDetailsPage.ts";
import * as $$$$2 from "./functions/shopifyProductDetailsPage.ts";
import * as $$$$3 from "./functions/shopifyProductList.ts";
import * as $$$$4 from "./functions/shopifyProductListingPage.ts";
import * as $$$$5 from "./functions/vtexLegacyProductDetailsPage.ts";
import * as $$$$6 from "./functions/vtexLegacyProductList.ts";
import * as $$$$7 from "./functions/vtexLegacyProductListingPage.ts";
import * as $$$$8 from "./functions/vtexProductDetailsPage.ts";
import * as $$$$9 from "./functions/vtexProductList.ts";
import * as $$$$10 from "./functions/vtexProductListingPage.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/api/[...catchall].tsx": $3,
    "./routes/index.tsx": $4,
    "./routes/inspect-vscode.ts": $5,
  },
  islands: {
    "./islands/AddToCartButton.tsx": $$0,
    "./islands/CartButton.tsx": $$1,
    "./islands/CartModal.tsx": $$2,
    "./islands/LiveControls.tsx": $$3,
    "./islands/Menu.tsx": $$4,
    "./islands/SearchControls.tsx": $$5,
    "./islands/Slider.tsx": $$6,
  },
  sections: {
    "./sections/Button.story.tsx": $$$0,
    "./sections/Carousel.tsx": $$$1,
    "./sections/Features.tsx": $$$2,
    "./sections/Footer.tsx": $$$3,
    "./sections/Head.tsx": $$$4,
    "./sections/Header.tsx": $$$5,
    "./sections/Highlights.tsx": $$$6,
    "./sections/Newsletter.tsx": $$$7,
    "./sections/ProductDetails.tsx": $$$8,
    "./sections/ProductGallery.tsx": $$$9,
    "./sections/ProductShelf.tsx": $$$10,
    "./sections/SearchControls.tsx": $$$11,
    "./sections/Spacer.tsx": $$$12,
    "./sections/vtexconfig.global.tsx": $$$13,
  },
  functions: {
    "./functions/nuvemShopProductList.ts": $$$$0,
    "./functions/occProductDetailsPage.ts": $$$$1,
    "./functions/shopifyProductDetailsPage.ts": $$$$2,
    "./functions/shopifyProductList.ts": $$$$3,
    "./functions/shopifyProductListingPage.ts": $$$$4,
    "./functions/vtexLegacyProductDetailsPage.ts": $$$$5,
    "./functions/vtexLegacyProductList.ts": $$$$6,
    "./functions/vtexLegacyProductListingPage.ts": $$$$7,
    "./functions/vtexProductDetailsPage.ts": $$$$8,
    "./functions/vtexProductList.ts": $$$$9,
    "./functions/vtexProductListingPage.ts": $$$$10,
  },
  schemas: {
    "./sections/Button.story.tsx": {
      "inputSchema": {
        "title": " Button.story",
        "type": "object",
        "properties": {
          "variant": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "primary",
              },
              {
                "type": "string",
                "const": "secondary",
              },
              {
                "type": "string",
                "const": "tertiary",
              },
              {
                "type": "string",
                "const": "danger",
              },
            ],
            "title": "Variant",
          },
          "size": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "small",
              },
              {
                "type": "string",
                "const": "large",
              },
            ],
            "title": "Size",
          },
          "fit": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "container",
              },
              {
                "type": "string",
                "const": "content",
              },
            ],
            "title": "Fit",
          },
          "loading": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Loading",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/Carousel.tsx": {
      "inputSchema": {
        "title": " Carousel",
        "type": "object",
        "properties": {
          "images": {
            "type": "array",
            "items": {
              "title": "Image",
              "type": "object",
              "properties": {
                "desktop": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Desktop",
                  "description": "desktop otimized image",
                },
                "mobile": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Mobile",
                  "description": "mobile otimized image",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                  "description":
                    "when user clicks on the image, go to this link",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                  "description": "Image's alt text",
                },
              },
              "required": [
                "desktop",
                "mobile",
                "href",
                "alt",
              ],
            },
            "title": "Images",
          },
          "preload": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Preload",
            "description":
              "Check this option when this banner is the biggest image on the screen for image optimizations",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/Features.tsx": {
      "inputSchema": {
        "title": " Features",
        "type": "object",
        "properties": {
          "features": {
            "type": "array",
            "items": {
              "title": "Feature",
              "type": "object",
              "properties": {
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                  "description": "Image src",
                },
                "title": {
                  "type": "string",
                  "title": "Title",
                  "description": "Title",
                },
                "description": {
                  "type": "string",
                  "title": "Description",
                  "description": "Description and Image alt text",
                },
              },
              "required": [
                "src",
                "title",
                "description",
              ],
            },
            "title": "Features",
          },
        },
        "required": [
          "features",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Footer.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": [
              "string",
              "null",
            ],
            "title": "Title",
          },
          "description": {
            "type": [
              "string",
              "null",
            ],
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": [
              "string",
              "null",
            ],
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": [
              "string",
              "null",
            ],
            "title": "Theme Color",
          },
        },
        "required": [
          "url",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "alerts": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Alerts",
          },
          "searchbar": {
            "title": "Search Bar",
            "type": "object",
            "properties": {
              "placeholder": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Placeholder",
                "description": "Search bar default placeholder message",
                "default": "What are you looking for?",
              },
              "action": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Page path",
                "description":
                  "When user clicks on the search button, navigate it to",
                "default": "/s",
              },
              "name": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Term name",
                "description":
                  "Querystring param used when navigating the user",
                "default": "q",
              },
              "query": {
                "type": [
                  "string",
                  "null",
                ],
                "title": "Query",
              },
            },
            "required": [],
          },
          "navItems": {
            "type": "array",
            "items": {
              "title": "Item",
              "type": "object",
              "properties": {
                "label": {
                  "type": "string",
                  "title": "Label",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "children": {
                  "title": "Children",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "label": {
                        "type": "string",
                        "title": "Label",
                      },
                      "href": {
                        "type": "string",
                        "title": "Href",
                      },
                    },
                    "required": [
                      "label",
                      "href",
                    ],
                  },
                },
              },
              "required": [
                "label",
                "href",
                "children",
              ],
            },
            "title": "Navigation items",
            "description":
              "Navigation items used both on mobile and desktop menus",
          },
        },
        "required": [
          "alerts",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Highlights.tsx": {
      "inputSchema": {
        "title": " Highlights",
        "type": "object",
        "properties": {
          "highlights": {
            "type": "array",
            "items": {
              "title": "Highlight",
              "type": "object",
              "properties": {
                "src": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Src",
                },
                "alt": {
                  "type": "string",
                  "title": "Alt",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "label": {
                  "type": "string",
                  "title": "Label",
                },
              },
              "required": [
                "src",
                "alt",
                "href",
                "label",
              ],
            },
            "title": "Highlights",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
        },
        "required": [
          "title",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Newsletter.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/ProductDetails.tsx": {
      "inputSchema": {
        "title": " Product Details",
        "type": "object",
        "properties": {
          "page": {
            "$id": "77c3750ca550c4476e576a53c2aa0bf943d6dd33",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ProductGallery.tsx": {
      "inputSchema": {
        "title": " Product Gallery",
        "type": "object",
        "properties": {
          "page": {
            "$id": "32f8a6c92e01d08eaba8ff4e3e4f0985c1b774f9",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/ProductShelf.tsx": {
      "inputSchema": {
        "title": " Product Shelf",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "subtitle": {
            "type": "string",
            "title": "Subtitle",
          },
          "products": {
            "$id": "18e9298f44fabfefab948fb98a413b90224be6a0",
            "format": "live-function",
            "type": "string",
            "title": "Products",
          },
        },
        "required": [
          "title",
          "subtitle",
          "products",
        ],
      },
      "outputSchema": null,
    },
    "./sections/SearchControls.tsx": {
      "inputSchema": {
        "title": " Search Controls",
        "type": "object",
        "properties": {
          "page": {
            "$id": "32f8a6c92e01d08eaba8ff4e3e4f0985c1b774f9",
            "format": "live-function",
            "type": "string",
            "title": "Page",
          },
        },
        "required": [
          "page",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Spacer.tsx": {
      "inputSchema": {
        "title": " Spacer",
        "type": "object",
        "properties": {
          "height": {
            "title": "Height",
            "type": "object",
            "properties": {
              "mobile": {
                "type": "number",
                "title": "Mobile",
              },
              "desktop": {
                "type": "number",
                "title": "Desktop",
              },
            },
            "required": [
              "mobile",
              "desktop",
            ],
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/vtexconfig.global.tsx": {
      "inputSchema": {
        "title": "Vtexconfig.global",
        "type": "object",
        "properties": {
          "account": {
            "type": "string",
            "title": "Account",
            "description":
              "VTEX Account name. For more info, read here: https://help.vtex.com/en/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC.",
          },
          "salesChannel": {
            "type": "string",
            "title": "Sales Channel",
            "description":
              "VTEX sales channel. This will be the default sales channel your site. For more info, read here: https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV",
          },
          "locale": {
            "type": "string",
            "title": "Locale",
            "description": "Locale used for VTEX Intelligent Search client.",
          },
        },
        "required": [
          "account",
          "salesChannel",
          "locale",
        ],
      },
      "outputSchema": null,
    },
    "./functions/nuvemShopProductList.ts": {
      "inputSchema": {
        "title": "Nuvem Shop Product List",
        "type": "object",
        "properties": {
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "18e9298f44fabfefab948fb98a413b90224be6a0",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/occProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Occ Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "77c3750ca550c4476e576a53c2aa0bf943d6dd33",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Shopify Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "77c3750ca550c4476e576a53c2aa0bf943d6dd33",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductList.ts": {
      "inputSchema": {
        "title": "Shopify Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "search term to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "18e9298f44fabfefab948fb98a413b90224be6a0",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/shopifyProductListingPage.ts": {
      "inputSchema": {
        "title": "Shopify Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "32f8a6c92e01d08eaba8ff4e3e4f0985c1b774f9",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexLegacyProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vtex Legacy Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "77c3750ca550c4476e576a53c2aa0bf943d6dd33",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexLegacyProductList.ts": {
      "inputSchema": {
        "title": "Vtex Legacy Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "query to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
          "sort": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "",
              },
              {
                "type": "string",
                "const": "price:desc",
              },
              {
                "type": "string",
                "const": "price:asc",
              },
              {
                "type": "string",
                "const": "orders:desc",
              },
              {
                "type": "string",
                "const": "name:desc",
              },
              {
                "type": "string",
                "const": "name:asc",
              },
              {
                "type": "string",
                "const": "release:desc",
              },
              {
                "type": "string",
                "const": "discount:desc",
              },
            ],
            "title": "Sort",
            "description": "search sort parameter",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "18e9298f44fabfefab948fb98a413b90224be6a0",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexLegacyProductListingPage.ts": {
      "inputSchema": {
        "title": "Vtex Legacy Product Listing Page",
        "type": "object",
        "properties": {
          "term": {
            "type": [
              "string",
              "null",
            ],
            "title": "Term",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
          "ft": {
            "type": [
              "string",
              "null",
            ],
            "title": "Ft",
            "description": "FullText term",
          },
          "fq": {
            "type": [
              "string",
              "null",
            ],
            "title": "Fq",
          },
          "map": {
            "type": [
              "string",
              "null",
            ],
            "title": "Map",
            "description": "map param",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "32f8a6c92e01d08eaba8ff4e3e4f0985c1b774f9",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductDetailsPage.ts": {
      "inputSchema": {
        "type": "null",
        "title": "Vtex Product Details Page",
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "77c3750ca550c4476e576a53c2aa0bf943d6dd33",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductList.ts": {
      "inputSchema": {
        "title": "Vtex Product List",
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "title": "Query",
            "description": "query to use on search",
          },
          "count": {
            "type": "number",
            "title": "Count",
            "description": "total number of items to display",
          },
          "sort": {
            "type": "string",
            "anyOf": [
              {
                "type": "string",
                "const": "",
              },
              {
                "type": "string",
                "const": "price:desc",
              },
              {
                "type": "string",
                "const": "price:asc",
              },
              {
                "type": "string",
                "const": "orders:desc",
              },
              {
                "type": "string",
                "const": "name:desc",
              },
              {
                "type": "string",
                "const": "name:asc",
              },
              {
                "type": "string",
                "const": "release:desc",
              },
              {
                "type": "string",
                "const": "discount:desc",
              },
            ],
            "title": "Sort",
            "description": "search sort parameter",
          },
        },
        "required": [
          "query",
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "18e9298f44fabfefab948fb98a413b90224be6a0",
          },
        },
        "additionalProperties": true,
      },
    },
    "./functions/vtexProductListingPage.ts": {
      "inputSchema": {
        "title": "Vtex Product Listing Page",
        "type": "object",
        "properties": {
          "query": {
            "type": [
              "string",
              "null",
            ],
            "title": "Query",
            "description": "overides the query term",
          },
          "count": {
            "type": "number",
            "title": "Items per page",
            "description": "number of products per page to display",
          },
        },
        "required": [
          "count",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "32f8a6c92e01d08eaba8ff4e3e4f0985c1b774f9",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
context.manifest = manifest;

export default manifest;
