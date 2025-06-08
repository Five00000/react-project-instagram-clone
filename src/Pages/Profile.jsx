import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { ListGroup, Badge } from 'react-bootstrap'

const Profile = () => {
  return (
    <div className='text-center'>
        <h1 className='display-4 my-2'>
        Profile  
        </h1>
        <Card style={{ 
            width: '18rem', 
            margin: '10px auto'
        }}>

      <Card.Img
        variant="top" 
        src="https://reqres.in/img/faces/1-image.jpg" 
        style={{
            width: '10rem',
            height: '10rem',
            margin: '1em auto',
            borderRadius: '50%',
            border: '1px solid rgb(33, 37, 41'
        }}
        />
      <Card.Body>
        <Card.Title>George Bluth</Card.Title>
        <Card.Text>
        <Badge bg="dark">@george_bluth</Badge></Card.Text>
        <Card.Text
            className='py-1 px-2'
            style={{
                border: '1px solid black',
                width: 'max-content',
                margin: '1em auto',
                borderRadius: '5px'
            
            }}>
            7.2M Followers
        </Card.Text>
        <Card.Text>
        Just trying to make sense of the chaos and beauty of everyday life.
        Lover of good conversations, slow mornings, and spontaneous adventures.
        Sharing pieces of what I see, feel, and learn along the way.
        Tech enthusiast | Occasional overthinker | Always curious.
        Here to connect, not perform. Let's keep it real. 🌍💬✨
        </Card.Text>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Birthday: 01-02-1995</ListGroup.Item>
        <ListGroup.Item>City: New York</ListGroup.Item>
        <ListGroup.Item>Profile type: Private</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default Profile