import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import s from './Search.module.scss';

const Search = () => {
    return (
        <div className={s.searchForm}>
            <SearchIcon style={{ fontSize: 20 }}  />
            <input type='text' placeholder="I'm looking for..." className={s.searchInput} />
        </div>
    )
}

export default Search;