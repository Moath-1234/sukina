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
    const location = `https://www.google.com/maps/place/21°34'08.6"N+39°07'19.8"E/@21.5690606,39.1199727,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d21.5690556!4d39.1221667?hl=en`;
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
                            <img
                                className="location-main-img"
                                onClick={() => (window.location.href = location)}
                                src="/images/Rectangle 94.png"
                                alt="l"
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
