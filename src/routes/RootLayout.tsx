import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MainHeader } from '../components';
import styles from './RootLayout.module.css';
import { SearchContext, FilterContext } from '../';

type SetSearchType = React.Dispatch<React.SetStateAction<string>>;

const RootLayout = () => {
    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string[]>([]);

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            <SearchContext.Provider value={{ search: search as any, setSearch: setSearch as any }}>
                <div className={styles.MainContainer}>
                    <MainHeader />
                    <Outlet />
                </div>
            </SearchContext.Provider>
        </FilterContext.Provider>
    );
};

export default RootLayout;
