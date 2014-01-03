// add and remove anchor tags
$(window).load(function() {   
    $section1Links = $('a[href$="#section1"]');
    $section1Links.each(function() {
        if(!$(this).attr('data-linkhash')){
            var linkHash = $(this).attr('href');
            var linkPlain = linkHash.slice(0,-9);
            $(this).attr('data-linkhash',linkHash);
            $(this).attr('data-linkplain',linkPlain);
        };
    }); 
    $section2Links = $('a[href$="#section2"]');
    $section2Links.each(function() {
            if(!$(this).attr('data-linkhash')){
            var linkHash = $(this).attr('href');
            var linkPlain = linkHash.slice(0,-9);
            $(this).attr('data-linkhash',linkHash);
            $(this).attr('data-linkplain',linkPlain);
        };
    }); 
    $section3Links = $('a[href$="#section3"]');
    $section3Links.each(function() {
            if(!$(this).attr('data-linkhash')){
            var linkHash = $(this).attr('href');
            var linkPlain = linkHash.slice(0,-9);
            $(this).attr('data-linkhash',linkHash);
            $(this).attr('data-linkplain',linkPlain);
        };
    });    
    $section4Links = $('a[href$="#section4"]');
    $section4Links.each(function() {
            if(!$(this).attr('data-linkhash')){
            var linkHash = $(this).attr('href');
            var linkPlain = linkHash.slice(0,-9);
            $(this).attr('data-linkhash',linkHash);
            $(this).attr('data-linkplain',linkPlain);
        };
    }); 
    $allLinks = $section1Links.add($section2Links).add($section3Links).add($section4Links);
    function anchorResize(){
        if ($(window).width() > 1000) {
            $allLinks.each(function() {
                $(this).each(function() {
                    $(this).attr('href',$(this).attr('data-linkplain'));
                });
            });
        } else {
            $allLinks.each(function() {
                $(this).each(function() {
                    $(this).attr('href',$(this).attr('data-linkhash'));
                });
            });
        };  
    };
    $(window).resize(anchorResize).trigger("resize");
});