import { JokesListLayout } from './JokesListLayout';

import './JokesList.css';

export function JokesList({ slug }) {
  const jokes = Array(10)
    .fill(null)
    .map((_, i) => (
      <p key={i}>
        <JokesListLayout slug={slug} />
      </p>
    ));

  return <div className="body">{jokes}</div>;
}
