import React from "react";

const Pricing = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-4 mb-5 ">
          <div className="row text-center">
            <div className="col ">
              <img src="media/images/pricingEquity.svg" alt="img" />
              <p className="text-muted ">
                Free account <br /> opening
              </p>
            </div>
            <div className="col ">
              <img src="media/images/pricingEquity.svg" alt="img" />
              <p className="text-muted ">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col ">
              <img src="media/images/intradayTrades.svg" alt="img" />
              <p className="text-muted">
                Intraday and
                <br />
                F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
