import React, {Component} from 'react';
// import propTypes from 'prop-types';
import LogoGlaccy from '../../img/general_images/logo_glaccy.svg';
import Basket from '../../img/general_images/basket.svg';

export default class HeaderMain extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <header>
                <div className="header_main">
                    <nav className="main_navigation">
                        <div className="main_navigation_left">
                            <img src={LogoGlaccy} width="154" height="64" alt="Логотип Glaccy"/>

                            <ul className="site_navigation">
                                <li><a href="kav3d.ru" className="main">Каталог</a>
                                    <ul className="main_menu">
                                        <li><a href="kav3d.ru">Новинки</a></li>
                                        <li><a href="catalog">Сливочное</a></li>
                                        <li><a href="kav3d.ru">Щербеты</a></li>
                                        <li><a href="kav3d.ru">Фруктовый лед</a></li>
                                        <li><a href="kav3d.ru">Мелорин</a></li>
                                    </ul>
                                </li>
                                <li><a href="kav3d.ru">Доставка и оплата</a></li>
                                <li><a href="kav3d.ru">О Компании</a></li>
                            </ul>
                        </div>


                        <div className="main_navigation_right">
                            <ul className="site_movement">
                                <li>
                                    <a className="button btn_search" href="kav3d.ru">
                                        <svg width="17" height="17" viewBox="0 0 17 17">
                                            <path className="menu_icon" fill="#fff"
                                                d="M16.958 15.527L11.75 10.32A6.455 6.455 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13a6.465 6.465 0 0 0 3.839-1.263l5.205 5.204 1.414-1.414zM6.5 11C4.019 11 2 8.981 2 6.5S4.019 2 6.5 2 11 4.019 11 6.5 8.981 11 6.5 11z"/>
                                        </svg>
                                    </a>
                                    <form className="search_popup">
                                        <input id="searching" type="text" name="searching" placeholder="Что ищем?"/>
                                    </form>
                                </li>
                                <li>
                                    <a className="button btn_login" href="kav3d.ru">
                                        <svg width="21" height="19" viewBox="0 0 21 19">
                                            <g fill="#fff">
                                                <path className="menu_icon" d="M6 14.875L12.917 9.5 6 4.125v2.917H-.042v4.917H6z"/>
                                                <path className="menu_icon"
                                                    d="M18 0H5C3.9 0 3 .9 3 2v2h2V2h13v15H5v-2H3v2c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/>
                                            </g>
                                        </svg>
                                        Вход</a>
                                    <form className="login_popup" action="https://echo.htmlacademy.ru" method="post">
                                        <div className="user_input">
                                            <input id="mail" type="email" name="mail" placeholder="Электронная почта"/>
                                            <input id="password" type="password" name="password" placeholder="Пароль"/>
                                        </div>
                                        <div className="user_control">
                                            <button type="submit" className="button_large btn_enter">Войти</button>
                                            <div className="for_login">
                                                <a href="kav3d.ru">Забыли пароль?</a>
                                                <a href="kav3d.ru">Новая регистрация</a>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                                <li>
                                    <a className="button btn_cart" href="kav3d.ru">
                                        <img src={Basket} width="21" height="20" alt="корзина"/>Пусто</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="work">
                        <p className="work_time">С 10 до 20, ежедневно</p>
                        <a href="tel:88124502525" className="work_telephone">8 812 450-25-25</a>
                    </div>
                </div>
            </header>
        );
    }
}
