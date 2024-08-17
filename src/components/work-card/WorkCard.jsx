import React from "react";
import './WorkCard.css';
import { Container, Row, Col } from "react-bootstrap";

const WorkCard = ({ info }) => { // Destructuring the info prop passed by the work parent.
    return (
        <div className='WorkCard'>
            <Container fluid>
                <Row>
                    <Col className="d-flex flex-row bg-white px-3 py-4 border-bottom border-secondary border-2">

                        {
                        //div contains the picture.
                        }

                        <div className="photo bg-white"><img src={info.photo} className="img-fluid rounded" alt="" /></div>
                        
                        {
                        // div contains the content.
                        }

                        <div className="content bg-white p-3">
                            <h2>{info.heading}</h2>
                            <span style={{color:"darkgray"}}><kbd>{info.year}</kbd> {info.worktype}</span>
                            <p className="py-3">{info.text}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WorkCard;