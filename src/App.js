import { useState } from "react";
import "./App.css";
import Attribution from "./components/Attribution";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionCta from "./components/SectionCta";
import SectionServices from "./components/SectionServices";
import SectionUrl from "./components/SectionUrl";

function App() {
  const [linkInput, setLinkInput] = useState("");
  const [warningText, setWarningText] = useState("");
  const [redBorder, setRedBorder] = useState(false);

  async function shortenUrl(url) {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();

    if (!data.ok) {
      setWarningText("Please add a valid link");
      setRedBorder(true);
      setLinkInput("");
      return;
    }

    const urlDisplayBox = document.querySelector(".url-display-box");

    const link = `<div class="url-display">
        <p class="url">${data.result.original_link}</p>
        <p class="url-short">${data.result.short_link2}</p>
        <button class="btn-copy">Copy</button>
      </div>`;

    urlDisplayBox.insertAdjacentHTML("afterbegin", link);

    if (urlDisplayBox.children.length > 3) {
      urlDisplayBox.lastChild.remove();
    }

    setWarningText("");
    setRedBorder(false);
    setLinkInput("");
  }

  function handleLinkInput(event) {
    setLinkInput(event.target.value);
  }

  function handleClick() {
    if (linkInput === "") {
      setWarningText("Please add a link");
      setRedBorder(true);
    } else {
      shortenUrl(linkInput);
    }
  }

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-copy")) {
      document.querySelectorAll(".btn-copy").forEach((btn) => {
        btn.textContent = "Copy";
        btn.style.backgroundColor = "#2acfcf";
      });

      const copyText = event.target.previousElementSibling.textContent;
      navigator.clipboard.writeText(copyText);
      event.target.textContent = "Copied!";
      event.target.style.backgroundColor = "#3b3054";
    }
  });

  return (
    <div>
      <Header />
      <main>
        <SectionCta />
        <SectionUrl
          linkInput={linkInput}
          warningText={warningText}
          redBorder={redBorder}
          handleClick={handleClick}
          handleLinkInput={handleLinkInput}
        />
        <SectionServices />
        <section className="cta">
          <h2 className="title-boost">Boost your links today</h2>
          <a href="#" className="btn-cta">
            Get Started
          </a>
        </section>
      </main>
      <footer>
        <Footer />
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
