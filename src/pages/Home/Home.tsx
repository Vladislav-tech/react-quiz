import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, ContentWrapper } from "../../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDatabase, faCogs, faRocket } from '@fortawesome/free-solid-svg-icons';

import './Home.scss';


function Home() {

  return (
    <main className="container">

      <section className="intro">
        <motion.h1 className="text-center mt-5 title"
          initial={{y: -500, scale: 2.5, opacity: 0}}
          animate={{y: 0, scale: 1, opacity: 1}}
          transition={{duration: 0.75}}
        >
          React
        </motion.h1>
        <motion.p className="text-center title h1"
          initial={{ y: -500, scale: 2.5, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.75 }}
        >
          Quizzes
        </motion.p>
        <motion.p className="h6 text-center mt-3"
          initial={{ y: -500, scale: 2.5, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.75, delay: 1.25 }}
        >
          Test yourself in React and make cool quizzes!
        </motion.p>
      </section>


      <section className="row mt-5">
        <ContentWrapper classList="col-12 col-md mb-3 mb-md-0 me-md-3 me-lg-5" animSettings={{
            initial: { x: -80, opacity: 0, scale: 0.1, rotate: 90 },
            whileInView: { x: 0, opacity: 1, scale: 1, rotate: 0 },
            transition: {duration: 0.7, delay: 0.5},
            viewport: {once: true}
        }}>
          <p className="text-center h1"><FontAwesomeIcon icon={faThumbsUp} /> </p>
          <h2 className="text-center">Simple</h2>
          <p>
            <b>React quiz</b> it is simple way to make quiz for everyone.
            You don't need any skills.
            Everyone can deal it.

          </p>
        </ContentWrapper>

        <ContentWrapper classList="col-12 col-md mb-3 mb-md-0 me-md-3 me-lg-5"
          animSettings={{
            initial: { x: -130, opacity: 0, scale: 0.1, rotate: 135 },
            whileInView: { x: 0, opacity: 1, scale: 1, rotate: 0},
            transition: { duration: 0.9, delay: 0.85 },
            viewport: {once: true}
          }}
        >
          <p className="text-center h1"><FontAwesomeIcon icon={faDatabase} /> </p>
          <h2 className="text-center">Remotely</h2>
          <p>
            All yours and your friends' quizzes will be saved to a remote database
            It means you always can get access anywhere to your favorites quizzes at any time!
          </p>
        </ContentWrapper>

        <ContentWrapper classList="col-12 col-md"
          animSettings={{
            initial: { x: -150, opacity: 0, scale: 0.1, rotate: 170 },
            whileInView: { x: 0, opacity: 1, scale: 1, rotate: 0 },
            transition: { duration: 1.1, delay: 1.2 },
            viewport: { once: true }
          }}
        >
          <p className="text-center h1"><FontAwesomeIcon icon={faCogs} /> </p>
          <h2 className="text-center">Flexible</h2>
          <p>
            Create quizzes on different topics. Flexibly customize them according to your needs and preferences.
          </p>
        </ContentWrapper>

      </section>

      <section className="explore-block">
        <motion.h2 
          initial={{x: -250, opacity: 0 }}
          whileInView={{x: 0, opacity: 1 }}
          transition={{duration: 0.75}}
          viewport={{ once: true }}
          className="mb-4"
          >
          So, what are you waiting for? 🤔
        </motion.h2>
        
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <Link to="/quizzes">
            <Button classList="dark lg">
              <span>Explore quizzes</span>
              <FontAwesomeIcon className="ms-1" icon={faRocket} />
            </Button>
          </Link>

        </motion.div>

      </section>
    </main>
  )
}

export default Home