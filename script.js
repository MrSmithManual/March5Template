var video = document.getElementById("myVideo");
            var btn = document.getElementById("myBtn");

            function myFunction() 
            {
              if (video.paused) {
                video.play();
                pauseBtn.innerHTML = "Pause";
              } else {
                video.pause();
                pauseBtn.innerHTML = "Play";
              }
            }
            
             function myFunction1() 
            {
               window.location="index.html";
            }
            
            function myFunction2() 
            {
               window.location="cplus.html";
            }
            
            function myFunction3() 
            {
               window.location="healthscience.html";
            }
            
            function myFunction4() 
            {
               window.location="construction.html";
            }
            
            function myFunction5() 
            {
               window.location="culinary.html";
            }
            function myFunction6() 
            {
               window.location="emt.html";
            }
            function myFunction7() 
            {
               window.location="collisionrepair.html";
            }
            function myFunction8() 
            {
               window.location="mechanics.html";
            }
            function myFunction9() 
            {
               window.location="engineering.html";
            }
            function myFunction10() 
            {
               window.location="teachertraining.html";
            }
            function myFunction11() 
            {
               window.location="contact.html";
            }
            var vid = document.getElementById("myVideo");

            function enableMute() { 
                if (video.muted === false)
                {
                    vid.muted = true;
                    soundBtn.innerHTML = "Unmute";
                } else {
                    vid.muted = false;
                    soundBtn.innerHTML = "Mute";
                }
            } 

          