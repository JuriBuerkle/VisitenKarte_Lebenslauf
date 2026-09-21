import type { JSX } from "react"
import { Link } from "react-router-dom"
import "./VisitenKarte.css"

export default function VisitenKarte(): JSX.Element {
    return (
        <div className="visitenkarte-page">
            <div className="business-card">
                <div className="card-content">
                    <div className="left-panel">
                        <h1>Juri Bürkle</h1>
                        <h2>Fullstack Developer</h2>

                        <div className="tech-panel">
                            <p className="label">Verwendete Technologien</p>

                            <div className="tech-grid">
                                <ul>
                                    <li><span className="tag tag-python">Py</span>Python</li>
                                    <li><span className="tag tag-java">Ja</span>Java</li>
                                    <li><span className="tag tag-git">Git</span>Git</li>
                                </ul>

                                <ul>
                                    <li><span className="tag tag-html">HTML</span>HTML</li>
                                    <li><span className="tag tag-css">CSS</span>CSS</li>
                                    <li><span className="tag tag-github">Git</span>GitHub</li>
                                </ul>

                                <ul>
                                    <li><span className="tag tag-js">JS</span>JavaScript</li>
                                    <li><span className="tag tag-ts">TS</span>TypeScript</li>
                                    <li><span className="tag tag-sql">SQL</span>SQL</li>
                                </ul>
                            </div>
                        </div>

                        <div className="stack-panel">
                            <p className="stack-title">Modern Stack & Integration</p>

                            <div className="stack-icons">
                                <span className="icon-cube" />
                                <span className="icon-cloud" />
                                <span className="icon-db" />
                                <span className="icon-api" />
                            </div>
                        </div>

                        <div className="contact-info">
                            <p>
                                <span className="label-inline">Email:</span>
                                <a href="mailto:rastopka@gmx.de">rastopka@gmx.de</a>
                            </p>

                            <p>
                                <span className="label-inline">LinkedIn:</span>
                                <a href="https://www.linkedin.com/in/juri-bürkle" target="_blank" rel="noreferrer">
                                    linkedin.com/in/juri-bürkle
                                </a>
                            </p>

                            <p className="resume-link">
                                <Link to="/lebenslauf">Link zum Lebenslauf</Link>
                            </p>

                            <p>
                                <span className="label-inline">Phone:</span>
                                <a href="tel:+4917632240227" target="_blank" rel="noreferrer">+49 17632240227</a>
                            </p>
                        </div>
                    </div>

                    <div className="right-panel">
                        <div className="portrait-frame">
                            <div className="portrait" />
                        </div>

                        <div className="qr-card">
                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://linkedin.com/in/juri-bürkle"
                                alt="QR Code"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
