# Fun Logger

Experimental project exploring the JavaScript console.

## Usage

Require the script.

```html
<script src="https://cdn.rawgit.com/berto/fun-logger/master/fun-logger.js" type="text/javascript"></script>
```

`console.log` works per usual with an added random emoji at the beginning.

There are fun methods to print animated text

```js 
console.party("Party", "Time");
console.crystal("Crystal", "looks", "awesome");
console.burn("BY", "FIRE", "BE", "PURGED");
console.static("Static theme");
console.color("cooolooors");
console.spring("Is Spring Awesome??", true);
console.rand("That's so random");
```

![methods](/assets/methods.png)

## Configuration

Use `console.set` to configure `console.print` and `console.log`. It takes an object with the setting you want to change.

```js
console.set({
  font: "Arial, Helvetica, sans-serif", // font family
  size: "1em",                          // font size
  color: "#444",                        // font color
  style: "pencil",                      // preset styles - look at example below 
  imageUrl: "",                         // hard set a background image for all methods 
  emoji: "❤️",                           // prefix message for console.log - random by default 
  useEmoji: true,                       // remove emoji or message from console.log
  useTable: false                       // display console.table automatically for arrays and objects
}); 
```

Available styles: 

- "bubbles"
- "cells"
- "crystal"
- "fire"
- "flashes"
- "lasers"
- "party"
- "pencil"
- "pixel"
- "rainbow"
- "spring"
- "static"
- "trip"

![styles](/assets/fun.png)
