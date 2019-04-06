<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <title>HTML Academy: Глейси</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="../src/css/normalize.css">
    <link rel="stylesheet" href="../src/css/style.css">


</head>
<body>
<input class="visually_hidden" type="radio" id="product_1" name="toggle" checked>
<input class="visually_hidden" type="radio" id="product_2" name="toggle">
<input class="visually_hidden" type="radio" id="product_3" name="toggle">


<div class="site_wrapper">
    <?php require_once 'header.php' ?>
    
    <main>
        
        <div class="index container">
            <h1 class="visually_hidden">Магазин мороженого Глэйси</h1>
            <section class="slider">

                
                <h2 class="visually_hidden">Реклама мороженого</h2>
                
                <div class="slider_controls">
                    <label for="product_1">Первый</label>
                    <label for="product_2">Второй</label>
                    <label for="product_3">Третий</label>
                </div>
                
                <ul class="slider_list">
                    <li class="slider_item slide" id="slide_1">
                        <h3>Крем-брюле и пломбир
                            с малиновым джемом</h3>
                        <a href="#" class="button_large btn_both">Давайте оба!</a>
                    </li>
                    
                    
                    <li class="slider_item slide" id="slide_2">
                        <h3>Шоколадный пломбир
                            и лимонный сорбет</h3>
                        <a href="#" class="button_large btn_both">Давайте оба!</a>
                    </li>
                    
                    <li class="slider_item slide" id="slide_3">
                        <h3>Пломбир с помадкой
                            и клубничный щербет</h3>
                        <a href="#" class="button_large btn_both">Давайте оба!</a>
                    </li>
                </ul>
            </section>


            <?php require_once 'banners.php' ?>

            <?php require_once 'hits.php' ?>

            <?php require_once 'about_us.php' ?>

            <?php require_once 'feedback.php' ?>
        </div>
    
    </main>

    <?php require_once 'contacts.php' ?>

    <?php require_once 'footer.php' ?>
</div>

<section class="popup">
    <form class="popup_window" action="https://echo.htmlacademy.ru"
          method="post">
        <h2>Мы обязательно вам ответим!</h2>
        
        <input id="your_name" type="text" name="your_name" placeholder="Как вас зовут?">
        <input id="your_email" type="email" name="your_email" placeholder="Ваша почта для ответа?">
        <textarea name="write_us" id="write_us" cols="30" rows="10" placeholder="Напишите что-нибудь..."></textarea>
        
        <button class="button_large btn_send" type="submit">Отправить</button>
        <button class="popup_close" type="button">Закрыть</button>
    </form>
</section>

<script src="js/script.js"></script>
</body>
</html>
