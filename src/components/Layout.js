import { Container } from 'reactstrap';

import { Header } from './';

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Container className="mt-4">{children}</Container>
    </>
  );
}
