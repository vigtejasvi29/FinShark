import React, { SyntheticEvent, useState } from 'react';
import CardList from '../src/Components/CardList/CardList';
import Search from '../src/Components/Search/Search';
import "./Components/Card/Card.css";
import { CompanySearch } from './company';
import './App.css';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
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
      <Navbar />
      <Search search={search} onClick={onClick} handleChange={handleChange} />
      { serverError && <h1>{serverError}</h1> }
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
