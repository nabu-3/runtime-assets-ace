$.fn.nabuACE = function(options)
{
    if (typeof options === 'string') {
        this.each(function() {

        });
        return false;
    } else {
        return this.each(function() {
            var opts = $.extend({}, $.fn.nabuACE.defaults, options);
            var data = $(this).closest('[data-toggle="ace-editor"]').data();
            opts = $.extend({}, opts, data);
            this.nabuACE = new Nabu.ACE.Editor(this, opts);
            if (data['id']) {
                this.nabuACE.setId(data['id']);
            }
        });
    }
}

$.fn.nabuACE.defaults = {
    "aceTheme": "twilight",
    "aceMode": "text",
    "aceMinLines": "20",
    "aceMaxLines": "60"
};

function nbBootstrapACEs(container)
{
    var editors = $(container).find('[data-toggle="ace-editor"] textarea');
    if (editors.length > 0) {
        nabu.loadLibrary('ACE.Editor', function() {
            editors.nabuACE();
        });
    }
}

nabuBootstrap.addLoader(nbBootstrapACEs);
