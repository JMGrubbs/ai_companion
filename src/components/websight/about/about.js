import InfoEl from './info.js';

function AppAbout() {
    return (
        <div className="aboutme-container">
            <div className="pagename-container">
                <h1> ABOUT ME</h1>
            </div>
            <div className="aboutinfo-container">
                <div className="aboutinfo-inner-container">
                    <div className="header-container">
                        <h1>Experience</h1>
                    </div>
                    <div className="list-container">
                        <ul>
                            <li>
                                <InfoEl title="Job One" text="Stuff about this position" />
                            </li>
                            <li>
                                <InfoEl title="Job Two" text="Stuff about this position" />
                            </li>
                            <li>
                                <InfoEl title="Job Three" text="Stuff about this position" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="aboutinfo-inner-container">
                    <div className="header-container">
                        <h1>Education</h1>
                    </div>
                    <div className="list-container">
                        <ul>
                            <li>
                                <InfoEl title="School One" text="Stuff about this school" />
                            </li>
                            <li>
                                <InfoEl title="School Two" text="Stuff about this school" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppAbout;