// Reactive input fields
// See also http://www.quora.com/JavaScript/Which-plugin-to-use-for-HTML5-placeholder-that-retains-the-label-on-focus

(function(){
    $.fn.selectRange = function(start, end) {
        // http://stackoverflow.com/a/841121/11236
        return this.each(function() {
            if (this.setSelectionRange) {
                this.focus();
                this.setSelectionRange(start, end);
            } else if (this.createTextRange) {
                var range = this.createTextRange();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', start);
                range.select();
            }
        });
    };
    $.fn.setCaretToPos = function(pos) {
        this.selectRange(pos, pos);
    };
})(jQuery);

function removeDefaultText(elem) {
    if (elem.value == elem.defaultValue) {
        elem.value = '';
        $(elem).addClass("not-dim");
    }
}
$(document).ready(function(){
    function fixDefaultText(element) {
        if (element.value == '') {
            element.value = element.defaultValue;
            $(element).removeClass("not-dim");
        }
        if (element.value == element.defaultValue) {
            $(element).setCaretToPos(0);
        }
    }

    function isPrintableKey(event) {
        return event.which !== 0 && event.charCode !== 0;
    }
    $("input.reactive").keypress(function(event){
        if (!isPrintableKey(event) || event.charCode == 13 /* Enter */) {
            // Don't change the filled content on movement keys, to prevent flickering
            return;
        }
        removeDefaultText(this);
    }).keyup(function() {
        fixDefaultText(this);
        return false;
    }).mousedown(function(){
        // Chrome: prevents selecting the default text
        if (this.value != this.defaultValue) {
            return true;
        }
        fixDefaultText(this);
        return false;
    }).click(function(){
        // mousedown doesn't work in IE
        if (this.value != this.defaultValue) {
            return true;
        }
        fixDefaultText(this);
        return false;
    }).bind('paste', function(){
        removeDefaultText(this);
    });
});
