var face_num = 6
var face_size = []
var face_x =[]
var face_y = []
var colors = "fae37c-dc9dfa-3198e6-fdaae0-5add77-fa625f".split("-").map(a=>"#"+a)
var clr
// var clr
// var colors =  "fae37c-dc9dfa-3198e6-fdaae0-5add77-fa625f".split("-").map(a=>"#"+a)

var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result

function preload(){
  song = loadSound("chi-la-ameng-zhu-ti-qu.mp3");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
  translate(width/2,height/2)
  for(var i=0;i<face_num;i++){
    face_size[i] = random(20,100) //臉的大小20~100
    face_x[i] = random(0,width)
    face_y[i] = random(0,height)

  }
  push()
  translate(random(width),random(height)); //讓圓心在視窗的中心點
  clr = colors[int(random(colors.length))]
  drawFlower(clr)
  pop()

  music_btn = createButton("play")
  music_btn.position(width*5/13,height*8/9)
  music_btn.size(100,60);
  music_btn.style('background-color', '#c2c5aa');
  music_btn.style('font-size', '20px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)

  mouse_btn = createButton("stop")
  mouse_btn.position(width*1/2,height*8/9)
  mouse_btn.size(100,60);
  mouse_btn.style('background-color', '#c2c5aa');
  mouse_btn.style('font-size', '20px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

  Speech_btn = createButton("語音辨識(播音樂/暫停)")
  Speech_btn.position(width*8/13,height*8/9)
  Speech_btn.size(100,60);
  Speech_btn.style('background-color', '#c2c5aa');
  Speech_btn.style('font-size', '10px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)

}


function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  amp=new p5.Amplitude()
  music_btn.style('background-color', '#3a5a40')
  mouse_btn.style('background-color', '#c2c5aa')
  Speech_btn.style('background-color', '#c2c5aa')
}

function mouse_btn_pressed(){
  song.pause()
  mosueIsplay = true
  songIsplay = false
  music_btn.style('background-color', '#c2c5aa')
  mouse_btn.style('background-color', '#3a5a40')
  Speech_btn.style('background-color', '#c2c5aa')

}

function Speech_btn_pressed(){
  music_btn.style('background-color', '#c2c5aa')
  mouse_btn.style('background-color', '#c2c5aa')
  Speech_btn.style('background-color', '#3a5a40')
  myRec.onResult = showResult;
  myRec.start();  

}

function showResult()
{
	if(myRec.resultValue==true) {
	     result = myRec.resultString
    //       //顯示辨識文字
    //       push()
    //         translate(0,0)
    //         background()
    //         fill(255,0,0)
    //         textStyle("italic")
    //         text(myRec.resultString,1200,10)
    //         text(myRec.resultString,0,height/2)
    //       pop()
    // //=======================================
    //       result = myRec.resultString
          console.log(1)
          console.log(myRec.resultString)
         if(myRec.resultString==="播音樂")
            {
                music_btn_pressed()          
             }
         if(myRec.resultString==="暫停")
            {     
                mouse_btn_pressed()
             }
	}
}

function drawface(clr){
  translate(face_x[j],face_y[j])
  fill('#3198E6')
  ellipse(0,0,f_s/0.345) //臉(藍色部分) 
}


function draw() {
  push()
    textSize(50)
    fill(255,0,0)  
    text(result,1100,100);   
  pop()
    
  background('#e3d5ca');
  textSize(50)
  fill(255)
  text("X:"+mouseX+"Y:"+mouseY,50,50)
  fill('#F1E2AB')
    ellipse(275+map(mouseX,0,width,-100,700),140+map(mouseY,0,height,-80,400),80)  //銅鑼燒底層
    fill('#BF6900')
    ellipse(275+map(mouseX,0,width,-100,700),140+map(mouseY,0,height,-80,400),65)  //銅鑼燒中間
  for(var j=0;j<face_num;j++)
  {
  push()  
  var f_s = face_size[j] 
  translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間
    
    fill(255)
    ellipse(0,f_s/3.03,f_s/0.408,f_s/0.435) //臉(白色部分) 
    ellipse(-f_s/2.857,-f_s/1.316,f_s/1.429,f_s/1.111) //左眼白 
    ellipse(f_s/2.857,-f_s/1.316,f_s/1.429,f_s/1.111) //右眼白  
    fill(0)
    ellipse(-f_s/4+map(mouseX,0,width,-f_s/4.33,f_s/10),-f_s/1.72+map(mouseY,0,height,-f_s/3.222,f_s/12),f_s/5.882,f_s/3.704) //左眼球
    ellipse(f_s/4+map(mouseX,0,width,-f_s/10,f_s/4.33),-f_s/1.72+map(mouseY,0,height,-f_s/3.222,f_s/12),f_s/5.882,f_s/3.704) //右眼球
    fill(255)
    ellipse(-f_s/4.35+map(mouseX,0,width,-f_s/4.33,f_s/10),-f_s/1.69+map(mouseY,0,height,-f_s/3.222,f_s/12),f_s/11.11,f_s/7.143) //左眼睛亮光
    ellipse(f_s/4.35+map(mouseX,0,width,-f_s/10,f_s/4.33),-f_s/1.69+map(mouseY,0,height,-f_s/3.222,f_s/12),f_s/11.11,f_s/7.143) //右眼睛亮光
    fill('#DD0303')
    ellipse(0,-f_s/3.03,f_s/2.63,f_s/2.63) //鼻子(紅色)
    fill(255)
    ellipse(f_s/33.34,-f_s/2.38,f_s/8.334) //鼻子高光
  
    curve(f_s/1.818,-f_s/5.556,f_s/1.818,-f_s/5.556,f_s/0.862,-f_s/2.128,f_s/0.87,-f_s/2.128)
    curve(f_s/1.667,-f_s/100,f_s/1.667,-f_s/100,f_s/0.746,-f_s/7.692,f_s/0.87,-f_s/7.143)
    curve(f_s/1.613,f_s/5,f_s/1.613,f_s/5,f_s/0.73,f_s/4.167,f_s/0.87,f_s/3.571)
    //右邊鬍鬚
    curve(-f_s/1.818,-f_s/5.556,-f_s/1.818,-f_s/5.556,-f_s/0.862,-f_s/2.128,-f_s/0.87,-f_s/2.128)
    curve(-f_s/1.667,-f_s/100,-f_s/1.667,-f_s/100,-f_s/0.746,-f_s/7.692,-f_s/0.87,-f_s/7.143)
    curve(-f_s/1.613,f_s/5,-f_s/1.613,f_s/5,-f_s/0.73,f_s/4.167,-f_s/0.87,f_s/3.571)
    //左邊鬍鬚

    fill(255,0,0)
    rect(-f_s/1.334,f_s/0.787,f_s/0.667,f_s/5,f_s/5) //紅領繩
    fill(255,255,0)
    ellipse(0,f_s/0.633,f_s/2.857,f_s/2.857) //鈴鐺
    rect(-f_s/5,f_s/0.645,f_s/2.5,f_s/25,f_s/5)  //鈴鐺中間橫線
    fill('#897900')
    ellipse(0,f_s/0.602,f_s/12.5) //鈴鐺孔
    
    
    


     fill(255,0,0)
     if(mouseIsPressed)
       {//mouseIsPressed為true，代表有按下滑鼠
         arc(f_s/2,f_s/1.667,f_s/1.667,f_s/1.25,336,153) //下吐舌頭
       }
      else
       {   //mouseIsPressed為false，代表沒有按下滑鼠
              
       }

       if(songIsplay)
         { 
          curve(f_s/1.818,-f_s/5.556,f_s/1.818,-f_s/5.556,f_s/0.862,-f_s/2.128,f_s/0.87,-f_s/2.128)
          curve(f_s/1.667,-f_s/100,f_s/1.667,-f_s/100,f_s/0.746,-f_s/7.692,f_s/0.87,-f_s/7.143)
          curve(f_s/1.613,f_s/5,f_s/1.613,f_s/5,f_s/0.73,f_s/4.167,f_s/0.87,f_s/3.571)
          //右邊鬍鬚
          curve(-f_s/1.818,-f_s/5.556,-f_s/1.818,-f_s/5.556,-f_s/0.862,-f_s/2.128,-f_s/0.87,-f_s/2.128)
          curve(-f_s/1.667,-f_s/100,-f_s/1.667,-f_s/100,-f_s/0.746,-f_s/7.692,-f_s/0.87,-f_s/7.143)
          curve(-f_s/1.613,f_s/5,-f_s/1.613,f_s/5,-f_s/0.73,f_s/4.167,-f_s/0.87,f_s/3.571)
          //左邊鬍鬚
         }


    beginShape();
        curveVertex(0,f_s/0.588)
        curveVertex(0,f_s/0.588)
        curveVertex(0,f_s/0.571)
        curveVertex(0,f_s/0.571)
    endShape(); //鈴鐺中間

    beginShape();
        curveVertex(0,-f_s/6.667)
        curveVertex(0,-f_s/6.667)
        curveVertex(0,f_s/1.176)
        curveVertex(0,f_s/1.176)
    endShape(); //嘴巴中間
    beginShape();
        curveVertex(-f_s/1,f_s/2.631)
        curveVertex(-f_s/1,f_s/2.631)
        curveVertex(0,f_s/1.176)
        curveVertex(0,f_s/1.176)
    endShape(); //左嘴巴
    beginShape();
        curveVertex(f_s/1,f_s/2.631)
        curveVertex(f_s/1,f_s/2.631)
        curveVertex(0,f_s/1.176)
        curveVertex(0,f_s/1.176)
    endShape(); //右嘴巴
    
    push()

    fill('#3198E6')
    rotate(25)
    arc(f_s/0.6,f_s/0.8,f_s/1.5,f_s/0.4,180,360,OPEN) //手臂
    rotate(-50)
    arc(-f_s/0.6,f_s/0.8,f_s/1.5,f_s/0.4,180,360,OPEN) //手臂
    
    pop()

    fill(255)
    ellipse(f_s/0.658,f_s/1.4,f_s/1.2) //手掌
    ellipse(-f_s/0.658,f_s/1.4,f_s/1.2) //手掌
    
    pop()

    fill('#a3b18a')
    strokeWeight(0.7)
    rect(0,height*11.2/13,width,height/7)
      }
}