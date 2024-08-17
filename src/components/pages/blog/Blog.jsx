import React from "react"
import './Blog.css'
import BlogCard from "../../blog-card/BlogCard"

const Blog = () => {
    return (
        <div className='page blogpage'>
            <h1 className="page-title">Blog</h1>
            <BlogCard title='UI Interaction of the week'/>
            <BlogCard />
            <BlogCard />

        </div>
    )
}

export default Blog