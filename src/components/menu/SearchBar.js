import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'reactstrap';

import './Menu.css';

export function SearchBar({ setButton, setValue, ...rest }) {
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    if (!search) {
      return alert('Please write what you are searching for!');
    }
    if ((search.length < 3) | (search.length > 120))
      return alert('The search must contain between 3 and 120 letters');
    navigate(`/search/${search}`);
    setSearch('');
    document.getElementById('search').reset();
  };

  return (
    <Form id="search" onSubmit={onSubmit}>
      <Input
        type="text"
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Vyhledat vtip ..."
      />
      <Button onSubmit={onSubmit}>Search</Button>
    </Form>
  );
}
