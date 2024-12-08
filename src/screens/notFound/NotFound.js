import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="not-found-page">
      <h1 className='text-danger'>404</h1>
      <h1 className='text-danger'> Not Found</h1>
      <p>The page you are looking for does not exist.</p>
     <div className="buttons">
     <button className='btn btn-info back-btn'  onClick={()=>navigate(-1)}>Go Back</button>
     <button className='btn btn-info' onClick={()=> navigate("/")}>Go to Home</button>
     </div>
    </div> */}

      <div id="container">
        <h1>404</h1>

        <h3>Looks like the page you're looking for doesn't exist.</h3>

        <div className="">
          <button style={{ marginRight: "30px" }} onClick={() => navigate(-1)}>
            Take me Back
          </button>
          <button onClick={() => navigate("/")}>Take me home</button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
