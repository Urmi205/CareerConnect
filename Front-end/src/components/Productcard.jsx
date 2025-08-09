import React from 'react'
import { Card,Button } from 'react-bootstrap'
const Productcard = ({item}) => {
  return <>
  <Card className='shadow-sm h-100'>
    <Card.Img
    variant='top' src={item.image}
    />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
        <strong>Company:</strong>{item.company} <br/>
        <strong>Location:</strong>{item.location}
    </Card.Text>
    <Button variant='success'>Apply Now</Button>
  </Card.Body>
  </Card>
  </>
}

export default Productcard