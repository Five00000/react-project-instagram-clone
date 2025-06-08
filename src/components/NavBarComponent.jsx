
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'


function NavBarComponent() {
  const location = useLocation()

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand 
        as={Link}
        to='/'>
        <img
              alt=""
              src="https://cdn-icons-png.freepik.com/256/15359/15359066.png?ga=GA1.1.2108694067.1748341902&semt=ais_incoming"
              width="30"
              height="30"
              className="d-inline-block align-top"
        />{' '}
            SocialConnect</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link}
              to={'/'}
              active={location.pathname == '/' }
            >
             Posts
            </Nav.Link>

            <Nav.Link
              as={Link}
              to={'/friend-requests'}
              active={location.pathname == '/friend-requests' }
            >
              Friend requests
            </Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link
             as={Link}
             to='/profile'
             active={location.pathname == '/profile' }
             >
                <img src='https://reqres.in/img/faces/1-image.jpg' 
                alt='Avatar'
                width="30"
                height="30"
                className='me-1'
                style= {{ borderRadius: '50%' }}
                />
                Profile</Nav.Link>
            <Nav.Link
              as={Link}
              active={location.pathname == '/settings' }
              to={'/settings'}>
                Settings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;