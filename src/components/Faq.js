import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import faq from "./../FaqSeedData";

const Faq = () => {
  return(
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <Accordion defaultActiveKey="0">
      {faq.map((question) => 
      <Accordion.Item eventKey={`${question.question}`}>
        <Accordion.Header>{question.question}</Accordion.Header>
        <Accordion.Body>
          {question.answer}
        </Accordion.Body>
      </Accordion.Item>
      )}
      </Accordion>
    </div>
  );
}

export default Faq;