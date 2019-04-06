import React, {Component} from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Footer from '../Footer/Footer';
import './NotFound.css';

export default class NotFound extends Component {
    render() {
        return (
            <div className="site_wrapper">
                <HeaderMain/>
                <div className="row small-up-2 medium-up-3 large-up-4" id="Body">
                    <div className="medium-3 columns">
                        <h2>Страница не найдена. Ошибка 404.</h2>
                    </div>
                </div>
                <Footer/>
            </div>    
        );
    }
}

