//import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import headerImage from '../../images/background.jpg';
import { HeaderWrapper, MainTitle } from '../../styles.js';

export function Header() {
  return (
    <HeaderWrapper img={headerImage}>
      <MainTitle>
        <Link to="/">CN Jokes</Link>
      </MainTitle>

      <p className="description">
        Website dedicated to facts about the greatest person in human history -
        Mr. Chuck Norris{' '}
      </p>
    </HeaderWrapper>
  );
}
