import React from 'react'


import pic from '../assets/book-store-about-us (1).jpg'
import classes from './styles.css'
export default function AboutUs() {
    return (
        <>
            <div className='root'>
                <img src={pic} className="picture" />
                <div className='container'>
                    <h1>welcome to Readers clube </h1>
                    <p>we are helping people for thinking in right direction</p>
                  
                    <p>Our Mission: To help local, independent bookstores thrive in the age of ecommerce.
                        Our Vision: We work to connect readers with independent booksellers all over the world.
                        We believe local bookstores are essential community hubs that foster culture, curiosity, and a love of reading, and we're committed to helping them survive and thrive. Our platform gives independent bookstores tools to compete online and financial support to help them maintain their presence in local communities.
                        “The Rebel Alliance standing up to the Amazon Empire.” — Chicago Tribune
                        Our Story: Bookshop.org began as an idea to help support bookstores and their communities at a time when more and more people were buying their books online. We saw an opportunity to create an alternative to Amazon for socially-conscious online shoppers. Amazon sells over 60% of all books in the US and is growing. That shift threatens the future of bookstores and will hurt readers, authors, and publishers who rely on a diverse, healthy ecosystem for books. We had a better idea — give readers the convenience of online shopping while supporting independent bookstores at the same time.
                        We launched in January of 2020, with just 88 bookstore partners and a team of four passionate book people.

                        As the COVID-19 pandemic surged, our growing platform helped our community of independent booksellers survive shutdowns. That spring, traffic to Bookshop.org hit 1 million users in a single day. By the end of 2020 we had grown to over 1,000 bookstores, raised over ten million dollars for our profit-sharing pool, and 78% of our customers said they regularly bought books from Amazon before they made the switch.

                        Bookshop.org has since expanded internationally, launching Bookshop.org UK and Bookshop.org Spain. As a Climate Neutral company, we are committed to operating sustainably. Certified as a B Corp, Bookshop.org puts our mission and the public good above financial interests, giving over 80% of our profit margin to independent bookstores. It is written in our governance documents that we will never sell the company to Amazon or any major U.S. retailer.

                        “Because of Bookshop.org, I'm not concerned about our viability ... I can thrive rather than just survive.” — Noëlle Santos, The Lit. Bar, Bronx, NY
                        How Bookshop.org Works:
                        We ship your books from our wholesaler's warehouse directly to you, handle the customer service and overhead, and the bookstores get the profit.</p>
                </div>

            </div>

        </>

    )
}
