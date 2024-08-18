import React from "react"
import './Home.css'
import { contents } from "../work/content"
import BlogCard from "../../blog-card/BlogCard"
import WorkCard from "../../work-card/WorkCard"

const Home = () => {
    const blogcostomStyle = {
        border: "0px",
        backgroundColor: "white",
        padding: "2rem"
    }
    const workContents = contents.slice(-3)
    return (
        <div className='page home-page'>
            <section className="sec1">
                <div className="text">
                    <h1>Hi, I am John <br></br>Creative Technologist</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button>Download Resumer</button>
                </div>
                <div className="img">
                    <img src='images/profile.jpg'  alt="profileImg" />
                </div>
            </section>
            <section className="sec2">
                <p className="sec-heading">Recent Post</p>
                <div className="blog-container">
                    <BlogCard costomStyle={blogcostomStyle}
                        title="Making a design system from scratch"
                    />
                    <BlogCard costomStyle={blogcostomStyle}
                        title="Creating pixel perfect icons in Figma"
                    />
                </div>
            </section>
            <section className="sec3">
                <p className="sec-heading">Featured works</p>
                <div className="work-content">
                {
                    workContents.map((content) => (
                        <WorkCard info={content} />  // setting each content object as a prop to the workcard component.
                    ))
                }
                </div>
            </section>
        </div>

    )
}

export default Home