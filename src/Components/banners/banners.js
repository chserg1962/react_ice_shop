import React, {Component} from 'react';


class Banners extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <section className="banners">
                <h2 className="visually_hidden">Специальное предложение</h2>

                <div className="banners_left">
                    <p className="for_free">Малинка даром!</p>
                    <p className="for_free_desc">При покупке 2 кг любого фруктового мороженого, добавим
                        в ваш заказ банку малинового варенья бесплатно.</p>
                    <a href="ksv3d.ru" className="button_small btn_order">Хочу варенье!</a>
                </div>

                <div className="banners_right">
                    <p className="for_free">Шоколадки даром!</p>
                    <p className="for_free_desc">При покупке 2 кг пломбира, добавим в ваш заказ упаковку
                        вкуснейшей шоколадной присыпки совершенно бесплатно.</p>
                    <a href="ksv3d.ru" className="button_small btn_order">Хочу шоколадки!</a>
                </div>

            </section>
        );
    }
}

Banners.propTypes = {};

export default Banners;
