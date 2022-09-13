import { motion } from 'framer-motion'
import { ContentWrapper } from '../../components'

import './About.scss';

function About() {
  return (
    <main className="container">
      <motion.h1 className="text-center mt-5 title"
        initial={{ y: -500, scale: 2.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        About React Quiz
      </motion.h1>

      <section className="row mt-5">
        <ContentWrapper classList="col-12 col-md mb-3 mb-md-0 me-md-3 me-lg-5" animSettings={{
          initial: { x: -80, opacity: 0, scale: 0.1 },
          whileInView: { x: 0, opacity: 1, scale: 1},
          transition: { duration: 0.7 },
          viewport: { once: true }
        }}>
          <h2>What is React Quiz?</h2>
          <p>React quiz - free open source project for making simple quizzes.</p>
          <p>There are already some available quizzes but everyone can make its own.</p>
        </ContentWrapper>

        <ContentWrapper classList="col-12 col-md mb-3 mb-md-0 me-md-3 me-lg-5"
          animSettings={{
            initial: { x: -130, opacity: 0, scale: 0.1},
            whileInView: { x: 0, opacity: 1, scale: 1},
            transition: { duration: 0.9, delay: 0.85 },
            viewport: { once: true }
          }}
        >
          <h2>What technologies did you use?</h2>
          <p>Good question! It's the first project, where I used typescript, framer motion</p>
          <p>Project stack: 
            <b> React, </b>
            <b>Typescript, </b>
            <b>Framer motion, </b>
            <b>SCSS, </b>
            <b>React-router-dom</b>
          </p>
        </ContentWrapper>

        <ContentWrapper classList="col-12 col-md"
          animSettings={{
            initial: { x: -150, opacity: 0, scale: 0.1 },
            whileInView: { x: 0, opacity: 1, scale: 1 },
            transition: { duration: 1.1, delay: 1.2 },
            viewport: { once: true }
          }}
        >
          <h2>Why did you create React Quiz?</h2>
          <p>I created it for practice my frontend skills.</p>
          <p>I hope this project can be useful for someone though</p>
        </ContentWrapper>
      </section>
    </main>
  )
}

export default About