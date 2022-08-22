import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_urgnqss', 'template_9pe2o6x', form.current, 'QeTsOBoUTgzXk-bOQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return(
        <div className="movein">
            <div className="move">
            <div >

        <div className='container'>

            <div className="containerr">
            <div className="container_content">
                <div className="container_content_inner">
                    <div className="title">
                        <h1>Contact us</h1>
                    </div>
                    <div className="par">
                        <form ref={form} onSubmit={sendEmail} className="form">
                            <div className="name">
                            <input

                                type="text"
                                id="firstName"
                                name="name"
                                className="firstName"
                                placeholder="First Name"

                                tabIndex="1"
                            />


                            <input
                                type="text"
                                id="lastName"
                                className="lastName"
                                placeholder="Last name"

                                tabIndex="2"
                            />
                        </div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="email"
                                placeholder="example@corp.com"
                                tabIndex="3"
                            />

                            <label htmlFor="message">Message</label>
                            <textarea
                                placeholder="Start typing..."
                                className="message"
                                name="message"
                            >

                </textarea>
                              <button type="submit" className="send vll">Send</button>
                        </form>
                    </div>

                </div></div>
            </div></div>



</div></div>

    <div className="overlay"></div>
</div>
    );
};
export default Contact;