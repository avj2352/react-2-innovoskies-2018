import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';


import {Card} from 'components/Card/Card.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
import Carousel from 'components/Carousel/Carousel.jsx';

class PublicScreen extends Component{
    render(){
        return(            
                <div className="content">
                <Grid fluid>
                <Row>
                <Carousel></Carousel>
                <Col lg={3} sm={6}>
                    <StatsCard
                        bigIcon={<i className="pe-7s-server text-warning"></i>}
                        statsText="Animation"
                        statsValue="105GB"
                        statsIcon={<i className="fa fa-refresh"></i>}
                        statsIconText="Updated now"
                    />
                </Col>
                <Col lg={3} sm={6}>
                    <StatsCard
                        bigIcon={<i className="pe-7s-wallet text-success"></i>}
                        statsText="Revenue"
                        statsValue="$1,345"
                        statsIcon={<i className="fa fa-calendar-o"></i>}
                        statsIconText="Last day"
                    />
                </Col>
                <Col lg={3} sm={6}>
                    <StatsCard
                        bigIcon={<i className="pe-7s-graph1 text-danger"></i>}
                        statsText="Errors"
                        statsValue="23"
                        statsIcon={<i className="fa fa-clock-o"></i>}
                        statsIconText="In the last hour"
                    />
                </Col>
                <Col lg={3} sm={6}>
                    <StatsCard
                        bigIcon={<i className="fa fa-twitter text-info"></i>}
                        statsText="Followers"
                        statsValue="+45"
                        statsIcon={<i className="fa fa-refresh"></i>}
                        statsIconText="Updated now"
                    />
                </Col>
            </Row>                    
                </Grid>
            </div>            
        );

    }
}//end:class-PublicScreen

export default PublicScreen;