import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactUs from "../../blocks/ContactUs";
function ContactUsPage() {
    const [open, setOpen] = useState(false);

    return (
        <div className="AboutSokina SokinaServices ContactUsPage">
            <div
                className="landing-img"
                style={{
                    background: "url(/images/contactCover.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            />

            <Container>
                <div className="page-contents">
                    <div className="title_section ">
                        <h3>تواصل معنا</h3>
                        <h4> دعنا نقدم الدعم المناسب والاستشارة</h4>
                    </div>

                    <div className="reusable-div">
                        <Row>
                            <Col md={4}>
                                <div className="img-section">
                                    <img src="/images/Group 1062.png" alt="k" />
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className="paragraph">
                                    هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم.
                                    لأنه مازال نصاً بديلاً ومؤقتاً.
                                    <br /> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                    تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. هذا النص يمكن أن يتم
                                    تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً
                                    بديلاً ومؤقتاً.
                                    <br /> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                    تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>

            <ContactUs />
        </div>
    );
}

export default ContactUsPage;
