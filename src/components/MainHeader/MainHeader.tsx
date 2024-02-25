import { useContext } from 'react'
import { SearchContext } from '../../'
import { Link } from 'react-router-dom'
import { SearchBar } from '../'
import styles from './MainHeader.module.css';

const MainHeader = (props: any) => {
    const { search, setSearch } = useContext(SearchContext);

    return (<div className={styles.headerContainer}>
        <Link to={{ pathname: '/' }} className={styles.headerLink}>
            Home Page
        </Link>
        <SearchBar search={search} setSearch={setSearch} />
        {/* {!!categoryFilter.length && 
    <div className={styles.activeFiltersContainer}>
        Active Filters:
        {categoryFilter.map((activeFilter:string) => 
        <button
        onClick={event => {
            console.log('did click button', event)
            setFilter(currState => currState.filter(x => x !== activeFilter))
        }}
        className={styles.activeFilterButton} 
        >
        {activeFilter}
    </button>
    
    )}

    </div>
    } */}

    </div>)

}


export default MainHeader