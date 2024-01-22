import React, { useState } from 'react';
import './App.css';

function App() {
  const [showPresaleOptions, setShowPresaleOptions] = useState(false);

  const handlePresaleCheckboxChange = (e) => {
    setShowPresaleOptions(e.target.checked);
  };

  return (
    <div>
      <h1>Create Your NFT Collection</h1>
      <form action="your-processing-script.php" method="post">
        <label for="collectionName">Collection Name:</label>
        <input type="text" id="collectionName" name="collectionName" required />
        <label for="collectionDescription">Collection Description:</label>
        <textarea id="collectionDescription" name="collectionDescription" required />
        <label for="collectionSymbol">Collection Symbol (Optional):</label>
        <input type="text" id="collectionSymbol" name="collectionSymbol" />
        <label for="nftType">NFT Type:</label>
        <select id="nftType" name="nftType" required>
          <option value="erc-721">ERC-721 (Standard NFT)</option>
          <option value="erc-1155">ERC-1155 (Multi-edition NFT)</option>
        </select>
        <label for="mintPrice">Minting Price (ETH):</label>
        <input
          type="number"
          step="0.000000000000000001"
          min="0"
          id="mintPrice"
          name="mintPrice"
          required
        />
        <label for="fileUpload">Upload NFT Images (multiple files):</label>
        <input
          type="file"
          id="fileUpload"
          name="fileUpload"
          required
          multiple
          accept="image/*"
        />

        <label for="termsAndConditions">Terms & Conditions:</label>
        <input type="url" id="termsAndConditions" name="termsAndConditions" required />
        <button type="submit">Create NFT Collection</button>
      </form>
    </div>
  );
}

export default App;
  