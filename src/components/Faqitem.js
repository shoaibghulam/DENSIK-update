import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

export default function Faqitem(props) {
    return (
        <Accordion.Item className="faq-accordion-item" eventKey={props.id}>
        <Accordion.Header>{props.question}</Accordion.Header>
        <Accordion.Body>
        {props.anwser}
        </Accordion.Body>
      </Accordion.Item>
    )
}
