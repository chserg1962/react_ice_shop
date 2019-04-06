import React, {Component} from 'react';
// import propTypes from 'prop-types';
// import Orange from '../../img/index_images/orange.png';
import Iframe from 'react-iframe';

export default class Contacts extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="contacts">
                <h2 className="visually_hidden">Контактная информация</h2>
                <Iframe url="https://yandex.ru/map-widget/v1/-/CCaGaAMm"
                    width="1200px" height="430px" allowFullScreen/>
                <div className="contact">
                    <p>Адрес главного офиса<br/>
                        и офлайн-магазина:</p>
                    <address className="contact_info">ул. Большая Конюшенная
                        19/8, Санкт-Петербург
                    </address>
                    <p>Для заказов по телефону:</p>
                    <a href="tel:88124502525" className="contact_info telephone">8 812 450-25-25</a>
                    <p>(с 10 до 20 ежедневно)</p>
                    <a href="kav3d.ru" className="button_small btn_write">Форма обратной связи</a>
                </div>
            </section>
        );
    }
}

