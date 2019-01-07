System.register(['angular2/router', 'angular2/core', '../../main/services/music.service'], function(exports_1, context_1) {
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
    var router_1, core_1, music_service_1, router_2;
    var ScaleChooseTypeComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (music_service_1_1) {
                music_service_1 = music_service_1_1;
            }],
        execute: function() {
            ScaleChooseTypeComponent = (function () {
                function ScaleChooseTypeComponent(_musicService, _router) {
                    this._musicService = _musicService;
                    this._router = _router;
                    this._musicService.scale_templates = {};
                    this._musicService.scale_types = [];
                    //add the scale templates
                    this._musicService.addScaleTemplate('major', ['W', 'W', 'H', 'W', 'W', 'W', 'H']);
                    this._musicService.addScaleTemplate('minor', ['W', 'H', 'W', 'W', 'H', 'W', 'W']);
                    this._musicService.addScaleTemplate('harmonic minor', ['W', 'H', 'W', 'W', 'H', 'WH', 'H']);
                    this._musicService.addScaleTemplate('pentatonic', ['W', 'W', 'WH', 'W', 'WH']);
                    this._musicService.addScaleTemplate('minor pentatonic', ['WH', 'W', 'W', 'WH', 'W']);
                }
                ScaleChooseTypeComponent.prototype.ngOnInit = function () {
                    this.scaleTypes = this._musicService.scale_types;
                    this.chosenNote = this._musicService.note.getNoteDisplayName();
                };
                ScaleChooseTypeComponent.prototype.chooseType = function (scaleType) {
                    this._musicService.current_scale_type = scaleType.toUpperCase();
                    //get the modified chromatic scale for that note
                    this._musicService.getModifiedChromaticScale();
                    //get the modified chromatic scale for that note
                    this._musicService.getScale();
                    //go to the chord types
                    this._router.navigate(['ScaleDisplay']);
                };
                ScaleChooseTypeComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/scales/views/scale-choose-type.html',
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [music_service_1.MusicService, router_1.Router])
                ], ScaleChooseTypeComponent);
                return ScaleChooseTypeComponent;
            }());
            exports_1("ScaleChooseTypeComponent", ScaleChooseTypeComponent);
        }
    }
});
//# sourceMappingURL=scale-choose-type.component.js.map