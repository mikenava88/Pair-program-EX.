/* declare the counter and queryselector for button
/*if cookie button is clicked it should add 1 to i*/





const cookiebutton = document.querySelector(".cookiebutton");
const h1 = document.querySelector(".num")


let i = 0;

cookiebutton.addEventListener('click', function () {

    i += 1;
    h1.innerText = "Number of cookies: " + i;
});




