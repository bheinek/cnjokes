import { Label } from 'reactstrap';

export function Dropdown({ number, setNumber }) {
  const numbers = Array(10)
    .fill('')
    .map((_, i) => (i + 1) * 5);

  return (
    <div>
      <Label>Select displayed number of Jokes</Label>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        {numbers.map((_number) => (
          <option key={_number}>{_number}</option>
        ))}
      </select>
    </div>
  );
}
