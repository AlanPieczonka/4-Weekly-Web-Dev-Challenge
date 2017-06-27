$(document).ready(function() {
    console.log( "JS WORKS" );
    
    let nav__listIsOpened = true;
    const header__hamburger = document.querySelector('.header__hamburger');
    header__hamburger.addEventListener('click', function(){
        if(nav__listIsOpened){
          $('.nav__list').fadeOut(300);
          nav__listIsOpened = false;
        }else{
          $('.nav__list').fadeIn(300);
          nav__listIsOpened = true;
        }
    });
    
    //SEARCH INPUT HEADER
    var header__inputIsOpened = false; 
$('.li__icon--search').click(function(){
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
    
});