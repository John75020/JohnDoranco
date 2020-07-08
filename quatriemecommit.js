function Odd(value) {
    return (value & 1)==1;
}
for(var I=5;I<=15;I++) {
    console.log("Le nombre "+I+" est "+(Odd(I)?"Impaire":"Pair"));
}