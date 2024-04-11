const { sha256 } = require("./sha256");

class Block {
    constructor(time = Date.now(), data = {}){
        this.time =time;
        this.data = data;
        this.lastHash='';
    }

    createHash(){
        sha256(this.time + this.data);
    }

    
}