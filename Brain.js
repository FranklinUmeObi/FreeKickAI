class Brain {

  constructor(size = 500)
  {
    let directions
    this.directions = [size];
    this.step = 0
    this.randomise()
  }



  //--------------------------------------------------------------------------------------------------------------------------------
  //sets all the vectors in directions to a random vector with length 1
  randomise()
  {
    var i
    for (i = 0; i< this.directions.length; i++)
    {
      var randomAngle = Math.floor(Math.random() * PI-2) +2;
      this.directions[i] = p5.Vector.fromAngle(radians(randomAngle))
    }
  }

  //-------------------------------------------------------------------------------------------------------------------------------------
  //returns a perfect copy of this brain object
  clone()
  {
    var i
    let clone = new Brain(this.directions.length);
    for (i = 0; i < this.directions.length; i++)
    {
      clone.directions[i] = this.directions[i].copy();
    }
    return clone;
  }

  //----------------------------------------------------------------------------------------------------------------------------------------

  //mutates the brain by setting some of the directions to random vectors
  mutate() {
    let i
    let mutationRate = 0.01;//chance that any vector in directions gets changed
    for (i = 0; i< directions.length; i++)
    {
      let rand = random();
      if (rand < mutationRate) {
        //set this direction as a random direction
        let randomAngle = Math.floor(Math.random() * PI-2) +2 ;
        this.directions[i] = PVector.fromAngle(randomAngle);
      }
    }
  }
}
