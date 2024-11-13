import React from 'react'

const About = () => {
  return (
    <section className='landing-page' id='about'>
        <div className="main-id">
                    <div className="name-container">
                        <h1 className="author__heading">
                            Hi I'm
                        </h1>
                        <h1 className="name">Sagar</h1>
                        <div>
                            <h2 className="sub-heading">Software Engineer</h2>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="img/profileImage.jpg" alt="a cool handsome man" className="profile-image"/>
                    </div>
                </div>

                <div className="bodyA">
                    <p>
                        I am a passionate software developer with a focus on building scalable, efficient and user-centric solutions.
                    </p>
                    <br/>
                    <p>
                        With a background in MERN STACK, I bring creative problem-solving and meticulous attention to detail to every project I undertake.
                    </p>
                </div>

                <br/>

                <div className="social-links">
                    <div>
                        <a target="_blank" title="LinkedIn" rel="noopener noreferrer" href="https://www.linkedin.com/in/ranasagar11">
                            <img src="img/linkedin.png" alt="LinkedIn"/>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" title="GitHub" rel="noopener noreferrer" href="https://github.com/SagarRana11">
                            <img src="img/icons8-github-512.png" alt="GitHub"/>
                        </a>
                    </div>

                    <div>
                        <a target="_blank" title="ranasagar974@gmail.com" rel="noopener noreferrer" href="mailto:ranasagar974@gmail.com">
                            <img src="img/gmail.png" alt="Gmail"/>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" title="Instagram" rel="noopener noreferrer" href="https://www.instagram.com/ranasagar_11">
                            <img src="img/insta.png" alt="Instagram"/>
                        </a>
                    </div>
                </div>
    </section>
  )
}

export default About
