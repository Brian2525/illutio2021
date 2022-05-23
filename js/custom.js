'Use strict'

$(document).ready(function(){

    if($('.brands_slider').length)
    {
    var brandsSlider = $('.brands_slider');
    
    brandsSlider.owlCarousel(
    {
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    nav:false,
    dots:false,
    autoWidth:true,
    items:8,
    margin:42
    });
    
    
    
    if($('.brands_next').length)
    {
    var next = $('.brands_next');
    next.on('click', function()
    {
    brandsSlider.trigger('next.owl.carousel');
    });
    }
    }
    
    
});

    $(document).ready(function() { 
        $("#owl-slider").owlCarousel({
             navigation : true, // Show next and prev buttons
             slideSpeed : 300,
             paginationSpeed : 400,
             singleItem:true,
             // Navigation
             navigationText : ["Anterior","Siguiente"],
             rewindNav : true,
             scrollPerPage : true,
             //Pagination
             pagination : true,
             paginationNumbers: false
         });
     });