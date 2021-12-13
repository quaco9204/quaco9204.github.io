$(document).ready(function () {});

window.onload = function () {

    var bar_ps = new ProgressBar.Circle(skill_ps, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#d8bc34',
        trailColor: '#eee',
        trailWidth: 12,
        svgStyle: null
    });
    bar_ps.animate(0.5);  // Number from 0.0 to 1.0

    var bar_il = new ProgressBar.Circle(skill_il, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#d8bc34',
        trailColor: '#eee',
        trailWidth: 12,
        svgStyle: null
    });
    bar_il.animate(0.25);  // Number from 0.0 to 1.0

    var bar_html = new ProgressBar.Circle(skill_html, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#d8bc34',
        trailColor: '#eee',
        trailWidth: 12,
        svgStyle: null
    });
    bar_html.animate(0.75);  // Number from 0.0 to 1.0

    var bar_js = new ProgressBar.Circle(skill_js, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#d8bc34',
        trailColor: '#eee',
        trailWidth: 12,
        svgStyle: null
    });
    bar_js.animate(0.65);  // Number from 0.0 to 1.0

    var bar_vue = new ProgressBar.Circle(skill_vue, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#d8bc34',
        trailColor: '#eee',
        trailWidth: 12,
        svgStyle: null
    });
    bar_vue.animate(0.4);  // Number from 0.0 to 1.0

    
    // let options = {};
    // if ( $(".swiper-container .swiper-slide").length < 3 ){
    //     options = {            
    //         loop: false
    //     }
    // } else {
    //     options = {
    //         loop: true,
    //         autoplay: false,
    //     }
    // }

    let sw_main = new Swiper('.sw-main', {
        loop: true,
        slidesPerView: 3,        

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        // navigation: {
        //     prevEl: '.sw-main-prev',
        //     nextEl: '.sw-main-next',
        // },
    });

    let sw_sub = new Swiper('.sw-sub', {
        loop: false,
        slidesPerView: 3,        

        autoplay: false
        
        // navigation: {
        //     prevEl: '.sw-main-prev',
        //     nextEl: '.sw-main-next',
        // },
    });


    //위치 확인 - 메뉴 다크모드
    let sc_y = $(window).scrollTop();
    console.log(sc_y);


    let pos_check = false;

    if(sc_y>=930){
        pos_check = true;

    }else if(sc_y >= 5090){
        pos_check = false;
    }

    console.log(pos_check);

    
}