import React, { useState } from 'react';
import './style.css';

var data = require('./DATA.json');

export default function SearchBar() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (keyWord) => {
    setValue(keyWord);
  };

  return (
    <div className="container">
      <h1>SEARCH</h1>
      <div className="search-container">
        <div className="search-box">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}>SEARCH</button>
        </div>
        <div className="dropdown">
          {data.words
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const targetWord = item.targetWord;
              const englishWord = item.englishWord;
              const dataMix = { ...targetWord, ...englishWord };
              return (
                searchTerm &&
                targetWord.startsWith(searchTerm) &&
                targetWord !== searchTerm
              );
            })
            .map((item) => (
              <div
                className="dropdown-row"
                onClick={() => onSearch(item.targetWord)}
                key={item.targetWord}
              >
                {item.targetWord}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
