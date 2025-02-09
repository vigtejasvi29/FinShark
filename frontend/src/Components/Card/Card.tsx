import React, { SyntheticEvent } from 'react'
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
interface Props {
  id: string,
  searchResult: CompanySearch,
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) => {
  return (
    <div className="card">
        <div className="details">
            <h2>{searchResult.name}</h2>
            <p>${searchResult.currency}</p>
        </div>
        <p className="infor">
            {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
  )
}

export default Card