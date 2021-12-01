export function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function setRandomColorToElement(selector: string): void {
  const randomColor = getRandomColor();
  const element = document.getElementById(selector) as HTMLElement;

  element.style.backgroundColor = randomColor;
}
