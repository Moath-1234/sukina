import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ModalVideo from "react-modal-video";
import "../../../../node_modules/react-modal-video/css/modal-video.min.css";

function ShortStory() {
    const [open, setOpen] = useState(false);
    return (
        <div className="ShortStory">
            <Container>
                <div className="ShortStory__bg">
                    <div className="ShortStory__content_bg">
                        <Row>
                            <Col lg={6}>
                                <div className="ShortStory__content">
                                    <div className="title_section">
                                        <h3>قصة قصيرة</h3>
                                        <h4>عن سكينة</h4>
                                    </div>
                                    <p>
                                        ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                        تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى
                                        عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                                        لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على
                                        صورة حقيقية لتصميم الموقع
                                    </p>

                                    <button className="read-more-button">اقراء المزيد</button>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="shortStory__video">
                                    <img src="/images/paper-heart-put-couple-s-hands-marble-table.png" alt="k" />
                                    <div className="video-icon" onClick={() => setOpen(true)}>
                                        <i class="fa fa-play-circle"></i>
                                    </div>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    videoId="OyDLuom4KGs"
                                    autoplay
                                    isOpen={open}
                                    onClose={() => {
                                        setOpen(false);
                                    }}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ShortStory;
