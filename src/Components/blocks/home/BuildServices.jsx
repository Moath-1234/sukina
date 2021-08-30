import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function BuildServices() {
    const [responsive] = useState({
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 768, min: 325 },
            items: 1,
        },
    });

    return (
        <div className="BuildServices">
            <Container>
                <div className="title_section">
                    <h3>خدمات سكينة</h3>
                    <h4>خدمات نفسية واسرية</h4>
                </div>
                <Carousel responsive={responsive} showDots={false} infinite={true}>
                    {/* single service card start  */}
                    <div className="service-card">
                        <img src="/images/brain.png" alt="user" />
                        <div className="service-card__content" style={{ backgroundColor: "#ffe7d8" }}>
                            <div className="service-card__content__title">
                                <h3>RTT</h3>
                                <h4>علاج الافكار</h4>
                            </div>
                            <p>
                                يتضمن هذا العلاج مجموعة من التقنيات والادوات الهامة جدا ليس فقط للوصول للعقل الباطن بل للنفوذ للافكار المعيقة
                                وتعديلها.
                            </p>
                            <button className="read-more-button" onClick={() => (window.location.href = "/SokinaServices")}>
                                اقرأ المزيد
                            </button>
                        </div>
                    </div>
                    {/* single service card end  */}
                    {/* single service card start  */}
                    <div className="service-card">
                        <img src="/images/Group 10.png" alt="user" />
                        <div className="service-card__content" style={{ backgroundColor: "#CBEBF8" }}>
                            <div className="service-card__content__title">
                                <h3>MFT</h3>
                                <h4>العلاج الزواجي الاسري</h4>
                            </div>
                            <p>
                                العلاج الزواجي الاسري, يعالج سلوكيات افراد الاسرة مع بعضهم البعض وطرق التفاعل فيما بينهم ويعمل على تطوير وتنمية
                                العلاقات بين افراد الاسرة
                            </p>
                            <button className="read-more-button" onClick={() => (window.location.href = "/SokinaServices")}>
                                اقرأ المزيد
                            </button>
                        </div>
                    </div>
                    {/* single service card end  */}
                    {/* single service card start  */}
                    <div className="service-card">
                        <img src="/images/Group bb.png" alt="user" />
                        <div className="service-card__content" style={{ backgroundColor: "#ffe7d8" }}>
                            <div className="service-card__content__title">
                                <h3>ICH</h3>
                                <h4>معالجة الطفل الداخلي</h4>
                            </div>
                            <p>
                                معالجة الطفل الداخلي يركزعلى حل المشاعر المتجذرة من الطفولة والتي تنعكس على سلوكياتنا كراشدين, لنتعامل مع مواقف وتجارب
                                الحياة بوعي ورشد.
                            </p>
                            <button className="read-more-button" onClick={() => (window.location.href = "/SokinaServices")}>
                                اقرأ المزيد
                            </button>
                        </div>
                    </div>
                    {/* single service card end  */}
                </Carousel>
            </Container>
        </div>
    );
}

export default BuildServices;
