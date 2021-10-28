import {computeColor} from "./cg.js";

const RENDER_STEP_PIXELS = 10;

let state = {
	ctx: null,
	width: null,
	height: null,
	currentX: 0,
	rStart: null,
	rEnd: null,
	iStart: null,
	iEnd: null,
	iterations: null,
	applySmoothing: null,
	colorSystem: null
};

/** UI / Presentation Logic */
function onResolutionChanged(){
	var canvasSelector = document.getElementById("canvasSize");
	const resolutionValue = canvasSelector.value;

	var splitResult = resolutionValue.split("x");
	const width = splitResult[0];
	const heigth = splitResult[1];

	createCanvas(width,heigth);
	run();
}

function createCanvas(width, heigth){
	var canvas = document.getElementById("canvas");
	canvas.remove();
    
	canvas = document.createElement("canvas");
	canvas.id = "canvas";
	canvas.width = width;
	canvas.height = heigth;

	var body = document.getElementsByTagName("body")[0];
	body.appendChild(canvas);
}

function setup(){
	document.getElementById("canvasSize").addEventListener("change",onResolutionChanged);

	document.getElementById("iterations").addEventListener("change", run);
    
	document.getElementById("smoothing").addEventListener("change", run);

	document.getElementById("colorSystem").addEventListener("change", run);

	document.getElementById("runButton").addEventListener("click", run);

	document.getElementById("rStart").addEventListener("click", run);
	document.getElementById("rEnd").addEventListener("click", run);

	document.getElementById("iStart").addEventListener("click", run);
	document.getElementById("iEnd").addEventListener("click", run);
}

function renderCanvas(){
	for(var x = state.currentX; state.currentX - x < RENDER_STEP_PIXELS; state.currentX++){
		for(var y = 0; y < state.height; y++){
			const color = computeColor(state.currentX, y, state.width, state.height, state.rStart, state.rEnd, state.iStart, state.iEnd, state.iterations, state.applySmoothing, state.colorSystem);
			const point = {x: state.currentX, y: y, color: color};
			draw(point, state.colorSystem);
		}
	}

	if(state.currentX < state.width){
		window.requestAnimationFrame(renderCanvas);
	}
}

function draw(point, colorSystem){
	var style = "";

	if(colorSystem == "GREY_SCALE"){
		style = "rgba(" + point.color + "," + point.color + "," + point.color + ",1)";
	}

	if(state.colorSystem == "HSV"){
		style = "hsl(" + point.color.h + "deg," + point.color.s + "%," + point.color.l +"%)";
	}

	state.ctx.fillStyle = style; 
	state.ctx.fillRect(point.x,point.y,1,1);
}

function run(){
	const canvas = document.getElementById("canvas");
	const canvasCtx = canvas.getContext("2d");

	const width = canvas.width;
	const height = canvas.height;

	const iterations = document.getElementById("iterations").value;
	const applySmoothing = document.getElementById("smoothing").checked;
	const colorSystem = document.getElementById("colorSystem").value;

	const rStart = parseFloat(document.getElementById("rStart").value);
	const rEnd= parseFloat(document.getElementById("rEnd").value);
	const iStart = parseFloat(document.getElementById("iStart").value);
	const iEnd =  parseFloat(document.getElementById("iEnd").value);

	state.ctx = canvasCtx;
	state.width = width;
	state.height = height;

	state.currentX = 0;
	state.rStart = rStart;
	state.rEnd = rEnd;
	state.iStart = iStart;
	state.iEnd = iEnd;
    
	state.iterations = iterations;
	state.applySmoothing  = applySmoothing;
	state.colorSystem = colorSystem;
        
	window.requestAnimationFrame(renderCanvas);
}

document.body.addEventListener("load", setup(), false);

export {setup};