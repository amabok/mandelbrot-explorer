/* Computer Graphics operations related with the Mandelbrot set calculations*/

import {mandelbrot} from "./mandelbrot.js";

function computeColor(srcX,srcY,srcWidth,srcHeigth,dstWidthStart,dstWidthEnd,dstHeigthStart,dstHeigthEnd,iterationCount,applySmoothing,colorSystem){
	const complex = transform(srcX,srcY,srcWidth,srcHeigth,dstWidthStart,dstWidthEnd,dstHeigthStart,dstHeigthEnd);
	return _computeColor(complex, iterationCount, applySmoothing, colorSystem);
}

function transform(srcX,srcY,srcWidth,srcHeigth,dstWidthStart,dstWidthEnd,dstHeigthStart,dstHeigthEnd){
	const a = dstWidthStart + (srcX / srcWidth) * (dstWidthEnd - dstWidthStart);
	const b = dstHeigthStart + ( (srcHeigth-srcY) / srcHeigth) * (dstHeigthEnd - dstHeigthStart);
	return {a:a, b:b};
}

function _computeColor(c, maxIterations, applySmoothing, colorSystem){
	var iterations = mandelbrot(c, maxIterations, applySmoothing);

	if(colorSystem == "GREY_SCALE"){
		return 255 - (iterations * 255 / maxIterations);
	}

	if(colorSystem == "HSV"){
		const h =  parseInt(360 * iterations / maxIterations);
		const s = iterations < maxIterations ? 100 : 0;
		const l = iterations < maxIterations ? 50 : 0;
		return { h:h, s: s, l: l};
	}
}

export {computeColor};