import React from 'react'

const Dashboard = () => {
  return (
    <>
        {/* <!-- Row start --> */}
    <div className="row">
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="card shadow mb-4 p-3 rounded-2 justify-content-between flex-row">
          <div className="mt-3">
            <h5 className="text-secondary fw-light">Sales</h5>
            <h1 className="text-primary">3700</h1>
            <span className="badge border border-primary text-primary me-3">Today</span>
          </div>
          <div id="sparkline1"></div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 col-12">
        <div className="card shadow mb-4 p-3 rounded-2 justify-content-between flex-row">
          <div className="mt-3">
            <h5 className="text-secondary fw-light">Expenses</h5>
            <h1 className="text-primary">2500</h1>
            <span className="badge border border-primary text-primary me-3">Last week</span>
          </div>
          <div id="sparkline2"></div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 col-12">
        <div className="card shadow mb-4 p-3 rounded-2 justify-content-between flex-row">
          <div className="mt-3">
            <h5 className="text-secondary fw-light">Income</h5>
            <h1 className="text-primary">250K</h1>
            <span className="badge border border-primary text-primary me-3">Year 2022</span>
          </div>
          <div id="sparkline3"></div>
        </div>
      </div>
    </div>
    {/* <!-- Row end --> */}

    {/* <!-- Row starts --> */}
    <div className="row">
      <div className="col-xxl-12">
        <div className="card shadow mb-4">
          <div className="card-header">
            <h5 className="card-title">Sales by Location</h5>
          </div>
          <div className="card-body">
            {/* <!-- Row start --> */}
            <div className="row align-items-center">
              <div className="col-xxl-2 col-sm-3 col-12">
                <div className="d-grid gap-4">
                  <div className="d-flex align-items-center">
                    <div className="icon-box lg border border-primary rounded-4">
                      <img src="/assets/images/flags/1x1/us.svg" className="img-2x rounded-2"
                        alt="Bootstrap Gallery" />
                    </div>
                    <div className="ms-3">
                      <h6 className="text-muted">USA</h6>
                      <h3 className="m-0">$9500</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="icon-box lg border border-primary rounded-4">
                      <img src="/assets/images/flags/1x1/in.svg" className="img-2x rounded-2"
                        alt="Bootstrap Gallery" />
                    </div>
                    <div className="ms-3">
                      <h6 className="text-muted">India</h6>
                      <h3 className="m-0">$8700</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="icon-box lg border border-primary rounded-4">
                      <img src="/assets/images/flags/1x1/br.svg" className="img-2x rounded-2"
                        alt="Bootstrap Gallery" />
                    </div>
                    <div className="ms-3">
                      <h6 className="text-muted">Brazil</h6>
                      <h3 className="m-0">$7500</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 col-sm-6 col-12">
                <div id="world-map-markers3" className="chart-height-xxl position-relative"></div>
              </div>
              <div className="col-xxl-2 col-sm-3 col-12">
                <div className="d-grid gap-4">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="me-3 text-end">
                      <h6 className="text-muted">Turkey</h6>
                      <h3 className="m-0">$6900</h3>
                    </div>
                    <div className="icon-box lg border border-success rounded-4">
                      <img src="/assets/images/flags/1x1/tr.svg" className="img-2x rounded-2"
                        alt="Bootstrap Gallery" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="me-3 text-end">
                      <h6 className="text-muted">France</h6>
                      <h3 className="m-0">$6200</h3>
                    </div>
                    <div className="icon-box lg border border-success rounded-4">
                      <img src="/assets/images/flags/1x1/fr.svg" className="img-2x rounded-2"
                        alt="Bootstrap Gallery" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="me-3 text-end">
                      <h6 className="text-muted">Germany</h6>
                      <h3 className="m-0">$5800</h3>
                    </div>
                    <div className="icon-box lg border border-success rounded-4">
                      <img src="/assets/images/flags/1x1/de.svg" className="img-2x rounded-2"
                        alt="Bootstrap Gallery" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Row end --> */}
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Row ends --> */}

     {/* <!-- Row starts --> */}
    <div className="row">
      <div className="col-xxl-4 col-sm-6 col-12">
        <div className="card shadow mb-4">
          <div className="card-header">
            <h5 className="card-title">Weekly Sales</h5>
          </div>
          <div className="card-body">
            <div id="weekly-sales"></div>
            <div className="text-center my-4">
              <h2>
                6400
                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
              </h2>
              <p className="text-truncate m-0">
                15% higher than last month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-sm-6 col-12">
        <div className="card shadow mb-4">
          <div className="card-header">
            <h5 className="card-title">Deals</h5>
          </div>
          <div className="card-body">
            <div id="deals"></div>
            <div className="text-center my-4">
              <h2>
                2500
                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
              </h2>
              <p className="text-truncate m-0">
                29% higher than last month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-sm-6 col-12">
        <div className="card shadow mb-4">
          <div className="card-header">
            <h5 className="card-title">By Channel</h5>
          </div>
          <div className="card-body">
            <div id="channel"></div>
            <div className="text-center my-4">
              <h2>
                8950
                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
              </h2>
              <p className="text-truncate m-0">
                18% higher than last month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-sm-6 col-12">
        <div className="card shadow mb-4">
          <div className="card-header">
            <h5 className="card-title">New Customers</h5>
          </div>
          <div className="card-body">
            <div id="customers"></div>
            <div className="text-center my-4">
              <h2>
                7560
                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
              </h2>
              <p className="text-truncate m-0">
                16% higher than last month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-sm-6 col-12">
        <div className="card shadow mb-4">
          <div className="card-header">
            <h5 className="card-title">By Device</h5>
          </div>
          <div className="card-body">
            <div id="device"></div>
            <div className="text-center my-4">
              <h2>
                3860
                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
              </h2>
              <p className="text-truncate m-0">
                16% higher than last month
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-sm-6 col-12">
        <div className="card shadow mb-4">
          <div className="card-header">
            <h5 className="card-title">Demography</h5>
          </div>
          <div className="card-body">
            <div id="demography" className="d-flex justify-content-center"></div>
            <div className="text-center my-4">
              <h2>
                4250
                <i className="bi bi-arrow-up-right-circle-fill text-primary"></i>
              </h2>
              <p className="text-truncate m-0">
                24% higher than last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* <!-- Row ends --> */}
    
    </>
  )
}

export default Dashboard