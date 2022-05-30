import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

import { JokesSearch, SearchButton, SearchField } from '../../styles';

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
    <JokesSearch onSubmit={handleSubmit}>
      <SearchField
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
