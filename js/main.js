/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

const myWrap = document.querySelector(".wrap");

const levelEasyBtn = document.getElementById("levelEasy");
const levelMediumBtn = document.getElementById("levelMedium");
const levelDifficultBtn = document.getElementById("levelDifficult");

levelEasyBtn.addEventListener('click', () => createGrid(100, "easy"));
levelMediumBtn.addEventListener('click', () => createGrid(81, "medium"));
levelDifficultBtn.addEventListener('click', () => createGrid(49, "difficult"));



// dichiarazione funzioni

function createGrid (size, level){

    myWrap.innerHTML = "";

    const myGrid = document.createElement("div");
    myWrap.append(myGrid);
    myGrid.classList.add("grid", level);
    
    const myArray = createRandomNumsArray (size, 1, size);

    for (let i=0; i<size; i++){
        const myArticle = document.createElement("article");
        myGrid.append(myArticle);
        myArticle.append(myArray[i]);

        myArticle.addEventListener('click', () => clickEffectBlue(myArticle));
    }
}

function clickEffectBlue(arg){
    arg.style.backgroundColor = "blue";
}

function createRandomNumsArray (size, min, max){
    const numsArray = [];

    while (numsArray.length<size){
        let myNum = createRandomNum (min,max);

        if (!numsArray.includes(myNum)){
            numsArray.push(myNum);
        }
    }
    return numsArray;
}

function createRandomNum (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}