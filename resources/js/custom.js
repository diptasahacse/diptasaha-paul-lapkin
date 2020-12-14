//scroll behaviour function
$(function(){
    $('.menu-item ul li a ,.next-section a').on('click',function(){
        $('html,body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
            
        },2000);
        return false;
        
    });
    
});

//Menu Open function
function openMenu(){
    document.getElementById('nav-contain').style.width="100%";
}
//Menu Close function
function closeMenu(){
    document.getElementById('nav-contain').style.width="0%";
}

//mixitup
var mixer = mixitup('.work-container');

//wow animated js activate
new WOW().init();







