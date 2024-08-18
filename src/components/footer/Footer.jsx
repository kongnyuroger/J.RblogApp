import React from "react"
import './Footer.css'
import { Row, Col } from "react-bootstrap"

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container-fluid text-center">
                <Row>
                    <Col className="bg-white d-flex justify-content-center d-grid gap-4 gap-xs-2 pt-5 pb-3">
                        <img src="../icons/facebook.png" alt="" className="icons"/>
                        <img src="../icons/instagram (1).png" alt="" className="icons"/>
                        <img src="../icons/twitter.png" alt="" className="icons"/>
                        <img src="../icons/linkedin.png" alt="" className="icons"/>
                    </Col>
                </Row>
                <p className="pb-4" style={{fontSize:"10px", fontWeight:"500"}}>Copyright  ©2020 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer