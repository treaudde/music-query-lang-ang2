System.register(['angular2/platform/browser', './main/app.component', 'angular2-localstorage/LocalStorageEmitter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, LocalStorageEmitter_1;
    var appPromise;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (LocalStorageEmitter_1_1) {
                LocalStorageEmitter_1 = LocalStorageEmitter_1_1;
            }],
        execute: function() {
            appPromise = browser_1.bootstrap(app_component_1.AppComponent);
            LocalStorageEmitter_1.LocalStorageSubscriber(appPromise);
        }
    }
});
//# sourceMappingURL=main.js.map