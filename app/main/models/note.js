System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Note;
    return {
        setters:[],
        execute: function() {
            Note = (function () {
                function Note() {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i - 0] = arguments[_i];
                    }
                    this.name = params[0], this.alternate_name = params[1], this.absolute_position = params[2];
                }
                Note.prototype.getNoteDisplayName = function () {
                    var noteDisplay = this.name;
                    if (this.alternate_name) {
                        noteDisplay += ' / ' + this.alternate_name;
                    }
                    return noteDisplay;
                };
                return Note;
            }());
            exports_1("Note", Note);
        }
    }
});
//# sourceMappingURL=note.js.map