import { Body, WebsiteWrapper } from '../styles';

import { Header, Menu } from './';

export function Layout({ children }) {
  return (
    <WebsiteWrapper>
      <Header />
      <Menu />
      <Body> {children}</Body>
    </WebsiteWrapper>
  );
}
