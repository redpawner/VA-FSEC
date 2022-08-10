const baseURL = process.env.REACT_APP_SERVERNAME;

export const getCertificates = async () => {
  const options = {
    method: 'GET',
  };
  return await fetch(baseURL + '/', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const addCertificate = async (certificate) => {
  const options = {
    method: 'POST',
    'Content-Type': 'multipart/form-data',
    body: certificate,
  };
  return await fetch(baseURL + '/upload', options)
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};

export const getPic = async (url) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(url),
  };
  return await fetch(baseURL + '/getPicture', options)
    .then((res) => res.blob())
    .then((res) => {
      return URL.createObjectURL(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
