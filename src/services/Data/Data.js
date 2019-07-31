class Data {
    url = 'http://localhost:3001/beer';
    urlReserve = 'https://api.punkapi.com/v2/beers';

    getData() {
        return Promise.race([
            fetch(this.url),
            fetch(this.urlReserve)
        ])
            .then((response) => {
                return response.json();
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default Data;