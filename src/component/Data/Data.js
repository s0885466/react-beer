
//url = 'https://api.punkapi.com/v2/beers';

class Data {
    url = 'http://localhost:3001/beer';
    getData(){
        const body = fetch(this.url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            });
        return body;
    }
}

export default Data;