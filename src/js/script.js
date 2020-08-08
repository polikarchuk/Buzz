$( document ).ready(function() {

    $("#menuToggle").click(function () {
        $(".wrapper,#menuToggle").toggleClass("active");
    });

    $('select').niceSelect();
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true




                }
            }

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    //add active filter_tags
    var filter_tags = $('.filter_tags_items  a');
    filter_tags.click(function(e){
        e.preventDefault();
        filter_tags.removeClass('active');
        $(this).addClass('active');
    });
    // end add active filter_tags

    $( ".product_filter_header" ).click(function() {
        $( ".product_filter_list" ).toggle( "slow" );
    });

    $( ".product_filter_header" ).click(function() {
        $(this).children().toggleClass( "active" );
    });


    $('.down').click(function () {
        var input = $(this).parent().find('input');
        var count = parseInt(input.val()) - 1;
        count = count < 1 ? 1 : count;
        input.val(count);
        input.change();
        return false;
    });
    $('.up').click(function () {
        var input = $(this).parent().find('input');
        input.val(parseInt(input.val()) + 1);
        input.change();
        return false;
    });


});






