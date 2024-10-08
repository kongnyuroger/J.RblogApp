import React from "react"
import './BlogCard.css'

const BlogCard = ({title, date, describetion, author, url, costomStyle}) => {
    return (
        <div className='BlogCard' style={costomStyle}>
            <h1> {title? title : "UI Interaction of the week"}</h1>
            <div className="info">
                <p className="date">{date? date : "12 Feb 2019"}</p>
                <span> {author? author : "Express, Handlebars"}</span>
            </div>
            <p> {describetion? describetion: " Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officiaconsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."} <a href={url}>more</a></p>
        </div>
    )
}

export default BlogCard