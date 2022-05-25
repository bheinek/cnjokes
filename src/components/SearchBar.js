import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Input } from 'reactstrap';

export function SearchBar({ setButton, setValue, ...rest }) {
  const [search, setSearch] = useState();

  return (
    <Container>
      <Input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Vyhledat vtip ..."
      />
      <Link to={`/search/${search}`}> Hledat </Link>
    </Container>
  );
}
