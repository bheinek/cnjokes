import { JokesListLayout } from './JokesListLayout';

import './JokesList.css';

export function JokesList() {
  const jokes = [];
  for (let i = 0; i < 10; i++) {
    jokes.push(
      <p key={i}>
        <JokesListLayout>random</JokesListLayout>
      </p>,
    );
  }

  return <div className="body">{jokes}</div>;
}
