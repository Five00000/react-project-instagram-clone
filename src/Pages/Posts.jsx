import React from 'react'
import Post from '../components/Post';
import { Row } from 'react-bootstrap';
const posts = [
    {
      id: 1,
      user: {
        username: 'Baxster',
        avatar: 'https://reqres.in/img/faces/1-image.jpg'
      },
      image: 'https://images.unsplash.com/photo-1748324575258-b51559c5fefd?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
      caption: 'Sunset walks hit different in the city 🌆 #urbanlife #sunsetvibes',
      uploadedTime: 'Posted 2 hours ago'
    },
    {
      id: 2,
      user: {
        username: 'Samantha',
        avatar: 'https://reqres.in/img/faces/2-image.jpg'
      },
      image: 'https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D',
      caption: 'Café hopping through Hanoi ☕️ #coffeelover #travelvibes',
      uploadedTime: 'Posted yesterday'
    },
    {
      id: 3,
      user: {
        username: 'Marcus',
        avatar: 'https://reqres.in/img/faces/3-image.jpg'
      },
      image: 'https://images.unsplash.com/photo-1494806812796-244fe51b774d?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww',
      caption: 'Can’t believe this view was real 😍 #mountainescape',
      uploadedTime: 'Posted 3 days ago'
    },
    {
      id: 4,
      user: {
        username: 'Emily',
        avatar: 'https://reqres.in/img/faces/4-image.jpg'
      },
      image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?fit=crop&w=640&h=800',
      caption: 'Books, blankets and rainy days 📚🌧️ #cozycorners',
      uploadedTime: 'Posted 5 days ago'
    },
    {
      id: 5,
      user: {
        username: 'Alex',
        avatar: 'https://reqres.in/img/faces/5-image.jpg'
      },
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?fit=crop&w=640&h=800',
      caption: 'Just finished a 10K run 🏃 #runnerlife #fitnessgoals',
      uploadedTime: 'Posted 6 hours ago'
    },
    {
      id: 6,
      user: {
        username: 'Chloe',
        avatar: 'https://reqres.in/img/faces/6-image.jpg'
      },
      image: 'https://plus.unsplash.com/premium_photo-1666323594456-cd1b09b2cbf4?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2NlYW5zfGVufDB8fDB8fHww',
      caption: 'Ocean breeze and salty air 🌊 #beachdays',
      uploadedTime: 'Posted 1 week ago'
    },
    {
      id: 7,
      user: {
        username: 'Daniel',
        avatar: 'https://reqres.in/img/faces/7-image.jpg'
      },
      image: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmludGFnZXxlbnwwfHwwfHx8MA%3D%3Dfit=crop&w=640&h=800',
      caption: 'Vintage vibes all day 🎞️📸 #throwback',
      uploadedTime: 'Posted 8 days ago'
    },
    {
      id: 8,
      user: {
        username: 'Nina',
        avatar: 'https://reqres.in/img/faces/8-image.jpg'
      },
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVsYXh8ZW58MHx8MHx8fDA%3D=crop&w=640&h=800',
      caption: 'A little self-love goes a long way 💖 #wellness',
      uploadedTime: 'Posted 4 hours ago'
    },
    {
      id: 9,
      user: {
        username: 'Leo',
        avatar: 'https://reqres.in/img/faces/9-image.jpg'
      },
      image: 'https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D',
      caption: 'City lights got me dreaming ✨ #nightscape',
      uploadedTime: 'Posted 10 days ago'
    },
    {
      id: 10,
      user: {
        username: 'Grace',
        avatar: 'https://reqres.in/img/faces/10-image.jpg'
      },
      image: 'https://images.unsplash.com/photo-1633276485819-cca315425067?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGluaWMlMjBwYXJrfGVufDB8fDB8fHww=640&h=800',
      caption: 'Picnic in the park kinda Sunday 🧺 #naturetherapy',
      uploadedTime: 'Posted last week'
    },
    {
      id: 11,
      user: {
        username: 'Tommy',
        avatar: 'https://reqres.in/img/faces/11-image.jpg'
      },
      image: 'https://plus.unsplash.com/premium_photo-1677371174846-51410325aa93?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXN8ZW58MHx8MHx8fDA%3D',
      caption: 'One bike, endless roads 🚴 #adventuremode',
      uploadedTime: 'Posted 20 minutes ago'
    },
    {
      id: 12,
      user: {
        username: 'Lily',
        avatar: 'https://reqres.in/img/faces/12-image.jpg'
      },
      image: 'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?fit=crop&w=640&h=800',
      caption: 'Backyard blooms are the best 🌸 #gardeningjoy',
      uploadedTime: 'Posted 2 days ago'
    }
  ];


const Posts = () => {
  return (
    <>
        <h1 className='display-4 my-2'>
            Posts  
        </h1>
        <hr />
        <Row>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </Row>
    </>
  )
}

export default Posts