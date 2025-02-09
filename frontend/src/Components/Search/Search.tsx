import React, { SyntheticEvent } from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({onClick, search, handleChange}: Props) => {
 
  return (
    <div> 
        <input value={search} onChange={(e) => handleChange(e)} />
        <button onClick={(e)=> onClick(e)}>Search Results</button> 
    </div>
  )
}

export default Search