var N = 15;
for(var i=15; i<30;i++)
	if(i % 2 === 0){
		console.log(i)
	}
}


ou ainsi...

function Odd(value) {
    return (value & 1)==1;
}
for(var I=5;I<=15;I++) {
    console.log("Le nombre "+I+" est "+(Odd(I)?"Impaire":"Pair"));
}

