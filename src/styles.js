import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div((props) => ({
  //backgroundImage: `url(${props.img})`,
  backgroundColor: 'black',
  color: 'white',
  display: 'inline-flex',
  width: '100%',
}));

export const MainTitle = styled.h1({
  margin: 0,
  padding: '10px',
  display: 'flex',
  width: 'fit-content',
});
export const Desciption = styled.p({
  padding: '10px',
  display: 'flex',
  width: 'fit-content',
});
export const Title = styled(Link)({
  textDecoration: 'inherit',
  color: 'inherit',
});
