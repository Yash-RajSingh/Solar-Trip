import "./AdBanner.css";
import joinUs from "../../images/join.jfif";

export default function AdBanner() {
  return (
    <>
      <div id="AdBannerContainer">
        <div className="BannerDetailContainer">
          <h4>Book a limited trip to space absolutely free!</h4>
          <p>
            The brand new YRS-X1 rocket is all set to take off and in it could be
            you. Highball Aviation's is organising a one time trip to space with
            5000 passesngers and among them could be you. Register yourself on
            the Solar Trip's register sections and win a chance to go on a once
            in a life time trip to space and bring a partner with you!
          </p>
          <button>Book Now!</button>
        </div>
        <div className="BannerImageContainer">
          <img src={joinUs} />
        </div>
      </div>
    </>
  );
}
