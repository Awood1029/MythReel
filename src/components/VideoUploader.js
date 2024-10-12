import React, { useState } from 'react';

function VideoUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    // TODO: Implement file change logic
  };

  const handleUpload = () => {
    // TODO: Implement upload logic
  };

  return (
    <div className="video-uploader">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default VideoUploader;
