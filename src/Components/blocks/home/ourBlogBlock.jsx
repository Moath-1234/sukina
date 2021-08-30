import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { generalServices } from "../../../services/general";

function OurBlogBlock() {
    const [responsive] = useState({
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 768, min: 325 },
            items: 1,
        },
    });
    const [blogs, setBlogs] = useState([
        {
            title: "عنوان الموضوع الاول",
            text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.",
        },
    ]);

    useEffect(() => {
        // getBlogs();
    }, []);
    const getBlogs = async () => {
        const { success, data = [] } = await generalServices.getAllBlogs();
        if (!success) console.log(data);

        setBlogs(data);
    };
    return (
        <div className="ourBlogBlock">
            <Container>
                <div className="title_section">
                    <h3>مدونتنا</h3>
                    <h4>بعض من كتاباتنا ومدوناتنا</h4>
                </div>

                <Row>
                    <Col md={5}>
                        <div className="ourBlog-mainImg">
                            <img src="/images/Group 5.png" alt="l" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <Carousel responsive={responsive} showDots={false} infinite={true}>
                            {/* single service card start  */}
                            {blogs?.map(({ title, text }, index) => {
                                return (
                                    <div className="ourBlog-content" key={index}>
                                        <div className="service-card__content__title">
                                            <h4>{title}</h4>
                                        </div>
                                        <p>{text}</p>
                                        <button className="read-more-button" onClick={() => (window.location.href = "/Blog")}>
                                            اقراء المزيد
                                        </button>
                                    </div>
                                );
                            })}
                            {/* single service card end  */}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurBlogBlock;
