import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { Button, Form, Input } from 'reactstrap';

export const HeaderWrapper = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  color: `${props.theme.colors.primary}`,
  fontFamily: `${props.theme.fonts.primary}`,
}));
//Header style - Title, description
export const TitleWrapper = styled.div((props) => ({
  display: 'inline-flex',
  width: '100%',
}));

export const MainTitle = styled.h1({
  margin: 0,
  padding: '10px',
  display: 'flex',
  width: 'fit-content',
  minWidth: '180px',
});
export const Desciption = styled.p({
  padding: '10px',
  display: 'flex',
  width: 'auto',
});
export const Title = styled(Link)({
  textDecoration: 'inherit',
  color: 'inherit',
});

//Menu style
export const MenuLayout = styled.div((props) => ({
  color: `${props.theme.colors.secondary}`,
  display: 'inline-flex',
  width: '100%',
  backgroundColor: `${props.theme.colors.quaternary}`,
  opacity: 0.7,
  flexWrap: 'wrap',
}));

export const OnScrollMenu = styled.div((props) => ({
  color: `${props.theme.colors.secondary}`,
  display: 'inline-flex',
  width: '100%',
  backgroundColor: `${props.theme.colors.quaternary}`,
  opacity: 0.7,
  flexWrap: 'wrap',
  position: 'sticky',
  top: '0px',
  zIndex: 1,
}));

export const MenuBar = styled(NavLink)((props) => ({
  textDecoration: 'inherit',
  color: 'inherit',
  padding: '5px 10px',
  ':hover': {
    backgroundColor: `${props.theme.colors.tertiary}`,
  },
}));

//SearchBar style
export const JokesSearch = styled(Form)((props) => ({
  margin: '0px 10px',
  display: 'flex',
  backgroundColor: `${props.theme.colors.quaternary}`,
  borderRadius: '20px',
  border: '1px solid gray',
  color: `${props.theme.colors.secondary}`,
}));

export const SearchButton = styled(Button)((props) => ({
  overflow: 'hidden',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
}));

export const SearchField = styled(Input)({
  paddingLeft: '10px',
  borderRadius: '20px',
  border: 'none',
  background: 'transparent',
  color: 'inherit',
});

//body
export const JokesListLayout = styled.div((props) => ({
  margin: 'auto',
  width: '80%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center',
}));

export const JokeCard = styled.div((props) => ({
  border: '1px solid silver',

  display: 'flex',
  padding: '10px',
  borderRadius: '15px',
  width: '400px',
  height: '400px',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  boxShadow: ' 0px 0px 5px silver ',
  margin: '20px 40px',
}));
