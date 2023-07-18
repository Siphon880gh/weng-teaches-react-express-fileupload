import { useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [media, setMedia] = useState('')
  const [mediaName, setMediaName] = useState('');
  const [purgeCache, setPurgeCache] = useState('');

  const handleMedia = (e) => {
    const selectedMedia = e.target.files[0];
    setMedia(selectedMedia)
    setMediaName(selectedMedia.name)
    handleBackend(selectedMedia);
    setTimeout(()=>{
      setPurgeCache(Date.now());
    }, 1000)
  } // handleMedia

  const handleBackend = async (mediaFile) => {
    const formData = new FormData();
    formData.append('media', mediaFile);

    try {
      const response = await fetch("/uploads", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        console.log("Upload successful");
        var result = await response.json();
        console.log("Server response: ", result); // Log the entire result object
        let fileUrl = 'http://localhost:3001' + result.filePath;
        console.log("File URL: ", fileUrl);
      } else {
        console.error("Upload unsuccessful");
      }

    } catch (error) {
      console.error(error);
    }
  } // handleBackend


  return (
    <div className="App">
      <header className="App-header">
        <h1>Test Upload: Express-fileupload</h1>
        <p>Upload an <code>a.png</code>, <code>b.png</code>, <code>c.png</code>, <code>d.png</code> to test. - Weng</p>
        <div className="gallery">
          <img className="image" src={`uploads/a.png?v=${purgeCache}`}></img>
          <img className="image" src={`uploads/b.png?v=${purgeCache}`}></img>
          <img className="image" src={`uploads/c.png?v=${purgeCache}`}></img>
          <img className="image" src={`uploads/d.png?v=${purgeCache}`}></img>
        </div>

        <img src={mediaName?`uploads/${mediaName}?v=${purgeCache}`:logo} className={mediaName?"Image-preview":"App-logo"} alt="logo" />
        <form onSubmit={(event) => { event.preventDefault(); }}>
          <input type="file" id="upload-file" onChange={handleMedia} />
          <label class="d-block small" for="upload-file">{mediaName?mediaName:"Choose File"} </label>
        </form>
        <br/><br/>

      </header>
    </div>
  );
}

export default App;
