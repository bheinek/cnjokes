import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'reactstrap';

import './Menu.css';

export function SearchBar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!search) {
      return alert('Please write what you are searching for!');
    }
    if (search.length < 3 || search.length > 120)
      return alert('The search must contain between 3 and 120 letters');
    navigate(`/search/${search}`);
    setSearch('');
  };

  return (
    <Form id="search" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Vyhledat vtip ..."
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}
