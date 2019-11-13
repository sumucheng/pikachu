import string from "./css";

const css = document.querySelector("#css");
const showCSS = document.querySelector("#showCSS");
let n = 0;
let time = 50;
let id;

const player = {
  init: () => {
    css.innerHTML = string.substr(0, n);
    showCSS.innerText = string.substr(0, n);
    player.start();
    player.bindEvents();
  },
  bindEvents: () => {
    document.querySelector("#pause").onclick = player.end;
    document.querySelector("#play").onclick = player.start;
    document.querySelector("#slow").onclick = player.slow;
    document.querySelector("#normal").onclick = player.normal;
    document.querySelector("#fast").onclick = player.fast;
  },
  run: () => {
    n += 1;
    if (n > string.length) {
      window.clearInterval(id);
      return;
    }
    css.innerHTML = string.substr(0, n);
    showCSS.innerText = string.substr(0, n);
    showCSS.scrollTop = 9999;
  },

  start: () => {
    if (id === undefined) {
      id = setInterval(player.run, time);
    }
  },
  end: () => {
    window.clearInterval(id);
    id = undefined;
  },
  slow: () => {
    player.end();
    time = 200;
    player.start();
  },
  normal: () => {
    player.end();
    time = 50;
    player.start();
  },
  fast: () => {
    player.end();
    time = 0;
    player.start();
  }
};
player.init();
