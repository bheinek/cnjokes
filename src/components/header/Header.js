import headerImage from '../../images/background.jpg';
import {
  Desciption,
  HeaderWrapper,
  MainTitle,
  Title,
  TitleWrapper,
} from '../../styles.js';
import { Menu } from '..';

export function Header() {
  return (
    <HeaderWrapper img={headerImage}>
      <TitleWrapper>
        <MainTitle>
          <Title to="/">CN Jokes</Title>
        </MainTitle>

        <Desciption>
          Website dedicated to facts about the greatest person in human history
          - Mr. Chuck Norris{' '}
        </Desciption>
      </TitleWrapper>
      <Menu />
    </HeaderWrapper>
  );
}
