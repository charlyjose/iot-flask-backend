


/*
COMPILED CODE
*/

document.addEventListener("DOMContentLoaded",function(){function g(){$.getJSON(endpoint,function(b){(function(f){f=document.querySelectorAll(f);Array.prototype.forEach.call(f,function(a,d){function h(){requestAnimationFrame(h);var a=(new Date).getTime()-p;if(a<=q){var b=x-k;b=1>(a/=q/2)?b/2*a*a*a*a+k:-b/2*((a-=2)*a*a*a-2)+k;c=b;0==d?l.innerHTML=Math.round(100*c)/100+" %":1==d?l.innerHTML=Math.round(100*c)/100+" \u2103":3==d&&(l.innerHTML=Math.round(100*
c)/100+" %");a=1.5*Math.PI;0==d&&55>c&&(c-=10);1==d&&(c=0!=c?c+35:c+10);2==d&&(c=0!=c?15*c:c+10);b=a+c/50*Math.PI;e.clearRect(0,0,canvas.width,canvas.height);e.beginPath();e.arc(r,t,u,a,4*Math.PI,!1);e.lineWidth=m;e.strokeStyle="#ddd";e.stroke();e.beginPath();e.arc(r,t,u,a,b,!1);e.lineWidth=m;e.strokeStyle=y;e.stroke()}}var f,g,v,z,e,m,r,t,u,c,k,x,q,p,y,l,n=function(){g=f=parseInt(window.getComputedStyle(a).width);0==d&&a.setAttribute("data-cp-percentage",b.widgets[0].value);1==d&&a.setAttribute("data-cp-percentage",
b.widgets[1].value);2==d&&a.setAttribute("data-cp-percentage",b.widgets[2].value);3==d&&a.setAttribute("data-cp-percentage",b.widgets[3].value);v=a.getAttribute("data-cp-percentage");z='<span class="percentage"><strong>'+v+'</strong> </span><canvas class="circleProgressCanvas" width="'+2*f+'" height="'+2*g+'"></canvas>';a.innerHTML=z;l=a.querySelector(".percentage");canvas=a.querySelector(".circleProgressCanvas");a.style.height=canvas.style.width=canvas.style.height=f+"px";e=canvas.getContext("2d");
r=canvas.width/2;t=canvas.height/2;k=c=0;x=v;q=1E3;m=25;u=canvas.width/2-m;y=a.getAttribute("data-cp-color");0==d&&(60<b.widgets[0].value?a.setAttribute("data-cp-color","#F4471D"):50>b.widgets[0].value?a.setAttribute("data-cp-color","#F2D031"):a.setAttribute("data-cp-color","#86DB4A"));1==d&&(28<b.widgets[1].value?a.setAttribute("data-cp-color","#F4471D"):25>b.widgets[1].value?a.setAttribute("data-cp-color","#F2D031"):a.setAttribute("data-cp-color","#86DB4A"));2==d&&(8<b.widgets[2].value?a.setAttribute("data-cp-color",
"#F4471D"):3>b.widgets[2].value?a.setAttribute("data-cp-color","#86DB4A"):a.setAttribute("data-cp-color","#F2D031"));3==d&&(50<b.widgets[3].value?a.setAttribute("data-cp-color","#5BD1FF"):40>b.widgets[3].value?a.setAttribute("data-cp-color","#F4471D"):a.setAttribute("data-cp-color","#86DB4A"));p=(new Date).getTime()};n();h();document.querySelectorAll(".btn")[0].addEventListener("click",function(){a.setAttribute("data-cp-percentage",Math.round(90*Math.random()+5));n();h()});a.addEventListener("click",
function(){n();h()});var w;window.addEventListener("resize",function(){clearTimeout(w);w=setTimeout(function(){clearTimeout(w);p=(new Date).getTime();n();h()},250)})})})(".counter")})}g();setInterval(g,5E3)});



/*

document.addEventListener("DOMContentLoaded", function () {

  function getSensor() {

    $.getJSON('http://blynk-cloud.com/dHeSr2A_yh9uwwfzz8rlHhcgB1GcTygy/project', function (data) {

      var circleProgress = function (selector) {
        var wrapper = document.querySelectorAll(selector);

        Array.prototype.forEach.call(wrapper, function (wrapper, i) {
          var wrapperWidth,
            wrapperHeight,
            percent,
            innerHTML,
            context,
            lineWidth,
            centerX,
            centerY,
            radius,
            newPercent,
            speed,
            from,
            to,
            duration,
            start,
            strokeStyle,
            text;

          var getValues = function () {
            wrapperWidth = parseInt(window.getComputedStyle(wrapper).width);
            wrapperHeight = wrapperWidth;

            // humidity
            if (i == 0)
              wrapper.setAttribute('data-cp-percentage', data.widgets[0].value);

            // temperature
            if (i == 1)
              wrapper.setAttribute('data-cp-percentage', data.widgets[1].value);

            // uv-index
            if (i == 2)
              wrapper.setAttribute('data-cp-percentage', data.widgets[2].value);

            // moisture
            if (i == 3)
              wrapper.setAttribute('data-cp-percentage', data.widgets[3].value);


            percent = wrapper.getAttribute('data-cp-percentage');


            innerHTML = '<span class="percentage"><strong>' + percent + '</strong> </span><canvas class="circleProgressCanvas" width="' + wrapperWidth * 2 + '" height="' + wrapperHeight * 2 + '"></canvas>';
            wrapper.innerHTML = innerHTML;
            text = wrapper.querySelector(".percentage");
            canvas = wrapper.querySelector(".circleProgressCanvas");
            wrapper.style.height = canvas.style.width = canvas.style.height = wrapperWidth + "px";
            context = canvas.getContext('2d');

            centerX = canvas.width / 2;
            centerY = canvas.height / 2;

            newPercent = 0;
            speed = 1;
            from = 0;
            to = percent;
            duration = 1000;
            lineWidth = 25;
            radius = canvas.width / 2 - lineWidth;
            strokeStyle = wrapper.getAttribute('data-cp-color');


            // COLOR

            // humidity
            if (i == 0) {
              // red 
              if (data.widgets[0].value > 60)
                wrapper.setAttribute('data-cp-color', '#F4471D');
              // yellow
              else if (data.widgets[0].value < 50)
                wrapper.setAttribute('data-cp-color', '#F2D031');
              // green
              else
                wrapper.setAttribute('data-cp-color', '#86DB4A');
            }

            // temperature
            if (i == 1) {
              // red 
              if (data.widgets[1].value > 28)
                wrapper.setAttribute('data-cp-color', '#F4471D');
              // yellow
              else if (data.widgets[1].value < 25)
                wrapper.setAttribute('data-cp-color', '#F2D031');
              // green
              else
                wrapper.setAttribute('data-cp-color', '#86DB4A');
            }

            // uv-index
            if (i == 2) {
              // red 
              if (data.widgets[2].value > 8)
                wrapper.setAttribute('data-cp-color', '#F4471D');
              // green
              else if (data.widgets[2].value < 3)
                wrapper.setAttribute('data-cp-color', '#86DB4A');
              // yellow
              else
                wrapper.setAttribute('data-cp-color', '#F2D031');
            }

            // moisture
            if (i == 3) {
              // blue 
              if (data.widgets[3].value > 50)
                wrapper.setAttribute('data-cp-color', '#5BD1FF');
              // red
              else if (data.widgets[3].value < 40)
                wrapper.setAttribute('data-cp-color', '#F4471D');
              // green
              else
                wrapper.setAttribute('data-cp-color', '#86DB4A');
            }

            
            start = new Date().getTime();
          };



          function animate() {
            requestAnimationFrame(animate);
            var time = new Date().getTime() - start;
            if (time <= duration) {
              var x = easeInOutQuart(time, from, to - from, duration);
              newPercent = x;
              
              // humidity
              if (i==0)
                text.innerHTML = Math.round(newPercent * 100) / 100 + ' %'//Math.round(newPercent);
              
              // temp
              else if (i==1)
                text.innerHTML = Math.round(newPercent * 100) / 100 + ' ℃'//Math.round(newPercent);
              
              // moisture
              else if (i==3)
                text.innerHTML = Math.round(newPercent * 100) / 100  + ' %'//Math.round(newPercent);

              drawArc();
            }
          }


          function drawArc() {

            var circleStart = 1.5 * Math.PI;

            // Special cases

            // humidity
            if (i == 0) {
              // bad
              if (newPercent < 55)
                newPercent = newPercent - 10;

            }

            // temp
            if (i == 1) {
              // critical temp
              if (newPercent != 0)
                newPercent = newPercent + 35;

              else
                newPercent = newPercent + 10;

            }

            // uv-index
            if (i == 2) {
              if (newPercent != 0)
                newPercent = newPercent * 15;

              else
                newPercent = newPercent + 10;

            }


            var circleEnd = circleStart + newPercent / 50 * Math.PI;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(centerX, centerY, radius, circleStart, 4 * Math.PI, false);
            context.lineWidth = lineWidth;
            context.strokeStyle = "#ddd";
            context.stroke();
            context.beginPath();
            context.arc(centerX, centerY, radius, circleStart, circleEnd, false);
            context.lineWidth = lineWidth;
            context.strokeStyle = strokeStyle;
            context.stroke();

          }


          var update = function () {
            getValues();
            animate();
          };
          update();


          var btnUpdate = document.querySelectorAll(".btn")[0];
          btnUpdate.addEventListener("click", function () {
            wrapper.setAttribute("data-cp-percentage", Math.round(getRandom(5, 95)));
            update();
          });
          wrapper.addEventListener("click", function () {
            update();
          });


          var resizeTimer;
          window.addEventListener("resize", function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
              clearTimeout(resizeTimer);
              start = new Date().getTime();
              update();
            }, 250);
          });
        });


        //
        // http://easings.net/#easeInOutQuart
        //  t: current time
        //  b: beginning value
        //  c: change in value
        //  d: duration
        //
        function easeInOutQuart(t, b, c, d) {
          if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
          return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }

      };

      circleProgress('.counter');

      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }


    });
  }

  getSensor();
  setInterval(getSensor, 5000);

});





*/

