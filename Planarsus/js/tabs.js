jQuery('.tabs').each(function () {
    var $active,
        $content,
        key,
        $links = jQuery(this).find('a');

    $active = jQuery($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
    $active.addClass('active');

    key = '.' + $active[0].hash.substr(1);

    $content = $(key);

    $links.not($active).each(function () {
        var key = '.' + this.hash.substr(1);
        jQuery(key).fadeOut(400).hide();
    });

    jQuery(this).on('click', 'a', function (e) {
        $active.removeClass('active');
        $content.hide();
        $active = jQuery(this);
        key = '.' + this.hash.substr(1);
        $content = jQuery(key);
        $active.addClass('active');
        $content.fadeIn(400).show();
        e.preventDefault();
    });
});

/////////////////////////////////////////

jQuery('.how-it-works-tabs').each(function () {
    var $active,
        $content,
        key,
        $links = jQuery(this).find('a');

    $active = jQuery($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
    $active.addClass('active');

    key = '.' + $active[0].hash.substr(1);

    $content = $(key);

    $links.not($active).each(function () {
        var key = '.' + this.hash.substr(1);
        jQuery(key).fadeOut(200).hide();
    });
    var scrollTimeout;
    jQuery(this).on('mouseenter', 'a', function (e) {
var me = this;
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function () {
                console.log('tyt');
                $active.removeClass('active');
                $content.hide();
                $active = jQuery(me);
                key = '.' + me.hash.substr(1);
                $content = jQuery(key);
                $active.addClass('active');
                $content.fadeIn(200).show();
                scrollTimeout = null;
            }, 100);
        }

        e.preventDefault();
    });

    // jQuery(this).on('mouseover', 'a', function (e) {
    //     $active.removeClass('active');
    //     $content.hide();
    //     e.preventDefault();
    // });

});
