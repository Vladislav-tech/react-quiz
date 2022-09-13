import { motion } from 'framer-motion';
import { EmailSvg, GithubSvg, TelegramSvg } from '../../assets/svg';
import { ContentWrapper } from '../../components';

import './Contacts.scss';

function Contacts() {
  return (
    <main className="container">
      <motion.h1 className="text-center mt-5 title"
        initial={{ y: -500, scale: 2.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        Contacts
      </motion.h1>

      <section className="mt-5">
        <ContentWrapper>
          <a 
            href="https://github.com/Vladislav-tech" 
            className="d-flex align-items-center contact-link mb-3"
            target="_blank"
            rel="noreferrer"
          >
            <GithubSvg width="30" fill="#F5F5F5" className="me-2"/>
             <b className="fs-4">Github</b> 

          </a>
          <a 
            href="https://t.me/v_1335" 
            className="d-flex align-items-center contact-link mb-3"
            target="_blank"
            rel="noreferrer"
          >
            <TelegramSvg width="30" fill="#F5F5F5" className="me-2" />
            <b className="fs-4">Telegram</b>

          </a>
          <a
            href="mailto: vladislav.frint@gmail.com"
            className="d-flex align-items-center contact-link"
            target="_blank"
            rel="noreferrer"
          >
            <EmailSvg width="30" fill="#F5F5F5" className="me-2" />
            <b className="fs-4">vladislav.frint@gmail.com</b>

          </a>
        </ContentWrapper>
      </section>
    </main>
  );
}

export default Contacts