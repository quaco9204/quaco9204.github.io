$(document).ready(function () {
    // section_visual animation
    let mini_01 = $('.mini-01');
    let mini_box_01 = $('.mini-01 .mini-box');
    let mini_02 = $('.mini-02');
    let mini_box_02 = $('.mini-02 .mini-box');
    let mini_03 = $('.mini-03');
    let mini_box_03 = $('.mini-03 .mini-box');
    let mini_04 = $('.mini-04');
    let mini_box_04 = $('.mini-04 .mini-box');
    let mini_05 = $('.mini-01');
    let mini_box_05 = $('.mini-01 .mini-box');
    mini_01.animate({
        // (아래) jquery vw vh 사용법
        top: $(window).height()*0.28,
    },1000).animate({        
        left: $(window).width()*0.46,
        top: $(window).height()*0.29,
        // opacity: 1
    },1000,function(){$(mini_box_01).css({opacity: 1})
    });
    setTimeout(
        function(){
            mini_02.animate({
                left: $(window).width()*0.60
                },1000).animate({
                    left: $(window).width()*0.74,
                    top: $(window).height()*0.46,
                },1000),function(){$(mini_box_02).css({opacity: 1})
            }
        }        
    , 2000);

    // setTimeout(
    //     function(){
    //         mini_02.animate({
    //             left: $(window).width()*0.60
    //             },1000).animate({
    //                 left: $(window).width()*0.74,
    //                 top: $(window).height()*0.46,
    //             },1000)
    //     }        
    // , 4000);

    

    // setTimeout(delayTimer, 200);



    // mini_02.animate({
    //     opacity: 1
    // })

    // section_visual animation end

    
});