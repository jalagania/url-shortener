import "./SectionServices.css";
import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";

function SectionServices() {
  return (
    <section className="services">
      <div className="url-display-box"></div>
      <div className="service-title-box">
        <h2>Advanced Statistics</h2>
        <p className="services-text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="service-boxes">
        <div className="service-box">
          <div className="service-icon">
            <img src={brand} alt="brand icon" />
          </div>
          <p className="service-title">Brand Recognition</p>
          <p className="service-text">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="service-box box-2">
          <div className="service-icon">
            <img src={records} alt="records icon" />
          </div>
          <p className="service-title">Detailed Records</p>
          <p className="service-text">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="service-box box-3">
          <div className="service-icon">
            <img src={customizable} alt="customizable icon" />
          </div>
          <p className="service-title">Fully Customizable</p>
          <p className="service-text">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionServices;
