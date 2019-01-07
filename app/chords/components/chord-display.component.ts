import {OnInit} from 'angular2/core';
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MusicService} from '../../main/services/music.service';

@Component({
    templateUrl: '/app/chords/views/chord-display.html',
    directives:[ROUTER_DIRECTIVES]
})

export class ChordDisplayComponent implements OnInit{ 
    
    public chord:Array<Object>;
    public chosenType:string;
    public chosenNote:string;

    constructor(private _musicService: MusicService){
        
    }
    
    ngOnInit(){
        this.chord = this._musicService.chord;
        this.chosenType = this._musicService.current_chord_type;
        this.chosenNote = this._musicService.note.getNoteDisplayName();
    }
}
