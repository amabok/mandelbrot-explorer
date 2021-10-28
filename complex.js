/** Complex Number Operations **/

function sum(c1, c2){
	return {
		a: c1.a + c2.a,
		b: c1.b + c2.b
	};
}

function multiply(c1, c2){
	return {
		a: (c1.a * c2.a) - (c1.b * c2.b),
		b: (c1.a * c2.b) + (c1.b * c2.a)
	};
}

function modulus(c){
	var sqa = c.a * c.a;
	var sqb = c.b * c.b;

	return Math.sqrt(sqa + sqb);
}

export{sum, multiply, modulus};