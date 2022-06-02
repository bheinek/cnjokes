import { useParams } from 'react-router-dom';

import { CategoryTitle, JokeCard, JokesListLayout } from '../../styles';

import { RandomColor } from './RandomColor';

export function JokesList({ fetchedJokes, listOfJokes }) {
  const { slug } = useParams();
  if (fetchedJokes.loading) {
    return (
      <JokesListLayout>
        <CategoryTitle>{slug?.toUpperCase()}</CategoryTitle>
        <p>'a moment please..'</p>
      </JokesListLayout>
    );
  }
  if (fetchedJokes.error) {
    return (
      <JokesListLayout>
        <CategoryTitle>{slug?.toUpperCase()}</CategoryTitle>
        <p>There is a problem fetching data '{fetchedJokes.error}</p>
      </JokesListLayout>
    );
  }
  return (
    <JokesListLayout>
      <CategoryTitle>{slug?.toUpperCase()}</CategoryTitle>

      {listOfJokes.length === 0 ? (
        <p>No results found</p>
      ) : (
        Array.from(listOfJokes).map((joke, i) => {
          const getRandomColor = RandomColor();
          return (
            <JokeCard key={i} randomColor={getRandomColor}>
              {joke}
            </JokeCard>
          );
        })
      )}
    </JokesListLayout>
  );
}
