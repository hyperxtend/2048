export default class Tile{
  #tileElement
  #value
  #x
  #y
  constructor(tileContainer, value = Math.random() > .5 ? 2 : 4){
    this.#tileElement = document.createElement('div');
    this.#tileElement.classList.add("tile");
    tileContainer.append(this.#tileElement);
    this.value = value

  }

  set value(tileValue){
    this.#value = tileValue
    this.#tileElement.textContent = tileValue
    const power = Math.log2(tileValue)
    const backgroundBrightness = 100 - power * 9
    this.#tileElement.style.setProperty('--tile-brightness', `${backgroundBrightness}%`)
    this.#tileElement.style.setProperty('--text-brightness', `${backgroundBrightness <= 50 ? 90 : 10}%`)
  }

  set x(value){
    this.#x = value
    this.#tileElement.style.setProperty("--x-tile", value)
  }

  set y(value){
    this.#y = value
    this.#tileElement.style.setProperty("--y-tile", value)
  }
}