import { Container } from 'reactstrap';

import { Header, Menu } from './';

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Menu />
      <Container className="mt-4">{children}</Container>
    </>
  );
}
