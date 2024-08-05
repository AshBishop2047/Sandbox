class Ship {
    constructor(draft, crew) {
      this.draft = draft
      this.crew = crew
    }
//    each crew unit is worth 1.5 , and for the statement to be true it needed the draft value to be above 20. 
    isWorthIt(){
    return this.draft - 1.5 * this.crew > 20
  
  }
}