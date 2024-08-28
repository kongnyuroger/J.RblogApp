import React from "react"
import { useState, useEffect } from "react"
import './Blog.css'
import BlogCard from "../../blog-card/BlogCard"
import App from "../../../App"

const Blog = () => {
    
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const api = `${process.env.REACT_APP_API_KEY }`
        fetch(`https://newsapi.org/v2/everything?q=news&from=2024-08-27&to=2024-08-27&sortBy=popularity&apiKey=${api}`,{
            method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
          
            const articles = data.articles
            articles.shift()
            setBlogs(articles)
            
        })
        .catch((error) => console.log(error));  
    }, [])
    return (
        <div className='page blogpage'>
            <h1 className="page-title">Blog</h1>
           {blogs.map((blog) => (
                <BlogCard
                    title={blog.title}
                    describetion={blog.content}
                    date={blog.publishedAt}
                    author={blog.author}
                    url={blog.url}
                    
                />
           ))}
        </div>
    )
}

export default Blog