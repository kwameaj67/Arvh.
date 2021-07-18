import React,{useEffect,useRef} from 'react';
import './section.css';
import './section_responsive.css';
import img1 from '../../assets/images/pixasquare-4ojhpgKpS68-unsplash.webp'
import img2 from '../../assets/images/brandon-griggs-wR11KBaB86U-unsplash.webp'
import img3 from '../../assets/images/grant-lemons-jTCLppdwSEc-unsplash.webp'
import img4 from '../../assets/images/joel-filipe-RFDP7_80v5A-unsplash.webp'
import img5 from '../../assets/images/zane-lee-is2c3NlBXaw-unsplash.webp'
import {intro_text_container} from '../animations/animate'

function Section() {

    let text_container = useRef(null)
    useEffect(()=>{
        intro_text_container(text_container)
    },[])
    
    return (
        <>
            <section className="section_1">
                <div className="intro_container">
                    <div className="text_container" >
                        <h1 ref={(el) => (text_container = el)}>We Believe in Great Architecture </h1>
                        <p>The first and the most trusted marketplace of design & build house in the world</p>
                        <div className="button_container">
                            <a href="/">View Project</a>
                        </div>
                    </div>
                    <div className="img_container">
                        <img src={img1} alt="intro_img" className="img" />
                    </div>
                </div>
            </section>
            <section className="section_2" id="about">
                <div className="about_container">
                    <div className="about_img_container">
                        <img src={img1} alt="intro_img" className="img" />
                    </div>
                    <div className="about_text_container">
                        <h1>We Are The Leader in The Architectural World</h1>
                        <p>For each project we establish relationships with partners who we know will help us create added value to your projects. As well as bringing together the private and public sectors, we make sector-overachering links to gather knowledge and learn from each other.</p>
                        <div className="about_history">
                            <div className="item">
                                <p className="number">850</p>
                                <p className="text">Property build</p>
                            </div>
                            <div className="item">
                                <p className="number">24</p>
                                <p className="text">Awards Gained</p>
                            </div>
                            <div className="item">
                                <p className="number">15</p>
                                <p className="text">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_3" id="services">
                <div className="services_container">
                    <div className="heading">
                        <h1>We Provide Creative Designer for Your Home Project.</h1>
                    </div>
                    <div className="services_row">
                        <div className="services_column">
                            <div className="icon">
                                <i className="fas fa-sitemap"></i>
                            </div>
                            <div className="service_heading">
                                <h1>Architecture</h1>
                            </div>
                            <div className="service_summary">
                            <p>Once in the design process, we must go deeper in your project foundation, we need to arrive to the essence</p>
                            </div>
                            <div className="service_button_container">
                                <a href="/" className="service_button">
                                    <span>Learn more</span>
                                    <i className="fal fa-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="services_column">
                            <div className="icon">
                                <i className="fas fa-palette"></i>
                            </div>
                            <div className="service_heading">
                                <h1>Interior Design</h1>
                            </div>
                            <div className="service_summary">
                                <p>Once in the design process, we must go deeper in your project foundation, we need to arrive to the essence</p>
                            </div>
                            <div className="service_button_container">
                                <a href="/" className="service_button">
                                    <span>Learn more</span>
                                    <i className="fal fa-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="services_column">
                            <div className="icon">
                                <i className="fas fa-seedling"></i>
                            </div>
                            <div className="service_heading">
                                <h1>Plants</h1>
                            </div>
                            <div className="service_summary">
                                <p>Once in the design process, we must go deeper in your project foundation, we need to arrive to the essence</p>
                            </div>
                            <div className="service_button_container">
                                <a href="/" className="service_button">
                                    <span>Learn more</span>
                                    <i className="fal fa-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_4" id="projects">
                <div className="projects_container">
                    <div className="heading_container">
                        <h1>We Build More Projects Successfully</h1>
                        <div className="arrows_container">
                            <i className="fal fa-long-arrow-left"></i>
                            <i className="fal fa-long-arrow-right"></i>
                        </div>
                    </div>
                    <div className="images_container">
                        <div className="projects_row">
                            <div className="projects_column">
                                <img src={img1} alt="intro_img" className="img" />
                                <div className="overlay">
                                    <h1 className="name">Warung Bogo Hotel</h1>
                                    <p className="location">Jogja, Indonesia</p>
                                </div>
                            </div>
                            <div className="projects_column">
                                <img src={img1} alt="intro_img" className="img" />
                                <div className="overlay">
                                    <h1 className="name">Warung Bogo Hotel</h1>
                                    <p className="location">Jogja, Indonesia</p>
                                </div>
                            </div>
                            <div className="projects_column">
                                <img src={img1} alt="intro_img" className="img" />
                                <div className="overlay">
                                    <h1 className="name">Warung Bogo Hotel</h1>
                                    <p className="location">Jogja, Indonesia</p>
                                </div>
                            </div>
                            <div className="projects_column">
                                <img src={img1} alt="intro_img" className="img" />
                                <div className="overlay">
                                    <h1 className="name">Warung Bogo Hotel</h1>
                                    <p className="location">Jogja, Indonesia</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="section_5" id="customers">
                <div className="customers_container">
                    <div className="heading_container">
                        <h1>We Our Customers Are Saying</h1>
                    </div>
                    <div className="quotes_container">
                        <div className="quote_icon">
                            <i className="fas fa-quote-left icon"></i>
                        </div>
                        <div className="quote_text">
                            <p className="text">When we needed design and Architecture specialists, your team was there for us. You took all ourn ideas and demands into consideration and made a great project.</p>
                            <div className="quote_details">
                                <p className="author">- Thomson Zarki</p>
                                <div className="arrows">
                                    <i className="fal fa-long-arrow-left icon"></i>
                                    <i className="fal fa-long-arrow-right icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section_6" id="consultation">
                <div className="consult_container">
                        <h1>Get Our <br/>Free Consultation</h1>
                        <div className="consult_details">
                            <p>Our initial consultation is confidential and completely free of charge. You pay nothing to speak to a lawyer about your case, so what do you have to lose?</p>
                           <div className="consult_button">
                           <a href="/">Free Consultation</a>
                           </div>
                        </div>
                </div>

            </section>
        </>
    );
}

export default Section;
