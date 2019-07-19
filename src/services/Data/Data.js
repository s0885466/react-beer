//url = 'https://api.punkapi.com/v2/beers';

class Data {
    url = 'http://localhost:3001/beer';
    urlReserve = 'https://api.punkapi.com/v2/beers';

    /*getData(){
        const body = fetch(this.url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            });
        return body;
    }*/

    getData() {

        const body = Promise.race([
            fetch(this.url),
            fetch(this.urlReserve)
        ])
            .then((response) => {
                return response.json();
            });

        return body;
    }
}

export default Data;