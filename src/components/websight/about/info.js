import react from 'react';

const InfoEl = (props) => {
    return (
        <div className="info-el">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}
export default InfoEl;