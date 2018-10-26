import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import {SocialIcon} from "react-social-icons";
class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="#0D8BAF" className="page-footer font-small pt-0">
                <div style={{backgroundColor: '#FFFFF'}}>
                    <Container>
                        <Row className="py-4 d-flex align-items-center">
                            <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h1 className="mb-0 white-text">Get Connected With The Pool!</h1>
                            </Col>
                      <SocialIcon url="https://twitter.com/ThePoolMX"/>
                      <SocialIcon url="http://www.facebook.com/ThePoolMx/?ref=br_rs"/>
                      <SocialIcon url="https://www.linkedin.com/company/thepoolvg/"/>
                      <SocialIcon url="https://www.instagram.com/thepoolmx/"/>
                      <SocialIcon url="https://www.youtube.com/channel/UCRZATB4GzRQEI9VXPAfKCaw"/>
                      <SocialIcon url="https://www.meetup.com/es-ES/THE-POOL-MX-Club-de-Emprendedores/"/>
                      <SocialIcon url="https://boletia.com/cp/the-pool"/>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">


                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-home mr-3"></i> Toledo 39 Col. Juárez

Ciudad de México </p>
                            <p><i className="fa fa-envelope mr-3"></i> hola@thepool.mx</p>
                            <p><i className="fa fa-phone mr-3"></i> </p>
                            <p><i className="fa fa-print mr-3"></i>01 55 5925 7821</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
