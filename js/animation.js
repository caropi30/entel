//Card animation

$(document).ready(function(){
    
    $('#equipmentCard').hover(
        //mouse hover
        funtion(){
            $(this).animate({ 
                marginTop: "-=1%",
            },200);
        },

        //card hover out
        funtion(){
            $(this).animate({
                marginTop: "0%"
            },200);
        }
    );
});