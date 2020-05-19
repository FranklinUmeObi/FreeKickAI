class Ball {

  constructor(goal = {})
  {
    this.pos = createVector(canvasW/2 - 200, canvasH-50);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.brain = new Brain(1000);
    this.dead = false
    this.reachedGoal = false
    this.isBest = false
    this.fitness = 0
  }

  //-----------------------------------------------------------------------------------------------------------------
  //draws the dot on the screen
  show()
  {
    strokeWeight(1)
    //if this dot is the best dot from the previous generation then draw it as a big gold dot
    if (this.isBest)
    {
      fill(255, 215, 0);
      ellipse(this.pos.x, this.pos.y, 12, 12);
    }
    else
    {//all other dots are just smaller white dots
      fill(255);
      ellipse(this.pos.x, this.pos.y, 6, 6);
    }
  }

  //-----------------------------------------------------------------------------------------------------------------------
  //moves the dot according to the brains directions
  move()
  {
    if (this.brain.directions.length > this.brain.step)
    {
      this.acc = this.brain.directions[this.brain.step];
      this.brain.step +=1;
    }
    else
    {
      this.dead = true;
    }

    //apply the acceleration and move the dot
    this.vel.add(this.acc);
    this.vel.limit(5);//not too fast
    this.pos.add(this.vel);
  }

  //-------------------------------------------------------------------------------------------------------------------
  //calls the move function and check for collisions and stuff
  update()
  {
    if (true)
    {
      this.move();
      if (this.pos.x< 5|| this.pos.y<5 || this.pos.x>canvasW-5 || this.pos.y>canvasH -5) {
        this.dead = true;
      }
      else if (dist(this.pos.x, this.pos.y, goalX, goalY) < 5)
      {
        this.reachedGoal = true;
      }

      //collision with defender
    //  else if (this.pos.x< 600 && this.pos.y < 310 && this.pos.x > 0 && this.pos.y > 300)
    //  {
    //    this.dead = true;
    //  }
    }
  }


  //--------------------------------------------------------------------------------------------------------------------------------------
  //calculates the fitness
  calculateFitness()
  {
    if (this.reachedGoal)
    {
      this.fitness = 1.0/16.0 + 10000.0/(this.brain.step * this.brain.step);
    }
    else
    {
      let distanceToGoal = dist(this.pos.x, this.pos.y, goalX, goalY);
      this.fitness = 1.0/(distanceToGoal * distanceToGoal);
    }
  }

  //---------------------------------------------------------------------------------------------------------------------------------------
  //clone it
  gimmeBaby() {
    let baby = new Ball();
    baby.brain = this.brain.clone();
    return baby;
  }
}
