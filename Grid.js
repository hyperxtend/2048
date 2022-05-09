const gridSize = 4;
const cellSize = 20;
const cellGap = 2;
const cellRadius = 1;

export default class Grid {
  constructor(gridElement) {
    gridElement.style.setProperty('--grid-size', `${gridSize}`);
    gridElement.style.setProperty('--cell-size', `${cellSize}vmin`);
    gridElement.style.setProperty('--cell-gap', `${cellGap}vmin`);
    gridElement.style.setProperty('--cell-radius', `${cellRadius}vmin`);
  }
}
