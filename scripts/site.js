jQuery(function()
{
  $('#footer').onePageNav({
    begin: function() {
    // console.log('start')
    },
    end: function() {
    // console.log('stop')
    }
    });

    jQuery( '.birds img' ).click(function()
    {
       // content = jQuery( this ).siblings( '.content');
        
		jQuery('.birds img').toggleClass('fade');
        // jQuery('.birds .content .description').toggleClass('visible');
        jQuery(this).removeClass('fade');
       		
		
		if (jQuery('.birds img').hasClass('fade')) {
			jQuery('.birds .content .description').removeClass('visible');
		} 
		jQuery(this).parent().children('.content').children('.description').toggleClass('visible');
		content.children( '.description' ).toggle(200);

    });
});
