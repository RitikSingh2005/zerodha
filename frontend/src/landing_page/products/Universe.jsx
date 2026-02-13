import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h1>The Zerodha Universe</h1>
        <p className="fs-5 mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="container">
          <div className="row text-center">
            <div className="col-4 mt-5">
              <div className="d-flex flex-column align-items-center h-100">
                <img
                  src="media/images/zerodhaFundhouse.png"
                  alt="image"
                  style={{
                    width: "200px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <p className="text-muted mt-4">
                  Our asset management venture <br />that is creating simple and
                  transparent index <br /> funds to help you save for your goals.
                </p>
              </div>
            </div>

            <div className="col-4 mt-5">
              <div className="d-flex flex-column align-items-center h-100">
                <img
                  src="media/images/sensibullLogo.svg"
                  alt="image"
                  style={{
                    width: "200px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <p className="text-muted mt-4">
                  Options trading platform that lets you <br /> create strategies,
                  analyze positions, and examine <br /> data points like open interest,
                  FII/DII, and more.
                </p>
              </div>
            </div>

            <div className="col-4 mt-5">
              <div className="d-flex flex-column align-items-center h-100">
                <img
                  src="media/images/tijori.svg"
                  alt="image"
                  style={{
                    width: "200px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <p className="text-muted mt-4">
                  Investment research platform <br /> that offers detailed insights on
                  stocks, <br /> sectors, supply chains, and more.
                </p>
              </div>
            </div>

            <div className="col-4 mt-5">
              <div className="d-flex flex-column align-items-center h-100">
                <img
                  src="media/images/streakLogo.png"
                  alt="image"
                  style={{
                   width: "200px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <p className="text-muted mt-4">
                  Systematic trading platform <br /> that allows you to create and
                  backtest <br /> strategies without coding.
                </p>
              </div>
            </div>

            <div className="col-4 mt-5">
              <div className="d-flex flex-column align-items-center h-100">
                <img
                  src="media/images/smallcaseLogo.png"
                  alt="image"
                  style={{
                    width: "200px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <p className="text-muted mt-4">
                  Thematic investing platform <br /> that helps you invest in
                  diversified <br /> baskets of stocks or ETFs.
                </p>
              </div>
            </div>

            <div className="col-4 mt-5">
              <div className="d-flex flex-column align-items-center h-100">
                <img
                  src="media/images/dittoLogo.png"
                  alt="image"
                  style={{
                    width: "200px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <p className="text-muted mt-4">
                  Personalized advice on life <br /> and health insurance. No spam <br /> and
                  no mis-selling.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
