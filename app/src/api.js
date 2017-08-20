class Api {
  static get(url) {
    return fetch(url, {
      credentials: 'include',
    }).then(response => response.json());
  }

  static post(url, data) {
    return fetch(url, {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  }

  static spotifyGet(url) {
    return fetch(url, {
      credentials: 'include',
      mode: 'cors',
      header: {
        'Access-Control-Allow Origin': '*',
      },
    }).then(response => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  static spotifyPost(url, data) {
    return fetch(url, {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors',
        redirect: 'follow',
      },
      method: 'POST',
    });
  }
}

export default Api;
