export default function Reviews() {
  return (
    <section className="reviews-section">
      {/* Header */}
      <div className="reviews-header">
        <h1>Your reviews</h1>
        <p>
          last <span>30 days</span>
        </p>
      </div>

      {/* Overall Rating */}
      <div className="overall-rating">
        <h2>5.0</h2>
        <span>★</span>
        <p>overall rating</p>
      </div>

      {/* Rating Statistics */}
      <div className="rating-stats">
        <div className="rating-row">
          <span>5 stars</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "100%" }}></div>
          </div>
          <span>100%</span>
        </div>

        <div className="rating-row">
          <span>4 stars</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "0%" }}></div>
          </div>
          <span>0%</span>
        </div>

        <div className="rating-row">
          <span>3 stars</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "0%" }}></div>
          </div>
          <span>0%</span>
        </div>

        <div className="rating-row">
          <span>2 stars</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "0%" }}></div>
          </div>
          <span>0%</span>
        </div>

        <div className="rating-row">
          <span>1 star</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "0%" }}></div>
          </div>
          <span>0%</span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="reviews-list">
        <h2>Reviews (2)</h2>

        {/* Review 1 */}
        <article className="review-card">
          <div className="review-stars">★ ★ ★ ★ ★</div>

          <h3>
            Elliot <span>December 1, 2022</span>
          </h3>

          <p>
            The beach bum is such as awesome van! Such as comfortable trip. We
            had it for 2 weeks and there was not a single issue. Super clean
            when we picked it up and the host is very comfortable and
            understanding. Highly recommend!
          </p>
        </article>

        {/* Review 2 */}
        <article className="review-card">
          <div className="review-stars">★ ★ ★ ★ ★</div>

          <h3>
            Sandy <span>November 23, 2022</span>
          </h3>

          <p>
            This is our third time using the Modest Explorer for our travels and
            we love it! No complaints, absolutely perfect!
          </p>
        </article>
      </div>
    </section>
  );
}
