let divNew = document.createElement("div");
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
const rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
const colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
const buttonReset_div = document.getElementById("buttonReset");
const rgbBling_div = document.getElementById("rgbBling");
const depresso_div = document.getElementById("depresso");
const glorios_div = document.getElementById("glorious");
const lit_div = document.getElementById("lit");
let x = 0;
let y = 0;
let rngColor;



function setGrid()
{
    y = window.prompt("gib number 1-64");
    document.documentElement.style.setProperty("--rowNum", y);
    document.documentElement.style.setProperty("--colNum", y);
}

function input()
{
    if (y >= 65)
    {
        alert("NUBAH TOO BIG");
        y = 0;
    }
    y = y * y;
    return y;
}


function createDiv()
{
    for (x=0; x<y; x++)
    {
        divNew = document.createElement("div");
        divNew.classList = "divKek";

        document.getElementById("main").appendChild(divNew);
    }
}

function coloring() 
{
    const squares = document.querySelectorAll("#main");
    for(let i = 0; i < squares.length; i++)
    {
        squares[i].addEventListener("mouseover", function(e){
        e.target.style.cssText = "background-color: #765d69";});
    }
}

function rng()
{
   return Math.floor(Math.random() *5);
}

function colorRng(str)
{
    
    switch(rng())
    {
        case 0:
            rngColor = "#fe0000;";
            break;
        case 1:
            rngColor = "#fdfe02;";
            break;
        case 2:
            rngColor = "#0bff01;";
            break;
        case 3:
            rngColor = "#011efe;";
            break;
        case 4:
            rngColor = "#fe00f6;";
            break;
    }
    return rngColor;

}

function depressoRng(str)
{
    
    switch(rng())
    {
        case 0:
            rngColor = "#ffffff;";
            break;
        case 1:
            rngColor = "#292929;";
            break;
        case 2:
            rngColor = "#1a1a1a;";
            break;
        case 3:
            rngColor = "#121212;";
            break;
        case 4:
            rngColor = "#b62a25;";
            break;
    }
    return rngColor;

}

function gloriousRng(str)
{
    
    switch(rng())
    {
        case 0:
            rngColor = "#FFC0CB;";
            break;
        case 1:
            rngColor = "#FFB6C1;";
            break;
        case 2:
            rngColor = "#FF69B4;";
            break;
        case 3:
            rngColor = "#FF1493;";
            break;
        case 4:
            rngColor = "#C71585;";
            break;
    }
    return rngColor;
}

function litRng(str)
{
    
    switch(rng())
    {
        case 0:
            rngColor = "#ec0000;";
            break;
        case 1:
            rngColor = "#ec2400;";
            break;
        case 2:
            rngColor = "#ec5300;";
            break;
        case 3:
            rngColor = "#ec5300;";
            break;
        case 4:
            rngColor = "#ecca00;";
            break;
    }
    return rngColor;
}

function coloringRGB() 
{
    const squares = document.querySelectorAll("#main");
    for(let i = 0; i < squares.length; i++)
    {
      squares[i].addEventListener("mouseover", function(e){
        e.target.style.cssText = "background-color: " + colorRng();
      });
    }
}

function depresso() 
{
    const squares = document.querySelectorAll("#main");
    for(let i = 0; i < squares.length; i++)
    {
      squares[i].addEventListener("mouseover", function(e){
        e.target.style.cssText = "background-color: " + depressoRng();
      });
    }
}
function glorious() 
{
    const squares = document.querySelectorAll("#main");
    for(let i = 0; i < squares.length; i++)
    {
      squares[i].addEventListener("mouseover", function(e){
        e.target.style.cssText = "background-color: " + gloriousRng();
      });
    }
}
function lit() 
{
    const squares = document.querySelectorAll("#main");
    for(let i = 0; i < squares.length; i++)
    {
      squares[i].addEventListener("mouseover", function(e){
        e.target.style.cssText = "background-color: " + litRng();
      });
    }
}

buttonReset_div.addEventListener('click',function()
{
    $( "div" ).remove(".divKek");
    setGrid();
    input();
    createDiv();
    coloring();
})

rgbBling_div.addEventListener('click',function()
{
    coloringRGB();
})

depresso_div.addEventListener('click',function()
{
    depresso();
})
glorios_div.addEventListener('click',function()
{
    glorious();
})

lit_div.addEventListener('click',function()
{
    lit();
})




