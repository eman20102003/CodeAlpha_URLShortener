import { useState } from "react";
import { shortenUrl } from "./services/urlService";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setShortUrl("");

    try {
      const data = await shortenUrl(url);
      setShortUrl(data.shortUrl);
      setUrl("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>URL Shortener</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button type="submit">Shorten</button>
        </form>

        {shortUrl && (
          <div className="result">
            <p>Your Short URL</p>

            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
            >
              {shortUrl}
            </a>
          </div>
        )}

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default App;