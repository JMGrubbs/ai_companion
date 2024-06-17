import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className={`app-content`}>
            <header>
                <h1>Welcome to My Developer Portfolio</h1>
            </header>
            <Link to={`/ai-chat`} style={{ textDecoration: 'none' }}>
                <h3>Chat</h3>
            </Link>
            <main>
                <div className={`home-summary`}>
                    <h2>
                        Hi, I'm John Grubbs
                    </h2>
                    <p>
                        Experienced Full-Stack Software Engineer skilled in developing sophisticated web applications and API services using JavaScript, Python, PHP, Ruby, and SQL. Expertise in creating scalable, secure applications with a focus on performance and maintainability. Proficient in frontend frameworks like React and Angular, backend frameworks such as Flask, FastAPI, Node.js and Ruby on Rails, and SQL databases including PostgreSQL, and MySQL. Experienced with AWS for efficient, RESTful service hosting. Committed to best practices and collaborative teamwork, with a continuous pursuit of new technologies to enhance development.
                    </p>
                    <p>
                        Check out my projects and feel free to contact me!
                    </p>
                </div>
            </main>
            <footer>
                {/* <p>&copy; 2024 John Grubbs. All rights reserved.</p> */}
            </footer>
        </div>
    );
};

export default Home;
