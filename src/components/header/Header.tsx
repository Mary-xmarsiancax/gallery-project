import React, {useEffect, useLayoutEffect, useMemo, useState} from "react";
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import avatar from "../../img/avatar.jpg";
import "./Header.scss";
import {useLocation, useNavigate} from "react-router-dom";

const Header: React.FC = (props): React.ReactElement => {
    const navigate = useNavigate();
    const location = useLocation();

    const label = useMemo(() => {
        if (location.pathname.startsWith("/imgInfo")) {
            return "КАРТИНКА"
        } else if (location.pathname.startsWith("/aboutMe")) {
            return "ОБО МНЕ"
        } else {
            return "ГАЛЕРЕЯ"
        }
    }, [location.pathname]);

    const navigateTo = (path: string) => {
        navigate(path, {replace: true})
    }


    return (
        <div className={"Header"}>
            <Navbar className={"navbar"} expand={false} collapseOnSelect={true}>
                <Container fluid>
                    <Navbar.Brand href="#">{label}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="start"
                        >
                            <Offcanvas.Header closeButton >
                                <Offcanvas.Title id="offcanvasNavbarLabel">Меню</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#"><img className={"avatar"} src={avatar}
                                                            alt="аватар"/></Nav.Link>
                                    <Nav.Link href="#" onClick={() => navigateTo("/")}>Галерея</Nav.Link>
                                    <Nav.Link href="#" onClick={() => navigateTo("aboutMe")}>Обо мне</Nav.Link>
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
export default React.memo(Header)