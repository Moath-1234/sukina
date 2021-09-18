import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextInput from "../../Assets/style/Components/blocks/TextInput";
import { generalServices } from "../../services/general";
import { displayAlert } from "../../utils/misc";
import ReactMapGL from "react-map-gl";
function ContactUs() {
    const [fields, setFields] = useState({
        contact_name: "",
        contact_email: "",
        contact_message: "",
    });

    const onFieldChange = (name, value) => {
        setFields({
            ...fields,
            [name]: value,
        });
    };

    const sendContactMessage = async () => {
        var formdata = new FormData();
        formdata.append("contact_name", fields.contact_name);
        formdata.append("contact_email", fields.contact_email);
        formdata.append("contact_message", fields.contact_message);

        if (fields.contact_name && fields.contact_email && fields.contact_message) {
            const { success, data } = await generalServices.sendContactMessage(formdata);
            if (!success) return displayAlert("خطأ", "يجب تعبئة جميع الحقول", "error");

            displayAlert("تم", data, "success").then(() => {
                setFields({
                    contact_name: "",
                    contact_email: "",
                    contact_message: "",
                });
            });
        } else {
            displayAlert("خطأ", "يجب تعبئة جميع الحقول", "error");
        }
    };
    return (
        <div className="contactUs">
            <Container>
                <div className="title_section">
                    <h3>تواصل معنا</h3>
                    <h4>دعنا نقدم الدعم المناسب والاستشارة</h4>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="contactUs-form">
                            <TextInput
                                placeholder=""
                                value={fields.contact_name}
                                name="contact_name"
                                label="الاسم"
                                onFieldChange={onFieldChange}
                                type="text"
                            />
                            <TextInput
                                placeholder=""
                                value={fields.contact_email}
                                name="contact_email"
                                label="البريد الالكتروني"
                                onFieldChange={onFieldChange}
                                type="text"
                            />
                            <TextInput
                                placeholder=""
                                value={fields.contact_message}
                                name="contact_message"
                                label="الرسالة"
                                onFieldChange={onFieldChange}
                                type="textArea"
                            />

                            <button className="submit-button" onClick={() => sendContactMessage()}>
                                ارسال
                            </button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="location">
                            {/* <img
                                className="location-main-img"
                                onClick={() => (window.location.href = location)}
                                src="/images/Rectangle 94.png"
                                alt="l"
                            /> */}
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.432207266351!2d39.119969414941735!3d21.569045985708264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM0JzA4LjYiTiAzOcKwMDcnMTkuOCJF!5e0!3m2!1sen!2sjo!4v1631992406556!5m2!1sen!2sjo"
                                width="100%"
                                height={450}
                                style={{ border: "0px" }}
                                allowfullscreen=""
                                loading="lazy"
                            />
                            <div className="location-content">
                                <div className="location-item">
                                    <img src="/images/pin.png" alt="l" />
                                    <span>Ali Abu Al Ula, Ash Shati, Jeddah 23414, Saudi Arabia</span>
                                </div>
                                <div className="location-item">
                                    <img src="/images/phone-call (1).png" alt="l" />
                                    <span>+556498464189 </span>
                                </div>
                                <div className="location-item">
                                    <img src="/images/mail-inbox-app.png" alt="l" />
                                    <span>test.email@company.com </span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-facebook-f"></i>{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-instagram"></i>{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-twitter"></i>{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fab fa-linkedin-in"></i>{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactUs;
