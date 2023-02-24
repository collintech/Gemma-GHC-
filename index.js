'use strict';

const rootEL = document.querySelector('.root');
const heroEL = document.querySelector('.hero');
const footerEL = document.querySelector('.footer');
const mainEL = document.querySelector('.main');



// document.createElement('div').className = "hero";
rootEL.append(heroEL);
// rootEL.appendChild(footerEL);


// Footer Element

// footerEL.innerHTML =
//     `
//         <div class="company">
//             <h3>Company</h3>
//             <ul>
//                 <a><li>About Us</li></a>
//                 <a><li>Careers</li></a>
//                 <a><li>Blog</li></a>
//                 <a><li>Press</li></a>
//                 <a><li>Brand Guidelines</li></a>
//             </ul>
//         </div>

//         <div class="product">
//             <ul>
//                 <a><li>Why Gemma?</a></a>
//                 <a><li>Corporate</a></a>
//                 <a><li>Customer Stories</a></a>
//                 <a><li>Become an Assoicate</a></a>
//                 <a><li>Pricing</a></a>
//             </ul>
//         </div>

//         <div class="resources">
//             <ul>
//             </ul>
//         </div>

//         <div class="expresso">
//         </div>
//     `


// mainEL.innerHTML = <a href=""></a>

// Hero-Element

const heroElement = heroEL.innerHTML =
    `
    <div class="hero">
        <div class="hero-text">
            <h1 class="hero-headline">Busy Work Life? <br /> Not Enough Time To Clean <br />
                <span>Don't Stress...</span>
            </h1>
            <p class="hero-subheading">
                Gemma helps you spend time on what you love, from making money to sleeping in on weekends. Get started now with as little as NGN 10,000 a month.
            </p>

            <div class="hero_headline ctas">
                <a class="cbtn bestoffer" href="./pages/services.html">see our best offer</a>
                <button class="cbtn">
                    <img src="/images/vectors/play-circle-fill.svg"/>
                    Watch Videos
                </button>
            </div>
        </div>

        <div class="hero-form">
            <div class="head">TOO BUSY TO CLEAN?</div>
            <div class="bar">Book expert home cleaners at a moment's notice
            </div>
            <form>
                <div class="wrapper">
                    <p class="first-input-heading">Choose a cleaning type</p>
                    <div class="house">
                        <button type="button" class="btn btn-regular active">REGULAR</button>
                        <button type="button" class="btn btn-spring">SPRING</button>
                        <button type="button" class="btn btn-fumigation">FUMIGATION</button>
                    </div>

                    <p class="second-input-heading">Choose your house type</p>
                    <div class="house-type">
                        <button type="button" class="btn flat active">FLAT</button>
                        <button type="button" class="btn duplex">DUPLEX</button>
                    </div>

                    <div class="input-section">
                        <label>Number of rooms
                            <select name="rooms" >
                                <option id="first" value="">Number of Bedrooms</option>
                                <option value="room">1 Bedroom</option>
                                <option value="room">2 Bedroom</option>
                                <option value="room">3 Bedroom</option>
                                <option value="">4 Bedroom</option>
                                <option value="room">5 Bedroom</option>
                                <option value="room">6 Bedroom</option>
                            </select>
                        </label>
                        <label>Frequency
                            <select name="time">
                                <option id="first" value="">Select Duration</option>
                                <option class="active" value="One Time">One Time</option>
                                <option value="Twice Monthly">Twice Monthly</option>
                                <option value="weekly">Weekly</option>
                                <option value="Twice Weekly">Twice Weekly</option>
                            </select>
                        </label>
                    </div>
                </div>
                <button class="submit"><a href="./Pages/Billing.html">LET'S GO</a></button>
            </form>
        </div >
    </div >
`


// Root Element

rootEL.innerHTML =
    `
    <section>
        <p class="headliner">Refer A Friend and get 250 naira in your wallet🎉 <span onclick="closeHeadliner()"><img
        src="/Images/vectors/x.svg" style="color: green;" /></span></p>
        <header class="header">
            <div>
                <img class="logo" src="/Images/gemma.png" alt="company logo" />
            </div>
            <nav class="nav" id="myNav">
                <ul class="nav-links">
                    <a href="./Pages/auth/register.html"><li>Log In</li></a>
                    <a href="./Pages/Services.html"><li>Services</li></a>
                    <a href="./Pages/About.html" target="_blank"><li>About Us</li></a>
                    <a href="./Pages/Billing.html"><li>Billing</li></a>
                    <a href="./Pages/Associates.html"><li>Associates</li></a>
                </ul>
            </nav>
        </header>


        <section>
            ${heroElement}
        </section>



        <main class="main-qa">
            <div class="main-intro">
                <h5>BREZZY ONBOARDING</h5>
                <h2 class="intro-text">Set Up an Account Quickly</h2>
                <p class="intro-paragraph">Signing up and booking your first cleaning is extremely smooth and totally hassle free</p>
                <a href="./Pages/auth/register.html">Sign up</a>
            </div>

            <ul class="main-list">
                <li>
                    <div>
                        <img src="/Images/vectors/rocket-svgrepo-com.svg" alt="register icon" />
                        <span>1</span>
                    </div>
                    <div>
                        <h3>Register</h3>
                        <p>Create an account with your email or phone number</p>
                    </div>
                </li>

                <li>
                    <div>
                        <img src="/Images/vectors/time-schedule-management-business-svgrepo-com.svg" alt="schedule icon" />
                        <span>2</span>
                    </div>
                    <div>
                        <h3>Create a Schedule</h3>
                        <p>pick a schedule that's affordable and fits your profile</p>
                    </div>
                </li>

                <li >
                    <div class="svet">
                        <span>3</span>
                        <svg width="200" height="200">
                            <circle cx="100" cy="100" r="100" stroke="green" stroke-width="0" fill="pink" />
                            Sorry, your browser does not support inline SVG.
                            <img id="svg-img" src="/Images/vectors/money-pay-svgrepo-com.svg" alt="pay icon" />
                        </svg>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Pay Securely</h3>
                        <p>Setup your payment and manage your bookings easily</p>
                    </div>
                </li>

            </ul>
        </main>


        <section >
            <div class="cover-cta">
                <div class="cover">
                    <h3 class="cover-heading">We Clean Up Better</h3>
                    <p>Choose from any our clening plan designed to
                    cater to your lifestyle</p>
                    <div class="cover-btn">
                        <button class="cover-btn1">What We Cover</button>
                        <button class="cover-btn2">Explore Plans</button>
                    </div>
                </div>
            


                <div class="cleaning">
                    <div class="cleaning-item">
                        <div id="cleaning-item">
                            <h3>Regular Cleaning</h3>
                            <img src="/images/vectors/cleaning.svg"/>
                        </div>
                        <p>Get a basic clean fix you and your loved ones
                            can thrive in.
                        </p>
                    </div>

                    <div class="cleaning-item">
                        <div id="cleaning-item">
                            <h3>Deep Cleaning</h3>
                            <img src="/images/vectors/deep-clean.svg" />
                        </div>
                        <p>we'll wipe your home clean from top to bottom, getting to those corners no one like to touch.</p>
                    </div>

                    <div class="cleaning-item">
                        <div id="cleaning-item">
                            <h3>Fumigation</h3>
                            <img src="/images/vectors/fumigation.svg"/>
                        </div>
                        <p>The perfect option for exterminatiing those horrible rodents
                        in and around your home</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="empowerment">
            <div class="beyond">
                <h5>BEYOND CLEANING</h5>
                <h3 style="color: goldenrod;">Why Gemma?</h3>
                <p style="font-size: 1.2rem; font-weight: bold;">We primarily serve 2 kinds of people</p>
            </div>

            <div class="customer">
                <ul>
                    <li class="custom-cta">
                        <h4 style="text-align: center;">Customers</h4>
                        <img src="/images/people/home-owner.png" alt="customer"/>
                        <p>we are purely customer-centric in our operations.
                        The Gemma customer's well being is of top priority to us.</p>
                    </li>

                    <li class="clean-ass-cta">
                        <h4 >cleaning associates</h4>
                        <img src="/images/people/cleaner.png" alt="cleaner"/>
                        <p>We are empowering our team of cleaning associates economically and socially. They are equiped with the right 
                        social skills to deliver great customer service while delivering quality cleaning, too.
                        </p>
                    </li>
                </ul>
                <blockquote>
                <pre>
                    we're not just not offering 
                    exceptional cleaning 
                    services to you but also
                    impacting and improving 
                    the quality of life of our
                    cleaning associates.
                </pre>
                </blockquote>
            </div>
        </section>


        <section class="testimony">
            <div class="testy-first-child">
                <h4>Our Customer Trust Us</h4>
                <p >See what people like you are saying about Gemma.</div>
            </div>

            <ul class="players">
                <li class="player">
                    <p style="width: 300px; margin: 1em;font-weight:bold;">Cleaning is an art, only the perfect can understand it.
                    These guys at Gemma have mastered it.
                    </p>
                    <div class="player-one">
                        <img src="/images/people/akinbayo-atere.png"/>
                        <div class="player-one-inner">
                            <span style="color: white;">Akinbayo Atere</span>
                            <small style="color: white;">Weekly Subscription</small>
                        </div>
                    </div>
                </li>

                <li class="player">
                    <p style="width:300px;margin: 1em;font-weight:bold;">Love the excellent service delivery, really
                    commendable work
                    </p>
                    <div class="player-two">
                        <img src="/images/people/dara-oke.png"/>
                        <div class="player-two-inner">
                            <span style="color: white;">Dara Oke</span>
                            <small style="color: white;">Bi-Weekly Subscription</small>
                        </div>
                    </div>
                </li>
            </ul>
        </section>


        <section class="last-section">
            <div class="ready">
                <h2>Ready to get Started</h2>
                <p>Treat your home to something special</p>
            </div>

            <div class="register">
                <a href="./Pages/auth/register.html">Sign Up</a>
            </div>
        </section>

        <div class="main">
            <div class="sect-one-header">
                <h2>We're on Quality and Safety</h2>
                <p>
                    At Gemma, Cleaning associates are extensively trained and tested, this ensures <br /> we're only offering you the best and safest possible service
                </p>
            </div>

            <div class="sect-two">
                <div class="char-one">
                    <div>
                        <img src="/images/vectors/circleSVG.jpg" />
                    </div>
                    <div class="star-cta">
                        <h5>Amarachi John</h5>
                        <div>
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                        </div>
                    </div>
                    <p>Test feedback from the associate, which is displayed on the main page of the site</p>
                </div>

                <div class="char-two">
                    <div>
                        <img src="/images/vectors/circleSVG.jpg" />
                    </div>
                    <div class="star-cta">
                        <h5>Martins Obadiah</h5>
                        <div>
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                        </div>
                    </div>
                    <p>Test feedback from the associate, which is displayed on the main page of the site</p>
                </div>

                <div class="char-three">
                    <div>
                        <img src="/images/vectors/circleSVG.jpg" />
                    </div>
                    <div class="star-cta">
                        <h5>Patricia Ubangida</h5>
                        <div>
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                            <img src="/images/vectors/blue-star.webp" />
                        </div>
                    </div>
                    <p>Test feedback from the associate, which is displayed on the main page of the site</p>
                </div>
            </div>
        </div>



        <footer>
            <div class="head-points">
                <div class="head-point-a">
                    <div class="company">
                        <h5>Company</h5>
                        <ul>
                            <a href="#"><li>About Us</li></a>
                            <a href="#"><li>Careers</li></a>
                            <a href="#"><li>Blog</li></a>
                            <a href="#"><li>Press</li></a>
                            <a href="#"><li>Brand Guidelines</li></a>
                        </ul>
                    </div>

                    <div class="product">
                        <h5>Product</h5>
                        <ul>
                            <a href="#"><li>Why Gemma?</li></a>
                            <a href="#"><li>Corporate</li></a>
                            <a href="#"><li>Customer Stories</li></a>
                            <a href="#" id="ba-ass"><li>Become an Assoicate</li></a>
                            <a href="#"><li>Pricing</li></a>
                        </ul>
                    </div>

                    <div class="resources">
                        <h5>Resources</h5>
                        <ul>
                            <a href="#"><li>Download</li></a>
                            <a href="#"><li>FAQs</li></a>
                            <a href="#"><li>Guides</li></a>
                            <a href="#"><li>Partners</li></a>
                            <a href="#"><li>Events</li></a>
                        </ul>
                    </div>
                </div>
                <div class="expresso-cta">
                    <div class="expresso">
                        <h5>Stay in touch with the latest updates</h5>
                        <p>Thousands of busy people just like you are signing up our wonderful service. Take advantage of Gemma by signing up</p>
                        <input type="email" style="border-radius: 1.5em; min-width:300px; height: 40px; border:none;text-align: center" placeholder="email address">
                            <img id="env" src="/images/vectors/envelope.svg" />
                            <img id="send" src="/images/vectors/send.svg" />
                        </input>
                    </div>
                </div>
            </div>


            <div class="bottom">
                <div class="bottom-one">
                    <div class="items">
                        <ul>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cleaning Agreement</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <p>&copy;Gemma.All Rights Reserved</p>
                    </div>
                    <div class="social-media">
                        <p>Follow us</p>
                        <div class="social-media-cta">
                            <img src="/Images/vectors/twitter.svg" />
                            <img src="/Images/vectors/facebook.svg" />
                            <img src="/Images/vectors/linkedin.svg" />
                            <img src="/Images/vectors/instagram.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <script type="text/javascript" src="./main.js"></script>
        </footer>
    </section>
`


// FUNCTIONALITY



