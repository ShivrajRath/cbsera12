requirejs.config({
    baseUrl: 'built',
    deps: ['tsc'],
    callback: function () {
        require(['app']);
    }
});