# AutoScroll
Auto Scroller for use in infinite scroll testing 

# Usage
- Open console(chrome/firefox).
- Copy paste contents of [https://raw.githubusercontent.com/kishaningithub/autoscroll.js/master/AutoScroll.js](https://raw.githubusercontent.com/kishaningithub/autoscroll.js/master/AutoScroll.js)
- Do scrolling
```javascript
 var as = new AutoScroll();
 as.start({forward: true, speed: 'superfast'}); // Will start scrolling
 as.stop(); // Will stop scrolling
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
