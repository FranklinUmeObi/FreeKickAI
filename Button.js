class Button
{
  constructor(mytext = "Assign", xPos = 0, yPos = 0)
  {
    this.mytext = mytext
    this.xPos = xPos
    this.yPos = yPos
    this.w = buttonW
    this.h = buttonH
    this.pressed = false

  }

  show()
  {
    if(!this.hovered())
    {
      fill(100)
    }
    else fill(200)

    stroke(0)
    strokeWeight(2)
    rect(this.xPos,this.yPos, this.w, this.h)
    textSize(32);
    fill(255);
    text(this.mytext, this.xPos + 85,this.yPos + 35);


  }

  hovered()
  {
    if(   mouseX > this.xPos &&  mouseX < this.xPos + this.w
      &&  mouseY > this.yPos &&  mouseY < this.yPos + this.h)
      {
        return true
      }
      else return false
  }

  pressed()
  {
    if (MousePressed && mouseX > this.xPos &&  mouseX < this.xPos + this.w
      &&  mouseY > this.yPos &&  mouseY < this.yPos + this.h)
      {
        this.pressed = true
      }
  }



}
