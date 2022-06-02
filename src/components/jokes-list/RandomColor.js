export function RandomColor() {
  const colors = [
    'red',
    'purple',
    'gray',
    'green',
    'blue',
    'yellow',
    'black',
    'brown',
    'pink',
    'orange',
  ];

  const getRandomColor = colors[Math.floor(Math.random() * 10)];
  return getRandomColor;
}
