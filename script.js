import Grid from './Grid.js';
import Tile from './Tile.js';

const gameBoard = document.getElementById('game-board');
const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)

setupInput()
console.log(grid.cellsByColumn);

function setupInput(){
  window.addEventListener("keydown", handleInput, {once: true})
}

function handleInput(event){
  switch(event.key){
    case "ArrowUp":
      moveUp()
      break
    case "ArrowDown":
      moveDown()
      break
    case "ArrowLeft":
      moveLeft()
      break
    case "ArrowRight":
      moveRight()
      break
    default:
    setupInput()
    return
  }
  setupInput()

};

function moveUp(){
return slideTiles(grid.cellsByColumn)
}

function moveDown(){
return slideTiles(grid.cellsByColumn.map((column) => [...column].reverse()))
}

function moveLeft(){
  return slideTiles(grid.cellsByRow)
  }
  
function moveRight(){
  return slideTiles(grid.cellsByRow.map((row) => [...row].reverse()))
}

function slideTiles(cells){
  cells.forEach((group) => {
    for (let index = 1; index < group.length; index++) {
      const cell = group[index];
      if (cell.tile == null) continue
      let lastValidCell
      for(let diff = index - 1; diff >= 0; diff--){
        const moveToCell = group[diff]
        if(!moveToCell.canAccept(cell.tile)) break
        lastValidCell = moveToCell
      }
      if(lastValidCell != null){
        if(lastValidCell.tile != null){
          lastValidCell.mergeTile = cell.tile
        }else{
          lastValidCell.tile = cell.tile
        }
        cell.tile = null
      }
    }
  })
}