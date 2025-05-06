function App() {
  return (
    <div className="container-fluid py-4 px-5">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3">
        <h1 className="text-primary">DevJobs</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Post a Job
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mb-5">
        <h2 className="mb-3">Find Your Dream Developer Job</h2>
        <p className="mb-4 text-muted">
          Explore opportunities, connect with recruiters, and grow your career.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Search by skill, role, or location..."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="row text-center gx-4 gy-4">
        <div className="col-md-4">
          <div className="p-4 shadow-sm bg-light rounded h-100">
            <h3 className="mb-2">Search Jobs</h3>
            <p>Filter jobs by skill, experience, and location.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm bg-light rounded h-100">
            <h3 className="mb-2">Post a Job</h3>
            <p>Employers can post listings to find the right developers.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 shadow-sm bg-light rounded h-100">
            <h3 className="mb-2">Connect</h3>
            <p>Engage with recruiters and build your network.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
