function start()
        {
            document.getElementsByTagName('footer').style.animation = "smoke 2s linear forwards";
            // document.getElementById('earthlogo').style.animation = "anim2 2s 2s forward";
        }

var footer = document.querySelector('body, footer');
        footer.addEventListener("click", function (event) {
            event.target.style.animation = "smoke 2s linear forwards";
        
        });         






// now CSS does the hover so we just need the "click"
// on footer to do the transition on "I Did It" with JS