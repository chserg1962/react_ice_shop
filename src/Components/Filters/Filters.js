import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filters.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const style = { 'background-color': '#a7b6b9', 'margin-top': '35px',  'margin-left': '5px'};
const style1 = {width: 20, 'height': 20, 'border-radius': 10, top: 2};
const trackStyle = {top: '-20px'};

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOrder: 0

        };
    }

    render() {
        return (

            <div className="filters">
                <h2 className="visually_hidden">Сортировка товаров</h2>

                <form className="filter" action="output_card.php" encType="multipart/form-data"
                    method="post" target="_self" id="FormFilter" name="FormFilter">
                    <div className="filter_top">
                        <fieldset className="for_select">
                            <legend>Сортировка:</legend>
                            <select name="sorting" id="sorting">
                                <option>по популярности</option>
                                <option>сначала недорогие</option>
                                <option>сначала дорогие</option>
                                <option>по жирности</option>
                            </select>
                        </fieldset>

                        <fieldset className="by_price">
                            <legend>Цена: 100 руб. – 500 руб.</legend>

                                    <Range className="railStyle"
                                           max ={500}
                                           defaultValue={[100, 400]}
                                           handleStyle ={style1}
                                           trackStyle = {trackStyle}
                                    />

                        </fieldset>

                        <fieldset>
                            <legend>Жирность:</legend>
                            <ul className="properties">
                                <li className="property_option">
                                    <input type="radio" className="visually_hidden property" id="fatness_0" name="fatness"/>
                                    <label htmlFor="fatness_0">
                                        <span className="radio_indicator" />
                                        0%
                                    </label>
                                </li>

                                <li className="property_option">
                                    <input type="radio" className="visually_hidden property" id="fatness_before_10"
                                        name="fatness"/>
                                    <label htmlFor="fatness_before_10">
                                        <span className="radio_indicator" />
                                        до 10%
                                    </label>
                                </li>

                                <li className="property_option">
                                    <input type="radio" className="visually_hidden property" id="fatness_before_30"
                                        name="fatness"/>
                                    <label htmlFor="fatness_before_30">
                                        <span className="radio_indicator" />
                                        до 30%
                                    </label>
                                </li>

                                <li className="property_option">
                                    <input type="radio" className="visually_hidden property" id="fatness_after_30"
                                        name="fatness"/>
                                    <label htmlFor="fatness_after_30">
                                        <span className="radio_indicator" />
                                        выше 30%
                                    </label>
                                </li>
                            </ul>
                        </fieldset>
                    </div>

                    <div className="filter_bottom">
                        <fieldset>
                            <legend>Наполнители:</legend>
                            <ul className="fillers">
                                <li className="filler_option">
                                    <input className="visually_hidden filler" id="choco" name="choco" type="checkbox"/>
                                    <label htmlFor="choco">
                                        <span className="checkbox_indicator" />шоколадные
                                    </label>
                                </li>

                                <li className="filler_option">
                                    <input className="visually_hidden filler" id="sugar" name="sugar" type="checkbox"/>
                                    <label htmlFor="sugar"><span className="checkbox_indicator" />сахарные присыпки</label>
                                </li>

                                <li className="filler_option">
                                    <input className="visually_hidden filler" id="fruit" name="fruit" type="checkbox"/>
                                    <label htmlFor="fruit"><span className="checkbox_indicator" />фрукты</label>
                                </li>

                                <li className="filler_option">
                                    <input className="visually_hidden filler" id="syrup" name="syrup" type="checkbox"/>
                                    <label htmlFor="syrup"><span className="checkbox_indicator" />сиропы</label>
                                </li>

                                <li className="filler_option">
                                    <input className="visually_hidden filler" id="jam" name="jam" type="checkbox"/>
                                    <label htmlFor="jam"><span className="checkbox_indicator" />джемы</label>
                                </li>
                            </ul>

                        </fieldset>

                        <button type="submit" className="btn_use">Применить</button>
                    </div>
                </form>

            </div>
        );
    }
}

Filters.propTypes = {};

export default Filters;
