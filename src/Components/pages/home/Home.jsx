import React from "react";
import { useState } from "react";
import { Col, Container, Row, Carousel, InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import ContactUs from "../../blocks/ContactUs";
import BuildServices from "../../blocks/home/BuildServices";
import CountOfExperiance from "../../blocks/home/CountOfExperiance";
import OurBlogBlock from "../../blocks/home/ourBlogBlock";
import ShortStory from "../../blocks/home/ShortStory";
import WhatSayAboutUS from "../../blocks/home/WhatSayAboutUS";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { generalServices } from "../../../services/general";
import { displayAlert } from "../../../utils/misc";
import TextInput from "../../../Assets/style/Components/blocks/TextInput";
function Home() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [consultation_method, setTypeSelected] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [fields, setFields] = useState({
        consultation_time: "",
        consultation_type: "",
        name: "",
        phone: "",
    });

    const onFieldChange = (name, value) => {
        setFields({
            ...fields,
            [name]: value,
        });
    };

    const AppointmentBooking = async () => {
        var formdata = new FormData();
        formdata.append("consultation_time", fields.consultation_time);
        formdata.append("consultation_type", fields.consultation_type);
        formdata.append("name", fields.name);
        formdata.append("phone", fields.phone);
        formdata.append("consultation_method", consultation_method);

        if (fields.consultation_time && fields.consultation_type && consultation_method) {
            const { success, data } = await generalServices.AppointmentBooking(formdata);
            if (!success) return displayAlert("خطأ", "يجب تعبئة جميع الحقول", "error");

            displayAlert("تم", data, "success").then(() => {
                setFields({
                    consultation_time: "",
                    consultation_type: "",
                    name: "",
                    phone: "",
                });
                setShow(false);
            });
        } else {
            displayAlert("خطأ", "يجب تعبئة جميع الحقول", "error");
        }
    };
    return (
        <div className="home">
            <img src="/images/Group 1064.png" alt="k" className="butterfly-img" />
            <Container className="overFlow-hidden">
                <div className="landing-page">
                    <Row className="column_reverse_under768">
                        <Col md={6}>
                            <div className="home__carousel">
                                <Carousel
                                    activeIndex={index}
                                    defaultActiveIndex={index}
                                    interval={null}
                                    onSelect={handleSelect}
                                    indicators
                                    controls={false}
                                    // onSlide={(index) => {
                                    //     this.setState({
                                    //         activeSlide: index,
                                    //         showMore: false,
                                    //     });
                                    // }}
                                >
                                    <Carousel.Item>
                                        <div>
                                            <h2>سكينة للإستشارات</h2>
                                            <h4>النفسية والاسرية</h4>
                                            <p>
                                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
                                                يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                            </p>
                                            <a href="/">
                                                <img src="/images/download.png" alt="k" />
                                                تحميل البروفايل
                                            </a>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div>
                                            <h2>سكينة للإستشارات</h2>
                                            <h4>النفسية والاسرية</h4>
                                            <p>
                                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
                                                يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                            </p>
                                            <a href="/">
                                                <img src="/images/download.png" alt="k" />
                                                تحميل البروفايل
                                            </a>
                                        </div>{" "}
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="main-img">
                                <img src="images/pn2.png" alt="main" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="butterfly-footer-img web_butterfly-footer" id="con">
                    <img src="/images/beaterfly1.png" alt="k" />
                </div>
                <div className="Consultation flex">
                    <InputGroup>
                        {/* <FormControl
                            name="consultation_type"
                            placeholder="نوع الاستشارة"
                            aria-label="نوع الاستشارة"
                            aria-describedby="basic-addon1"
                            value={fields.consultation_type}
                            onChange={({ target: { value } }) => onFieldChange("consultation_type", value)}
                        /> */}
                        <select className="select-home" onChange={({ target: { value } }) => onFieldChange("consultation_type", value)}>
                            <option selected={fields.consultation_type ? false : true} disabled className="disabled">
                                نوع الاستشارة
                            </option>
                            <option value="نفسية">نفسية</option>
                            <option value="عصبية">عصبية</option>
                            <option value="عاطفية">عاطفية</option>
                        </select>
                        <InputGroup.Text id="basic-addon1">
                            <img src="/images/document (2).PNG" alt="j" />{" "}
                        </InputGroup.Text>
                    </InputGroup>

                    <InputGroup>
                        {/* <FormControl type="date" placeholder="موعد الاشتشارة" aria-label="موعد الاشتشارة" aria-describedby="basic-addon1" /> */}
                        {/* <DatePicker selected={selectedDate ?? null} onChange={(date) => onFieldChange(name, date)} dateFormat="dd-MM-yyyy" showYearDropdown showMonthDropdown /> */}
                        <DatePicker
                            name="consultation_time"
                            placeholderText="موعد الاشتشارة"
                            onChange={(date) => onFieldChange("consultation_time", date)}
                            dateFormat="dd-MM-yyyy"
                            selected={fields.consultation_time}
                            autoComplete={false}
                        />

                        <InputGroup.Text id="basic-addon1">
                            <img src="/images/calendar (3).PNG" alt="j" />{" "}
                        </InputGroup.Text>
                    </InputGroup>

                    <ul className="type-of-Consultation flex">
                        <li
                            className={consultation_method === 1 ? "typeSelected clickable" : " clickable"}
                            onClick={() => setTypeSelected(1)}
                            title="مباشر"
                        >
                            <img src="/images/interview (1).png" alt="k" />
                        </li>
                        <li
                            className={consultation_method === 2 ? "typeSelected clickable" : "clickable"}
                            onClick={() => setTypeSelected(2)}
                            title="اونلاين"
                        >
                            <img src="/images/online-learning.png" alt="k" />
                        </li>
                    </ul>
                    <button className="Appointment Booking" onClick={handleShow}>
                        احجز موعد
                    </button>
                </div>
            </Container>
            <Container fluid>
                <div className="butterfly-footer-img tablet_butterfly-footer">
                    <img src="/images/beaterfly1.png" alt="k" />
                </div>
            </Container>
            <CountOfExperiance
                title=""
                fact1={{ label: "سنوات من الخبرة", value: 75 }}
                fact2={{ label: "عميل راض", value: 85 }}
                fact3={{ label: "استشارة مجانية", value: 45 }}
            />
            <ShortStory />
            <BuildServices />
            <OurBlogBlock />
            <WhatSayAboutUS />
            <ContactUs />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>يرجى إضافة الاسم ورقم الهاتف</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TextInput placeholder="" value={fields.name} name="name" label="الاسم" onFieldChange={onFieldChange} type="text" />
                    <TextInput placeholder="" value={fields.phone} name="phone" label="رقم الهاتف" onFieldChange={onFieldChange} type="text" />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={AppointmentBooking}>إرسال</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Home;
