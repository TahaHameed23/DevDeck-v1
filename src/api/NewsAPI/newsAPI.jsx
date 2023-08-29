import React, { useEffect, useState } from 'react';
export const FetchNews = () => {
  
  const [error, setError] = useState(null);
  const image =['https://s.yimg.com/uu/api/res/1.2/d5p0OFvCuLtHMgvbxrqbOw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/5c676c40-3641-11ee-af1f-1bf4640ccdcd.cf.jpg',
'https://s.yimg.com/ny/api/res/1.2/TDdYu4vr7WP6CR2Dgzbc3Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/f2492ce0-42c0-11ee-9f7e-84da8b4489fd',
'https://s.yimg.com/uu/api/res/1.2/Bj9Kb_rPKgmqTnFlbq5IYA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/2355c380-3172-11ee-b6fd-39d89e28a467.cf.jpg',
'https://cdn.vox-cdn.com/thumbor/waP9E94tG8X54qXNaL-CvH6FzBo=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22977155/acastro_211101_1777_meta_0001.jpg',
'https://venturebeat.com/wp-content/uploads/2023/08/634aea6929d4e1802257ff90_prev.png?w=1200&strip=all',
'https://i.insider.com/610adcfb372268001a59ac21?width=1200&format=jpeg',
'https://venturebeat.com/wp-content/uploads/2023/07/annevb_generative_ai_code_assistant_in_an_office._Colorful_fut_95302330-7b15-4a98-8996-0edaa54cd27d.png?w=1200&strip=all',
'https://cdn.arstechnica.net/wp-content/uploads/2023/08/cobol_73-760x380.jpg',
'https://venturebeat.com/wp-content/uploads/2023/07/NVIDIA.jpg?w=1200&strip=all',
'https://venturebeat.com/wp-content/uploads/2023/08/nuneybits_vector_art_of_cloud_security_as_a_renaissance_painti_6974ed9d-c15f-4b67-9213-7cbe0fc2c545.png?w=1200&strip=all'];

const title =["The White House's 'AI Cyber Challenge' aims to crowdsource national security solutions","Hitting the Books: Why AI needs regulation and how we can do it","Microsoft’s AI-infused sidebar rolls out to Windows 11 beta testers","Meta launches own AI code-writing tool: Code Llama","MindsDB raises funding from Nvidia to democratize AI application development","Big Tech salaries revealed: This is what developers, engineers, and product managers make at Google, Apple, Meta, and Amazon","How generative AI code assistants could revolutionize developer experience","IBM’s generative AI tool aims to refactor ancient COBOL code for its mainframes","Nvidia reports record Q2 results driven by surging data center demand","Tromzo secures $8M to lead the charge in AI-powered cloud security solutions"]

const links =['https://www.engadget.com/the-white-houses-ai-cyber-challenge-aims-to-crowdsource-national-security-solutions-170003434.html','https://www.engadget.com/hitting-the-books-containing-big-tech-tom-kemp-it-rev-ai-regulation-143014628.html','https://www.engadget.com/microsofts-ai-infused-sidebar-rolls-out-to-windows-11-beta-testers-211546573.html','https://www.theverge.com/2023/8/24/23843487/meta-llama-code-generation-generative-ai-llm','https://venturebeat.com/ai/mindsdb-raises-funding-from-nvidia-to-democratize-ai-application-development/','https://www.businessinsider.com/big-tech-salaries-what-you-make-google-apple-amazon-meta-ibm','https://venturebeat.com/ai/how-generative-ai-code-assistants-could-revolutionize-developer-experience/','https://arstechnica.com/information-technology/2023/08/ibms-generative-ai-tool-aims-to-refactor-ancient-cobol-code-for-its-mainframes/','https://venturebeat.com/ai/nvidia-reports-record-q2-results-driven-by-surging-data-center-demand/','https://venturebeat.com/ai/tromzo-secures-8m-to-lead-the-charge-in-ai-powered-cloud-security-solutions/']

const sources = ['Engadet','Engadet','Engadet','The Verge','Venturebeat','Business Insider','Venturebeat','Arstechnica','Venturebeat','Venturebeat']
  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?' +
      'q=ai AND developers AND software&' +
      'pageSize=15&' +
      'apiKey=fca3dbba35b548ae84e708e9904818fd';

    fetch(url)
      .then(function (response) {
        if (!response.ok) {
            setError(error)
        }
        return response.json();
      })
      
      .catch(function () {
        setError('An error occurred while fetching data.');
        
      });
  }, []);

  return (
    <div>
      <ul>
        {image.map((image, index) => (
          <div key={index} className='news flex flex-col justify-center w-[80vw] bg-[rgba(255,255,255,0.25)] backdrop-blur-sm m-20 mx-auto p-12 rounded-lg'>
            <div className='w-36 h-30'>
              <img className="img" src={image} loading='lazy' alt="" />
            </div>
            <p className='my-2'>Source: <span className='font-medium'>{sources[index]}</span></p>
            <strong className=''>{title[index]}</strong><br />
            <div>
              <a className='underline hover:text-blue-600' href={links[index]} target="_blank" rel="noopener noreferrer">Read full article here</a>
            </div>
          </div>
        ))}
      </ul>
    </div> 
  );
};
