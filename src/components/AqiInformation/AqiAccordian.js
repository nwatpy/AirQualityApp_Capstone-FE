import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const AqiAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: 'Air Quality and Particulate Matter Overview',
      imageSrc: './images/pm3.png',
    },
  ];

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'show' : '';

    return (
      <Card key={index}>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={index.toString()}
          onClick={() => setActiveIndex(index)}
          className='button-link'
        >
          {item.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index.toString()} className={active}>
          <Card.Body>
            <Card.Img variant="top" src={item.imageSrc} />
            <Card.Text>{item.content}</Card.Text>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  return <Accordion>{renderedItems}</Accordion>;
};

export default AqiAccordion;
