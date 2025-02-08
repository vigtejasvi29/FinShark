import React from 'react'

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) => {
  return (
    <div className="card">
        <div className="details">
            <h2>{companyName}</h2>
            <p>${price}</p>
        </div>
        <p className="infor">
            {ticker}
        </p>
    </div>
  )
}

export default Card