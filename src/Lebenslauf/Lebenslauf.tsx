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
                        <p>Wohnort: 64569 Nauheim</p>
                        <p>Mobil:
                            <span> +4917632240227 *</span>
                        </p>
                        <a className="email" href="mailto:rastopka@gmx.de">Email: <span>rastopka@gmx.de *</span></a>
                        <p>Geburtsdatum: 28.06.1973</p>
                    </div>
                    <div className="profile-photo">
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocLSKl59L4pC3hFUlqnIboNid0MgBg_HML9p7cLu1U56kyVz2y6c=s288-c-no"
                            alt="Фото профиля" />
                    </div>
                </header>

                <main className="main-content">
                    <section className="section">
                        <h2>PROFIL</h2>
                        <div className="entry">
                            <p>Zielorientierter Fullstack-Entwickler mit AZAV-zertifizierter Ausbildung und praktischer Erfahrung bei der UpTeam GmbH. Fundierte Kenntnisse in Java 17 (Spring Boot, Spring Security), React, TypeScript und moderner REST-API-Architektur.</p>
                        </div>
                    </section>
                    <section className="section">
                        <h2>TECHNISCHE KOMPETENZEN</h2>
                        <div className="columns">
                            <ul className="text">
                                <li>Programmiersprachen: Java 17, JavaScript (ES6+), TypeScript, Python, SQL, HTML5/CSS3</li>
                                <li>Backend & Security: Spring Boot, Spring Security, JPA, REST APIs, Node.js, Express, JWT, WebSockets, MySQL, PostgreSQL</li>
                                <li>Frontend & Mobile: React, React Native, Redux Toolkit, Tailwind CSS, Formik, Axios, Expo, WebRTC</li>
                                <li>Tools & Methodik: Git/GitHub, Docker, Digital Ocean, Linux, Trello, Agile/Scrum, JUnit, Maven</li>
                            </ul>
                        </div>
                    </section>

                    <section className="section">
                        <h2>PRAKTISCHE ERFAHRUNG / IT-PROJEKTE</h2>
                        <div className="entry">
                            <p>03.2026 - 04.2026 | Praktikant Softwareentwicklung
                                UpTeam GmbH, Berlin</p>
                                <ul className="text">
                                    <li>• Frontend: Entwicklung responsiver UIs mit React, TypeScript, Tailwind CSS, Formik, Redux Toolkit und Axios.</li>
                                    <li>• Backend: Entwicklung sicherer RESTful APIs mit Java 17, Spring Boot (Spring Security, JPA, Spring Mail) und JWT-Authentifizierung.</li>
                                    <li>• Datenbanken & Agile: Einbindung von MySQL-Datenbanken; Arbeit nach Agile/Scrum-Methodik (GitHub, Trello, Sprint Meetings).</li>
                                </ul>
                            <h3>Eigene Projekte</h3>
                            <p><a href="https://acmessenger.com" target="_blank" rel="noopener noreferrer"><span>AC Messenger :</span> acmessenger.com</a></p>
                            <p>
                                Fullstack Cross-Platform App (React Native, Node.js, Express, PostgreSQL, WebSockets, WebRTC, Docker, AES-256-Verschlüsselung).
                            </p>
                            <p><a href="https://github.com/JuriBuerkle/ChgAssetAgent" target="_blank" rel="noopener noreferrer"><span>ChgAssetAgent :</span> github.com/JuriBuerkle/ChgAssetAgent</a></p>
                            <p> Tech-Stack: NET 8, C#, PostgreSQL, Docker, Semantic, Kernel </p>
                            <p><a href="https://github.com/JuriBuerkle/FreshControl" target="_blank" rel="noopener noreferrer"><span>FreshControl :</span> github.com/JuriBuerkle/FreshControl</a></p>
                            <p> Tech-Stack: Backend: Java 17, Spring Boot 3
                                Datenbank: JDBC / PostgreSQL (H2 für lokale Tests)
                                GUI / UI: Java Swing (Desktop Notification)
                                REST API: Spring Web
                                Build-Tool: Maven </p>
                            <p><a href="https://weather-app-mfr7.vercel.app/" target="_blank" rel="noopener noreferrer"><span>Weather APP :</span> weather-app-mfr7.vercel.app/</a></p>
                            <p> Tech-Stack: OpenWeatherMap Responsive Web-Anwendung (React, REST APIs) </p>
                            
                        </div>
                    </section>

                    <section className="section">
                        <h2>BERUFLICHE ERFAHRUNG</h2>
                        <div>
                            <p><span>Quereinsteiger:</span> 12.2015 - 12.2025</p>
                            <p>Radeberger Gruppe Niederlassung Bischofsheim</p>
                            <p><span>Quereinsteiger:</span> 2004 - 2015</p>
                            <p>Acker Transport Spedition</p>
                        </div>
                    </section>

                    <section className="section">
                        <h2>AUSBILDUNG</h2>
                        <div className="entry">
                            <h3>Fullstack Development</h3>
                            <p>11.2024 - 04.2026</p>
                            <p>Weiterbildung zum Fullstack Developer (AZAV / DEKRA zertifiziert)
                                AIT TR GmbH (AIT Technology Institute), Berlin</p>
                            <p> Schwerpunkte: Java Core, Spring Boot, Hibernate, Python, JavaScript (ES6+), TypeScript, React, Redux, SQL/NoSQL, Digital Ocean, Linux, Git.</p>
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
                            <p>Englisch: B2</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
