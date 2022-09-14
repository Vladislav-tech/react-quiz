import { Button, ContentWrapper } from "../../components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="container mt-5">
      <ContentWrapper>
        <div className="display-1 text-center" >
          <FontAwesomeIcon icon={faSadTear} />
        </div>
        <h1 className="display-2 text-center">404</h1>
        <p className="text-center fs-4">The page you were looking for does not exist</p>

        <div className="d-flex justify-content-center">
          <Link to="/">
            <Button classList="lg">
              Go home
            </Button>
          </Link>
        </div>


      </ContentWrapper>
    </main>
  );
}

export default NotFoundPage