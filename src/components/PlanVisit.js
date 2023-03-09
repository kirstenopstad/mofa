import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PlanVisit = () => {
  return(
    <Container className="plan-visit">
      <Row>
          <Col>
            <h1>Plan Your Visit</h1>
          </Col>
          <Col>
              <h4>Hours</h4>
              <p>T-F  10a-5p</p>
              <p>SAT  9a-9p</p>
              <p>SUN  9a-9p</p>
              <p>CLOSED MONDAYS</p>
          </Col>
          <Col>
              <h4>Getting Here</h4>
              <p>OPEN YOUR MIND</p>
          </Col>
          <Col>
              <h4>Buy Tickets</h4>
              <p>FREE BUT AT WHAT COST</p>
          </Col>
      </Row>
    </Container>
  );
}

export default PlanVisit;