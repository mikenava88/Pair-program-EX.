const plus = document.querySelector(".plus");

const minus = document.querySelector(".minus");

const text = document.querySelector("p")

// const textSize = text.style("fontsize");

let i = 14;
plus.addEventListener("click", function(){
    if(i>1 && i<90){
        i +=10;

    text.style.fontSize = i + "px";
    // increment font by 10, 1 < size < 100
    console.log(i);
    }
    
});

minus.addEventListener("click", function(){
    if(i>10 && i<90){
        i -=10;

    text.style.fontSize = i + "px";
    // decrement font by 10, 1 < size < 100
    console.log(i);
    }
});
