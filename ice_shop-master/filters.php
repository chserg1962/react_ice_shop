<section class="filters">

    <h2 class="visually_hidden">Сортировка товаров</h2>

    <form class="filter" action="output_card.php" enctype="multipart/form-data"
          method="post"  target="_self" id="FormFilter" name="FormFilter" >
        <div class="filter_top">
            <fieldset class="for_select">
                <legend>Сортировка:</legend>
                <select name="sorting" id="sorting">
                    <option>по популярности</option>
                    <option>сначала недорогие</option>
                    <option>сначала дорогие</option>
                    <option>по жирности</option>
                </select>
            </fieldset>

            <fieldset class="by_price">
                <legend>Цена: 100 руб. – 500 руб.</legend>
                <div class="filter_range">
                    <div class="range_controls">

                        <div class="scale">
                            <div class="bar"></div>
                        </div>
                        <div class="toggle toggle_min"></div>
                        <div class="toggle toggle_max"></div>
                    </div>
                    <!--<div class="price_controls">
                        <label class="min_price">от <input name="min_price" type="text" value="0"></label>
                        <label class="max_price">до <input name="max_price" type="text" value="15000"></label>
                    </div>-->
                </div>
            </fieldset>

            <fieldset>
                <legend>Жирность:</legend>
                <ul class="properties">
                    <li class="property_option">
                        <input type="radio" class="visually_hidden property" id="fatness_0" name="fatness"/>
                        <label for="fatness_0">
                            <span class="radio_indicator"></span>
                            0%
                        </label>
                    </li>

                    <li class="property_option">
                        <input type="radio" class="visually_hidden property" id="fatness_before_10"
                               name="fatness"/>
                        <label for="fatness_before_10">
                            <span class="radio_indicator"></span>
                            до 10%
                        </label>
                    </li>

                    <li class="property_option">
                        <input type="radio" class="visually_hidden property" id="fatness_before_30"
                               name="fatness"/>
                        <label for="fatness_before_30">
                            <span class="radio_indicator"></span>
                            до 30%
                        </label>
                    </li>

                    <li class="property_option">
                        <input type="radio" class="visually_hidden property" id="fatness_after_30"
                               name="fatness"/>
                        <label for="fatness_after_30">
                            <span class="radio_indicator"></span>
                            выше 30%
                        </label>
                    </li>
                </ul>
            </fieldset>
        </div>

        <div class="filter_bottom">
            <fieldset>
                <legend>Наполнители:</legend>
                <ul class="fillers">
                    <li class="filler_option">
                        <input class="visually_hidden filler" id="choco" name="choco" type="checkbox"/>
                        <label for="choco">
                            <span class="checkbox_indicator"></span>шоколадные
                        </label>
                    </li>

                    <li class="filler_option">
                        <input class="visually_hidden filler" id="sugar" name="sugar" type="checkbox"/>
                        <label for="sugar"><span class="checkbox_indicator"></span>сахарные присыпки</label>
                    </li>

                    <li class="filler_option">
                        <input class="visually_hidden filler" id="fruit" name="fruit" type="checkbox"/>
                        <label for="fruit"><span class="checkbox_indicator"></span>фрукты</label>
                    </li>

                    <li class="filler_option">
                        <input class="visually_hidden filler" id="syrup" name="syrup" type="checkbox"/>
                        <label for="syrup"><span class="checkbox_indicator"></span>сиропы</label>
                    </li>

                    <li class="filler_option">
                        <input class="visually_hidden filler" id="jam" name="jam" type="checkbox"/>
                        <label for="jam"><span class="checkbox_indicator"></span>джемы</label>
                    </li>
                </ul>

            </fieldset>

            <button type="submit" class="btn_use">Применить</button>
        </div>
    </form>

</section>