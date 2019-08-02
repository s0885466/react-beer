class RemoteData {
    //url = 'http://localhost:3001/beer';
    url = 'https://api.punkapi.com/v2/beerss';

    getData(id) {
        const url = (id === undefined)
            ? this.url
            : this.url + '/' + id;
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    return Promise.reject(response.status + ' Ошибка ' + url);
                }
                return response.json();
            })
    }
}

export default RemoteData;