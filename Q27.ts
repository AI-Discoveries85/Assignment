let alienColors: string = "green";  

//version 1 of the program
if (alienColors === "green"){
    console.log("version 1: player earned 5 points");
}else if(alienColors === "yello"){
    console.log("player earned 10 points");
}else if(alienColors === "red"){
    console.log("plarer earned 15 points");
}else{
    console.log("please select right color")
}

//version 2 of the program
alienColors = "yello"; 

if (alienColors === "green"){
    console.log("player earned 5 points");
}else if(alienColors === "yello"){
    console.log("version 2: player earned 10 points");
}else if(alienColors === "red"){
    console.log("plarer earned 15 points");
}else{
    console.log("please select right color")
}  


//version 3 of the program
alienColors = "red"; 

if (alienColors === "green"){
    console.log("player earned 5 points");
}else if(alienColors === "yello"){
    console.log("player earned 10 points");
}else if(alienColors === "red"){
    console.log("version 3: plarer earned 15 points");
}else{
    console.log("please select right color")
} 