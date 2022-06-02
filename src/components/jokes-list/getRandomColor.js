export function getRandomColor() {
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

  return colors[Math.floor(Math.random() * 10)];
}
