<section class="goods">
    <h2 class="visually_hidden">Перечень сливочного мороженого</h2>

    <ul class="icecream_list">
        <?php for ($i=0; $i<12; $i++) { ?>
        <li class="icecream_item">
            <div class="card_content">
                <img src= <?php echo $myCard[$i]->path_picture ?> width="267" height="267" alt="Апельсин" >
                <p class="price"><?php echo $myCard[$i]->price ?> <sub>/<?php echo $myCard[$i]->units ?></sub></p>
                <a href="#"><h3 class="icecream_desc"><?php echo $myCard[$i]->name_ice ?></h3>
                </a>
            </div>
            <div class="card_hover">
                <a href="#" class="button_small btn_fast_view">Быстрый просмотр</a>
            </div>
        </li>
       <?php } ?>

    </ul>


    <ul class="pages">
        <li class="page_current"><a href="#">1</a></li>
        <li class="page"><a href="#">2</a></li>
        <li class="page"><a href="#">3</a></li>
        <li class="page"><a href="#">4</a></li>
        <li class="page"><a href="#">5</a></li>
        <li class="page"><a href="#">next</a></li>
    </ul>
</section>