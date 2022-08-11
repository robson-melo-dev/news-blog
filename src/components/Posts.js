import React from 'react'
import {useQuery} from '@tanstack/react-query'
import './Posts.css'

function Posts() {


    const { isLoading, error, data } = useQuery(['repoData'], () =>
    fetch('https://newsapi.org/v2/everything?q=florida&from=2022-07-11&sortBy=publishedAt&apiKey='+process.env.REACT_APP_API_KEY).then(res =>
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
            <div className='post__card'> <a href={post.url} className='post__link'>{post.title} </a></div>
        ))}

    </div>
  )
}

export default Posts