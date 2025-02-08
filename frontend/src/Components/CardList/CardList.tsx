import React from 'react'
import Card from "../Card/Card";

interface Props {

}

const CardList:React.FC<Props> = (props: Props) => {
  return (
    <div>
        <Card companyName="Apple" ticker="Aple" price={100}/>
        <Card companyName="Microsoft" ticker="Micro" price={200}/>
        <Card companyName="Tesla" ticker="Tes" price={300}/>
    </div>
  )
}

export default CardList