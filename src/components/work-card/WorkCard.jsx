import React from "react";
import './WorkCard.css';
import { Row, Col } from "react-bootstrap";

const WorkCard = ({ info }) => { // Destructuring the info prop passed by the work parent.
    return (
        <div className='WorkCard'>
            <div className="container-fuild">
                <Row>
                    <Col className="bg-white px-4 py-4 border-bottom border-secondary border-2 box">

                        {
                        //div contains the picture.
                        }

                        <div className="photo bg-white">
                            <img src={info.photo} className="img-fluid rounded bg-white" alt="" />
                        </div>
                        
                        {
                        // div contains the content.
                        }

                        <div className="content bg-white p-md-3">
                            <h2>{info.heading}</h2>
                            <span style={{color:"darkgray"}}><kbd>{info.year}</kbd> {info.worktype}</span>
                            <p className="py-3">{info.text}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default WorkCard;