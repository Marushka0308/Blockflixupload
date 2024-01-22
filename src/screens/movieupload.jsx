import React from 'react'

const MovieUpload = () => {
  return (
    <div>
      <h1>Upload Your Movie</h1>
      <form action="your-processing-script.php" method="post" encType="multipart/form-data">
        <label htmlFor="movieFile">Movie File (MP4 format):</label>
        <input type="file" id="movieFile" name="movieFile" required accept=".mp4" />

        <label htmlFor="movieTitle">Movie Title:</label>
        <input type="text" id="movieTitle" name="movieTitle" required />

        <label htmlFor="movieGenre">Genre:</label>
        <select id="movieGenre" name="movieGenre" required>
          <option value="">Select Genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
        </select>

        <label htmlFor="movieDescription">Movie Description:</label>
        <textarea id="movieDescription" name="movieDescription" required></textarea>

        <label htmlFor="moviePgRating">PG Rating:</label>
        <select id="moviePgRating" name="moviePgRating" required>
          <option value="">Select PG Rating</option>
          <option value="g">G (General Audiences)</option>
          <option value="pg">PG (Parental Guidance Suggested)</option>
          <option value="pg-13">PG-13 (Parents Strongly Cautioned)</option>
          <option value="r">R (Restricted)</option>
          <option value="nc-17">NC-17 (No One 17 and Under Admitted)</option>
        </select>

        <button type="submit">Upload Movie</button>
      </form>
    </div>
  );
}

export default MovieUpload;

