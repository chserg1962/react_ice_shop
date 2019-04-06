import React, {Component} from 'react';
// import propTypes from 'prop-types';
import Orange from '../../img/index_images/orange.png';
import Coffee from '../../img/index_images/coffee.png';
import Strawberry from '../../img/index_images/strawberry.png';
import CremeBrulee from '../../img/index_images/creme_brulee.png';

export default class Hits extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="hits">
                <h2 className="visually_hidden">Хиты продаж</h2>
                <ul className="icecream_hits">
                    <li className="icecream_item">
                        <div className="card_content">
                            <img src={Orange} width="267" height="267" alt="Апельсиновое"/>
                            <p className="price">310₽<sub>/кг</sub></p>
                            <a href="kav3d.ru"><h3 className="icecream_desc">Сливочное с апельсиновым джемом и цитрусовой
                                    стружкой</h3>
                            </a>
                        </div>
                        <div className="card_hover">
                            <a href="kav3d.ru" className="button_small btn_fast_view">Быстрый просмотр</a>
                        </div>
                    </li>

                    <li className="icecream_item">
                        <div className="card_content">
                            <img src={Coffee} width="267" height="267" alt="Кофейное"/>
                            <p className="price">380₽<sub>/кг</sub></p>
                            <a href="kav3d.ru"><h3 className="icecream_desc">Сливочно-кофейное с кусочками шоколада</h3></a>
                        </div>
                        <div className="card_hover">
                            <a href="kav3d.ru" className="button_small btn_fast_view">Быстрый просмотр</a>
                        </div>
                    </li>

                    <li className="icecream_item">
                        <div className="card_content">
                            <img src={Strawberry} width="267" height="267" alt="Клубничное"/>
                            <p className="price">355₽<sub>/кг</sub></p>
                            <a href="kav3d.ru"><h3 className="icecream_desc">Сливочно-клубничное с присыпкой из белого
                                    шоколада</h3>
                            </a>
                        </div>
                        <div className="card_hover">
                            <a href="kav3d.ru" className="button_small btn_fast_view">Быстрый просмотр</a>
                        </div>
                    </li>

                    <li className="icecream_item">
                        <div className="card_content">
                            <img src={CremeBrulee} width="267" height="267" alt="Крем-брюле"/>
                            <p className="price">415₽<sub>/кг</sub></p>
                            <a href="kav3d.ru"><h3 className="icecream_desc">Сливочное крем-брюле с карамельной подливкой</h3></a>
                        </div>
                        <div className="card_hover">
                            <a href="kav3d.ru" className="button_small btn_fast_view">Быстрый просмотр</a>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

