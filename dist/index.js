"use strict";
(() => {
  // src/user.ts
  var User = class {
    constructor(state) {
      this.state = state;
    }
    async fetch(request) {
      return new Response("User response");
    }
  };

  // src/index.ts
  var src_default = {
    async fetch(request) {
      return new Response("Hello World!");
    }
  };
})();
//# sourceMappingURL=index.js.map
