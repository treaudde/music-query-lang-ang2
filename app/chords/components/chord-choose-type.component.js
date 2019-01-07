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
    var ChordChooseTypeComponent;
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
            ChordChooseTypeComponent = (function () {
                function ChordChooseTypeComponent(_musicService, _router) {
                    this._musicService = _musicService;
                    this._router = _router;
                    this._musicService.chord_templates.three = [];
                    this._musicService.chord_templates.four = [];
                    this._musicService.chord_templates.five = [];
                    this._musicService.chord_templates.six = [];
                    this._musicService.chord_templates.seven = [];
                    //add the Chord templates
                    //THREE NOTE
                    this._musicService.addChordTemplate('three', 'major', ['WW', 'WH']);
                    this._musicService.addChordTemplate('three', 'm / -', ['WH', 'WW']);
                    this._musicService.addChordTemplate('three', 'dim', ['WH', 'WH']);
                    this._musicService.addChordTemplate('three', '-5 / b5', ['WW', 'W']);
                    this._musicService.addChordTemplate('three', '+5 / +', ['WW', 'WW']);
                    //FOUR NOTE CHORDS
                    this._musicService.addChordTemplate('four', 'maj7 / M7', ['WW', 'WH', 'WW']);
                    this._musicService.addChordTemplate('four', '7', ['WW', 'WH', 'WH']);
                    this._musicService.addChordTemplate('four', 'm7', ['WH', 'WW', 'WH']);
                    this._musicService.addChordTemplate('four', '6', ['WW', 'WH', 'W']);
                    this._musicService.addChordTemplate('four', 'm6', ['WH', 'WW', 'W']);
                    this._musicService.addChordTemplate('four', 'dim. 7', ['WH', 'WH', 'WH']);
                    this._musicService.addChordTemplate('four', 'm7-5', ['WH', 'WH', 'WW']);
                    this._musicService.addChordTemplate('four', '7+5 / 7aug. 5', ['WW', 'WW', 'W']);
                    this._musicService.addChordTemplate('four', '7-5 / 7b5 / 7(b5)', ['WW', 'W', 'WW']);
                    this._musicService.addChordTemplate('four', '7sus. 4', ['WWH', 'W', 'WH']);
                    this._musicService.addChordTemplate('four', 'M7b3b5 / maj. 7 b3 b5', ['WH', 'WH', 'WWH']);
                    this._musicService.addChordTemplate('four', 'M7b3#5 / maj. 7 b3 #5', ['WH', 'WWH', 'WH']);
                    //FIVE NOTE CHORDS
                    this._musicService.addChordTemplate('five', 'maj. 9', ['WW', 'WH', 'WW', 'WH']);
                    this._musicService.addChordTemplate('five', '9', ['WW', 'WH', 'WH', 'WW']);
                    this._musicService.addChordTemplate('five', '9, #5 / 9, +5', ['WW', 'WW', 'W', 'WW']);
                    this._musicService.addChordTemplate('five', '9-5 / 9, b5', ['WW', 'W', 'WW', 'WW']);
                    this._musicService.addChordTemplate('five', 'm9', ['WH', 'WW', 'WH', 'WW']);
                    this._musicService.addChordTemplate('five', 'm9+5 / m9, #5', ['WH', 'WWH', 'W', 'WW']);
                    this._musicService.addChordTemplate('five', 'm9-5 / m9, b5', ['WH', 'WH', 'WW', 'WW']);
                    this._musicService.addChordTemplate('five', '7, b9 / 7-9', ['WW', 'WH', 'WH', 'WH']);
                    this._musicService.addChordTemplate('five', '7,6 / 7/6', ['WW', 'WH', 'W', 'H']);
                    this._musicService.addChordTemplate('five', '6,9', ['WW', 'WH', 'W', 'WWH']);
                    //SIX NOTE CHORDS
                    this._musicService.addChordTemplate('six', '11', ['WW', 'WH', 'WH', 'WW', 'WH']);
                    this._musicService.addChordTemplate('six', '11, b9 / 11-9', ['WW', 'WH', 'WH', 'WH', 'WW']);
                    this._musicService.addChordTemplate('six', '11, #5 / C11, +5', ['WW', 'WW', 'W', 'WW', 'WH']);
                    //SEVEN NOTE CHORDS
                    this._musicService.addChordTemplate('seven', '13', ['WW', 'WH', 'WH', 'WW', 'WH', 'WW']);
                    this._musicService.addChordTemplate('seven', '13, b9 / 13-9', ['WW', 'WH', 'WH', 'WH', 'WW', 'WW']);
                }
                ChordChooseTypeComponent.prototype.ngOnInit = function () {
                    this.chordTypes = this._musicService.chord_types;
                    this.chosenNote = this._musicService.note.getNoteDisplayName();
                };
                ChordChooseTypeComponent.prototype.chooseType = function (chordType) {
                    this._musicService.current_chord_type = chordType;
                    //get the modified chromatic scale for that note
                    this._musicService.getModifiedChromaticScale();
                    //get the modified chromatic scale for that note
                    this._musicService.getChord();
                    //go to the chord types
                    this._router.navigate(['ChordDisplay']);
                };
                ChordChooseTypeComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/chords/views/chord-choose-type.html',
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [music_service_1.MusicService, router_1.Router])
                ], ChordChooseTypeComponent);
                return ChordChooseTypeComponent;
            }());
            exports_1("ChordChooseTypeComponent", ChordChooseTypeComponent);
        }
    }
});
//# sourceMappingURL=chord-choose-type.component.js.map