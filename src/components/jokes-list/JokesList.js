import { JokesListLayout } from './JokesListLayout';

import './JokesList.css';

export function JokesList({ slug, numberOfJokes }) {
  const jokes = Array(numberOfJokes)
    .fill(null)
    .map((_, i) => (
      <p key={i}>
        <JokesListLayout slug={slug ? 'random?category=' + slug : 'random'} />
      </p>
    ));
  const filteredJokes = jokes.filter(function (elem, pos) {
    return jokes.indexOf(elem) === pos;
  });
  console.log(jokes);
  return (
    <div className="body">
      <h2>{slug?.toUpperCase()}</h2>
      {filteredJokes}
    </div>
  );
}
