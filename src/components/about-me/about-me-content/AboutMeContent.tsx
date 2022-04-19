import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./about-me-content.scss"
import books from "../../../img/books.png"
import bikeLogo from "../../../img/bikeLogo.png"
import volleyball from "../../../img/volleyball.png"
import monogramm from "../../../img/monogramm.png"


const AboutMeContent: React.FC = (): React.ReactElement => {
    return (
        <Container className={"about-me-content"}>
            <Container fluid>
                   <Container>
                       <Row>
                           <Col md={4}>
                               <img src={monogramm} alt="monogramm"/>арочкина Мария Владимировна.
                           </Col>
                       </Row>
                       <Row>
                           <Col md={{ span: 6, offset: 1 }}>
                               <ul>
                               <li></li>
                               <li>По специальности Логист</li>
                               <li>Мечтаю начать свой путь во Frontend разработке.</li>
                               <li>Ровно год назад, я начала свое знакомство с HTML, CSS и JS по книгам и статьям.</li>
                               <li>Затем, прошла видеокурс по React и написала свое первое SPA App.</li>
                               <li>В данный момент, чувствую себя в React довольно уверенно.</li>
                               <li>Очень хочу "расти", быть полезной на своем месте и перенимать опыт у старших сотрудников. </li>
                           </ul>
                           </Col>
                       </Row>
                       <Row>
                           <Col md={{ span: 4, offset: 6 }}>В моем окружении большое количество it-шников, что позволяет
                               мне быть в курсе событий и иметь доступ к полезной и актуальной информации.</Col>
                       </Row>
                       <Row>
                           <Col  md={3}>Уверена, что с получив в команду такого "игрока", Вы не пожалеете. Я верю, что, стремление, иногда, преобладает над опытом.</Col>
                           <Col md={{ span: 2, offset: 7 }}>
                               <ul>КОНТАКТЫ
                                   <li>моб.: 8(987)3956669</li>
                                   <li>Skype: xmarsiancax</li>
                                   <li></li>
                                   <li> <a href="https://vk.com/xmarsiancax">https://vk.com/xmarsiancax</a></li>
                               </ul>
                           </Col>
                       </Row>
                   </Container>
            </Container>
            <Container fluid>
                <Row>
                    <Col className={"img-block"} xs={12} md={4}>
                        <figure>
                            <img src={books} alt="books"/>
                            <figcaption>
                                <div><b>Чтение художественной литературы</b></div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col className={"img-block"} xs={12} md={4}>
                        <figure>
                            <img src={bikeLogo} alt="bikeLogo"/>
                            <figcaption>
                                <div><b>Велопрогулки</b></div>
                            </figcaption>
                        </figure>
                    </Col>
                    <Col className={"img-block"} xs={12} md={4}>
                        <figure>
                            <img src={volleyball} alt="voleibol"/>
                            <figcaption>
                                <div><b>Волейбол</b></div>
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}
export default AboutMeContent