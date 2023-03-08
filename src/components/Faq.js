import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import faq from "./../FaqSeedData";

const Faq = () => {
  // How is artwork generated?
  
  // what is the tech stack used?
  
  // how did you come up with the prompts?
  
  // what are the future features or development plans?

  // who owns this fake artwork?

  // who owns this code?

  // who owns anything?

  // who are you, anyway?

  return(
    <div className="faq">
      <Accordion defaultActiveKey="0">
      <h1>Frequently Asked Questions</h1>
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