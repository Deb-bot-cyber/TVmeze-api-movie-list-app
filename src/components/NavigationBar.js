import React from 'react'
import { Nav,Navbar, Container } from 'react-bootstrap'
function NavigationBar() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className='font-monospace fs-3 fw-bolder text-white' href="/">TVmeze</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link className='text-white' href="/">Home</Nav.Link>
                        <Nav.Link className='text-white' href="https://wa.me/8001171797">Contact Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar