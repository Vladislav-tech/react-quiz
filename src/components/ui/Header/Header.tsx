import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faQuestionCircle, faIdCard } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

function Header() {
  return (
    <header className="page-header">
      <div className="header-wrapper container fw-bold">
        <ul className="d-flex justify-content-between p-0">
          <li>
            <span>React Quiz</span>
            <FontAwesomeIcon className="ms-2" icon={faHome}/>
          </li>
          <li>
            <span>About</span>
            <FontAwesomeIcon className="ms-2" icon={faInfoCircle} />
          </li>
          <li>
            <span>Quizzes</span>
            <FontAwesomeIcon className="ms-2" icon={faQuestionCircle} />
          </li>
          <li>
            <span>Contacts</span>
            <FontAwesomeIcon className="ms-2" icon={faIdCard} />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header