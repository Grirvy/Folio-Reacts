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
    <main class="main">
	    <section class="home" id="home">
        <div class="home__container container grid">
			  <div class="home social">
			  	<div class="div home__social-links">
			  		<a href="https://www.instagram.com/" target="_blank" class="home__social-link">
			  			<i class="uil uil-instagram"></i>
			  		</a>
			  		<a href="https://twitter.com/" target="_blank" class="home__social-link">
			  			<i class="uil uil-twitter"></i>
			  		</a>
			  		<a href="https://www.facebook.com/" target="_blank" class="home__social-link">
			  			<i class="uil uil-facebook-f"></i>
			  		</a>
			  	</div>
			  </div>
			    <img src="./assets/img/home-img-PNG" alt="" class="home__img"></img>
        </div>
        <div class="home__data">
				<h1 class="home__title">Hi, Im Isaiah</h1>
				<h3 class="home__subtitle">Developer</h3>
				<p class="home__description">Low Level Experience in web design and development knowledge,
				but I will always try producing quality work.</p>
			</div>

			<div class="my__info">
				<div class="info__item">
					<i class="uil uil-facebook-messenger info__icon"></i>

					<div>
						<h3 class="info__title">Github</h3>
						<span class="info__subtitle">Grirvy</span>
					</div>
				</div>

				<div class="info__item">
					<i class="uil uil-envelope-edit info__icon"></i>
					
					<div>
						<h3 class="info__title">Email</h3>
						<span class="info__subtitle">isaiahross777@yahoo.com</span>
					</div>
				</div>
			</div>
	  </section>
      <section class="about section" id="about">
  		<h2 data-heading="My Intro" class="section__title">About Me</h2>

  		<div class="about__container container grid">
  		<img src="./assets/img/home-img.PNG" alt="" class="about_img"></img>

  			<div class="about__data">
  				<h3 class="about__heading">More About Me</h3>
  				<p class="about__description">Developer, with about 2 years of experience,
  				work mainly with Javascript and I am currently working on improving on my Ui / Ux Designs.</p>
  				<div class="about__info grid">
  					<div class="about__box" id="project-box-1">
  							<i class="uil uil-award about__icon"></i>
  							<h3 class="about__title">Experience</h3>
  							<span class="about__subititle">2 + Years</span>
  					</div>

  					<div class="about__box" id="project-box-2">
  						<i class="uil uil-award-alt about__icon"></i>
  						<h3 class="about__title">Completed</h3>
  						<span class="about__subititle">19 + Projects</span>
  					</div>

  				</div>
  				<a href="#contact" class="button"><i class="uil uil-navigator button-icon"></i>
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
                <SkillItem name="JavaScript" percentage={70} />
                <SkillItem name="React" percentage={10} />
              </div>
            </div>
            {/* Other skill groups */}
          </div>
        </div>
      </section>
      {/* Work Section */}
      <section class="work__section" id="work">
	<h2 data-heading="My Portfolio" class="section__title">Recent Works</h2>

    	<div class="work__filters">
    		<span class="work__item active-work" data-filter="all">All</span>
    			<span class="work__item" data-filter=".web">Web</span>
    			<span class="work__item" data-filter=".app">App</span>
    			<span class="work__item" data-filter=".design">Design</span>
    	</div>

    	<div class="work__container container grid">
    		<div class="work__card mix web">
    			<img src="assets/img/work-1.webp" alt="" class="work-img"></img>
    			<h3 class="work__title">Web Design</h3>
    			<span class="work__button">Demo
    				<i class="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div class="portfolio__item-details">
    				<h3 class="details__title">The services provide for design</h3>
    				<p class="details__description"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
    				Quis temporibus ut accusamus.</p>
    				<ul class="detail__info">
    					<li> Created - <span> 4 Dec 2023</span></li>
    					<li>Technologies - <span>html css</span></li>
    					<li>Role - <span>frontend</span></li>
    					<li>View - <span><a href="#">www.domain.com</a></span></li>
    				</ul>
    			</div>
    		</div>

    		<div class="work__card mix app">
    			<img src="assets/img/work-2.webp" alt="" class="work-img"></img>
    			<h3 class="work__title">App Design</h3>
    			<span class="work__button">Demo
    				<i class="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div class="portfolio__item-details">
    				<h3 class="details__title">Mobile app landing design & app maintain</h3>
    				<p class="details__description"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
    				Quis temporibus ut accusamus.</p>
    				<ul class="detail__info">
    					<li> Created - <span> 4 Dec 2023</span></li>
    					<li>Technologies - <span>html css</span></li>
    					<li>Role - <span>frontend</span></li>
    					<li>View - <span><a href="#">www.domain.com</a></span></li>
    				</ul>
    			</div>
    		</div>

    		<div class="work__card mix design">
    			<img src="assets/img/work-3.webp" alt="" class="work-img"></img>
    			<h3 class="work__title">Brand Design</h3>
    			<span class="work__button">Demo
    				<i class="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div class="portfolio__item-details">
    				<h3 class="details__title">Logo design creativity & Application</h3>
    				<p class="details__description"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
    				Quis temporibus ut accusamus.</p>
    				<ul class="detail__info">
    					<li> Created - <span> 4 Dec 2023</span></li>
    					<li>Technologies - <span>html css</span></li>
    					<li>Role - <span>frontend</span></li>
    					<li>View - <span><a href="#">www.domain.com</a></span></li>
    				</ul>
    			</div>
    		</div>

    		<div class="work__card mix app">
    			<img src="assets/img/work-4.webp" alt="" class="work-img"></img>
    			<h3 class="work__title">App Design</h3>
    			<span class="work__button">Demo
    				<i class="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div class="portfolio__item-details">
    				<h3 class="details__title">Mobile app landing design & Services</h3>
    				<p class="details__description"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
    				Quis temporibus ut accusamus.</p>
    				<ul class="detail__info">
    					<li> Created - <span> 4 Dec 2023</span></li>
    					<li>Technologies - <span>html css</span></li>
    					<li>Role - <span>frontend</span></li>
    					<li>View - <span><a href="#">www.domain.com</a></span></li>
    				</ul>
    			</div>
    		</div>

    		<div class="work__card mix web">
    			<img src="assets/img/work-5.webp" alt="" class="work-img"></img>
    			<h3 class="work__title">Brand Design</h3>
    			<span class="work__button">Demo
    				<i class="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div class="portfolio__item-details">
    				<h3 class="details__title">Design for technology & services</h3>
    				<p class="details__description"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
    				Quis temporibus ut accusamus.</p>
    				<ul class="detail__info">
    					<li> Created - <span> 4 Dec 2023</span></li>
    					<li>Technologies - <span>html css</span></li>
    					<li>Role - <span>frontend</span></li>
    					<li>View - <span><a href="#">www.domain.com</a></span></li>
    				</ul>
    			</div>
    		</div>

    		<div class="work__card mix design">
    			<img src="assets/img/work-6.webp" alt="" class="work-img"></img>
    			<h3 class="work__title">Web Design</h3>
    			<span class="work__button">Demo
    				<i class="uil uil-arrow-right work__button-icon"></i>
    			</span>
    			<div class="portfolio__item-details">
    				<h3 class="details__title">App for technology & services</h3>
    				<p class="details__description"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
    				Quis temporibus ut accusamus.</p>
    				<ul class="detail__info">
    					<li> Created - <span> 4 Dec 2023</span></li>
    					<li>Technologies - <span>html css</span></li>
    					<li>Role - <span>frontend</span></li>
    					<li>View - <span><a href="#">www.domain.com</a></span></li>
    				</ul>
    			</div>
    		</div>
    	</div>
    </section>
  </main>
  </div> //End of app div
    )
};