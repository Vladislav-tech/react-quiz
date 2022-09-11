import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ContentWrapper, Dropdown } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { HtmlSvg, CssSvg, JsSVG, ReactSVG } from '../../assets/svg';

function Quiz() {
  return (
    <main className="container">
      <motion.h1 className="text-center mt-5 title"
        initial={{ y: -500, scale: 2.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        Quizzes

      </motion.h1>

      <section className="row mt-5">
        <ContentWrapper classList="col-12 col-md mb-3 mb-md-0 me-md-3 me-lg-5">
          <h2>Available quizzes</h2>
          <p>Here you can choose one of the available quizzes created initially.</p>
          <p>There are a few basic questions about choosed technology.</p>
          <Dropdown
            title="Quizzes"
            dropdownItems={
              [<span>
                <span className="me-2">HTML</span>  <HtmlSvg width="16" />
              </span>,
              <span>
                <span className="me-2">CSS</span>  <CssSvg width="16" />
              </span>
                ,
              <span>
                <span className="me-2">JS</span>  <JsSVG width="16" />
              </span>
                ,
              <span>
                <span className="me-2">React</span>  <ReactSVG width="16" />
              </span>
              ]
            } />
        </ContentWrapper>

        <ContentWrapper classList="col-12 col-md mb-3 mb-md-0 me-md-3 me-lg-5">
          <h2>Users quizzes</h2>

          <p>Do you want something new?.</p>
          <p>How about some quizzes created by people like? Any topic, any difficulty. You should try!</p>

          <Dropdown
            title="Quizzes"
            dropdownItems={
              [<span>
                <span className="me-2">HTML</span>  <HtmlSvg width="16" />
              </span>,
              <span>
                <span className="me-2">CSS</span>  <CssSvg width="16" />
              </span>
                ,
              <span>
                <span className="me-2">JS</span>  <JsSVG width="16" />
              </span>
                ,
              <span>
                <span className="me-2">React</span>  <ReactSVG width="16" />
              </span>
              ]
            } />
        </ContentWrapper>
      </section>

      
    </main>
  )
}

export default Quiz