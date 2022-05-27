import styled from '@emotion/styled';

export const HeaderWrapper = styled.div((props) => ({
  backgroundImage: `url(${props.img})`,
}));

export const MainTitle = styled.h1({
  margin: 0,
});
