import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="Contact" id="Contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me through my{' '}
        <a href="mailto:uqk9vw@virginia.edu">Email</a> and my{' '}
        <a href="https://www.linkedin.com/in/hamzeh-hammad/">LinkedIn</a> or check out my{' '}
        <a href="https://github.com/hhamzie?tab=repositories">GitHub</a>!
      </p>
      <p>Email: <a href="mailto:uqk9vw@virginia.edu">uqk9vw@virginia.edu</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/hamzeh-hammad/">https://www.linkedin.com/in/hamzeh-hammad/</a></p>
      <p>GitHub: <a href="https://github.com/hhamzie">https://github.com/hhamzie</a></p>
      <p>Phone Number: <a href="tel:+15712457690">(571) 245-7690</a></p>
    </section>
  );
}

export default Contact;
