import {data} from "./data.js"
//console.log(data);
var canvas = document.getElementById('rectangle');
var cvs = canvas.getContext('2d');
cvs.beginPath(); /* 図形を描き始めることを宣言 */
cvs.rect(data[0].xpos,data[0].ypos,data[0].xlength,data[0].ylength);
cvs.rect(data[1].xpos,data[1].ypos,data[1].xlength,data[1].ylength);
cvs.rect(data[2].xpos,data[2].ypos,data[2].xlength,data[2].ylength);
cvs.fillText('TEST',20,30);
cvs.closePath(); /* 描いた線を閉じる */
cvs.stroke(); /* 描いた図形を線で表示させる */