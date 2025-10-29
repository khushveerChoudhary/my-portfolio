// CONTACT Component (src/components/Contact.js)
// =========================================================================
export const Contact = () => (
    <section id="contact" className="section section-contact">
        <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-pitch">I'm currently open to new opportunities and collaborations. Have a project in mind, or just want to chat about AI or photography? Let's connect.</p>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Form submitted (Demo). Connect a backend service like Formspree or Netlify Forms to receive messages.") }}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" className="cta-button">Send Message</button>
                <p className="form-note">**Note:** This is a static form. A backend service is needed to receive messages.</p>
            </form>
        </div>
    </section>
);