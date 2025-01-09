import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      {/* Services Section */}
      <section className="services-section">
        <h1>
          Get the most out of Waste Wave
          <br />
          with these unique services
        </h1>
        <div className="services-container">
          <div className="service-box">
            <h3>Service 1</h3>
            <h2>Waste Pickup Scheduling</h2>
            <p>
              Residents can set pickup dates or alert waste companies with a
              simple toggle, ensuring timely and efficient waste collection
              without the wait.
            </p>
          </div>
          <div className="service-box">
            <h3>Service 2</h3>
            <h2>Payment and Transaction Tracking</h2>
            <p>
              Track your payment history, receive instant confirmations, and
              stay up-to-date with your billing status — all in one place.
            </p>
          </div>
          <div className="service-box">
            <h3>Service 3</h3>
            <h2>Waste Categorization and Reporting</h2>
            <p>
              Companies and regulatory bodies can track waste types, generate
              reports, and ensure accountability for a cleaner, more
              sustainable environment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        <div>
                <h2>FAQs about Waste Wave</h2>
                <p>
                Here, you'll find answers to common questions <br /> about how to use the
                app, schedule waste <br />pickups, make payments, and more. Our goal <br /> is to
                ensure a smooth experience for residents,<br /> waste companies, and LAWMA.
                </p>

                <p>
                    if you don't find the information you need,feel <br /> 
                    free to reach out to our support team for <br />
                    assitance.

                </p>
        </div>
        
        <div>
            <ul className="faq-list">
            <li>What is In2macy, and how does it work?</li>
            <li>Can In2macy replace traditional therapy?</li>
            <li>Is my data safe with In2macy?</li>
            <li>Who can use wastewave?</li>
            </ul>
        </div>
        
      </section>
      <div classname='bottonButton'>
  <button classname='startbutton'>start</button>
</div>
    </div>
  );
};




export default About;
