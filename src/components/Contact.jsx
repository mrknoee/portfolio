import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact(){

    const success = () => toast("Message Sent!");
    const errormsg = () => toast.error("Error");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5f59x1m', 'template_t5v65vf', form.current, 'e6-hnTg6_tGaLR0N4')
          .then((result) => {
              console.log(result.text);
              success();
              e.target.reset();
          }, (error) => {
              console.log(error.text);
              errormsg();
  
          });
      };
    
  

    return (
      <>

        <div className="contact" id="Contact">
        <div className="tagtitle">Contact Me</div>
            <div className="contact-container">
                <div className="blur"></div>
            <p className="contact-heading">Get in Touch</p>
            <p className="contact-subheading">Send me a message</p>

            <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="sender-form">
                <label for="name" className="form-label">Your name: </label><br/><br/>
                <input type="text" name="user_name" className="sender-input" autoComplete="new-password" required>
                </input>
            </div>
            <div className="sender-form ">
                <label  className="form-label" >Your email: </label><br/><br/>
                <input type="email" name="user_email" className="sender-input" autoComplete="new-password" required>
                </input>
            </div>

            <div className="sender-form">
                <label  className="form-label" >Message: </label><br/><br/>
                <textarea type="text" name="message" className="msg-input" autoComplete="new-password" required>
                </textarea>
            </div>
            <div className="resume-details"> 
                    <button  className="resume-button" type="submit" value="Send"  > Send</button> 
                </div> 
         
            </form>
        </div>
        </div>
        <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="dark"
        />

      </>  
    );
}