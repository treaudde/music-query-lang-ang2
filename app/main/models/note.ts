export class Note{
    
    public name:string;
    protected alternate_name:string;
    protected absolute_position:number;
       
    constructor(...params){
        [this.name, this.alternate_name, this.absolute_position] = params;
    }
    
    public getNoteDisplayName(){
        let noteDisplay = this.name;
        
        if(this.alternate_name){
            noteDisplay +=  ' / '+this.alternate_name;
        }
        
        return noteDisplay;
    }
}

