import "./SectionUrl.css";

function SectionUrl(props) {
  return (
    <section className="url-shortening">
      <div className="link-shortening-box">
        <input
          type="text"
          className={`input-link ${props.redBorder && "red-outline"}`}
          placeholder="Shorten a link here...
          "
          value={props.linkInput}
          onChange={props.handleLinkInput}
        />
        <button className="btn-shorten" onClick={props.handleClick}>
          Shorten It!
        </button>
      </div>
      <p className="warning">{props.warningText}</p>
    </section>
  );
}

export default SectionUrl;
