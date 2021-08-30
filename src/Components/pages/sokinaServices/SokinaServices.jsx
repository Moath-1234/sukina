import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactUs from "../../blocks/ContactUs";
import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";
function SokinaServices() {
    const [open, setOpen] = useState(false);

    return (
        <div className="AboutSokina SokinaServices">
            <div
                className="landing-img"
                style={{
                    background:
                        "url(/images/MDrB6QsVeuAcNfNnU8LBDhtPxO34euCYSlfSkvANXcmPi7AKLxC_E4EcriWrbPKV1SlEqFYN+Ix7Euo8+qU3LgeHJrN1ocWGJMwg9+2bjybuOzWCPDWeCo4tu7Yx4PIMC3P6Y0Mq1pxslx7UjDl_UKW4o0SKUu8DM_bTfJwPSJU_H156wXk9bhpwPWDsqjY21RL7TRkPzG0Cty3HAs.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            />

            <Container>
                <ModalVideo
                    channel="youtube"
                    videoId="OyDLuom4KGs"
                    autoplay
                    isOpen={open}
                    onClose={() => {
                        setOpen(false);
                    }}
                />
                <div className="page-contents">
                    <div className="title_section ">
                        <h3>خدمات سكينة</h3>
                        <h4> خدمات نفسية واسرية</h4>
                    </div>

                    <div className="reusable-div">
                        <Row>
                            <Col md={4}>
                                <div className="img-section">
                                    <img src="/images/Group 1014.png" alt="k" />
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
                        <div className="title_section mb-5 mt-5">
                            <h3>ماذا تفعل سكينة</h3>
                            <h4> خدماتنا ومجالاتنا</h4>
                        </div>
                        <Row className="column_reverse_under768">
                            {/* section 1 start  */}
                            <Col md={6}>
                                <div className="img-section">
                                    <img src="/images/1.png" alt="k" onClick={() => setOpen(true)} className="clickable" />
                                    <img className="icon-vid" onClick={() => setOpen(true)} src="/images/Group 15.png" alt="f" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="paragraph">
                                    <div className="title-sectio">
                                        <img src="/images/brain.png" alt="k" />
                                        <div className="content__title">
                                            <h3>RTT</h3>
                                            <h4>علاج الافكار</h4>
                                        </div>
                                    </div>
                                    هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم.
                                    لأنه مازال نصاً بديلاً ومؤقتاً.
                                    <br /> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                    تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                </div>
                            </Col>
                            {/* section 1 end  */}
                        </Row>
                        <Row>
                            {/* section 1 start  */}

                            <Col md={6}>
                                <div className="paragraph">
                                    <div className="title-sectio">
                                        <img src="/images/Group 10.png" alt="k" />
                                        <div className="content__title">
                                            <h3>MFT</h3>
                                            <h4>العلاج الزواجي الاسري</h4>
                                        </div>
                                    </div>
                                    هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم.
                                    لأنه مازال نصاً بديلاً ومؤقتاً.
                                    <br /> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                    تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="img-section">
                                    <img src="/images/2.png" alt="k" onClick={() => setOpen(true)} className="clickable" />
                                    <img className="icon-vid" onClick={() => setOpen(true)} src="/images/Group 15.png" alt="f" />
                                </div>
                            </Col>
                            {/* section 1 end  */}
                        </Row>
                        <Row className="column_reverse_under768">
                            {/* section 1 start  */}
                            <Col md={6}>
                                <div className="img-section">
                                    <img className="icon-vid" onClick={() => setOpen(true)} src="/images/Group 15.png" alt="f" />
                                    <img src="/images/3.png" alt="k" onClick={() => setOpen(true)} className="clickable" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="paragraph">
                                    <div className="title-sectio">
                                        <img src="/images/Group bb.png" alt="k" />
                                        <div className="content__title">
                                            <h3>ICH</h3>
                                            <h4>معالجة الطفل الداخلي</h4>
                                        </div>
                                    </div>
                                    هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم.
                                    لأنه مازال نصاً بديلاً ومؤقتاً.
                                    <br /> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                    تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                </div>
                            </Col>

                            {/* section 1 end  */}
                        </Row>
                        <Row>
                            {/* section 1 start  */}

                            <Col md={6}>
                                <div className="paragraph">
                                    <div className="title-sectio">
                                        <img src="/images/Group 106322.png" alt="k" />
                                        <div className="content__title">
                                            <h3>SP</h3>
                                            <h4>البرامج الخاصة للناس الخاصة</h4>
                                        </div>
                                    </div>
                                    هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم.
                                    لأنه مازال نصاً بديلاً ومؤقتاً.
                                    <br /> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                    تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="img-section">
                                    <img className="icon-vid" onClick={() => setOpen(true)} src="/images/Group 15.png" alt="f" />
                                    <img src="/images/4.png" alt="k" onClick={() => setOpen(true)} className="clickable" />
                                </div>
                            </Col>
                            {/* section 1 end  */}
                        </Row>
                    </div>
                </div>
            </Container>

            <ContactUs />
        </div>
    );
}

export default SokinaServices;
