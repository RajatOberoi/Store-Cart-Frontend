import { Link } from "react-router-dom";
import "./Failure.scss";

const FailurePage = () => {
  return (
    <div className="failure-page">
      <h1>Payment Failed!!</h1>
      <p>For any product related query,drop an email to</p>
      <p>rajat71011@gmail.com</p>
      <Link className="rth" to="/">Return to Home Page</Link>
    </div>
  );
};

export default FailurePage;