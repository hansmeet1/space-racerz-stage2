var r1_img,r2_img,m1_img,m2_img,m3_img,bg_img,fuel_img
function preload(){
  r1_img=loadImage("assets/rocket1.jpg")
  r2_img=loadImage("assets/rocket2.jpg")
  m1_img=loadImage("assets/meteor1.png")
  m2_img=loadImage("assets/meteor2.jpg")
  m3_img=loadImage("assets/meteor3.jpg")
  bg_img=loadImage("assets/space back ground.jpg")
  fuel_img=loadImage("assets/fuel.png")
}
function setup(){
  canvas=createCanvas(windowWidth,windowHeight)
  db=firebase.database()
  console.log(db)
  form= new Form()

  
}
function draw(){
  form.display()
}