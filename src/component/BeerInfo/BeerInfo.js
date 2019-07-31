import React, {Component} from 'react';
import './BeerInfo.css';
import Spinner from '../Spinner';
import {connect} from 'react-redux';

class BeerInfo extends Component {
    state = {
        loading: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        if ((this.props.dataBeers.selectedId)
            && (this.props.dataBeers.selectedId !== this.state.id)
            && (!this.state.loading)) {

            const id = this.props.dataBeers.selectedId;
            const url = `https://api.punkapi.com/v2/beers/${id}`;
            this.setState({loading: true});
            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then((data) => {

                    this.setState(() => {
                        return {...data[0], loading: false}
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    render() {
        const {
            loading,
            id,
            name,
            tagline,
            first_brewed,
            description,
            image_url,
            abv,
            ibu,
            ph,
            food_pairing,
            contributed_by,
        } = this.state;

        const result = (loading)
            ? <Spinner/>
            : !id
                ? <div className="row beer_info">
                    <div className="center">
                        <h2>Выберите пиво...</h2>
                    </div>
                </div>
                : <div className="row beer_info">
                    <div className="col-2 image">
                        <img src={image_url} alt={name}/>
                    </div>
                    <div className="col-10">
                        <ul>
                            <div>
                                <h3>{name}</h3>
                            </div>

                            <li>Поставщик: {contributed_by}</li>
                            <li>Впервые сварено: {first_brewed}</li>
                            <li>Алкоголь: {abv}%</li>
                            <li>Горечь IBU: {ibu}</li>
                            <li>Уровень PH: {ph}</li>
                            <li>Уровень PH: {tagline}</li>
                        </ul>
                        <h4>Описание:</h4>
                        <div className="description">
                            <p>{description}</p>
                            <h4>Употребляйте с</h4>
                            <p>{food_pairing.join(' ')}</p>
                        </div>
                    </div>

                </div>;
        return (
            <React.Fragment>
                {result}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataBeers: state.dataBeers
    }
};

export default connect(mapStateToProps)(BeerInfo);