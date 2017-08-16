try {
    if (!Nabu) throw "Nabu Manager not loaded";
} catch (e) {
    throw "Nabu Manager not loaded";
}

if (typeof Nabu.ACE === 'undefined') {
    Nabu.ACE = function() {};
}

Nabu.ACE.Editor = function(container, config)
{
    this.container = container;
    this.config = config;
    this.events = new Nabu.EventPool();
    this.editor = null;

    this.init();
};

Nabu.ACE.Editor.prototype =
{
    init: function()
    {
        var Self = this;

        this.editor = ace.edit(this.container);
        this.editor.setTheme("ace/theme/" + this.config.aceTheme);
        this.editor.session.setMode("ace/mode/" + this.config.aceMode);
        this.editor.setOption("maxLines", this.config.aceMaxLines);
        this.editor.setOption("minLines", this.config.aceMinLines);
        this.editor.getSession().on('change', function(e) {
            Self.onChange(e);
        });
    },

    onChange: function(e)
    {
        if (typeof this.container === 'object') {
            this.container.value = this.editor.getValue();
        }
    }
};

nabu.registerLibrary('ACE.Editor', ['Event']);
