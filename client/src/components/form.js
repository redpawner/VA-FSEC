import React, { useState } from 'react';
import { addCertificate } from '../services/api-client';
import './form.css';

const Form = ({ certificates, setCertificates }) => {
  const [image, setImage] = useState({ preview: '', data: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let cert = new FormData();
    cert.append('certImages', event.target.picfile.files[0]);
    cert.append('title', event.target.title.value);
    cert.append('artist', event.target.artist.value);
    cert.append('year', event.target.year.value);

    try {
      await addCertificate(cert).then((res) => {
        const newCerts = [...certificates, res];
        setCertificates(newCerts);
      });
      setStatus('Successfully uploaded');
    } catch (error) {
      setStatus('Error with upload. Please try again');
    }
    setImage({ preview: '', data: '' });
    setTimeout(() => {
      setStatus('');
    }, 3000);
    event.target.reset();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <form
      className="container"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <h2 className="container__header">Upload certificate:</h2>
      <div className="container__field">
        <div className="container__label">
          <label htmlFor="title">Title: </label>
          <label htmlFor="artist">Artist: </label>
          <label htmlFor="year">Year: </label>
        </div>
        <div className="container__input">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Mona Lisa"
            maxLength={60}
            required
          ></input>

          <input
            type="text"
            name="artist"
            placeholder="Leonardo Da Vinci"
            maxLength={50}
            id="artist"
            required
          ></input>

          <input
            type="number"
            name="year"
            placeholder="1503"
            id="year"
            min="-9999"
            max="2022"
            required
          ></input>
        </div>
      </div>
      <label htmlFor="picfile">Upload image: </label>
      <div className="container__upload">
        <input
          type="file"
          name="picfile"
          id="picfile"
          onChange={handleFileChange}
          required
        ></input>
        <div>
          {image.preview && (
            <img src={image.preview} width="100" height="100" alt="preview" />
          )}
        </div>
      </div>
      <button className="container__button" type="submit">
        Upload
      </button>
      {status}
    </form>
  );
};

export default Form;
