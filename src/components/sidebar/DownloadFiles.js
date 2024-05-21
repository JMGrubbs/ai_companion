import React from 'react';

const DownloadFiles = () => {
    return (
        <>
            <h2>Download a file</h2>
            <ul>
                {/* {files.map((file, index) => (
          <li onClick={handleLinkClick} key={index}>
            {file}
            <a href={`/creations/${file}`} download>{file}</a>
          </li>
        ))} */}
            </ul>
        </>
    );
};

export default DownloadFiles;