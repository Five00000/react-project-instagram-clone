import React, { useState } from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons'
import verifiedLogo from '../../assets/veri.png'
import './index'

const Post = ({ post }) => {
    const { 
        user,
        image,
        caption,
        uploadedTime 
    } = post

    const [isLiked, setIsliked] = useState(false)

  return (
    <Col  lg={3} md={6} xs={12} className='mt-2' >
    <Card
        className='post-card' 
        style={{ width: '18rem', margin: 'auto' }}
    >
      <Card.Header
        className='p-2 me-1 d-flex justify-content-between align-items-center fw-semibold'
        style={{
          backgroundColor: '#fff'
        }}
      >
      <span>
        <img src={user.avatar} 
          alt='Avatar'
          width="30"
          height="30"
          className='me-1 '
          style= {{ borderRadius: '50%' }}
        />
      
        {user.username}
        {/* <img
            src={verifiedLogo}
            alt='avatar'
            width='40'
            height='40'
            className=''
            style={{ borderRadius: '50%'}}
        /> */}
      </span>
      <span>
      <FontAwesomeIcon icon={faEllipsisVertical} />
      

      </span>
      </Card.Header>
      <Card.Img variant="top" src={image}
      style={{
        width: '100%',
        height: '22.5em',
        borderRadius: 0
      }} />
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <div className='d-flex gap-3' >
            <FontAwesomeIcon 
            icon={isLiked ? faSolidHeart : faHeart}
            className='mb-2'
            style={{ fontSize: '1.25em', 
            cursor: 'pointer',
            color: isLiked ? 'red' : 'black'
            }}
            onClick={() => setIsliked(!isLiked)}
            />
            <FontAwesomeIcon 
            icon={faComment}
            className='mb-2'
            style={{ fontSize: '1.25em'}}
            />
            <FontAwesomeIcon 
            icon={faPaperPlane}
            className='mb-2'
            style={{ fontSize: '1.25em'}}
            />
          </div>
          <FontAwesomeIcon
          icon={faBookmark} 
          className='mb-2'
          style={{ fontSize: '1.25em'}}
          />
        </div>
        
        <Card.Text>
          <span className='fw-semibold'>
          {user.username}
          </span>{' '}
          {caption}
          
        </Card.Text>
        <Card.Text className='py-1 m-0 text-muted fw-medium'>
          View all 102 comments
        </Card.Text>
        <Card.Text>
          <small className='text-muted'>
            {uploadedTime}
          </small>
        </Card.Text>
        
      </Card.Body>
      
    </Card>
  </Col>
  )
}

export default Post