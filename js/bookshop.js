// 先把兩個標籤找出來
const tabElements = document.querySelectorAll('.tab');
const contentElements = document.querySelectorAll('.content');

//這是第三種方法，也是最常用的方式

//tabElements.forEach 是按鈕都選一次
//(function (tabElement,index) 元素加index是索引值，對應到contenElemnts，才不會對應不到
tabElements.forEach(function (tabElement, index) {

  //觸發tabElement 監聽事件
  tabElement.addEventListener('click', function () {

    //tabElements.forEach 是按鈕都選一次
    tabElements.forEach(function (tabElement) {

      //
      tabElement.classList.remove('active')
    })
    //tabElemen可以換成this   this指用在addEventListener點擊的時候
    tabElement.classList.add('active');

    //contentElements.forEach 是按鈕都選一次
    contentElements.forEach(function (contentElement) {
      contentElement.classList.remove('active')
    });
    contentElements[index].classList.add('active');
  });
});
