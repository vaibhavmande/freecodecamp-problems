const COLORS = [
  "#531B76",
  "#579F45",
  "#2B53CA",
  "#8C2A5E",
  "#32677A",
  "#7D9BD4",
  "#896821",
  "#444E20",
  "#555E81",
  "#C32F37",
  "#3D7BB4",
  "#E0487D",
  "#BB47B7",
  "#7E737A",
];

export function getRandomBetween(max: number): number {
  return Math.round(Math.random() * max);
}

export function getRandomColor() {
  const MAX = COLORS.length;

  const random = getRandomBetween(MAX);
  return COLORS[random];
}

export function setRandomColorToElement(selector: string): void {
  const randomColor = getRandomColor();
  const element = document.getElementById(selector) as HTMLElement;

  element.style.backgroundColor = randomColor;
}
