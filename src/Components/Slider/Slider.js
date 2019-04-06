import React, {Component} from 'react';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="slider">
                <h2 className="visually_hidden">Реклама мороженого</h2>
                <div className="slider_controls">
                    <input className="visually_hidden" type="radio" id="product_1" name="toggle" defaultChecked/>
                    <input className="visually_hidden" type="radio" id="product_2" name="toggle"/>
                    <input className="visually_hidden" type="radio" id="product_3" name="toggle"/>
                    <label htmlFor="product_1">Первый</label>
                    <label htmlFor="product_2">Второй</label>
                    <label htmlFor="product_3">Третий</label>
                </div>

                <ul className="slider_list">
                    <li className="slider_item slide" id="slide_1">
                        <h3>Крем-брюле и пломбир
                            с малиновым джемом</h3>
                        <a href="ksv3d.ru" className="button_large btn_both">Давайте оба!</a>
                    </li>
                    <li className="slider_item slide" id="slide_2">
                        <h3>Шоколадный пломбир
                            и лимонный сорбет</h3>
                        <a href="ksv3d.ru" className="button_large btn_both">Давайте оба!</a>
                    </li>
                    <li className="slider_item slide" id="slide_3">
                        <h3>Пломбир с помадкой
                            и клубничный щербет</h3>
                        <a href="ksv3d.ru" className="button_large btn_both">Давайте оба!</a>
                    </li>
                </ul>
            </section>
        );
    }
}

