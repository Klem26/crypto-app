import React, { useEffect, useState } from 'react';
import axios from 'axios';
import News from '../components/News';
import SearchBar from '../components/SearchBar';
import { Title } from '../css/SearchBar';

function Home() {
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/news').then(response => {
      setListNews(response.data.news);
    });
  }, []);

  return (
    <div>
      <SearchBar placeholder=" Search news" data={setListNews} />
      <Title>News</Title>
      <News data={listNews} />
    </div>
  );
}

export default Home;
