import React, {Component} from 'react';
import './ErrorBoundary.css';
class ErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.log('Возникла ошибка:' , error);
        console.log('Описание ошибки:' , errorInfo);
    }

    render() {
        const {error} = this.state;
        if (error) {
            return (
                <div className="text_center">
                    <h1>Возникла ошибка ErrorBoundary</h1>
                    <p>Данные об ошибке отправлены нашим программистам</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;