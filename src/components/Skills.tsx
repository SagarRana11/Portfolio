import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="skills section-margin">
            <h3 className="waviy">
                <span style={{ '--i': 1 }}>S</span>
                <span style={{ '--i': 2 }}>K</span>
                <span style={{ '--i': 3 }}>I</span>
                <span style={{ '--i': 4 }}>L</span>
                <span style={{ '--i': 5 }}>L</span>
                <span style={{ '--i': 6 }}>S</span>
            </h3>
            <div className="body">
                {[
                    { src: 'img/javascript.png', alt: 'JavaScript', label: 'JavaScript' },
                    { src: 'img/java.png', alt: 'Java', label: 'Java' },
                    { src: 'img/typescript.png', alt: 'TypeScript', label: 'TypeScript' },
                    { src: 'img/HTML.png', alt: 'HTML', label: 'HTML' },
                    { src: 'img/css.png', alt: 'CSS', label: 'CSS' },
                    { src: 'img/Tailwind.png', alt: 'Tailwind CSS', label: 'Tailwind' },
                    { src: 'img/react.png', alt: 'React.js', label: 'React.js' },
                    { src: 'img/node.png', alt: 'Node.js', label: 'Node.js' },
                    { src: 'img/express.png', alt: 'Express.js', label: 'Express.js' },
                    { src: 'img/mongo.png', alt: 'MongoDB', label: 'MongoDB' },
                    { src: 'img/git.png', alt: 'Git', label: 'Git' },
                ].map((skill, index) => (
                    <div key={index}>
                        <img src={skill.src} alt={skill.alt} />
                        <h5>{skill.label}</h5>
                    </div>
                ))}
            </div>
        </section>
  )
}

export default Skills
