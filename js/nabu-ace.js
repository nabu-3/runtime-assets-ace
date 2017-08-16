/* Static load of ACE library */
(function() {
    document.write('<script type="text/javascript" charset="utf-8" src="/runtime/assets/ace/1.2.8/ace.js"></script>');
    Nabu.LibraryManager.Packages.registerPackage(
        '/runtime/assets/ace/js/lib/',
        ['ACE.Editor']
    );
})();
