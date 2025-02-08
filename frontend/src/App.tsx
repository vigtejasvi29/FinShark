import React, { SyntheticEvent, useState } from 'react';
import CardList from '../src/Components/CardList/CardList';
import Search from '../src/Components/Search/Search';
import "./Components/Card/Card.css";
import { CompanySearch } from './company';
import './App.css';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  }
  const onClick = async (e: SyntheticEvent) => {
      const result = await searchCompanies(search);
      if(typeof result === "string") {
          setServerError(result);
      } else if (result && Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
  }
  return (
    <div className="App">
      <Search search={search} onClick={onClick} handleChange={handleChange} />
      <CardList />
    </div>
  );
}

export default App;
