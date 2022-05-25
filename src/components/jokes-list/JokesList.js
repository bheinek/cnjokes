import { useFetch } from '../../hooks';

import './JokesList.css';

export function JokesList({ slug, numberOfJokes }) {
  const fetchedJokes = useFetch(slug, numberOfJokes);

  const jokes = fetchedJokes.data.map((data) => data.value);
  const filteredJokes = new Set(jokes);

  if (fetchedJokes.loading) {
    return (
      <div className="body">
        <h2>{slug?.toUpperCase()}</h2>
        <p>'a moment please..'</p>
      </div>
    );
  }
  if (fetchedJokes.error) {
    return (
      <div className="body">
        <h2>{slug?.toUpperCase()}</h2>
        <p>There is a problem fetching data '{fetchedJokes.error}</p>
      </div>
    );
  }
  return (
    <div className="body">
      <h2>{slug?.toUpperCase()}</h2>

      {Array.from(filteredJokes).map((joke, i) => (
        <p key={i}>{joke}</p>
      ))}
    </div>
  );
}
