import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
    return (
        <div className="footer">
            <Container>
                <div className="footer__contents">
                    <Row>
                        <Col md={3}>
                            <div className="footer-logo-side">
                                <img src="/images/Group 971.png" alt="l" />
                                <ul>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-facebook-f"></i>{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-instagram"></i>{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-twitter"></i>{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-linkedin-in"></i>{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={5} md={4}>
                            <ul className="footer-menu-list">
                                <li>
                                    <a href="/">عن سكينة</a>
                                </li>

                                <li>
                                    <a href="/">خدماتنا</a>
                                </li>
                                <li>
                                    <a href="/">مقالاتنا</a>
                                </li>
                                <li>
                                    <a href="/">الأخبار</a>
                                </li>
                                <li>
                                    <a href="/">تواصل معنا</a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={7} md={5}>
                            <ul className="terms-list">
                                <li>
                                    <a href="/">السياسات</a>
                                </li>
                                <li>
                                    <a href="/">الاستفسارات</a>
                                </li>
                                <li>
                                    <a href="/">الأسئلة الشائعة</a>
                                </li>
                                <li>
                                    <a href="/">+556498464189</a>
                                </li>
                                <li>
                                    <a href="/">test.email@company.com</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="copyWrite">
                <Container>
                    <div className="copyWrite__contents">
                        <span>جميع الحقوق محفوظة لسكينة 2021</span>
                        <span>السعودية / الرياض</span>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Footer;
