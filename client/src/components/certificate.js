import React, { useState, useEffect } from 'react';
import { getPic, delCertificate } from '../services/api-client';
import deleteIcon from '../images/icons8-delete.svg';
import './certificate.css';

const Certificate = ({ certInfo, certificates, setCertificates }) => {
  const { title, artist, year, picture } = certInfo;
  const url = {
    url: picture,
  };

  const [image, setImage] = useState();

  const removeCert = () => {
    const id = { _id: certInfo._id };
    delCertificate(id).then((res) => {
      const newCerts = [...certificates].filter((e) => e !== certInfo);
      setCertificates(newCerts);
    });
  };

  useEffect(() => {
    getPic(url).then((res) => setImage(res));
    // eslint-disable-next-line
  }, []);

  const altDesc = `Picture of ${title} by ${artist}`;

  return (
    <main className="certificate">
      <img className="certificate__picture" src={image} alt={altDesc}></img>
      <div className="certificate__container">
        <img
          src={deleteIcon}
          className="certificate__button"
          alt="Delete icon"
          onClick={removeCert}
        ></img>
        <div className="certificate__info">
          <h2>{title}</h2>
          <p>by</p>
          <h2>{artist}</h2>
          <h2>{year}</h2>
        </div>
        <img className="certificate__thumbnail" src={image} alt={altDesc}></img>
      </div>
    </main>
  );
};

export default Certificate;
