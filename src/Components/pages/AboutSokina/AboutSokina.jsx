import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ContactUs from "../../blocks/ContactUs";

function AboutSokina() {
    return (
        <div className="AboutSokina">
            <div
                className="landing-img"
                style={{ background: "url(/images/cover.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
            />

            <Container>
                <div className="page-contents">
                    <div className="title_section">
                        <h3>سكينة للإستشارات</h3>
                        <h4> النفسية والاسرية</h4>
                    </div>

                    <div className="reusable-div">
                        <p>
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                            النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. <br />
                            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
                            أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة
                            حقيقية لتصميم الموقع. <br />
                            ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
                            عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق
                        </p>

                        <Row>
                            <Col md={6}>
                                <div className="paragraph">
                                    هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم.
                                    لأنه مازال نصاً بديلاً ومؤقتاً.
                                    <br /> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                    تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="img-section">
                                    <img src="/images/jacqueline-munguia-1pAwJiCD60c-unsplash.png" alt="k" />
                                </div>
                            </Col>
                        </Row>

                        <div className="Our-employee">
                            <h2>الكادر الخاص بسكينة</h2>
                            <Row>
                                <Col lg={6}>
                                    {/* single client-review start  */}
                                    <div className="Our-employee__card">
                                        <div className="Our-employee__content">
                                            <img src="/images/pn4.png" alt="user" />
                                            <div className="left-side">
                                                <h3>د. سوسن عبد الله</h3>
                                                <h4>اخصائية نفسية</h4>
                                                <ul>
                                                    <li>
                                                        <a href="/">
                                                            <i class="fab fa-facebook-f"></i>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <i class="fab fa-instagram"></i>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <i className="fab fa-twitter"></i>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <i class="fab fa-linkedin-in"></i>{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client-review end  */}
                                </Col>
                                <Col lg={6}>
                                    {/* single client-review start  */}
                                    <div className="Our-employee__card">
                                        <div className="Our-employee__content">
                                            <img src="/images/png.png" alt="user" />
                                            <div className="left-side">
                                                <h3>ب.د. محمد مسعد</h3>
                                                <h4>اخصائي تريبة</h4>
                                                <ul>
                                                    <li>
                                                        <a href="/">
                                                            <i class="fab fa-facebook-f"></i>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <i class="fab fa-instagram"></i>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <i className="fab fa-twitter"></i>{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            <i class="fab fa-linkedin-in"></i>{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* single client-review end  */}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="random-img">
                <img src="/images/line bg11.png" alt="k" />
            </div>

            <Container>
                <div className="CountOfExperiance-wrap">
                    <h3>حقائق عنا</h3>
                    <div className="CountOfExperiance">
                        <div className="single-count">
                            <div>
                                <img src="/images/Group5.png" alt="k" />
                                <CountUp
                                    start={0}
                                    end={7}
                                    duration={5}
                                    separator=" "
                                    // prefix="+ "
                                    suffix="+"
                                ></CountUp>
                            </div>
                            <p> سنوات من الخبرة</p>
                        </div>
                        <div className="single-count">
                            <div>
                                <img src="/images/Group5.png" alt="k" />
                                <CountUp start={0} end={85} duration={5} separator=" " suffix="+" />
                            </div>

                            <p> عميل راض</p>
                        </div>
                        <div className="single-count">
                            <div>
                                <img src="/images/Group5.png" alt="k" />
                                <CountUp start={0} end={45} duration={5} separator=" " suffix="+"></CountUp>
                            </div>
                            <p>استشارة مجانية</p>
                        </div>
                    </div>
                </div>
            </Container>
            <ContactUs />
        </div>
    );
}

export default AboutSokina;
