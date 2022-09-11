import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button, ContentWrapper } from "../../components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faDatabase, faCogs, faRocket } from '@fortawesome/free-solid-svg-icons';

import './Home.scss';


function Home() {
  return (
    <section className="container">

      <div className="intro">
        <h1 className="text-center mt-5">React quizzes</h1>
        <p className="h6 text-center mt-3">Test yourself in React and make cool quizzes!</p>
      </div>


      <div className="row mt-5">
        <ContentWrapper classList="col-12 col-md mb-3 mb-md-0 me-md-3 me-lg-5">
          <p className="text-center h1"><FontAwesomeIcon icon={faThumbsUp} /> </p>
          <h2 className="text-center">Simple</h2>
          <p>
            <b>React quiz</b> it is simple way to make quiz for everyone.
            You don't need any skills.
            Everyone can deal it.

          </p>
        </ContentWrapper>

        <ContentWrapper classList="col-12 col-md mb-3 mb-md-0 me-md-3 me-lg-5">
          <p className="text-center h1"><FontAwesomeIcon icon={faDatabase} /> </p>
          <h2 className="text-center">Remotely</h2>
          <p>
            All yours and your friends' quizzes will be saved to a remote database
            It means you always can get access anywhere to your favorites quizzes at any time!
          </p>
        </ContentWrapper>

        <ContentWrapper classList="col-12 col-md">
          <p className="text-center h1"><FontAwesomeIcon icon={faCogs} /> </p>
          <h2 className="text-center">Flexible</h2>
          <p>
            Create quizzes on different topics. Flexibly customize them according to your needs and preferences.
          </p>
        </ContentWrapper>
      </div>

      <div className="mt-5 pt-5">
        <h2>So, what are you waiting for? 🤔</h2>
        <Button classList="dark lg">
          <span>Explore quizzes</span>
           <FontAwesomeIcon className="ms-1" icon={faRocket}/>
        </Button>
      </div>
    </section>
  )
}

export default Home