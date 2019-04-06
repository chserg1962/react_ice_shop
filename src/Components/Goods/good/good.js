import React, {Component} from 'react';
import propTypes from 'prop-types';

export default class Good extends Component {
    static propTypes = {
        pathPicture: propTypes.string.isRequired,
        price: propTypes.number,
        units: propTypes.string,
        nameIce: propTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <li className="icecream_item">
                <div className="card_content">
                {/*    <img src={this.props.pathPicture} width="267" height="267" alt="Апельсин"/>
                    <p className="price">{this.props.price} <sub>/{this.props.units}</sub></p>
                    <a href="kav3d.ru">
                        <h3 className="icecream_desc">{this.props.nameIce}</h3>
                    </a>*/}
                </div>
                <div className="card_hover">
                    <a href="kav3d.ru" className="button_small btn_fast_view">Быстрый просмотр</a>
                </div>
            </li>
        );
    }
}
