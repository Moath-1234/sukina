import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactUs from "../../blocks/ContactUs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { generalServices } from "../../../services/general";
import axios from "axios";
import { imageLink } from "../../../api";
// import '../.././../sukina/processes/'
function BlogPage() {
    const [responsive] = useState({
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 576 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 576, min: 325 },
            items: 1,
        },
    });
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const { success, data } = await generalServices.getAllBlogs();
        if (!success) console.log(data);
        setBlogs(data);
    };
    return (
        <div className="AboutSokina SokinaServices">
            <div
                className="landing-img"
                style={{
                    background: "url(/images/eee.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            />

            <Container>
                <div className="page-contents">
                    <div className="title_section ">
                        <h3>مدونة سكينة</h3>
                        <h4> بعض من كتاباتنا ومدوناتنا</h4>
                    </div>

                    <div className="reusable-div">
                        <Row>
                            <Col md={4}>
                                <div className="img-section">
                                    <img src="/images/Group 1009.png" alt="k" />
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

                <div className="blog-item">
                    <div className="title_section mb-3">
                        <h3>أحدث المقالات</h3>
                        <h4>عنوان المقال الاول</h4>
                    </div>
                    <Row>
                        <Col lg={7}>
                            <p>
                                هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه
                                مازال نصاً بديلاً ومؤقتاً.
                                <br /> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. هذا النص يمكن أن يتم
                                تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً
                                ومؤقتاً.
                                <br /> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن
                                تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                            </p>
                        </Col>
                        <Col lg={5}>
                            <div className="blog-item-img">
                                <img src="/images/blogkk.png" alt="k" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="blogs-items">
                    <h3>اقراء المزيد</h3>

                    <Carousel responsive={responsive} showDots={true} infinite={true}>
                        {/* single client-review start  */}
                        {blogs?.map(({ BlogTitle, BlogText, BlogImage }, index) => {
                            return (
                                <div className="single-blog" key={index}>
                                    <img src={imageLink + BlogImage} alt="user" />
                                    <div className="single-blog__contents">
                                        <h5>{BlogTitle}</h5>
                                        <p>{BlogText}</p>
                                    </div>
                                </div>
                            );
                        })}
                        {/* single client-review end  */}
                    </Carousel>
                </div>
            </Container>

            <ContactUs />
        </div>
    );
}

export default BlogPage;
