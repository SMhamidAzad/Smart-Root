import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <Navbar style={{ backgroundColor: '#040924' }} className='py-3' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='fw-bold fs-4' style={{ color: '#E86C53' }}>Smart Root</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='fw-bold' as={CustomLink} to='/'>HOME</Nav.Link>
                        <Nav.Link className='fw-bold' as={CustomLink} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link className='fw-bold' as={CustomLink} to='/about'>About</Nav.Link>
                        <Nav.Link className='fw-bold' as={CustomLink} to='/login'>Login</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;