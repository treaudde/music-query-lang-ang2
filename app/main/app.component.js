System.register(['angular2/core', './services/music.service', 'angular2/router', './choose-option.component', '../chords/components/chord-choose-note.component', '../chords/components/chord-choose-type.component', '../chords/components/chord-display.component', '../scales/components/scale-choose-note.component', '../scales/components/scale-choose-type.component', '../scales/components/scale-display.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, music_service_1, router_1, choose_option_component_1, chord_choose_note_component_1, chord_choose_type_component_1, chord_display_component_1, scale_choose_note_component_1, scale_choose_type_component_1, scale_display_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (music_service_1_1) {
                music_service_1 = music_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (choose_option_component_1_1) {
                choose_option_component_1 = choose_option_component_1_1;
            },
            function (chord_choose_note_component_1_1) {
                chord_choose_note_component_1 = chord_choose_note_component_1_1;
            },
            function (chord_choose_type_component_1_1) {
                chord_choose_type_component_1 = chord_choose_type_component_1_1;
            },
            function (chord_display_component_1_1) {
                chord_display_component_1 = chord_display_component_1_1;
            },
            function (scale_choose_note_component_1_1) {
                scale_choose_note_component_1 = scale_choose_note_component_1_1;
            },
            function (scale_choose_type_component_1_1) {
                scale_choose_type_component_1 = scale_choose_type_component_1_1;
            },
            function (scale_display_component_1_1) {
                scale_display_component_1 = scale_display_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_musicService) {
                    this._musicService = _musicService;
                    this.app_title = "Music Query Language";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'music-query-language',
                        templateUrl: '/app/templates/main.html',
                        providers: [music_service_1.MusicService, router_1.ROUTER_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Options',
                            component: choose_option_component_1.ChooseOptionComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/chord/choose-note',
                            name: 'ChordsChooseNote',
                            component: chord_choose_note_component_1.ChordChooseNoteComponent,
                        },
                        {
                            path: '/chord/choose-type',
                            name: 'ChordsChooseType',
                            component: chord_choose_type_component_1.ChordChooseTypeComponent,
                        },
                        {
                            path: '/chord/display',
                            name: 'ChordDisplay',
                            component: chord_display_component_1.ChordDisplayComponent,
                        },
                        {
                            path: '/scale/choose-note',
                            name: 'ScalesChooseNote',
                            component: scale_choose_note_component_1.ScaleChooseNoteComponent,
                        },
                        {
                            path: '/scale/choose-type',
                            name: 'ScalesChooseType',
                            component: scale_choose_type_component_1.ScaleChooseTypeComponent,
                        },
                        {
                            path: '/scale/display',
                            name: 'ScaleDisplay',
                            component: scale_display_component_1.ScaleDisplayComponent,
                        },
                    ]), 
                    __metadata('design:paramtypes', [music_service_1.MusicService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map