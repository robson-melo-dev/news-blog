import '../styles/Posts.css'
import React, {useState} from 'react'
import {useQuery} from '@tanstack/react-query'

function PostsInShorts() {
    const [category, setCategory] = useState("technology")
    const categories = [
        'all',
        'national //Indian News only',
        'business',
        'sports',
        'world',
        'politics',
        'technology',
        'startup',
        'entertainment',
        'miscellaneous',
        'hatke',
        'science',
        'automobile',
    ]

  const { isLoading, error, data } = useQuery(["posts"], () =>
    fetch('https://inshorts.deta.dev/news?category='+category).then((res) => {
      if (res.ok) return res.json();
      else throw Error(res.status + "");
    })
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  console.log(category)

  return (
    <>
    <div className='categories'>
        <h3>CATEGORY:</h3>
        {categories?.map?.((cat) =>(
            cat === category ? (<div className='category--selected' onClick={()=>setCategory(cat)} key={cat}>{cat}</div>) :
            (<div className='category' onClick={()=>setCategory(cat)} key={cat}>{cat}</div>)
        ))}
        </div>
    <div className="postsTable">
      <div className="posts">
        {data.data?.map?.((post) => (
          <div className="post" key={post.id}>
            <img src={post.imageUrl} alt={post.author} className="post__img" />
            <p className="post__author">{post.author}</p>
            <p className="post__content">{post.content}</p>
            <p className="post__date">{post.date}</p>
            <a href={post.readMoreUrl} className="post__link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default PostsInShorts;
