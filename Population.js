class Population
{

  constructor(size = 0)
  {
    let balls
    let fitnessSum;
    this.gen = 1;
    this.bestBall = 0;//the index of the best ball in the balls[]
    this.minStep = 1000;
    this.balls = [size];
    let i
    for (i = 0; i< size; i++)
    {
      this.balls[i] = new Ball();
    }
  }



  //------------------------------------------------------------------------------------------------------------------------------
  //show all balls
  show() {
    let i
    for (i = 1; i< this.balls.length; i++)
    {
      this.balls[i].show();
    }

    this.balls[0].show();
  }

  //-------------------------------------------------------------------------------------------------------------------------------
  //update all balls
  update()
  {
    let i
    for (i = 0; i< this.balls.length; i++)
    {
      if (this.balls[i].brain.step > this.minStep)
      {
        this.balls[i].dead = true;
      } else {
        this.balls[i].update();
      }
    }
  }

  //-----------------------------------------------------------------------------------------------------------------------------------
  //calculate all the fitnesses
  calculateFitness()
  {
    let i
    for (i = 0; i< this.balls.length; i++)
    {
      this.balls[i].calculateFitness();
    }
  }


  //------------------------------------------------------------------------------------------------------------------------------------
  //returns whether all the balls are either dead or have reached the goal
  allballsDead()
  {
    let i
    for (i = 0; i< this.balls.length; i++)
    {
      if (!this.balls[i].dead && !this.balls[i].reachedGoal)
      {
        return false;
      }
    }

    return true;
  }

////fix from here

  //-------------------------------------------------------------------------------------------------------------------------------------

  //gets the next generation of balls
  naturalSelection()
  {
    let newballs = [this.balls.length];//next gen
    this.setBestBall();
    this.calculateFitnessSum();

    //the champion lives on
    newballs[0] = this.balls[this.bestBall].gimmeBaby();
    newballs[0].isBest = true;
    let i
    for (i = 1; i< newballs.length; i++) {
      //select parent based on fitness
      let parent = selectParent();

      //get baby from them
      newballs[i] = parent.gimmeBaby();
    }

    this.balls = newballs.slice(0);
    this.gen ++;
  }


  //--------------------------------------------------------------------------------------------------------------------------------------
  //you get it
  calculateFitnessSum() {
    this.fitnessSum = 0;
    let i
    for (i = 0; i< this.balls.length; i++) {
      this.fitnessSum += this.balls[i].fitness;
    }
  }

  //-------------------------------------------------------------------------------------------------------------------------------------

  //chooses Ball from the population to return randomly(considering fitness)

  //this function works by randomly choosing a value between 0 and the sum of all the fitnesses
  //then go through all the balls and add their fitness to a running sum and if that sum is greater than the random value generated that Ball is chosen
  //since balls with a higher fitness function add more to the running sum then they have a higher chance of being chosen
  selectParent() {
    let rand = random(this.fitnessSum);


    let runningSum = 0;
    let i
    for ( i = 0; i< this.balls.length; i++) {
      runningSum+= this.balls[i].fitness;
      if (runningSum > rand) {
        return this.balls[i];
      }
    }

    //should never get to this point

    return null;
  }

  //------------------------------------------------------------------------------------------------------------------------------------------
  //mutates all the brains of the babies
  mutateDemBabies() {
    let i
    for (i = 1; i< this.balls.length; i++) {
      this.balls[i].brain.mutate();
    }
  }

  //---------------------------------------------------------------------------------------------------------------------------------------------
  //finds the Ball with the highest fitness and sets it as the best Ball
  setBestBall() {
    let max = 0;
    let maxIndex = 0;
    let i
    for ( i = 0; i< this.balls.length; i++) {
      if (this.balls[i].fitness > max) {
        max = this.balls[i].fitness;
        maxIndex = i;
      }
    }

    this.bestBall = maxIndex;

    //if this Ball reached the goal then reset the minimum number of steps it takes to get to the goal
    if (this.balls[this.bestBall].reachedGoal) {
      this.minStep = this.balls[this.bestBall].brain.step;
    }
  }
}
