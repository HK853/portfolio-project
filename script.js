
// //   theme  //
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

// nav menu code

const btn = document.querySelector(".navbtn")
const navheader = document.querySelector(".header")
const p = document.querySelector(".nav-links")

const togglenavbar = () => {

    (navheader.classList.toggle("active"));

    //     p.style.display="none";
    //    }else{
    //     p.style.display="block";
    //    }
};
btn.addEventListener('click', () => togglenavbar());

// animation

const sr = ScrollReveal({
    distance: '100px',
    duration: 5000,
    delay: 200,
    reset: true
});

sr.reveal('.intro', { delay: '50', origin: 'bottom' });
sr.reveal('.pic', { delay: '50', origin: 'left' });

sr.reveal('.mypic', { delay: '50', orgin: 'top' });
sr.reveal('.mydata', { delay: '50', origin: 'right' });


// sticky nav bar


window.onscroll = function(){
    var topbar = document.querySelector("#h");
    var sticky = topbar.offsetTop;

     if(window.pageYOffset >= sticky){
        topbar.classList.add("sticky");
     }else{
        topbar.classList.remove("sticky");
     }
}
