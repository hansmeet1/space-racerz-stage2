class Form {
  constructor() {
    this.input=createInput(' ').attribute("placeholder","enter your name")
    
  }
  setElementPosition(){
    this.input.position(width/2-100,height/2-60)
  }
  display(){
this.setElementPosition()
  }
}
