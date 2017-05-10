// TODO
// check for types. Seperate arrays and objects into tables
// create list of styles
// gold, party, rainbow, rand,  
// set default style 
// methods: scream, party, neon, fancy
// setDefault() - font, color, size, isDark
let err = new Error();
console.log(err.stack.split("\n")[4])
// Preserve log functionality
const consoleLog = console.log;

// Define patterns url
const url = `http://localhost:8080/patterns/`;

// Define default settings
console.default = {
  font: "Arial, Helvetica, sans-serif",
  size: "1em",
  color: "#444",
  style: "pencil",
  useTable: false
}

// Font styles
const styles = {};
styles.pencil = settings => `font-family: ${settings.font}; font-size: ${settings.size}; color: ${settings.color}; letter-spacing: -1px;`;
styles.pink = settings => `font-size: ${settings.size}; color: #d54d7b; font-family: cursive; font-weight: normal; margin-bottom: 0px; margin-top: 40px; text-align: center;`
styles.gold = settings => `font-family: ${settings.font}; font-size: ${settings.size}; color: #b48608; font-weight: 400; font-style: italic; line-height: 44px; margin: 0 0 12px; text-align: center;`
styles.fancy = settings => `font-size: ${settings.size}; color: ${settings.color}; text-shadow:0px 0px 5px white; z-index:3; background: -webkit-linear-gradient(left,  rgba(255,0,0,1) 0%,rgba(255,255,0,1) 19%,rgba(0,255,0,1) 38%,rgba(0,255,255,1) 51%,rgba(0,0,255,1) 67%,rgba(255,0,255,1) 83%,rgba(255,0,0,1) 99%); /* Chrome10+,Safari5.1+ */ -webkit-text-stroke: 5px rgba(255,255,255,.01); -webkit-background-clip: text; `
styles.rainbow = settings => `font-size: ${settings.size }; background: -webkit-linear-gradient(left,  rgba(255,0,0,1) 0%,rgba(255,255,0,1) 19%,rgba(0,255,0,1) 38%,rgba(0,255,255,1) 51%,rgba(0,0,255,1) 67%,rgba(255,0,255,1) 83%,rgba(255,0,0,1) 99%); /* Chrome10+,Safari5.1+ */ -webkit-background-clip: text; color:transparent;`
styles.threeD = settings => `font-family: ${settings.font}; text-transform: uppercase; font-size: ${settings.size}; color: ${settings.color}; text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0, 0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, 0.6) ;`
styles.neon = settings => `font-size: ${settings.size }; margin: 0 auto; text-align: center; color: #fff; text-shadow: 0 0 5px #87ceeb, 0 0 5px #87ceeb, 0 0 5px deepskyblue, 0 0 5px deepskyblue, 0 0 5px deepskyblue, 0 0 5px deepskyblue, 0 0 5px deepskyblue, 0 0 60px deepskyblue, 0 0 70px deepskyblue, 0 0 80px deepskyblue, 0 0 90px deepskyblue, 0 0 100px skyblue;`
styles.code = settings => `font-size: ${settings.size }; line-height:1.5em; font-family: "Courier New", Courier, monospace; opacity:0; color: #1ED13A; text-shadow:0 0 2px hsla(115, 85%, 45%, .6), 0 6px 12px hsla(115, 75%, 45%, .4), 0 1px 2px hsla(115, 65%, 35%, .2), 0 2px 2px hsla(115, 55%, 15%, .1), -1px -5px 18px hsla(115, 45%, 5%, .05), -1px -3px 5px hsla(115, 35%, 5%, .02), 0 3px 3px hsla(115, 25%, 15%, .08), 2px 2px 2px hsla(0,0%,0%,.5), 0 -2px 2px hsla(115, 15%, 45%, .1);`

// attach log funciton. Everything set is called, it changes the method
// Main log method
function log() {
  let args = parseArguments(arguments);
  let messages = args.map(arr => formatArguments(arg, styles[this.default.style](this.default)));
  messages.forEach(message => {
    if (message.length === 1 && typeof message[0] !== "object" && console.default.useTable) {
      console.table(message);
    } else {
      consoleLog.apply(null, message);
    }
  });
}

// Set default settings
console.set = function(settings) {
  this.default = Object.assign(this.default, settings);
}

// Sets a default style
console.setStyle = function(style) {
  this.default.style = !styles[style] ? style : styles.pencil;
}

// FUN METHODS - Log with animated backgrounds

// Party Method
console.party = function() {
  let message = createMessage(arguments, "party", this.default.size);
  consoleLog.apply(null, message);
}

// Crystal Method
console.crystal = function() {
  let message = createMessage(arguments, "crystal", this.default.size);
  consoleLog.apply(null, message);
}

// Static Method
console.static = function() {
  let message = createMessage(arguments, "static", this.default.size);
  consoleLog.apply(null, message);
}

// Color Method
console.color = function() {
  let message = createMessage(arguments, "pixel", this.default.size);
  consoleLog.apply(null, message);
}

// Crystal Method
console.spring = function() {
  let message = createMessage(arguments, "spring", this.default.size);
  consoleLog.apply(null, message);
}

// Burn Method
console.burn = function() {
  let message = createMessage(arguments, "fire", this.default.size);
  consoleLog.apply(null, message);
}

// Assign methods
console.log = window.console.log.bind(log)

// Creates styled log message
function createMessage(arguments, style, size) {
  let partyUrl = `${url + style}.gif`;
  let css = `font-size: ${size}; background: -webkit-linear-gradient(transparent, transparent), url(${partyUrl}) repeat; font-weight: bold; -webkit-text-fill-color: transparent; background: -o-linear-gradient(transparent, transparent); -webkit-background-clip: text;`;
  return formatArguments(arguments, css);
}

// Arguments parsing logic
function formatArguments(args, css) {
  if (args.length === 1 && typeof args[0] === "object") {
    if (Array.isArray(args[0]) && args[0].some(isPrimitive)) {
      return args; 
    } 
    return args[0]; 
  }
  let message = args.reduce((text, arg, i) => {
    return i === 0 ? "%c" + arg : text + " %s"; 
  }, "");
  args[0] = css;
  args.unshift(message);
  return args;
}

function parseArguments(args) {
  let mainArguments = Array.prototype.slice.call(args);
  let messages = [];
  let message = [];
  mainArguments.forEach(arg => {
    if (typeof arg === "object") {
      if (message.length !== 0) messages.push(message);
      message = [];
      messages.push([arg])
    } else {
      message.push(arg);
    }
  });
  if (message.length !== 0) messages.push(message);
  return messages;
}

function isPrimitive(item) {
  let type = typeof item;
  return type === "string" || type === "number" || type === "boolean"; 
}

console.set({size: "3em", color: "green", useTable: true});
// console.party("hello", "what", "is happening", 234, false);
// console.crystal("hello", "what", "is happening", 234, false);
// console.burn("hello", "what", "is happening", 234, false);
// console.static("hello", "what", "is happening", 234, false);
// console.color("hello", "what", "is happening", 234, false);
// console.spring("hello", "what", "is happening", 234, false);
console.log("hello", "what", "is happening", 234, false);
console.log([1,2,3], "hok");
console.log(false, "ok");
console.log(styles);
