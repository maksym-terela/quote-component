import jquery from 'jquery';

jquery(function($) {

    var $wrapper = $(".wp-block-testimonials-extendedblock");
    $(".instagram").click(function() {
        html2canvas($($wrapper), {
            scale: 2,
            onrendered: function(canvas) {
                saveAs(canvas.toDataURL(), 'quote.jpg');
            }
        });
    });
    function saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }
});