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
  