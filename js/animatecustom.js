$(document).ready(function () {
    // section_visual animation
    let mini_01 = $('.mini-01');
    let mini_box_01 = $('.mini-01 .mini-box-01');
    let mini_02 = $('.mini-02');
    let mini_box_02 = $('.mini-02 .mini-box-02');
    let mini_03 = $('.mini-03');
    let mini_box_03 = $('.mini-03 .mini-box-03');
    let mini_04 = $('.mini-04');
    let mini_box_04 = $('.mini-04 .mini-box-04');
    let mini_05 = $('.mini-05');
    let mini_box_05 = $('.mini-05 .mini-box-05');
    
    mini_01.effect( "bounce", {times:1}, 300,'ease out bounce');
    mini_box_01.css({opacity: 1})
    
    setTimeout(
        function(){
            mini_02.effect( "bounce", {times:1}, 300,'ease out bounce');
            mini_box_02.css({opacity: 1})
        }        
    ,1000);

    setTimeout(
        function(){
            mini_03.effect( "bounce", {times:1}, 300,'ease out bounce');
            mini_box_03.css({opacity: 1})
        }
    ,1800);
    setTimeout(
        function(){
            mini_04.effect( "bounce", {times:1}, 300,'ease out bounce');
            mini_box_04.css({opacity: 1})
        }
    ,2600);
    setTimeout(
        function(){
            mini_05.effect( "bounce", {times:1}, 300,'ease out bounce');
            mini_box_05.css({opacity: 1})
        }
    ,3400);
    
});