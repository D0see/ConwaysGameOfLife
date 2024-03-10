export default class Block {

    constructor(positionY, positionX){

    this._state = 'dead';
    this._nextState = undefined;
    this._position = [positionY,positionX];

    this._div = document.createElement('div');
    this._div.className = 'block';

    }

    get position() {
        return this._position;
    }
    get div() {
        return this._div;
    }
    get state() {
        return this._state;
    }
    get nextState() {
        return this._nextState;
    }

    //returns an object of the ._state of the immediate neighbors
    getNeighborsStates(array){
        const neighborsStates = {'alive' : 0, 'dead' : 0};
        //top-left neighbor
        if (this._position[0] - 1 >= 0 && this.position[1] - 1 >= 0){   
            neighborsStates[array[this._position[0] - 1][this.position[1] - 1].state]++;
        }//top
        if (this._position[0] - 1 >=0){
            neighborsStates[array[this._position[0] - 1][this.position[1]].state]++;
        }//top-right
        if (this._position[0] - 1 >=0 && this.position[1] + 1 < array[0].length){
            neighborsStates[array[this._position[0] - 1][this.position[1] + 1].state]++;
        }//left
        if (this._position[1] - 1 >=0){
            neighborsStates[array[this._position[0]][this.position[1] - 1].state]++;
        }//right
        if (this._position[1] + 1 < array[0].length){
            neighborsStates[array[this._position[0]][this.position[1] + 1].state]++;
        }//bottom-left
        if (this._position[0] + 1 < array.length && this.position[1] - 1 >= 0){
            neighborsStates[array[this._position[0] + 1][this.position[1] - 1].state]++;
        }//bottom
        if (this._position[0] + 1 < array.length){
            neighborsStates[array[this._position[0] + 1][this.position[1]].state]++;
        }//bottom-right
        if (this._position[0] + 1 < array.length && this.position[1] + 1 < array[0].length){
            neighborsStates[array[this._position[0] + 1][this.position[1] + 1].state]++;
        }
        return neighborsStates;
    }

    // set the ._nextstate for the block object based on the rules of Conways game of life
    setNextState(array){
        const neighborsStates = this.getNeighborsStates(array);
        //Dies by underpopuplation
        if (neighborsStates['alive'] < 2 && this._state === 'alive') {
            this._nextState = 'dead';
        //Lives to the next generation
        } else if ((neighborsStates['alive'] === 3 || neighborsStates['alive'] === 2) && this._state === 'alive') {
            this._nextState = 'alive';
        //Dies by overpopulation
        } else if (neighborsStates['alive'] > 3 && this._state === 'alive') {
            this._nextState = 'dead';
        //Becomes alive by reproduction
        } else if (this._state === 'dead' && neighborsStates['alive'] === 3) {
            this._nextState = 'alive';
        } else {
            this._nextState = 'dead';
        }
    }

    //set ._state with .next_State value
    setState(){
        this._state = this._nextState;
        this._nextState = undefined;
        this.setColor();
    }

    // Flips the state of the block (exists for click)
    flipState(){
        this._state === 'dead' ? this._state = 'alive' : this._state = 'dead';
        this.setColor();
    }

    changeState(state){
        this._state = state;
        this.setColor();
    }

    //set div backgroundColor based on state
    setColor(){
        this._state === 'dead' ? this._div.style.backgroundColor = 'grey' : this._div.style.backgroundColor = 'white';
    }


}


