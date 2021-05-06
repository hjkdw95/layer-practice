// 스크롤 했을 때 각 레이어가 따라서 올라가도록 하기

let scrollTop = 0;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.005;

let progressBar;
let parallax_0;
let parallax_1;
let parallax_2;
let parallax_3;
let parallax_4;
let parallax_5;
let parallax_6;



// 프로그레스 바 & 스크롤 따라서 레이어가 움직이도록 하기
function scrollBar(e){
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(scrollTop/(document.body.scrollHeight - window.innerHeight) * 100);
    progressBar.style.width = `${per}%`;

    parallax_5.style.transform = `translate(0, ${-scrollTop/6}px)`;
    parallax_4.style.transform = `translate(0, ${-scrollTop/3}px)`;
    parallax_3.style.transform = `translate(0, ${-scrollTop/4}px)`;
    parallax_2.style.transform = `translate(0, ${-scrollTop/5}px)`;
    parallax_1.style.transform = `translate(0, ${-scrollTop/6}px)`;
    parallax_0.style.transform = `translate(0, ${-scrollTop/8}px)`;
};

// 마우스 따라서 화면 움직이게 하기
function mouseFunc(e){
    x = (e.clientX - window.innerWidth/2);
    y = (e.clientY - window.innerHeight/2);


};

function loop(){
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    
    parallax_3.style.transform = `translate(${-mx/50}px, ${-scrollTop/4}px)`;
    parallax_4.style.transform = `scale(1.1) translate(${mx/30}px, ${-scrollTop/3}px)`;
    parallax_5.style.transform = `scale(1.2) translate(${-mx/8}px, ${-scrollTop/6}px)`;
    parallax_6.style.transform = `scale(1.2) translate(${mx/6}px, 0)`

    requestAnimationFrame(loop);
}



function init(){
    progressBar = document.querySelector(".progressBar");
    parallax_0 = document.querySelector("#parallax_0");
    parallax_1 = document.querySelector("#parallax_1");
    parallax_2 = document.querySelector("#parallax_2");
    parallax_3 = document.querySelector("#parallax_3");
    parallax_4 = document.querySelector("#parallax_4");
    parallax_5 = document.querySelector("#parallax_5");
    parallax_6 = document.querySelector("#parallax_6");



    window.addEventListener("mousemove", mouseFunc);
    window.addEventListener("scroll", scrollBar);

    loop();
};

init();