const footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
                  <div className="row">
                      <div className="footer-col">
                          <img src="images/aduLogo.jpg" alt="Adamson Logo"  />
                      </div>
            <div className="footer-col">
              <h4>Development Team</h4>
              <ul>
                <li>
                  <a href="#">Adrian Zapata</a>
                </li>
                <li>
                  <a href="#">Yuan Hermoso</a>
                </li>
                <li>
                  <a href="#">Nathaniel Gracilla</a>
                </li>
                <li>
                  <a href="#">Arthur William Berces</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Capstone Project</h4>
              <ul>
                <li>
                  <a href="#">Enriched Electronic Fables for Children through BI-LSTM Emotional Analysis in a Music Recommender System</a>
                </li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Contact us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="credit">
          <h1>
            {" "}
            Copyright 2023 <span>CSRPitoy</span> | All rights reserved{" "}
          </h1>
        </div>
      </footer>
    </>
  )
}

export default footer
