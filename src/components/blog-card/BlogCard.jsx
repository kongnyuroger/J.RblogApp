import React from "react"
import './BlogCard.css'

const BlogCard = ({title, date, describetion}) => {
    return (
        <div className='BlogCard'>
            <h1> {title? title : "UI Interaction of the week"}</h1>
            <div className="info">
                <p className="date">{date? date : "UI Interaction of the week"}</p>
                <span>Express, Handlebars</span>
            </div>
            <p> {describetion? describetion: " Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officiaconsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}</p>
        </div>
    )
}

export default BlogCard