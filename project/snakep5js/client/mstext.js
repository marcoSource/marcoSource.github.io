class MSText{

    constructor(){
        this.defaultColor = color(255);
        this.defaultTextSize = 16;
    }
    
    show(str, x, y){
        fill(this.defaultColor);
        textSize(this.defaultTextSize);
        text(str, x, y);
        console.log('render');
        
    }

}