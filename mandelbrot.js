import {sum, multiply, modulus} from "./complex.js";

function mandelbrot(c, maxIterations, smooth){
	var z = {a:0, b: 0};
	var n = 0;

	while(modulus(z) <= 2 && n < maxIterations) {
		z = sum(multiply(z,z),c);
		n = n + 1;
	}

	if(!smooth) {
		return n;
	}
	else{
		if(n==maxIterations){
			return maxIterations;
		}

		return n + 1 - Math.log(Math.log2(modulus(z)));
	}
}

export {mandelbrot};