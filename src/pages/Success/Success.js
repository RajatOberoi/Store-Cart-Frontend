import { Link } from "react-router-dom";
import "./Success.scss";

const SuccessPage = () => {
  return (
    <div className="success-page">
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      <Link className="rth" to="/">Return to Home Page</Link>
    </div>
  );
};

export default SuccessPage;