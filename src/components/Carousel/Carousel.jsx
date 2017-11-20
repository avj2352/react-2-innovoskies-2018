import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';



class Carousel extends Component{
    render(){
        return(
            <div className="content carousel">
                <Row>
                    <Col lg={12} sm={12}>
                        Carousel comes here !!
                    </Col>
                </Row>                
            </div>
        );
    }
}//end:class-Carousel

export default Carousel;