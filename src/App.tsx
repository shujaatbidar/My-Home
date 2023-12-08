import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import BlogPage from './pages/BlogPage';
export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Bidar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="px-4 py-5 my-5 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="cornflowerblue"
          className="bi bi-airplane-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
        </svg>
        <h1 className="display-5 fw-bold text-body-emphasis">Welcome</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 mt-4">
            Are you poised to embark on this journey? Ready to embrace the
            unknown, explore the uncharted, and unearth the treasures that
            await? With anticipation bubbling within and a spark of excitement
            in your eyes, are you prepared to take that first step into the
            realm of endless possibilities? If so, let's venture forth together,
            for the path ahead is waiting to unfold its wonders, and the journey
            beckons for your presence.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a className="btn btn-primary btn-lg px-4 gap-3" href="blog">
              {' '}
              I'm Ready{' '}
            </a>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </div>

      <section id="features">
        <div className="px-4 py-5 my-5 text-center">
          <div className="row">
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNzErQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--99a1fcea5256256681baf100b5636dff94ed962f/France.jpeg"
                alt="dog image"
                height="140"
                width="140"
              />

              <h2 className="fw-normal">France</h2>
              <p>
                Discover France's exquisite culture, cuisine, and captivating
                historical landmarks now!
              </p>
              <p>
                <a className="btn btn-secondary" href="blog">
                  Explore »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                src="https://img.delicious.com.au/uRXbz4JV/del/2022/07/spain-set-to-ask-tourists-to-prove-they-can-spend-y100-per-day-171202-2.jpg"
                alt="dog image"
                height="140"
                width="140"
              />
              <h2 className="fw-normal">Spain</h2>
              <p>
                Experience vibrant culture, stunning landscapes, and delectable
                cuisine in Spain!
              </p>
              <p>
                <a className="btn btn-secondary" href="blog">
                  Explore »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="bd-placeholder-img rounded-circle"
                src="https://images.unsplash.com/photo-1470756544705-1848092fbe5f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFraXN0YW58ZW58MHx8MHx8fDA%3D"
                alt="dog image"
                height="140"
                width="140"
              />
              <h2 className="fw-normal">Pakistan</h2>
              <p>
                Explore Pakistan's rich culture, history, and breathtaking
                natural beauty today!
              </p>
              <p>
                <a className="btn btn-secondary" href="blog">
                  Explore »
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
