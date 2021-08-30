import React from "react";
import { Container } from "react-bootstrap";
// import Counter from "react-number-counter";
import CountUp from "react-countup";
const CountOfExperiance = ({ fact1, fact2, fact3 }) => {
    return (
        <Container>
            <div className="CountOfExperiance">
                <div className="single-count">
                    <div>
                        <img src="/images/Group5.png" alt="k" />
                        <CountUp
                            start={0}
                            end={fact1.value}
                            duration={5}
                            separator=" "
                            // prefix="+ "
                            suffix="+"
                        ></CountUp>
                    </div>
                    <p> {fact1.label}</p>
                </div>
                <div className="single-count">
                    <div>
                        <img src="/images/Group5.png" alt="k" />
                        <CountUp start={0} end={fact2.value} duration={5} separator=" " suffix="+" />
                    </div>

                    <p> {fact2.label}</p>
                </div>
                <div className="single-count">
                    <div>
                        <img src="/images/Group5.png" alt="k" />
                        <CountUp start={0} end={fact3.value} duration={5} separator=" " suffix="+"></CountUp>
                    </div>
                    <p>{fact3.label}</p>
                </div>
            </div>
        </Container>
    );
};

export default CountOfExperiance;
