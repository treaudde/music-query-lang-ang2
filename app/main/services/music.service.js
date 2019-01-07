System.register(['../models/note', 'angular2/core'], function(exports_1, context_1) {
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
    var note_1, core_1;
    var MusicService;
    return {
        setters:[
            function (note_1_1) {
                note_1 = note_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MusicService = (function () {
                function MusicService() {
                    //the note object the operations will be based on
                    this.note = null;
                    //stores the chromatic scale
                    this.chromatic_scale = [];
                    //once a chord or scale is picked, this will hold the chromatic scale
                    //starting and ending with the chosen note
                    this.modified_chromatic_scale = [];
                    //stores the chosen scale
                    this.scale = [];
                    this.current_scale_type = '';
                    this.scale_types = [];
                    this.scale_templates = {};
                    this.chord = [];
                    this.chord_templates = {};
                    this.current_chord_type = '';
                    this.chord_types = {
                        three: [],
                        four: [],
                        five: [],
                        six: [],
                        seven: []
                    };
                    this.notes = ['A', 'A#|Bb', 'B', 'C', 'C#|Db', 'D', 'D#|Eb', 'E', 'F',
                        'F#|Gb', 'G', 'G#|Ab'];
                    this.step_values = {
                        'W': 2,
                        'H': 1,
                        'WH': 3,
                        'WW': 4,
                        'WWH': 5
                    };
                    this.init();
                }
                MusicService.prototype.init = function () {
                    this.createChromaticScale();
                };
                MusicService.prototype.createChromaticScale = function () {
                    var _this = this;
                    this.chromatic_scale = [];
                    //process the notes and create chromatic scale
                    this.notes.forEach(function (note, index, array) {
                        var noteObject = null;
                        //split it to see if it has multiple names
                        var noteParts = note.split('|');
                        if (noteParts.length > 1) {
                            noteObject = new note_1.Note(noteParts[0], noteParts[1], index);
                        }
                        else {
                            noteObject = new note_1.Note(noteParts[0], null, index);
                        }
                        _this.chromatic_scale.push(noteObject);
                    });
                    console.log(this.chromatic_scale);
                };
                MusicService.prototype.getModifiedChromaticScale = function () {
                    var _this = this;
                    //make sure this is empty
                    this.modified_chromatic_scale = [];
                    //where we will start and end to create the modified chromatic scale
                    var start_index = 0;
                    this.chromatic_scale.forEach(function (note, index) {
                        if (_this.note.name === note.name) {
                            start_index = index;
                        }
                    });
                    //now lets create the modified chromatic scale
                    for (var x = start_index; x < this.notes.length; x++) {
                        this.modified_chromatic_scale.push(this.chromatic_scale[x]);
                    }
                    for (var x = 0; x <= start_index; x++) {
                        this.modified_chromatic_scale.push(this.chromatic_scale[x]);
                    }
                    //double it for the extended chords
                    var modified_chromatic_scale_length = this.modified_chromatic_scale.length;
                    for (var x = 1; x < modified_chromatic_scale_length; x++) {
                        this.modified_chromatic_scale.push(this.modified_chromatic_scale[x]);
                    }
                    console.log(this.modified_chromatic_scale);
                };
                MusicService.prototype.getScale = function () {
                    //make sure this is empty since the service is only instantiated once
                    this.scale = [];
                    //get the scale type
                    var scale_type = this.current_scale_type.toLowerCase();
                    //get the template
                    var template = this.scale_templates[scale_type];
                    //get the next step to match
                    var counter_number = 0; //initally
                    var step = '';
                    for (var x = 0; x < this.modified_chromatic_scale.length; x++) {
                        if (x === counter_number) {
                            this.scale.push(this.modified_chromatic_scale[x]);
                            step = template.shift();
                            if (typeof this.step_values[step] !== 'undefined') {
                                counter_number += this.step_values[step];
                            }
                        }
                    }
                };
                MusicService.prototype.getChord = function () {
                    //make sure this is empty since the service is only instantiated once
                    this.chord = [];
                    //get the chord type
                    var chord_type = this.current_chord_type;
                    //get the template
                    //console.log(this.chord_templates);
                    //console.log(chord_type);
                    var template = this.chord_templates[chord_type];
                    //get the next step to match
                    var counter_number = 0; //initally
                    var step = '';
                    for (var x = 0; x < this.modified_chromatic_scale.length; x++) {
                        if (x === counter_number) {
                            this.chord.push(this.modified_chromatic_scale[x]);
                            step = template.shift();
                            if (typeof this.step_values[step] !== 'undefined') {
                                counter_number += this.step_values[step];
                            }
                        }
                    }
                };
                MusicService.prototype.addScaleTemplate = function (type, template) {
                    this.scale_templates[type] = template;
                    //scale types
                    this.scale_types.push(type.toUpperCase());
                };
                MusicService.prototype.addChordTemplate = function (num_notes, type, template) {
                    this.chord_templates[type] = template;
                    //types
                    this.chord_types[num_notes].push(type);
                };
                MusicService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MusicService);
                return MusicService;
            }());
            exports_1("MusicService", MusicService);
        }
    }
});
//# sourceMappingURL=music.service.js.map