import React from 'react'
import { FaSearchengin } from "react-icons/fa6";
import { Dispatch, SetStateAction } from 'react';
import styles from './SearchBar.module.css'

interface iSearchBarProps {
        search: string;
        setSearch: React.Dispatch<React.SetStateAction<string>>;
    }

const SearchBar:React.FC<iSearchBarProps> = ({setSearch}) => {

   return <div className={styles.searchBarContainer}>
        <FaSearchengin/>
        <input 
        className={styles.input}
        onChange={e => setSearch(e.target.value)}
        placeholder="search item name or description"
        />

        </div>
}


export default SearchBar