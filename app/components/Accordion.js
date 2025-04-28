import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


function AllCollapseExample({accordionData}) {
  return (
    <Accordion defaultActiveKey="0" flush>
      {accordionData.map((item, index) => (
        <Accordion.Item eventKey={item.eventKey} key={index}>
          <Accordion.Header ><h4 className=' m-0'>{item.header}</h4></Accordion.Header>
          <Accordion.Body ><p className='para_text m-0'>{item.body}</p></Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default AllCollapseExample;
