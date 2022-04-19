import React, {useEffect, useState} from "react";
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import avatar from "../../img/avatar.jpg";
import "./Header.scss";
import {useLocation} from "react-router-dom";


const Header: React.FC = (props): React.ReactElement => {
    const location = useLocation()
    const [label, setLabel] = useState("ГАЛЕРЕЯ")
    useEffect(() => {
        if (location.pathname.startsWith("/imgInfo")) {
            setLabel("КАРТИНКА")
        } else if (location.pathname.startsWith("/aboutMe")) {
            setLabel("ОБО МНЕ")
        } else {
            setLabel("ГАЛЕРЕЯ")
        }
    }, [location.pathname])

    return (
        <div className={"Header"}>
            <Navbar className={"navbar"} expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">{label}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
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