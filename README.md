# AutoScroll
Auto Scroller for use in infinite scroll testing 

# Usage
1. Copy and paste contents of https://raw.githubusercontent.com/kishaningithub/AutoScroll/master/AutoScroll.js
   into the console (chrome/firefox).
2. Declare scroll object `var scroll = new Scroll();`
3. Start scrolling `scroll.start({forward: true, speed: 'superfast'});`
4. Stop scrolling `scroll.stop()`

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
