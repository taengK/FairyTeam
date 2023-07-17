//모든 페이지 공통 스크립트(내비게이션 등)

$(function(){      //페이지가 열릴 때

    playSlide();    //슬라이드 실행

    /*메인메뉴에 닿을 때
       -800 초과 화면에서는 모든 서브메뉴와 흰색배경 보이고,
       -800 이하 화면에서는 해당 서브메뉴만 보여짐
    */
    $('.main, #subBox').mouseenter(function(){
        if( $(window).width() > 800 )
            $('.sub, #subBox').stop().slideDown(300);
        else
            $(this).children('.sub').stop().slideDown(300);
    });

    //메뉴에서 마우스 떠나면 서브메뉴와 흰색배경 숨김
    $('.main, #subBox').mouseleave(function(){
        $('.sub, #subBox').stop().slideUp(300);
    });

    //모바일 화면(800이하)에서 메뉴버튼과 흰색 배경을 누르면
    //메뉴와 흰색 배경 보여짐
    $('#view,#naviBack').click(function(){ 
        $('#navi').toggleClass('active'); 
        $('#naviBack').fadeToggle(300);
    });

    //슬라이드의 서클버튼 클릭할 때
    $('.circle').click(function(){
        let no = $(this).index();
        slideNo = no;

        slide(0)
    });

    //Youtube영상 팝업 띄우기
    $('.box1_2').click(function(){
        $('#modal').css('display','flex');
        youtube();
    });

    $('#modalClose').click(function(){
        $('#modal').fadeOut(500);
    })


});   //end $(function)



//슬라이드 구현-----------------------------
let slideNo = 0;
let loop;

function slide(no) {

    slideNo += no;
    if(slideNo > 2) slideNo=0;
    if(slideNo < 0) slideNo=2;

    //슬라이드의 이동 폭 계산(1.#box1의 100%, 2.슬라이드 폭)
    let x = $('.slide').width() * slideNo;

    //슬라이드 박스 이동
    $('#slideBox').css('marginLeft', -x);

    //서클버튼 변경
    $('.circle').css({
        'width': '40px', 'opacity':'.3'
    });
    $('.circle').eq(slideNo).css({
        'width': '60px', 'opacity':'1'
    });

    //타이틀 변경
    $('.slide>h2, .slide>p').hide();
    $('.slide>h2').eq(slideNo).show();
    $('.slide>p').eq(slideNo).show();

}   //end slide()

function playSlide() {
    loop = setInterval('slide(1)', 3000);
}

function stopSlide() {
    clearInterval(loop);
}



//Youtube 영상 세로 자동 조절(16:9 기준 = 0.5625)
function youtube() {
    let w = $('#video').width();     //유튜브 영상 가로폭
    let h = w * 0.5625;       //유튜브 영상 세로폭(가로기준 0.5625배)

    $('#video').height(h);     //유튜브 영상 세로폭 변경
}

$(document).ready(youtube);
$(window).resize(youtube);