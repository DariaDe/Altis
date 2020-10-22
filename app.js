console.log(window.innerWidth);

const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

var a;
function Animation(){
  if(a==1){
    document.getElementById("b").style.transform = "none";
    document.getElementById("a").style.transform = "none";
    document.getElementById("list").style.right="-120px";
    document.getElementById("list").style.opacity="0";
    return a=0;
  }

  else{
    document.getElementById("b").style.transform = "rotate(45deg) translate(-4px,-6px)";
    document.getElementById("a").style.transform = "rotate(-45deg) translate(-1px,2px)";
    document.getElementById("list").style.right="0";
    document.getElementById("list").style.opacity="1";
    return a=1;
  }
}

$("body").fitVids();

//ScrollMagic

const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration:8600, //видео 9 секунд => более оптимальная продолжительность анимации
  triggerElement: intro,
  triggerHook: 0
})

.setPin(intro)
.addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);


//Video animation

let acelamount = 0.6;
let scrollpos = 0;
let delay = 0;

scene.on("update", e =>{
  scrollpos = e.scrollPos / 1000; //превращаем милисекунды в секунды (т.е. будет 9 секунд)
});

setInterval(()=>{
  delay += (scrollpos - delay) * acelamount;
  video.currentTime = delay;
},70.3);

//Feature section


//Test

var controller2 = new ScrollMagic.Controller();

var wipeAnimation = new TimelineMax()
.from(".feature-h3", 1, {opacity:0, y:100})
.from("#f1-p", 0.5, {opacity:0, x:200}, "=.2")
.from("l1", 1, { width: 0}, "=-.5")
.from("#f2",1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1")
.from("#f1", 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7")

.fromTo("section.sticky2", 1, {x:"-100%"}, {x: "0%", ease: Linear.easeNone}, "=.2" )
.from("#f2-p", 0.5, {opacity:0, x:-200})
.from("l2", 1, { width: 0}, "=-.5")
.from(".f3",1, {x:200, opacity: 0,ease: Power4.easeInOut}, "=-1")
.from(".f4", 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.7")


.fromTo("section.sticky3", 1 , {x:  "100%"}, {x: "0%", ease: Linear.easeNone}, "=.2")
.from("#f3-p", 0.5, {opacity:0, x:200})
.from("l3", 1, { width: 0}, "=-.5")
.from(".f5",1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1")
.from(".f6", 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7")


.fromTo("section.sticky4", 1,{y: "-100%"}, {y: "0%", ease: Linear.easeNone}, "=.2")
.from("#f4-p", 0.5, {opacity:0, x:-200})
.from("l4", 1, { width: 0}, "=-.5")
.from(".f7",1, {x:200, opacity: 0,ease: Power4.easeInOut}, "=-1")
.from(".f8", 1, {x:-200, opacity: 0, ease: Power4.easeInOut}, "=-.7")


const scene4 = new ScrollMagic.Scene({
  triggerElement: "#third-page",
  triggerHook:0,
  duration:"300%",

})

.setPin("#third-page")
			.setTween(wipeAnimation)
			.addTo(controller2);



  var appearAnimation = new TimelineMax()
  .from(".team-h3", 0.5, {opacity:0, y:100}, "=-.5")
  .from("#tm1 img", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
  .from(" #tm1 .team-fio, #tm1 .team-position", 1 ,{opacity:0, x:-50, ease: Power4.easeInOut})
  .from("#tm1 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut })

  .from("#tm2 img", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
  .from(" #tm2 .team-fio, #tm2 .team-position", 1 ,{opacity:0, x:50, ease: Power4.easeInOut})
  .from("#tm2 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut })

  .from("#tm3 img", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
  .from(" #tm3 .team-fio, #tm3 .team-position", 1 ,{opacity:0, x:-50, ease: Power4.easeInOut})
  .from("#tm3 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut })




  const scene5 = new ScrollMagic.Scene({
    triggerElement: "#fourth-page",
    triggerHook:"onLeave",
    duration:"100%"
  })

  .setPin("#fourth-page")
  			.setTween(appearAnimation)
  			.addTo(controller2);

  var appearAnimation2 = new TimelineMax()

  .from("#tm5 img", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
  .from(" #tm5 .team-fio, #tm5 .team-position", 1 ,{opacity:0, x:-50, ease: Power4.easeInOut})
  .from("#tm5 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut })

  .from("#tm6 img", 1, {opacity:0,y:-50, ease: Power4.easeInOut},"=-.5")
  .from(" #tm6 .team-fio, #tm6 .team-position", 1 ,{opacity:0, x:50, ease: Power4.easeInOut})
  .from("#tm6 .team-p", 0.5, {opacity:0, y:-30, ease: Power4.easeInOut })

  const scene6 = new ScrollMagic.Scene({
    triggerElement: "#fifth-page",
    triggerHook:"onLeave",
    duration:"100%"
  })

  .setPin("#fifth-page")
        .setTween(appearAnimation2)
        .addTo(controller2);

var appearAnimation3 = new TimelineMax()
.from(".athlete-h3", 1 ,{opacity:0, y:50, ease:Power4.easeInOut})
.from(".cards-grid", 1, {opacity:0, y:60,ease:Power4.easeInOut})

const scene7 = new ScrollMagic.Scene({
  triggerElement:"#sixth-page",
  triggerHook:"onLeave",
  duration:"100%",

})

.setPin("#sixth-page")
      .setTween(appearAnimation3)
      .addTo(controller2);

//       var ml4 = {};
// ml4.opacityIn = [0,1];
// ml4.scaleIn = [0.2, 1];
// ml4.scaleOut = 3;
// ml4.durationIn = 800;
// ml4.durationOut = 600;
// ml4.delay = 500;

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml4 .letters-1',
//     opacity: ml4.opacityIn,
//     scale: ml4.scaleIn,
//     duration: ml4.durationIn
//   }).add({
//     targets: '.ml4 .letters-1',
//     opacity: 0,
//     scale: ml4.scaleOut,
//     duration: ml4.durationOut,
//     easing: "easeInExpo",
//     delay: ml4.delay
//   }).add({
//     targets: '.ml4 .letters-2',
//     opacity: ml4.opacityIn,
//     scale: ml4.scaleIn,
//     duration: ml4.durationIn
//   }).add({
//     targets: '.ml4 .letters-2',
//     opacity: 0,
//     scale: ml4.scaleOut,
//     duration: ml4.durationOut,
//     easing: "easeInExpo",
//     delay: ml4.delay
//   }).add({
//     targets: '.ml4 .letters-3',
//     opacity: ml4.opacityIn,
//     scale: ml4.scaleIn,
//     duration: ml4.durationIn
//   }).add({
//     targets: '.ml4 .letters-3',
//     opacity: 0,
//     scale: ml4.scaleOut,
//     duration: ml4.durationOut,
//     easing: "easeInExpo",
//     delay: ml4.delay
//   }).add({
//     targets: '.ml4 .letters-4',
//     opacity: ml4.opacityIn,
//     scale: ml4.scaleIn,
//     duration: ml4.durationIn
//   }).add({
//     targets: '.ml4 .letters-4',
//     opacity: 0,
//     scale: ml4.scaleOut,
//     duration: ml4.durationOut,
//     easing: "easeInExpo",
//     delay: ml4.delay
//   });
