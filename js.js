(function clickModalButton(){
    const element = document.querySelector('.button_modal');
    element.addEventListener('click', function(){
        $(document.querySelector('.overLayer')).fadeIn(3000);
        $(document.querySelector('.modal')).fadeIn(3000);
    });
})();

(function clickOverLayer(){
    const element = document.querySelector('.overLayer');
    element.addEventListener('click', function(){
        $(document.querySelector('.overLayer')).fadeOut(3000);
        $(document.querySelector('.modal')).fadeOut(3000);
    });
})();

(function clickButtonX(){
    const element = document.querySelector('.button_x');
    element.addEventListener('click',function(){
        $(document.querySelector('.overLayer')).fadeOut(3000);
        $(document.querySelector('.modal')).fadeOut(3000);
    })
})();

(function clickButtonOK(){
    const element = document.querySelector('.OK');
    element.addEventListener('click',function(){
        $(document.querySelector('.overLayer')).fadeOut(3000);
        $(document.querySelector('.modal')).fadeOut(3000);
    })
})();

(function clickButtonCanc(){
    const element = document.querySelector('.Canc');
    element.addEventListener('click',function(){
        $(document.querySelector('.overLayer')).fadeOut(3000);
        $(document.querySelector('.modal')).fadeOut(3000);
    })
})();

focusScrollMethod = function getFocus() {          
    document.querySelector(".modal").focus({preventScroll:false});
  }
focusNoScrollMethod = function getFocusWithoutScrolling() {          
    document.querySelector(".modal").focus({preventScroll:true});
  }
