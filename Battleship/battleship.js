coordinate = [
          [0,0,0,1,1,1,1,0,0,0],
  				[0,0,0,0,0,0,0,0,0,0],
  				[0,0,0,0,0,0,0,0,0,0],
  				[0,0,0,0,0,0,1,0,0,0],
  				[0,0,0,0,0,0,1,0,0,0],
  				[1,0,0,0,0,0,1,1,1,1],
  				[1,0,0,0,0,0,0,0,0,0],
  				[1,0,0,1,0,0,0,0,0,0],
  				[1,0,0,1,0,0,0,0,0,0],
  				[1,0,0,0,0,0,0,0,0,0]
];

function setup(){
    createCanvas(1000,00);
    background(130,233,34);
}

let start = 0;
let end=1000;
let fir=100;

function draw(){
    fill(255,255,255);
    for(let i = 0; i < 10 ; i++){
      line(fir,start,fir,end);
      line(start,fir,end,fir);
      fir = fir+100;
    }
}

function mouseClicked(){
 for(let i=0; i<50;i++){
    for(let j=0; j<50;i++){
        if(coordinate[i][j] == 0){
          fill(100);
        }else{
          fill(6);
        }
        }
      }
  }
