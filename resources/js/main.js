
$(document).on('click','ul li',function(){
    $(this).addClass('active').siblings().removeClass('active')
})


$(document).ready(function(){
    //STICKY MENU
  $(".js--services-section").waypoint(function(direction){
      if(direction == "down"){
            $("nav").addClass("sticky");
         }else{
             $("nav").removeClass("sticky");
         }
  });
    
    //MIXITUP (PROTFOLIO SECTION)
    var mixer = mixitup('.container');
})

//smooth scroll for ie / edge /safri

$("a").on('click',function(event){
             if(this.hash !== ""){
                    event.preventDefault();
    
                    var hash = this.hash;
    
                $('html,body').animate({
                    scrollTop: $(hash).offset().top}, 800, function(){window.location.hash = hash;
                });
                }               
 });









function openNav(){
    document.getElementById("myNav").style.width="100%";
}

function closeNav(){
    document.getElementById("myNav").style.width="0%";
}