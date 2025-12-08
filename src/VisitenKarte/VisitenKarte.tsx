import type { JSX } from "react"


export default function VisitenKarte(): JSX.Element {

  return (
      <body>
          <div className="business-card">
              <h1>Juri Bürkle</h1>
              <h2>Fullstack Developer</h2>
              <p className="technologien">Verwendete Technologien</p>
              <div className="columns">
                  <ul>
                      <ol>- Python -</ol>
                      <ol>- Java -</ol>
                      <ol>- Git -</ol>
                  </ul>
                  <ul>
                      <ol>- HTML -</ol>
                      <ol>- CSS -</ol>
                      <ol>- GitHub -</ol>
                  </ul>
                  <ul>
                      <ol>- JavaScript -</ol>
                      <ol>- TypeScript -</ol>
                      <ol>- SQL -</ol>
                  </ul>
              </div>
              <div className="contact-info">
                  <a className="email" href="mailto:rastopka@gmx.de">
                      <summary>Email:</summary> rastopka@gmx.de
                  </a>
                  <div>
                      <br />
                      <a className="link zum resume" href="https://juribuerkle.github.io/VisitenkarteLebenslauf/Lebenslauf/index.html">Link zum
                          Lebenslauf</a>
                      <br />
                      <p className="phone">
                          <span className="phone-marquee">P h o n e:</span><a href="tel:+4917632240227" target="_blank"> +49 17632240227</a>
                      </p>
                  </div>
              </div>
          </div>
      </body>
  )
}
