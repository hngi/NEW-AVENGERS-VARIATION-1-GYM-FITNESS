// MOBILE-NAV HEADER EFFECT
var navbtn = document.getElementsByClassName('m_nav');
var c_name = document.getElementsByClassName('company_name');
var nav = document.getElementsByClassName('main_nav_mb');
var tp = document.getElementsByClassName('tp_company_name');

for(let i=0; i < nav.length; i++){

    navbtn[i].addEventListener('click',()=>{
        setTimeout(()=>{
            if(nav[i].clientHeight > 520){
                c_name[i].style.transition = ".4s ease-out";
                c_name[i].style.opacity = 0;
                tp[i].style.transition = ".4s ease-out";
                tp[i].style.opacity = 1;
            }
            if(nav[i].clientHeight < 95){
                c_name[i].style.transition = ".4s ease-in";            
                c_name[i].style.opacity = 1;
                tp[i].style.transition = ".4s ease-in";            
                tp[i].style.opacity = 0;
            }
        },500)
    })

}




// scrollNav.addEventListener('click', ()=>{
//         body.style.transition = `transform 1s ease-in-out`
// })
// function smoothScroll(target, duration){
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;
//     function animation(currentTime){
//         if(startTime  === null) startTime = currentTime; 
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0,run);
//         if(timeElapsed < duration) requestAnimationFrame(animation)
//     }
//     function ease(t, b, c , d ){
//         t /= d /2;
//         if(t < 1) return c /2 * t * t + b;
//         t--;
//         return -c/2 * (t * (t -2)- 1) + b;
//     }
//     requestAnimationFrame(animation)
// }

// var section1 = document.querySelector('.section1').addEventListener('click', function(){
//     smoothScroll('.section2',2000)
// })

// var section2 = document.querySelector('.section2').addEventListener('click', function(){
//     smoothScroll('.section1', 2000)
// })




