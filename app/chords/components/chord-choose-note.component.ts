import {OnInit} from 'angular2/core';
import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Note} from '../../main/models/note';
import {MusicService} from '../../main/services/music.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: '/app/chords/views/chord-choose-note.html',
    directives: [ROUTER_DIRECTIVES]
})

export class ChordChooseNoteComponent implements OnInit { 
    
    public notes: Array<any>;
    
    constructor(private _musicService: MusicService,
        private _router:Router){
        
    }
    
    ngOnInit(){
        this.notes = this._musicService.chromatic_scale;
    }
    
    chooseNote(note:Note){
        this._musicService.note = note;
        
        //go to the chord types
        this._router.navigate(['ChordsChooseType']);
    }
    
}
