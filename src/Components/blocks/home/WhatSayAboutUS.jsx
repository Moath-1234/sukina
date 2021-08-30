import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function WhatSayAboutUS() {
    const [responsive] = useState({
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 2,
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
        <div className="BuildServices WhatSayAboutUS">
            <Container>
                <div className="title_section">
                    <h3>ماذا قال عنا العملاء</h3>
                    <h4>بعض من اراء عملاء سكينة</h4>
                </div>
                <Carousel responsive={responsive} showDots={true} infinite={true}>
                    {/* single client-review start  */}
                    <div className="client-review">
                        <img src="/images/Ellipse 21.png" alt="user" />
                        <div className="client-review__content">
                            <div className="client-review__content__header">
                                <h4>12/05/2021</h4>
                                <h3>خالد محمد</h3>
                            </div>
                            <p>
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                                هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                            </p>
                        </div>
                    </div>
                    {/* single client-review end  */}
                    {/* single client-review start  */}
                    <div className="client-review">
                        <img src="/images/Ellipse 23.png" alt="user" />
                        <div className="client-review__content">
                            <div className="client-review__content__header">
                                <h4>07/04/2021</h4>
                                <h3>آمنة عمر</h3>
                            </div>
                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك</p>
                        </div>
                    </div>
                    {/* single client-review end  */}
                </Carousel>
            </Container>
        </div>
    );
}

export default WhatSayAboutUS;
