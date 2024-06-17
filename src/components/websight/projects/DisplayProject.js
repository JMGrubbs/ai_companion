const DisplayProject = (props) => {
    return (
        <li>
            <div>
                <h3>{props.props.project_name}</h3>
                <p><a href={props.props.project_url} sx={{}}>{props.props.project_url}</a></p>
                <p>{props.props.project_description}</p>
                <iframe src={props.props.project_url} width="400" height="150" title={props.props.project_name}></iframe>
            </div>
        </li>
    )
}

export default DisplayProject;