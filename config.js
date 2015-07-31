System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "reactCompat"
    ],
    "jsxPragma": "dom"
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.8.20",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@0.9.18",
    "deku": "npm:deku@0.4.12",
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.3.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.3.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:deku@0.4.12": {
      "array-flatten": "npm:array-flatten@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.2.0",
      "component-raf": "npm:component-raf@1.2.0",
      "component-type": "npm:component-type@1.1.0",
      "dom-pool": "npm:dom-pool@0.1.1",
      "dom-walk": "npm:dom-walk@0.1.1",
      "fast.js": "npm:fast.js@0.1.1",
      "get-uid": "npm:get-uid@1.0.1",
      "is-dom": "npm:is-dom@1.0.5",
      "is-promise": "npm:is-promise@2.0.0",
      "object-path": "npm:object-path@0.8.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sliced": "npm:sliced@0.0.5"
    }
  }
});

