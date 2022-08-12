import React, {useState} from 'react'
import {useQuery} from '@tanstack/react-query'
import './Posts.css'
import Moment from 'moment';

function Posts() {
const [currentPage, setCurrentPage] = useState(1)
const postsPerPage = 9
const [pages, setPages] = useState([])

  const { isLoading, error, data } = useQuery(["posts"], () =>
    fetch(
      'https://newsapi.org/v2/everything?pageSize='+postsPerPage+'&q=florida&from=2022-07-11&sortBy=publishedAt&page='+currentPage+'&apiKey=' +
        process.env.REACT_APP_API_KEY
    ).then(res => {
      if (res.ok) return res.json()
      else throw Error(res.status + "")
    })
  )
    
if (isLoading){
    return <h1>Loading...</h1>
}

if (error){
    return <h1>Error: {error.message}</h1>
}

console.log("current page ",currentPage)

if(pages.length === 0){
    for (let i=1; i<=Math.ceil(data.totalResults/postsPerPage);i++){
        if(i<=10){
            pages.push(i)
        }        
    }
}



function paginate(e){
    setCurrentPage(e.target.id)    
}

  return (
    <div className='postsTable'>
    <div className='posts'>
        {data.articles?.map?.((post) =>(
            
            <div className='post'>
                <img src={post.urlToImage} alt={post.title} className='post__img'/>
                <p className='post__source'>{post.source.name}</p>
                <p className='post__title'>{post.title}</p>
                <p className='post__date'>{post.publishedAt}</p>
                <a href={post.url} className='post__link'>Read article</a>
            </div>
        ))}
        
    </div>
    <footer className='pages'>
    page <ul className='pages__numbers'> 
            {pages?.map?.((number)=>(
                <li key={number} className='page' >
                    <a href='' id={number} onClick={paginate} className='page__link'>{number}</a>
                </li>
            ))}
        </ul>
    </footer>
    </div>
  )
}

export default Posts