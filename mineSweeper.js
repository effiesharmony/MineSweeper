'use strict'

var gLevel = {
    SIZE: 4,
    MINES: 2
}
var gBoard = buildBoard(gLevel.SIZE)
const MINE = '💣'
const SAFE = ' '
// var negs = setMinesNegsCount(gBoard)
// var clickedCell = gBoard[i][j]
// var gTimerInterval
// var gStartTime
// var gElapsedTime = 0

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function onInit() {
    console.table(gBoard)
    renderBoard(gBoard)
    gGame.isOn = true
}

function createCell(){

}

function buildBoard(size) {
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])

        for (var j = 0; j < size; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
        }
    }
    board[1][2].isMine = true
    board[3][2].isMine = true
    return board
}

function setMinesNegsCount(cell) {

    for (var i = gCell.location.i - 1; i <= gCell.location.i + 1; i++) {
        for (var j = gCell.location.j - 1; j <= gCell.location.j + 1; j++) {
            if (gCell[i][j] === MINE) gCell.minesAroundCount++
        }
    }
    return gCell.minesAroundCount
}

function renderBoard(board) {
    var cellContent
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[i].length; j++) {

            var cell = board[i][j]

            if (cell.isMine === false) {
                cellContent = SAFE
            }
            else if (cell.isMine) cellContent = MINE

            strHTML += `<td>${cellContent}</td>`
        }
        strHTML += '</tr>'

    }
    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}


// function onCellClicked(elCell, clickedNum) {
//     if (clickedNum === gNextNumber) {
//         if (clickedNum === 1) startTimer()
//         elCell.classList.add('clicked-cell')
//         gNextNumber++
//         if (gNextNumber > gLevel ** 2) {
//             clearInterval(gTimerInterval)
//             return
//         }
//         renderNextNumber()
//     }
// }
