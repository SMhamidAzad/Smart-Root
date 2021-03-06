import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar style={{ backgroundColor: '#80CADC' }} className='py-3' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='fw-bold fs-3' style={{ color: '#E86C53' }}>Smart Root</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto ">
                        <Nav.Link className='anchor' as={CustomLink} to='/'>Home</Nav.Link>
                        <Nav.Link className='anchor' as={CustomLink} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link className='anchor' as={CustomLink} to='/about'>About</Nav.Link>
                        {
                            user ?
                                <Nav.Link className='anchor' onClick={() => signOut(auth)} as={CustomLink} to='/'>SignOut</Nav.Link>
                                :
                                <Nav.Link className='anchor' as={CustomLink} to='/login'>Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;