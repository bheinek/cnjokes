import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Form, Input } from 'reactstrap';

export const WebsiteWrapper = styled.div((props) => ({
  minHeight: '100vh',
  backgroundColor: props.theme.colors.primary,
}));

//Header style - Title, description

export const HeaderWrapper = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
  color: props.theme.colors.secondary,
  fontFamily: props.theme.fonts.secondary,
}));

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
  fontFamily: props.theme.fonts.primary,
  position: 'sticky',
  top: '0px',
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  backgroundColor: props.theme.colors.quaternary,
  color: props.theme.colors.secondary,
}));

export const ResponsiveMenu = styled.div((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  '@media screen and (max-width: 2000px)': {
    display: props.isShown,
    justifyContent: 'center',
  },
}));

export const MenuBar = styled(NavLink)((props) => ({
  textDecoration: 'none',
  color: props.theme.colors.secondary,
  textAlign: 'center',
  padding: '10px 20px',
  ':hover': {
    backgroundColor: props.theme.colors.tertiary,
  },
}));

export const MenuButton = styled(Button)((props) => ({
  fontSize: '20px',
  padding: '10px 30px ',
  overflow: 'hidden',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: 'inherit',
  '@media screen and (min-width: 2000px)': {
    display: 'none',
  },
}));

//SearchBar style

export const JokesSearch = styled(Form)((props) => ({
  maxWidth: '200px',
  margin: '0px 20px',
  display: 'flex',
  backgroundColor: 'inherit',
  borderRadius: '20px',
  border: '1px solid gray',
  color: 'inherit',
  overflow: 'hidden',
}));

export const SearchButton = styled(Button)((props) => ({
  overflow: 'hidden',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: 'inherit',
}));

export const SearchField = styled(Input)((props) => ({
  paddingLeft: '10px',
  borderRadius: '20px',
  border: 'none',
  background: 'transparent',
  color: 'inherit',
  '::placeholder': {
    color: 'inherit',
  },
}));

//body

export const Body = styled(Container)((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

export const JokesListLayout = styled.div((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%',
  minHeight: '90vh',
}));

export const JokeCard = styled.div((props) => ({
  overflow: 'scroll',
  display: 'flex',
  padding: '20px',
  borderBottom: `4px solid ${props.randomColor}`,
  width: '400px',
  height: '200px',
  textAlign: 'center',
  alignItems: 'center',
  margin: '20px 40px',
}));

export const CategoryTitle = styled.h2({
  width: '100%',
  textAlign: 'center',
});

//Dropdown menu
export const DropDownLayout = styled(Form)((props) => ({
  backgroundColor: props.theme.colors.quaternary,
  fontFamily: props.theme.fonts.primary,
  padding: '10px',
  position: 'sticky',
  textAlign: 'center',
  width: '100%',
  height: props.theme.height.primary,
  color: props.theme.colors.secondary,
  bottom: '0px',
}));

export const DropDownSelect = styled.select({
  backgroundColor: 'inherit',
  color: 'inherit',
  margin: '0 10px',
  padding: '0 10px',
  border: 'none',
  boxShadow: '1px 1px 1px 1px black',
});
