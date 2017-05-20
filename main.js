requirejs.config({
    baseUrl: 'dist',
    deps: ['tsc'],
    callback: function () {
        require(['app']);
    }
});