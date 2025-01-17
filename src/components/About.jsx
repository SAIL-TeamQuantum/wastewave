import React from 'react';
import './About.css';
import FaqProps from '../Reusables/FaqProps';

const About = () => {
  
  return (
    <div>
      <section className="services-section">
        <h1>
          Get the most out of <span>Waste Wave</span >
          <br />
          with these unique services
        </h1>
        <div className="services-container">
          <div className="service-box">
            <h3>Service 1</h3>
            <div id="underline"></div>
            <h2>Waste Pickup Scheduling</h2>
            <p>
              Residents can set pickup dates or alert waste companies with a
              simple toggle, ensuring timely and efficient waste collection
              without the wait.
            </p>
          </div>
          <div className="service-box">
            <h3>Service 2</h3>
            <div id="underline"></div>
            <h2>Payment and Transaction Tracking</h2>
            <p>
              Track your payment history, receive instant confirmations, and
              stay up-to-date with your billing status — all in one place.
            </p>
          </div>
          <div className="service-box">
            <h3>Service 3</h3>
            <div id="underline"></div>

            <h2>Waste Categorization and Reporting</h2>
            <p>
              Companies and regulatory bodies can track waste types, generate
              reports, and ensure accountability for a cleaner, more
              sustainable environment.
            </p>
          </div>
        </div>
      </section>
      <section className="faqs-section-val">
        <div>
                <h2>FAQs about Waste Wave</h2>
                <p>
                Here, you'll find answers to common questions  about how to use the
                app, schedule waste pickups, make payments, and more. Our goal  is to
                ensure a smooth experience for residents, waste companies, and LAWMA.
                </p> 
                <p>
                    If you don't find the information you need,feel  
                    free to reach out to our support team for 
                    assitance.

                </p>
        </div>
        
        <div>
            <FaqProps head="What is Waste Wave, and how does it work?" content="It is a waste management platform that enables easy scheduling and tracking of waste collection" />
            <FaqProps head="Can I track my payments with Waste Wave?" content=" Yes, you can track all your payments in the “Payment History” section of the app. It provides details such as payment dates, amounts, and services paid for." />
            <FaqProps head="Is my data safe with Waste Wave?" content="Yes, we prioritize your privacy and use industry-standard encryption to secure your data." />
            <FaqProps head="Who can use Waste Wave?" content=" The app is designed for anyone interested in managing waste responsibly, including households, businesses, and community organizations." />
        </div>
      </section>
      <div classname='bottonButton'>
</div>
    </div>
  );
};

export default About;
