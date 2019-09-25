
// 섹션6 이미지 애니메이션
const homePhone = document.querySelector('.home-phone');
const section6 = document.querySelector('.section6');

window.addEventListener('scroll', () => {
  if (window.scrollY > section6.offsetTop - 700&& window.scrollY < section6.offsetTop) {
    homePhone.classList.add('home-phone-active');
  };
});

// 섹션3 이미지 애니메이션
const section3Phone = document.querySelector('.phone');
const section3 = document.querySelector('.section3');

window.addEventListener('scroll', () => {
  if (window.scrollY > section3.offsetTop - 700&& window.scrollY < section3.offsetTop) {
    section3Phone.classList.add('phone-active');
  };
});

// 섹션7 이미지 애니메이션
const section7circle = document.querySelector('.circle2');
const section7 = document.querySelector('.section7');
       
window.addEventListener('scroll', () => {
  if (window.scrollY > section7.offsetTop - 700&& window.scrollY < section7.offsetTop) {
    section7circle.classList.add('section7-active1');
    section7.classList.add('section7-active2');
  };
});

// 헤더 hover시 헤더 css스타일 변경
var $header = document.querySelector('.header');
var $textColor=document.querySelectorAll('.mouse-on');
var $textColor2=document.querySelectorAll('.main-menu-list > a');
var $logoImage=document.querySelector('.kakao-logo > a > img');
var $subCon=document.querySelectorAll('.sub-container');


for(var i = 0; i < $textColor.length; i++){

    $textColor[i].addEventListener('mouseover', function(){
        console.log('호버1');
        $header.style.background = "#fff";
                for(var i = 0; i < $textColor.length; i++){
            $textColor2[i].style.color="black";
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
                $textColor2[i].style.color="black";
            }
            $logoImage.src="./images/logo_black.svg";
    
        }else {
            $header.style.background = "none";
            for(var i = 0; i < $textColor.length; i++){
                $textColor2[i].style.color="#fff";
            }
            $logoImage.src="./images/logo_white.svg";
        }
        
    });   
}

document.querySelector('.event').addEventListener('mouseleave', function(){
    console.log('호버3');
    $header.style.background = "none";
            for(var i = 0; i < $textColor.length; i++){
        $textColor2[i].style.color="#fff";
    }
    $logoImage.src="./images/logo_white.svg";
});


console.log($header);

// 스크롤시 헤더 css 스타일 변경
window.onscroll= function(){
    if(window.pageYOffset >=90){
        // console.log('hi');
        $header.style.background = "#fff";
        for(var i = 0; i < $textColor.length; i++){
            $textColor2[i].style.color="black";
        }
        $logoImage.src="./images/logo_black.svg";

    }else{
        $header.style.background ="none";
        for(var i = 0; i < $textColor.length; i++){
            $textColor2[i].style.color="#fff";
        }
        $logoImage.src="./images/logo_white.svg";

    }
       
};

// 헤더 탭 마우스엔터
const mouseOn = document.querySelector('.main-menu');
const tabShow = document.querySelectorAll('.tab-show');

mouseOn.addEventListener('mouseenter',function(e){
  // '은행소개' li 가 mouse-on 클라스를 갖고있지 않으면 무시해라
  if (!e.target.classList.contains('mouse-on')) return;
  e.target.classList.add('show');
}, true)

mouseOn.addEventListener('mouseleave',function(e){
  if (!e.target.classList.contains('mouse-on')) return;
  e.target.classList.remove('show');
}, true)

// 헤더 탭 포커스
for(let i = 0; i< tabShow.length; i++){
  tabShow[i].addEventListener('focus', function () {
    console.log('focus');
    if(tabShow[i].classList.contains('tab-container')){
      tabShow[i].classList.remove('tab-container')
    }else{
      tabShow[i].classList.add('tab-container')
    }
  });
}

for(let i = 1; i<tabShow.length; i++){
  tabShow[i].addEventListener('focus', function () {
      if(tabShow[i-1].classList.contains('tab-container')){
        tabShow[i-1].classList.remove('tab-container');
      }
  })
}
  