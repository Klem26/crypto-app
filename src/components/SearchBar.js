import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

import { Input } from '../css/SearchBar.js';

function SearchBar({ placeholder }) {
  const [filteredNews, setFilteredNews] = useState([]);
  const [dataNews, setData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/news').then(response => {
      setData(response.data.news);
    });
  }, []);

  const handleFilter = e => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);

    const newFilter = dataNews.filter(value => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setFilteredNews([]);
    } else {
      setFilteredNews(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredNews([]);
    setWordEntered('');
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <Input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />

        <div className="searchIcon">
          {' '}
          {filteredNews.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredNews.length != 0 && (
        <div className="dataResult">
          {filteredNews.map(({ title, link, id }) => {
            return (
              <div key={id} className="resultBox">
                <a href={link} className="fastLink" target="_blank">
                  {title}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
