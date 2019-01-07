import {OnInit} from 'angular2/core';
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MusicService} from '../../main/services/music.service';


@Component({
    templateUrl: '/app/scales/views/scale-display.html',
    directives:[ROUTER_DIRECTIVES]
})

export class ScaleDisplayComponent implements OnInit{ 
    
    public scale:Array<any>;
    public chosenType:string;
    public chosenNote:string;

    constructor(private _musicService: MusicService){
        
    }
    
    ngOnInit(){
        this.scale = this._musicService.scale;
        this.chosenType = this._musicService.current_scale_type;
        this.chosenNote = this._musicService.note.getNoteDisplayName();
    }
}
