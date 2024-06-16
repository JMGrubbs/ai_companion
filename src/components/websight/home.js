import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to={`/ai-chat`} style={{ textDecoration: 'none' }}>
                <h3>Chat</h3>
            </Link>
        </div>
    );
}

export default Home;