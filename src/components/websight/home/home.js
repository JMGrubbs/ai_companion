import './Home.css';

const Home = () => {
    return (
        <div className={`app-content`}>
            <header>
                <h1>John Grubbs</h1>
                <h3>Full-Stack Software Engineer</h3>
            </header>
            <main>
                <iframe
                    src={`${process.env.PUBLIC_URL}/pdfs/John_Grubbs.pdf`}
                    width="100%"
                    height="500px"
                    title="PDF Viewer"
                ></iframe>
                <div className="home-summary">
                    <h3>SUMMARY</h3>
                    <text>
                        Experienced Full-Stack Software Engineer skilled in developing sophisticated web applications and API services using JavaScript, Python, PHP, Ruby, and SQL. Expertise in creating scalable, secure applications with a focus on performance and maintainability. Proficient in frontend frameworks like React and Angular, backend frameworks such as Flask, FastAPI, Node.js and Ruby on Rails, and SQL databases including PostgreSQL, and MySQL. Experienced with AWS for efficient, RESTful service hosting. Committed to best practices and collaborative teamwork, with a continuous pursuit of new technologies to enhance development.
                    </text>
                    <h3>SKILLS</h3>
                    <p>
                        <span>● Languages & Frameworks: Python, FastAPI, Flask, JavaScript, React, Node.js, PHP, Laravel, Ruby, Ruby on Rails</span><br />
                        <span>● Databases: SQL, PostgreSQL, MySQL, Redis</span><br />
                        <span>● Tools & Platforms: GitHub, Docker, GitLab, AWS Cloud Web Hosting Services, Linux</span>
                    </p>
                    <h3>PROFESSIONAL EXPERIENCE</h3>
                    <p>Pop Acta Media, Lead Software/Systems Engineer</p>
                    <ul>
                        <li>Improved Processes:
                            <ul>
                                <li>Automated reporting processes for 1M+ active subscribers.</li>
                                <li>Automated revenue data collection and aggregation using internal and external API services.</li>
                                <li>Designed and developed a new internal web application capable of connecting multiple external APIs to deploy and track email data, reducing $750k in annual costs.</li>
                                <li>Created an SMS/MMS sending platform that increased Pop Acta sending capacity 10x and increased revenue by more than 400% in one year.</li>
                            </ul>
                        </li>
                        <li>Application Design:
                            <ul>
                                <li>Design full-stack RESTful applications for both internal tools and client-facing services. This includes frontend, backend, and database infrastructures.</li>
                                <li>Created AWS Cloud infrastructure to host internal company applications and external-facing services.</li>
                            </ul>
                        </li>
                        <li>Application Engineering:
                            <ul>
                                <li>Design, develop, test, and maintain API services in Python FastAPI and Flask for internal data management and data pipelines.</li>
                                <li>Build and maintain frontend applications in React JS, and Flask to streamline internal processes and accommodate external partner integrations and improvement requests.</li>
                                <li>Integrated existing and newly created infrastructure with internal and external API services to streamline data pipelines and increase throughput.</li>
                                <li>Manage and design database schemas for application and data warehousing.</li>
                            </ul>
                        </li>
                        <li>Security:
                            <ul>
                                <li>Developed frontend applications and API services with user authentication and database-level permissions.</li>
                                <li>Setup and maintain AWS Cloud server security and monitoring.</li>
                            </ul>
                        </li>
                        <li>Application Services:
                            <ul>
                                <li>Design, Develop and maintain AWS cloud infrastructure through a CI/CD pipeline, leading to improved uptime and system reliability.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </main>
            <footer>
                {/* <p>&copy; 2024 John Grubbs. All rights reserved.</p> */}
            </footer>
        </div>
    );
};

export default Home;
