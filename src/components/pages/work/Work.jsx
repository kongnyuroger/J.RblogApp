import React from "react";
import './Work.css';
import WorkCard from "../../work-card/WorkCard";
import { contents } from "./content";     // importing external file with an array of the work contents.

const Work = () => {
    return (
        <div className='page padding-control'>
            <h1 className="fw-bold p-4">Work</h1>
            
            <div>
                {
                    contents.map((content) => (
                        <WorkCard info={content} />  // setting each content object as a prop to the workcard component.
                    ))
                }
            </div>
        </div>
    )
}

export default Work