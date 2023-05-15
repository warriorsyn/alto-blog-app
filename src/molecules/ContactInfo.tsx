import React, {Fragment} from "react";

const ContactInfo: React.FC = () => {
    return (
        <Fragment>
            <h2>Contact Information</h2>
            <p>Phone: <a href="tel:+555-555-5555"> 555-555-5555</a></p>
            <p>Email: <a href="mailto:contact@example.com"> contact@example.com</a></p>
        </Fragment>
    );
};

export default ContactInfo;
