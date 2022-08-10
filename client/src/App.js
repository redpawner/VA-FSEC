import './App.css';
import { useState, useEffect } from 'react';
import { getCertificates } from './services/api-client';
import Form from './components/form';
import Certificate from './components/certificate';

function App() {
  const [certificates, setCertificates] = useState([]);
  const [artfilter, setArtFilter] = useState('');

  const updateFilter = (event) => {
    setArtFilter(event.target.value);
  };

  useEffect(() => {
    try {
      getCertificates().then((res) => setCertificates(res));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const mapCerts = certificates
    .filter((cert) => {
      return cert.artist.includes(artfilter);
    })
    .map((cert) => {
      return (
        <Certificate
          key={cert._id}
          certInfo={cert}
          certificates={certificates}
          setCertificates={setCertificates}
        />
      );
    });

  return (
    <>
      <header className="header">
        <h1>My Art Collection</h1>
        <div className="header__filter">
          <label htmlFor="artistfilter">Artist filter: </label>
          <input
            className="header__input"
            name="artistfilter"
            id="artistfilter"
            placeholder="Leonardo"
            onChange={updateFilter}
          ></input>
        </div>
      </header>
      <main className="app">
        {mapCerts}
        <Form certificates={certificates} setCertificates={setCertificates} />
      </main>
    </>
  );
}

export default App;
