import React, { useEffect, useState } from 'react';
import Loader from '../../components/common/Loader';
export const FetchNews = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?' +
    'q=ai AND developers AND software&'+
    'pageSize=15&' +
    'apiKey=fca3dbba35b548ae84e708e9904818fd';  
    
    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(function (data) {
        setResponseData(data); // Update the state with the fetched data
      })
      .catch(function (error) {
        setError('An error occurred while fetching data.');
        console.error(error);
      });
  }, []);

  return (
    <div>
    {error ? (
      <>
      <p>{error}</p>
      <button >Retry</button>
      </>
    ) : responseData ? (
      <ul>
      {responseData.articles.map((article, index) => (
        <div key={index} className='news flex flex-col justify-center  w-[80%] bg-[rgba(255,255,255,0.25)] backdrop-blur-sm m-20 mx-auto p-12 rounded-lg'>
        <div className='img-container w-36 h-30'>
          <img className="img" src={article.urlToImage} loading='lazy' alt="" />
        </div>
        <pre><strong>Source: </strong>{article.source.name}</pre>
        <strong></strong> {article.title}<br />
        <a className='underline hover:text-blue-600' href={article.url} target="_blank" rel="noopener noreferrer">Read full article here</a>
      </div>
      
  
        
      ))}
    </ul>
    ) : (
      <p><Loader></Loader></p>
    )}
  </div>

  );
};


