import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import "../../Assets/style/Components/blocks/header.css";

function Header() {
    return (
        <div className="header ">
            <Container>
                <div
                    className=" header-contents flex
                
                 container container-lg container-md container-sm container-xl container-xxl
                "
                >
                    <ul className="flex">
                        <li>
                            <Link to="/" className="header-logo">
                                <img src="/images/logo.png" alt="logo" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">الرئيسية</Link>
                        </li>
                        <li>
                            <Link to="/AboutSokina">عن سكينة</Link>
                        </li>
                        <li>
                            <Link to="/SokinaServices">خدماتنا</Link>
                        </li>
                        <li>
                            <Link to="/Blog">المدونة</Link>
                        </li>
                        <li>
                            <Link to="/ContactUs">التواصل</Link>
                        </li>
                    </ul>

                    <button onClick={() => (window.location.href = "#con")} className="submit-button">
                        إحجز استشارتك{" "}
                    </button>
                </div>
                <div className="mobile-push-menu">
                    <Link to="/">
                        <img src="/images/logo.png" alt="logo" />
                    </Link>
                    <Menu customBurgerIcon={<i className="fa fa-bars" />} customCrossIcon={<i className="fa fa-times croosIconMenu" />}>
                        <div className="sideMenu_logo">
                            <a href="/">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </div>

                        <div className="sideMenu_List">
                            <ul className="mb-0 mt-3">
                                <li>
                                    <Link to="/">الرئيسية</Link>
                                </li>
                                <li>
                                    <Link to="/AboutSokina">عن سكينة</Link>
                                </li>
                                <li>
                                    <Link to="/SokinaServices">خدماتنا</Link>
                                </li>
                                <li>
                                    <Link to="/Blog">المدونة</Link>
                                </li>
                                <li>
                                    <Link to="/ContactUs">التواصل</Link>
                                </li>
                                <li>
                                    <Link to="/termsConditions">إحجز استشارتك</Link>
                                </li>
                            </ul>
                        </div>
                    </Menu>
                </div>
            </Container>
        </div>
    );
}

export default Header;
