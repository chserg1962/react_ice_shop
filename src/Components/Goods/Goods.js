import React, {Component} from 'react';
import propTypes from 'prop-types';
import Good from './good/good';

export default class Goods extends Component {
    static propTypes = {
       // items: propTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="goods">
                <h2 className="visually_hidden">Перечень сливочного мороженого</h2>
                <ul className="icecream_list">
                   {/* {
                        this.props.items.map(item => (
                            <Good key={item.id}
                                pathPicture={this.props.items[item.id].pathPicture}
                                price={this.props.items[item.id].price}
                                units={this.props.items[item.id].units}
                                nameIce={this.props.items[item.id].units}
                            />
                        ))
                    }*/}
                </ul>


                <ul className="pages">
                    <li className="page_current"><a href="kav3d.ru">1</a></li>
                    <li className="page"><a href="kav3d.ru">2</a></li>
                    <li className="page"><a href="kav3d.ru">3</a></li>
                    <li className="page"><a href="kav3d.ru">4</a></li>
                    <li className="page"><a href="kav3d.ru">5</a></li>
                    <li className="page"><a href="kav3d.ru">next</a></li>
                </ul>
            </section>
        );
    }
}
