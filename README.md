# AutoScroll
Auto Scroller for use in infinite scroll testing 

# Usage
1. Open console(chrome/firefox).
2. Run 
```javascript
 // Including the script via console
 var script = document.createElement("script");
 script.src = "https://rawgit.com/kishaningithub/autoscroll.js/master/AutoScroll.js";
 document.body.appendChild(script);
 
 // Doing scroll
 var scroll = new Scroll();
 scroll.start({forward: true, speed: 'superfast'}); // Will start scrolling
 scroll.stop(); // Will stop scrolling
```

# Options
- forward 
  - true: Forward scrolling
  - false: Backward scrolling

- speed
 - slow
 - medium
 - fast
 - superfast
 - extreme
