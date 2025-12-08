import type { JSX } from "react"
import { Link } from "react-router-dom"
import "./VisitenKarte.css"

export default function VisitenKarte(): JSX.Element {
    return (
        <div className="visitenkarte-page">
            <div className="business-card">
                <h1>Juri Bürkle</h1>
                <h2>Fullstack Developer</h2>
                <p className="technologien">Verwendete Technologien</p>
                <div className="columns">
                    <ul>
                        <li>- Python -</li>
                        <li>- Java -</li>
                        <li>- Git -</li>
                    </ul>
                    <ul>
                        <li>- HTML -</li>
                        <li>- CSS -</li>
                        <li>- GitHub -</li>
                    </ul>
                    <ul>
                        <li>- JavaScript -</li>
                        <li>- TypeScript -</li>
                        <li>- SQL -</li>
                    </ul>
                </div>
                <div className="contact-info">
                    <a className="email" href="mailto:rastopka@gmx.de">
                        Email: rastopka@gmx.de
                    </a>
                    <div>
                        <br />
                        <Link className="link" to="/lebenslauf">Link zum Lebenslauf</Link>
                        <br />
                        <p className="phone">
                            <span className="phone-marquee">P h o n e:</span>
                            <a href="tel:+4917632240227" target="_blank" rel="noreferrer"> +49 17632240227</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
