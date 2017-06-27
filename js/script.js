$(document).ready(function() {
    console.log( "JS WORKS" );
    
    const header__hamburger = document.querySelector('.header__hamburger');
    const li__iconSearch = document.querySelector('.li__icon--search');
    
    function hamburgerIconOpen(){
        $('.header__hamburger__icon--open').css('display', 'block');
        $('.header__hamburger__icon--close').css('display', 'none');
    }
    
    function hamburgerIconClose(){
        $('.header__hamburger__icon--open').css('display', 'none');
        $('.header__hamburger__icon--close').css('display', 'block');
    }
    
    //HAMBURGER FUNCTIONALITY ON DESKTOP
    let nav__listIsOpened = true;
    header__hamburger.addEventListener('click', function(){
        if(nav__listIsOpened){
             $('.nav__list').fadeOut(300);
             nav__listIsOpened = false;
             hamburgerIconClose();
        }else{
             $('.nav__list').fadeIn(300);
             nav__listIsOpened = true;
             hamburgerIconOpen();
        }
    });
    

    //HAMBURGER FUNCTIONALITY ON MOBILE
    let navMobileIsOpened = false;
    header__hamburger.addEventListener('click', function(){
        if(!navMobileIsOpened){
            $( ".nav--mobile" ).slideDown(function(){
                navMobileIsOpened = true;
            });
        }else{
            $( ".nav--mobile" ).slideUp(function(){
                navMobileIsOpened = false;
            });
        }
    });
    
    //HAMBURGER ICON OPEN/CLOSE
    
    
    //HEADER SEARCH INPUT
    let header__inputIsOpened = false; 
    li__iconSearch.addEventListener('click', function(){
    if(header__inputIsOpened === false){
         $(".nav__line--first").addClass('closed');
         $( ".header__input" ).fadeIn( 300, function() {
           header__inputIsOpened = true;
        });
     }else{
           $( ".header__input" ).fadeOut( 300, function() {
           header__inputIsOpened = false;
        });
         setTimeout(function(){
           $(".nav__line--first").delay(1000).removeClass('closed');
         },300)
     }  
});
    
       //SOCIAL DIVS COUNTERS
       const fbCounter = document.querySelector('.social__span--counter--fb');
        let fbCount = 0;
        window.setInterval(function(){
        if(fbCount>=156){
                clearInterval(fbCount);
            }
            else{
                        fbCount+=2;
                        fbCounter.innerHTML = fbCount + 'K';
            }

    }, 10);

       
       const twitterCounter = document.querySelector('.social__span--counter--twitter');
       twitterCounter.addEventListener('click', function(){
         console.log("twitter counter"); 
       }); 
    
        let twitterCount = 0;
        window.setInterval(function(){
        if(twitterCount>=89){
                clearInterval(twitterCount);
            }
            else{
                        twitterCount+=1;
                        twitterCounter.innerHTML = twitterCount + 'K';
            }

    }, 10);
    

    
});