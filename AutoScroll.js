var AutoScroll = (function(){

    var intervalId;

    return {
        start: function(options) {
            this.stop();
            var isForwardScroll = options.forward;
            var speed = options.speed;
            var interval = 1, scrollLength = 1;

            switch(speed){
              case 'slow'       : interval = 80;
                                  break;
              case 'medium'     : interval = 30;
                                  break;
              case 'fast'       : interval = 1;
                                  break;
              case 'superfast'  : interval = 1;
                                  scrollLength = 10;
                                  break;
              case 'extreme'    : interval = 1;
                                  scrollLength = 100;
                                  break;
              case 'nuclear'    : interval = 1;
                                  scrollLength = 10000;
                                  break;
            }

            intervalId = setInterval(function(){
              if(isForwardScroll){
                 document.body.scrollTop += scrollLength;
              }else{
                document.body.scrollTop -= scrollLength;
              }
           }, interval);
        },
        
        forward: function(options){
            options.forward = true;
            this.start(options);
        },
        
        backward: function(options){
            options.forward = false;
            this.start(options);
        },
        
        stop: function(){
          clearInterval(intervalId);
        }
    };

})();
