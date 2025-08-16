import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import SocialLink from "./SocialLink";

export default function Navigation(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const menuItems = [
        { text: "Обо мне", url: "#about" },
        { text: "Услуги", url: "#services" },
        { text: "Цены", url: "#price" },
        { text: "Вопросы", url: "/blog" },
        { text: "Подкаст", url: "/podcast" }
    ];

    const mobileVisibleItems = ["Обо мне", "Вопросы", "Подкаст"];

    // Рендерим иконку дома для "Обо мне"
    const renderItem = (item) => {
        // if (item.text === "Обо мне") {
        //     return <img width="20px" height="20px" src="img/icon-home.svg" alt="Главная" />;
        // } else {
            return item.text;
        // }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container-fluid container-xxl">

                    {/* Горизонтальное меню для мобильных */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none d-flex flex-row gap-3 align-items-center">
                        {menuItems
                            .filter(item => mobileVisibleItems.includes(item.text))
                            .map((item, index) => (
                                <li key={index} className="nav-item">
                                    <a className="nav-link" href={item.url}>
                                        {renderItem(item)}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Кнопка для скрытых пунктов в мобильной версии */}
                    <button 
                        onClick={handleShow} 
                        className="navbar-toggler" 
                        type="button"
                        aria-controls="offcanvasMenu" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Полная версия для десктопа */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {menuItems.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <a className="nav-link" href={item.url}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                        <SocialLink />
                    </div>
                </div>
            </nav>

            {/* Offcanvas для скрытых пунктов на мобильных */}
            <Offcanvas show={show} onHide={handleClose} id="offcanvasMenu">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Меню</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav onSelect={handleClose}>
                        {menuItems
                            .filter(item => !mobileVisibleItems.includes(item.text))
                            .map((item, index) => (
                                <Nav.Link key={index} href={item.url}>{item.text}</Nav.Link>
                            ))
                        }
                    </Nav>
                    <SocialLink />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
