import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input } from 'reactstrap';

import './Menu.css';

export function SearchBar({ setButton, setValue, ...rest }) {
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    if (!search) {
      return alert('Please write what you are searching for!');
    }
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
      <Input type="Button" value="Hledat" onClick={onSubmit} />
    </Form>
  );
}
