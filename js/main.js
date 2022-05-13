/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

const myMain = document.querySelector("main");

const levelEasyBtn = document.getElementById("levelEasy");
const levelMediumBtn = document.getElementById("levelMedium");
const levelDifficultBtn = document.getElementById("levelDifficult");

levelEasyBtn.addEventListener('click', () => createGrid(100, "easy"));
levelMediumBtn.addEventListener('click', () => createGrid(81, "medium"));
levelDifficultBtn.addEventListener('click', () => createGrid(49, "difficult"));


// dichiarazione funzioni

function createGrid (size, level){

    const myGrid = document.createElement("div");
    myMain.append(myGrid);
    myGrid.classList.add("grid", level);

    for (let i=0; i<size; i++){
        const myArray = createRandomNumsArray (size, 1, size);
        const myArticle = document.createElement("article");
        myGrid.append(myArticle);
        myArticle.append(myArray[i]);
    }
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