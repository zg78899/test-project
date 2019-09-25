// var $header = $('.header');

// $(window).scroll(function () {

//    if(scrollY <= 0){
//        $header.animate({
//             opacity: 0.5
//        }, 1000);
//    }
//    if(scrollY > 0 && $header.is(':not(:animated)')){
//        $header.animate({
//             opacity: 1
//        }, 1000);
//     }
//  });
var $header = document.querySelector('.header');
var $textColor=document.querySelectorAll('.main-menu-list > a');
var $logoImage=document.querySelector('.kakao-logo > a > img');
var $subCon=document.querySelectorAll('.sub-container');


for(var i = 0; i < $textColor.length; i++){

    $textColor[i].addEventListener('mouseover', function(){
        console.log('호버1');
        $header.style.background = "#fff";
                for(var i = 0; i < $textColor.length; i++){
            $textColor[i].style.color="black";
        }
        $logoImage.src="./images/logo_black.svg";
    });
}
for(var i = 0; i < $subCon.length; i++){
    
    console.log('빙글빙글')
    $subCon[i].addEventListener('mouseleave', function(){
        console.log('호버2');
        if(window.pageYOffset >=90){
            $header.style.background = "#fff";
            for(var i = 0; i < $textColor.length; i++){
                $textColor[i].style.color="black";
            }
            $logoImage.src="./images/logo_black.svg";
    
        }else {
            $header.style.background = "none";
            for(var i = 0; i < $textColor.length; i++){
                $textColor[i].style.color="#fff";
            }
            $logoImage.src="./images/logo_white.svg";
        }
        
    });   
}

document.querySelector('.event').addEventListener('mouseleave', function(){
    console.log('호버3');
    $header.style.background = "none";
            for(var i = 0; i < $textColor.length; i++){
        $textColor[i].style.color="#fff";
    }
    $logoImage.src="./images/logo_white.svg";
});


console.log($header);

window.onscroll= function(){
    if(window.pageYOffset >=90){
        // console.log('hi');
        $header.style.background = "#fff";
        for(var i = 0; i < $textColor.length; i++){
            $textColor[i].style.color="black";
        }
        $logoImage.src="./images/logo_black.svg";

    }else{
        $header.style.background ="none";
        for(var i = 0; i < $textColor.length; i++){
            $textColor[i].style.color="#fff";
        }
        $logoImage.src="./images/logo_white.svg";

    }
       
};

