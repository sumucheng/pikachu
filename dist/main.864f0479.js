// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin * {\n  margin: 0;\n  padding: 0;\n}\n*,\n.skin *::after,\n.skin *::before {\n  box-sizing: border-box;\n}\n.skin {\n  position: relative;\n  background: #ffe600;\n  min-height: 50vh;\n}\n.eye {\n  position: absolute;\n  background: #2e2e2e;\n  height: 64px;\n  width: 64px;\n  left: 50%;\n  margin-left: -32px;\n  top: 70px;\n  border: 3px solid black;\n  border-radius: 50%;\n}\n.eye::before {\n  content: \"\";\n  display: block;\n  height: 32px;\n  width: 32px;\n  background: white;\n  border: 3px solid black;\n  border-radius: 50%;\n  position: relative;\n  left: 5px;\n}\n.eye.left {\n  transform: translateX(-128px);\n}\n.eye.right {\n  transform: translateX(128px);\n}\n.nose {\n  position: absolute;\n  width: 0px;\n  height: 0px;\n  top: 100px;\n  left: 50%;\n  margin-left: -20px;\n  border: 20px solid black;\n  border-radius: 17px;\n  border-color: black transparent transparent transparent;\n}\n@keyframes noseWave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.nose:hover {\n  animation: noseWave 0.25s infinite linear;\n}\n.cheek {\n  position: absolute;\n  background: red;\n  height: 90px;\n  width: 90px;\n  left: 50%;\n  margin-left: -45px;\n  top: 195px;\n  border: 3px solid black;\n  border-radius: 50%;\n}\n.cheek.left {\n  transform: translateX(-170px);\n}\n.cheek > img {\n  position: relative;\n  left: 50%;\n  top: 50%;\n}\n\n.cheek.left > img {\n  transform: rotateY(180deg);\n  transform-origin: 0 0;\n}\n.cheek.right {\n  transform: translateX(170px);\n}\n.mouth1 {\n  width: 200px;\n  height: 50px;\n  left: 50%;\n  margin-left: -100px;\n  position: relative;\n  top: 150px;\n  z-index: 1;\n}\n.lip {\n  width: 100px;\n  height: 25px;\n  border-bottom: 3px solid black;\n  position: absolute;\n  background: #ffe600;\n}\n.lip.left {\n  border-left: 3px solid black;\n  border-bottom-left-radius: 100px;\n  transform: rotate(-15deg);\n}\n.lip.right {\n  border-right: 3px solid black;\n  border-bottom-right-radius: 100px;\n  transform: rotate(15deg);\n  left: 100px;\n}\n.mouth2 {\n  width: 160px;\n  height: 190px;\n  left: 50%;\n  margin-left: -80px;\n  top: 110px;\n  position: relative;\n  overflow: hidden;\n}\n.mouth2 > .out {\n  background: #9b000a;\n  width: 160px;\n  height: 500px;\n  bottom: 0;\n  position: absolute;\n  border-radius: 100px/300px;\n  border: 3px solid black;\n  overflow: hidden;\n}\n.mouth2 > .out > .in {\n  background: #ff485f;\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  left: 50%;\n  bottom: -45px;\n  margin-left: -100px;\n  border-radius: 300px;\n}";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = document.querySelector("#css");
var showCSS = document.querySelector("#showCSS");
var n = 0;
var time = 50;
var id;
var player = {
  init: function init() {
    css.innerHTML = _css.default.substr(0, n);
    showCSS.innerText = _css.default.substr(0, n);
    player.start();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    document.querySelector("#pause").onclick = player.end;
    document.querySelector("#play").onclick = player.start;
    document.querySelector("#slow").onclick = player.slow;
    document.querySelector("#normal").onclick = player.normal;
    document.querySelector("#fast").onclick = player.fast;
  },
  run: function run() {
    n += 1;

    if (n > _css.default.length) {
      window.clearInterval(id);
      return;
    }

    css.innerHTML = _css.default.substr(0, n);
    showCSS.innerText = _css.default.substr(0, n);
    showCSS.scrollTop = 9999;
  },
  start: function start() {
    if (id === undefined) {
      id = setInterval(player.run, time);
    }
  },
  end: function end() {
    window.clearInterval(id);
    id = undefined;
  },
  slow: function slow() {
    player.end();
    time = 200;
    player.start();
  },
  normal: function normal() {
    player.end();
    time = 50;
    player.start();
  },
  fast: function fast() {
    player.end();
    time = 0;
    player.start();
  }
};
player.init();
},{"./css":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.864f0479.js.map