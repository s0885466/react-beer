class RemoteData {
    //url = 'http://localhost:3001/beer';
    url = 'https://api.punkapi.com/v2/beers';

    getData(id) {
        const url = (id === undefined)
            ? this.url
            : this.url + '/' + id;
        return fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default RemoteData;