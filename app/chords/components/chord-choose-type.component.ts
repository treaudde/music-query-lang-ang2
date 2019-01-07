import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Component} from 'angular2/core';
import {MusicService} from '../../main/services/music.service';
import {Note} from '../../main/models/note';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: '/app/chords/views/chord-choose-type.html',
    directives:[ROUTER_DIRECTIVES]
})

export class ChordChooseTypeComponent implements OnInit{ 
    
    public chordTypes:Array<any>;
    public chosenNote:String;
    
    constructor(private _musicService: MusicService,
        private _router:Router){
        
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
    
    
    ngOnInit(){
        this.chordTypes = this._musicService.chord_types;
        this.chosenNote = this._musicService.note.getNoteDisplayName();
    }
    
    chooseType(chordType:string){
        
        this._musicService.current_chord_type = chordType;
        
        //get the modified chromatic scale for that note
        this._musicService.getModifiedChromaticScale();
        
        //get the modified chromatic scale for that note
        this._musicService.getChord();
        
        //go to the chord types
        this._router.navigate(['ChordDisplay']);
    }
    
}
