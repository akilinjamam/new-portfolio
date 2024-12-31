import React from 'react';
import './Contact.css';
import contactPic from '../../resource/contact-pic.png'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const Contact = () => {

    const SERVICE_ID = "service_o0q6qpm";
    const TEMPLATE_ID = "template_tgb207d";
    const USER_ID = "Z7jltzwCEHJwhT676";

    const handleOnSubmit = (e) => {

        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });

        e.target.reset()
    }
    return (
        <div className='contacts forBlock' id='contact'>
            <br />
            <div className='webContacts'>
                <h2 className="contact-h2">CONTACT</h2>
                <div className="contact-main">

                    <div data-aos='fade-right' data-aos-duration='1000' className="contact-img">
                        <img src={contactPic} alt="" />
                    </div>

                    <div data-aos='fade-left' data-aos-duration='1000' className="contact-detail">
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                label='Email'
                                name='to_name'
                                required
                                icon='mail'
                                iconPosition='left'
                                value="akilinjamam@gmail.com"
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Name'
                                name='from_name'
                                placeholder='Name…'
                                required
                                icon='user circle'
                                iconPosition='left'
                            />
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Message'
                                name='message'
                                placeholder='Message…'
                                required
                            />
                            <Button type='submit' color='green'>Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>





            <div className='resContacts'>
                <h2 className="contact-h2">CONTACT</h2>
                <div className="contact-main">
                    {/*  data-aos='fade-right' data-aos-duration='1000'  */}
                    <div className="contact-img">
                        <img src={contactPic} alt="" />
                    </div>
                    {/* data-aos='fade-left' data-aos-duration='1000' */}
                    <div className="contact-detail">
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                label='Email'
                                name='to_name'
                                placeholder='Email…'
                                required
                                icon='mail'
                                iconPosition='left'
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Name'
                                name='from_name'
                                placeholder='Name…'
                                required
                                icon='user circle'
                                iconPosition='left'
                            />
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Message'
                                name='message'
                                placeholder='Message…'
                                required
                            />
                            <Button type='submit' color='green'>Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;


/* 

<form onClick={handleSubmit} >
                        <input type="text" placeholder='subject' name="" id="" />
                        <br /><br />
                        <textarea type="text" name="" placeholder='type here detail' id="" />
                        <br /><br />
                        <div className="contact-button">
                            <button type='submit'>submit</button>
                        </div>
                    </form>

*/