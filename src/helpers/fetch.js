const baseURL = process.env.REACT_APP_API_URL;

const fetchSinToken = (enpoint, data, method = 'GET') => {
        const url = `${baseURL}/${enpoint}`;

        if(method === 'GET'){
            return fetch(url);
        }else{
            return fetch(url, {
                method: method,
                
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
  };


  

  export{
    fetchSinToken
  }