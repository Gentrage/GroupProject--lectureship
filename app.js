//INDEX
//Logo

var animate1 = anime.timeline({loop: false})
.add({
    targets: '#logo',
    translateY: [
        {value: 1000, duration: 1800}
    ],
    rotate:{
        direction: 'alternate',
        value: '1turn',
        easing: 'linear',
        duration: 10000,
    }
});


GS.onclick = function(){
    var group1 = anime.timeline({loop: false})
    .add({
        targets: '.group',
        opacity: 0,
        scale: 0,
    }).add({
        targets: '.group',
        opacity: 1,
    }).add({
        targets: '.group',
        duration: 2000,
        scale: 1,
        rotate: '1turn',
    }).add({
        targets: '.group',  
        scale: 0,
        delay: 3000,
        duration: 3000,
        rotate: '2turn'
    });
};




// Text Anime.js
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 500 * (i+1)
    }).add({
        targets: '.ml9',
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

//Text Jan Gaska
    anime.timeline({loop: false})
    .add({
        targets: '.ml5 .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeOutElastic",
        duration: 4000
    }).add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutElastic",
        translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
    }).add({
        targets: '.ml5 .letters-left',
        delay: 500,
        opacity: [0,1],
        translateX: ["0.5em", 0],
        easing: "easeOutElastic",
        duration: 600,
        offset: '-=300'
    }).add({
        targets: '.ml5 .letters-right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutElastic",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.ml5',
        duration: 1000,
        easing: "easeOutElastic",
        delay: 1000
    });


            

 