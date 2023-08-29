import React from 'react';
import { FetchNews } from '../api/NewsAPI/newsAPI'
import '../styles/News.scss'
export default function NewsComponent() {

return (
  <div>
    <FetchNews></FetchNews>
  </div>
);

  
}
