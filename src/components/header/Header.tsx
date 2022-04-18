import React from "react";
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import avatar from "../../img/avatar.jpg";
import "./Header.scss";

type GalleryHeaderProps = {
    label: string
}
const Header: React.FC<GalleryHeaderProps> = (props): React.ReactElement => {
    return (
        <div className={"Header"}>
            <Navbar className={"navbar"} expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">{props.label}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Меню</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#"><img className={"avatar"} src={avatar} alt="аватар"/></Nav.Link>
                                <Nav.Link href="/">Галерея</Nav.Link>
                                <Nav.Link href="aboutMe">Обо мне</Nav.Link>
                                <Nav.Link href="#">Мария</Nav.Link>
                                <Nav.Link href="#">xmarsiancax@mail.ru</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header