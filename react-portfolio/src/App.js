import React, { useState } from 'react';
import './App.css';
import SkillItem from './assets/js/skills'; // Import SkillItem component

export default function App() {
  return (
  <div className="App">
<aside className="sidebar" id="sidebar">
        <nav className="nav">
          <div className="nav__menu">
            <div className="menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">About</a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">Skills</a>
                </li>
                <li className="nav__item">
                  <a href="#work" className="nav__link">Work</a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn__share">
            <i className="uil uil-share-alt" social__share></i>
          </div>
        </nav>
      </aside>
    <main className="main">
	    <section className="home" id="home">
        <div className="home__container container grid">
			  <div className="home social">
			  	</div>
          <img src="./assets/img/home-img-PNG" alt="" className="home__img"></img>
			  </div>
        <div className="home__data">
				<h1 className="home__title">Hi, Im Isaiah</h1>
				<h3 className="home__subtitle">Developer</h3>
				<p className="home__description">Low Level Experience in web design and development knowledge,
				but I will always try producing quality work.</p>
			</div>

			<div className="my__info">
				<div className="info__item">
					<i className="uil uil-facebook-messenger info__icon"></i>

					<div>
					</div>
				</div>

				<div className="info__item">
					<i className="uil uil-envelope-edit info__icon"></i>
					
					<div>
					</div>
				</div>
			</div>
	  </section>
      <section className="about section" id="about">
  		<h2 data-heading="My Intro" className="section__title">About Me</h2>

  		<div className="about__container container grid">
  		<img src="./assets/img/home-img.PNG" alt="" className="about_img"></img>

  			<div className="about__data">
  				<h3 className="about__heading">More About Me</h3>
  				<p className="about__description">Developer, with about 1 years worth of experience,
  				work mainly with Javascript and I am currently working on improving on my Ui / Ux Designs.</p>
  				<div className="about__info grid">
  					<div className="about__box" id="project-box-1">
  							<i className="uil uil-award about__icon"></i>
  							<h3 className="about__title">Experience</h3>
  							<span className="about__subititle">1 + Years</span>
  					</div>

  					<div className="about__box" id="project-box-2">
  						<i className="uil uil-award-alt about__icon"></i>
  						<h3 className="about__title">Completed</h3>
  						<span className="about__subititle">19 + Projects</span>
  					</div>

  				</div>
  				<a href="#contact" className="button"><i className="uil uil-navigator button-icon"></i>
  				Contact Me
  				</a>
  			</div>
  		</div>
  	</section>
        
    <section className="skills section" id="skills">
        <h2 className="date-heading section__title">My Experience</h2>

        <div className="skills__container container grid">
          <div className="skills__tabs">
            {/* Skill tabs */}
          </div>

          <div className="skills__content">
            <div className="skills__group skills__active" data-content id="frontend">
              <div className="skills__list grid">
                {/* Render SkillItem components with dynamic width */}
                <SkillItem name="HTML" percentage={30} />
                <SkillItem name="CSS" percentage={30} />
                <SkillItem name="JavaScript" percentage={60} />
                <SkillItem name="React" percentage={30} />
              </div>
            </div>
            {/* Other skill groups */}
          </div>
        </div>
      </section>
      {/* Work Section */}
      <section className="work__section" id="work">
	<h2 data-heading="My Portfolio" className="section__title">Projects</h2>

    	<div className="work__container container grid">
    		<div className="work__card mix web">
    			<img src="assets/img/work-1.webp" alt="" className="work-img"></img>
    			<h3 className="work__title">Web Design</h3>
    			<span className="work__button">App
    				<i className="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div className="portfolio__item-details">
    				<h3 className="details__title">The services provide for design</h3>
    				<p className="details__description"> My service to this project was assisting with the database, and working on some css for the frontend.</p>
    					<img src="./assets/img/app_screenshot.PNG" alt="" className="projects__boxPics"></img>
    					<li>View - <span><a href="#">https://video-vault-a9fdebd79a00.herokuapp.com/</a></span></li>
    			</div>
    		</div>

    		<div className="work__card mix app">
    			<img src="assets/img/work-2.webp" alt="" className="work-img"></img>
    			<h3 className="work__title">App Design</h3>
    			<span className="work__button">App
    				<i className="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div className="portfolio__item-details">
    				<h3 className="details__title">App landing design & app maintain</h3>
    				<p className="details__description"> Put together a weather app that using html, css, and javascript 
            to store data in the users browser.</p>
                <img src="./assets/img/app_screenshot.PNG" alt="" className="projects__boxPics"></img>
    					<li>View - <span><a href="#">https://grirvy.github.io/Ether-Weather/</a></span></li>
    			</div>
    		</div>

    		<div className="work__card mix design">
    			<img src="assets/img/work-3.webp" alt="" className="work-img"></img>
    			<h3 className="work__title">App Design</h3>
    			<span className="work__button">App
    				<i className="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div className="portfolio__item-details">
    				<h3 className="details__title">App landing design & app maintain.</h3>
    				<p className="details__description">Built an app that allows the user to have a daily work scheduler.</p>
                <img src="./assets/img/app_screenshot.PNG" alt="" className="projects__boxPics"></img>
    					<li>View - <span><a href="#">https://grirvy.github.io/Lend-A-Cal/</a></span></li>
    			</div>
    		</div>

    		<div className="work__card mix app">
    			<img src="assets/img/work-4.webp" alt="" className="work-img"></img>
    			<h3 className="work__title">App Design</h3>
    			<span className="work__button">App
    				<i className="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div className="portfolio__item-details">
    				<h3 className="details__title">App landing design & Services</h3>
    				<p className="details__description"> App designed to let a user generate a logo for free on their own.</p>
                <img src="./assets/img/app_screenshot.PNG" alt="" className="projects__boxPics"></img>
    					<li>View - <span><a href="#">https://github.com/Grirvy/Shapes-A</a></span></li>
    			</div>
    		</div>

    		<div className="work__card mix web">
    			<img src="assets/img/work-5.webp" alt="" className="work-img"></img>
    			<h3 className="work__title">App Design</h3>
    			<span className="work__button">App
    				<i className="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div className="portfolio__item-details">
    				<h3 className="details__title">Design for technology & services</h3>
    				<p className="details__description"> Backend app that lets that gives the user the ability
            to generate a professional README.</p>
                <img src="./assets/img/app_screenshot.PNG" alt="" className="projects__boxPics"></img>
    					<li>View - <span><a href="#">https://github.com/Grirvy/Build-A-Read</a></span></li>
    			</div>
    		</div>

    		<div className="work__card mix design">
    			<img src="assets/img/work-6.webp" alt="" className="work-img"></img>
    			<h3 className="work__title">Web App Design</h3>
    			<span className="work__button">App
    				<i className="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div className="portfolio__item-details">
    				<h3 className="details__title">App for searching movies and their ratings</h3>
    				<p className="details__description"> Assisted in the backend of the application with getting the data
            and passing it into the site.</p>
    				<img src="./assets/img/app_screenshot.PNG" alt="" className="projects__boxPics"></img>
    					<li>View - <span><a href="#">https://github.com/Tran93/MovieApiProj</a></span></li>
    			</div>
    		</div>
    	</div>
    </section>
    {/*<!-- Contact Form -->*/}
<form id="contactForm">
  <input type="text" id="name" name="name" placeholder="Your Name" required></input>
  <input type="email" id="email" name="email" placeholder="Your Email" required></input>
  <textarea id="message" name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Submit</button>
</form>
<div id="errorMessages"></div>

{/*<!-- Resume Section -->*/}
<div id="resumeSection">
  <a href="resume.pdf" download>Download Resume</a>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    {/*<!-- Add more here -->*/}
  </ul>
</div>

{/*<!-- Footer Links -->*/}
<footer>
  <a href="https://github.com/Grirvy" target="_blank"> GitHub</a>
  <a href="https://linkedin.com/in/developer" target="_blank"> LinkedIn</a>
</footer>
  </main>
  </div> //End of app div
    )
};