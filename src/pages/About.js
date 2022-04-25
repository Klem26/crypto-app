import React from 'react';
import axios from 'axios';
import Coin from '../components/Coin';
import { useEffect, useState } from 'react';

function About() {
  const [listCoins, setListCoins] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  useEffect(() => {
    axios
      .get('https://api.coinstats.app/public/v1/coins?skip=0')
      .then(response => {
        setListCoins(response.data.coins);
      });
  }, []);

  const filteredCoins = listCoins.filter(coin => {
    return coin.name.toLowerCase().includes(searchWord);
  });
  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bitcoin.."
          onChange={event => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map(({ name, icon, price, symbol, id }) => {
          return (
            <Coin
              key={id}
              name={name}
              icon={icon}
              price={price}
              symbol={symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;
