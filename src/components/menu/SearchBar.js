import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { JokesSearch, SearchButton, SearchField } from '../../styles';

export function SearchBar() {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${search}`);
    setSearch('');
  };

  return (
    <JokesSearch onHover onSubmit={handleSubmit}>
      <SearchField
        required
        minLength={3}
        maxLength={120}
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search jokes ..."
      />
      <SearchButton type="submit">
        {' '}
        <BsSearch />
      </SearchButton>
    </JokesSearch>
  );
}
