const colors = [
  "#f44336",
  "#ffc107",
  "#4caf50",
  "#03a9f4",
  "#9c27b0",
  "#ffffff",
  "#607d8b",
  "#e91e63",
  "#ff9800",
  "#009688",
];

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const getColor = () => colors[random(0, colors.length)];
