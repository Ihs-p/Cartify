import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
 <>
 
 <section className="py-5 ">
  <div className="container">
    <div className="row ">
      {/* <!-- Contact Info --> */}
      <div className="col-md-5 contact-info d-flex  flex-column justify-content-center ">

        <h3>Contact Information</h3>
        <p>Feel free to reach out to us via phone, email, or our online contact form.</p>
        <p><strong>Address:</strong> 1234 Street Name, City, State, Zip Code</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> <a href="mailto:support@ecommerce.com">support@ecommerce.com</a></p>
        <p><strong>Business Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
      </div>

      {/* <!-- Contact Form --> */}
      <div className="col-md-7">  
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form action="submit_form.php" method="POST">
            <div className="mb-3">
              <label for="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required/>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required/>
            </div>
            <div className="mb-3">
              <label for="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter subject" required/>
            </div>
            <div className="mb-3">
              <label for="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
 
 </>
  )
}

export default Contact