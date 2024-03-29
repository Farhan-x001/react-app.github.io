import { useLocation } from "react-router";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import CardGroup from "../../components/cards/CardGroup";
import CompanysMarquee from "../../components/CompanysMarquee/CompanysMarquee";
import CandidatesPlaced from "../../components/CandidatesPlaced/CandidatesPlaced";
import Feedback from "../../components/Feedback/Feedback";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {/* <Header /> */}
      {/* <div className="home">
      
        <Posts />
        <Sidebar />
      </div> */}

      <div id="carouselExampleDark" className="carousel carousel-dark slide h-50">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner h-50">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img
              src="https://source.unsplash.com/1440x400/?college,coding"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>THE START</h5>
              <p>Dreams don't work unless you do.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="https://source.unsplash.com/1440x400/?tech,college"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>SELECT</h5>
              <p>Opportunities don't happen. You create them.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/1440x400/?coder,interns"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>GET YOUR SELF</h5>
              <p>The only place where success comes before work is in the dictionary.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <CardGroup />
      <CandidatesPlaced />
      <CompanysMarquee />
      <Feedback />

    </>
  );
}
