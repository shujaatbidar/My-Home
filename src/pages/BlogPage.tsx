import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BlogPage() {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="currentColor"
          className="bi bi-box-seam-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"
          />
        </svg>
        <h1 className="display-5 fw-bold text-body-emphasis">Welcome</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 mt-4"></p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              I'm Ready
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
