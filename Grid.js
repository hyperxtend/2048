const gridSize = 4;
const cellSize = 20;
const cellGap = 2;
const cellRadius = 1;

export default class Grid {
  #cells
  constructor(gridElement) {
    gridElement.style.setProperty('--grid-size', `${gridSize}`);
    gridElement.style.setProperty('--cell-size', `${cellSize}vmin`);
    gridElement.style.setProperty('--cell-gap', `${cellGap}vmin`);
    gridElement.style.setProperty('--cell-radius', `${cellRadius}vmin`);
    this.#cells = createCellElements(gridElement).map((cellElement, cellIndex) => {
      return new Cell(cellElement, cellIndex % gridSize, Math.floor(cellIndex/gridSize))
    })
  }

  get #emptyCells(){
    return this.#cells.filter((cell) => cell.tile == null)

  }

  randomEmptyCell(){
    const randomIndex = Math.floor(Math.random() * this.#emptyCells.length)
    // console.log("CHECK >>>", this.#emptyCells[randomIndex]);
    return this.#emptyCells[randomIndex]
  }
}

class Cell {
  #cellElement
  #x
  #y
  #tile
  constructor(cellElement, x, y){
    this.#cellElement = cellElement
    this.#x = x
    this.#y = y
  }

  get tile(){
    return this.#tile
  }

  set tile(value){
    this.#tile = value
    if(value == null) return
    this.#tile.x = this.#x
    this.#tile.y = this.#y
  }
}

function createCellElements( gridElement){
  const cells = [];
  for (let index = 0; index < gridSize * gridSize ; index++) {
    const cell = document.createElement('div')
    cell.classList.add('cell');
    cells.push(cell)
    gridElement.append(cell)
  }
  return cells
}