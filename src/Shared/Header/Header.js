import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <Navbar style={{ backgroundColor: '#040924' }} className='py-3' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='fw-bold fs-4' style={{ color: '#E86C53' }}>Classic Watch</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='fw-bold' as={CustomLink} to='/'>HOME</Nav.Link>
                        <Nav.Link className='fw-bold' as={CustomLink} to='/reviews'>REVIEWS</Nav.Link>
                        <Nav.Link className='fw-bold' as={CustomLink} to='/dashboard'>DASHBOARD</Nav.Link>
                        <Nav.Link className='fw-bold' as={CustomLink} to='/blogs'>BLOGS</Nav.Link>
                        <Nav.Link className='fw-bold' as={CustomLink} to='/about'>ABOUT</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;