import React from 'react'
import {useQuery} from '@tanstack/react-query'
import './Posts.css'
import Moment from 'moment';

function Posts() {


    const { isLoading, error, data } = useQuery(['repoData'], () =>
    fetch('https://newsapi.org/v2/everything?q=flowers&from=2022-07-11&sortBy=publishedAt&apiKey='+process.env.REACT_APP_API_KEY).then(res =>
      res.json()
    )
  )
    
if (isLoading){
    return <div>Loading...</div>
}

if (error){
    return <div>Error: {error.message}</div>
}

  return (
    <div className='posts'>
        {data.articles.map((post) =>(
            
            <div className='post'>
                <img src={post.urlToImage} alt={post.title} className='post__img'/>
                <p className='post__source'>{post.source.name}</p>
                <p className='post__title'>{post.title}</p>
                <p className='post__date'>{post.publishedAt}</p>
                <a href={post.url} className='post__link'>Read article</a>

            </div>
        ))}

    </div>
  )
}

export default Posts