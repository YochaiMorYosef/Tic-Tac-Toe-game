var counter = 0;
var statusArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var lastIndexOfStep;
var arraySteps = [];
var saveGameArr = [];
var saveCounter;
var highest_record = 0;
/*there are build reset array that his size 9, 
and when any location of the arr is 1, so the func sE will not happend.
*need to set name to all td element*/
function setElement(id, indexTd) {
    if (statusArr[indexTd] === 0) {
        let tdChoose = document.getElementById(id);
        if (counter % 2 === 0) {
            tdChoose.innerHTML = "x";
            statusArr[indexTd] = 1;
        } else {
            tdChoose.innerHTML = "o";
            statusArr[indexTd] = 2;
        }
        counter++;
        lastIndexOfStep = indexTd;
        arraySteps.push(indexTd);
    }
    winSituation(statusArr);

}


function newGame() {
    debugger
    for (let i = 1; i < 10; i++) {
        if (statusArr[i] != 0) {
            let id_td = "td" + (i.toString());
            let temp = document.getElementById(id_td);
            temp.innerHTML = "";
        }
    }
    for (let i = 0; i < 10; i++) {
        statusArr[i] = 0;
    }
    counter = 0;
    document.getElementById("h1FinishGame").textContent = "";
}


function winWin(numSignOfWin) {
    if (numSignOfWin === 1) {
        document.getElementById("h1FinishGame").textContent = "X is the winner";
        new Audio("sounds/winner.mp3").play();
    }
    if (numSignOfWin === 2) {
        document.getElementById("h1FinishGame").textContent = "O is the winner";
        new Audio("sounds/loosed.mp3").play();
    }
    if (highest_record > counter)
        highest_record = counter;
}
arr = [1, 0, 0, 0, 0, 0, 0, 0]

function winSituation(arr) {
    debugger
    if ((arr[1] === 1 && arr[2] === 1 && arr[3] === 1) || (arr[4] === 1 && arr[5] === 1 && arr[6] === 1) || (arr[7] === 1 && arr[8] === 1 && arr[9] === 1) || (arr[1] === 1 && arr[4] === 1 && arr[7] === 1) || (arr[2] === 1 && arr[5] === 1 && arr[8] === 1) || (arr[3] === 1 && arr[6] === 1 && arr[9] === 1) || (arr[1] === 1 && arr[5] === 1 && arr[9] === 1) || (arr[3] === 1 && arr[5] === 1 && arr[7] === 1)) {
        winWin(1);
    }
    if ((arr[1] === 2 && arr[2] === 2 && arr[3] === 2) || (arr[4] === 2 && arr[5] === 2 && arr[6] === 2) || (arr[7] === 2 && arr[8] === 2 && arr[9] === 2) || (arr[1] === 2 && arr[4] === 2 && arr[7] === 2) || (arr[2] === 2 && arr[5] === 2 && arr[8] === 2) || (arr[3] === 2 && arr[6] === 2 && arr[9] === 2) || (arr[1] === 2 && arr[5] === 2 && arr[9] === 2) || (arr[3] === 2 && arr[5] === 2 && arr[7] === 2)) {
        winWin(2);
    }
}

function undoLastStep() {
    debugger
    let tdStep = arraySteps.pop();
    let id_td = "td" + (tdStep.toString());
    let temp = document.getElementById(id_td);
    temp.innerHTML = "";
    statusArr[tdStep] = 0;
    counter--;
    document.getElementById("h1FinishGame").textContent = "";
}

function saveGame() {
    saveGameArr = [...statusArr];
    saveCounter = counter;
}

function loadGame() {
    newGame();
    counter = saveCounter;
    let loadGameArr = [...saveGameArr];
    for (let i = 1; i < loadGameArr.length; i++) {
        let id_td = "td" + (i.toString());
        let tdChoose = document.getElementById(id_td);
        let image = document.createElement('img');
        if (loadGameArr[i] === 1 && loadGameArr[i] != 0)
            tdChoose.innerHTML = "x";
        if (loadGameArr[i] === 2 && loadGameArr[i] != 0)
            tdChoose.innerHTML = "o";
    }
    statusArr = [...loadGameArr];
    winSituation(statusArr);
}

function highestRecord() {
    alert("The Highest Recored is: " + highest_record);
}