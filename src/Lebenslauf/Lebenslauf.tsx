import type { JSX } from "react";
import { Link } from "react-router-dom";
import "./Lebenslauf.css";

export default function Lebenslauf(): JSX.Element {
    return (
        <div className="lebenslauf-page">
            <Link className="button" to="/">Visiten Karte</Link>
            <div className="resume-container">
                <h1>Juri Bürkle</h1>
                <header className="header">
                    <div className="contact-info">
                        <p>Schillerstraße 21, 64569, Nauheim</p>
                        <p>Mobil:
                            <span> +4917632240227 *</span>
                        </p>
                        <a className="email" href="mailto:rastopka@gmx.de">Email: <span>rastopka@gmx.de *</span></a>
                        <p>Geburtsdatum: 28.8.1973</p>
                    </div>
                    <div className="profile-photo">
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocLSKl59L4pC3hFUlqnIboNid0MgBg_HML9p7cLu1U56kyVz2y6c=s288-c-no"
                            alt="Фото профиля" />
                    </div>
                </header>

                <main className="main-content">
                    <section className="section">
                        <h2>KOMPETENZEN</h2>
                        <div className="columns">
                            <ul className="text">
                                <li>Entscheidungsfähigkeit</li>
                                <li>Sinn für das Notwendige</li>
                                <li>Verantwortungsbewusstsein</li>
                                <li>Motivation und Ausdauer</li>
                            </ul>
                            <ul className="text">
                                <li>Kommunikationsstärke</li>
                                <li>Selbstständige Arbeitsweise</li>
                                <li>Teamfähigkeit</li>
                                <li>Lernbereitschaft</li>
                            </ul>
                        </div>
                    </section>

                    <section className="section">
                        <h2>ERFAHRUNG</h2>
                        <div className="entry">
                            <h3>Fullstack Developer, Softwareentwickler</h3>
                            <p><span>Quereinsteiger :</span> 11.2024 - Heute</p>
                            <h3>Eigene Projekte</h3>
                            <p><a href="https://weather-app-mfr7.vercel.app/" target="_blank" rel="noopener noreferrer"><span>Weather APP :</span> weather-app-mfr7.vercel.app/</a></p>
                            <p><a href="https://acmessenger.com" target="_blank" rel="noopener noreferrer"><span>AC Messenger :</span> acmessenger.com</a></p>
                        </div>
                    </section>

                    <section className="section">
                        <h2>BERUFLICHE ERFAHRUNG</h2>
                        <div>
                            <p><span>Quereinsteiger:</span> 12.2015 - Heute</p>
                            <p>Radeberger Gruppe Niederlassung Bischofsheim</p>
                            <p><span>Quereinsteiger:</span> 2004 - 2015</p>
                            <p>Acker Transport Spedition</p>
                        </div>
                    </section>

                    <section className="section">
                        <h2>AUSBILDUNG</h2>
                        <div className="entry">
                            <h3>Fullstack Development</h3>
                            <p>11.2024 - 02.2026</p>
                            <p>ATI Technology Berlin</p>
                        </div>
                        <div className="entry">
                            <h3>Diplom Sportlehrer</h3>
                            <p>1988 - 1992</p>
                            <p>Universität Duschanbe - Tadschikistan</p>
                        </div>
                    </section>

                    <section className="section">
                        <h2>SPRACHEN</h2>
                        <div className="language-entry">
                            <p>Russisch: Muttersprache</p>
                            <p>Deutsch: C1</p>
                            <p>Englisch: A1</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
