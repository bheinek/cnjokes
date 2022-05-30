import { useParams } from 'react-router-dom';

import { JokeCard, JokesListLayout } from '../../styles';

export function JokesList({ fetchedJokes, listOfJokes }) {
  const { slug } = useParams();
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
    <JokesListLayout>
      <h2>{slug?.toUpperCase()}</h2>

      {listOfJokes.length === 0 ? (
        <p>No results found</p>
      ) : (
        Array.from(listOfJokes).map((joke, i) => (
          <JokeCard key={i}>{joke}</JokeCard>
        ))
      )}
    </JokesListLayout>
  );
}
