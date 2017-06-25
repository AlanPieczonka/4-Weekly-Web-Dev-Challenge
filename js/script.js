$(document).ready(function() {
    console.log( "JS WORKS" );
    
    var headerIsOpened = false; 
$('.li__icon--search').click(function(){
    if(headerIsOpened === false){
         $(".nav__line--first").addClass('closed');
         $( ".header__input" ).fadeIn( 300, function() {
           headerIsOpened = true;
        });
     }else{
           $( ".header__input" ).fadeOut( 300, function() {
           headerIsOpened = false;
        });
         setTimeout(function(){
           $(".nav__line--first").delay(1000).removeClass('closed');
         },300)
     }

    
    
});
    
});