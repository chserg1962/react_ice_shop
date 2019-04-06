<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Каталог "Сливочное мороженое"</title>
    <link rel="stylesheet" href="../src/css/normalize.css">
    <link rel="stylesheet" href="../src/css/style.css">

</head>
<body>

<div class="catalog_wrapper">

    <?php
    require_once 'header_catalog.php';
    require_once 'output_card.php';
    ?>
    <main class="catalog container">
        <h1>Сливочное мороженое</h1>
        <?php
         require_once 'filters.php';
         require_once 'goods.php'
        ?>
    </main>

    <?php require_once 'footer.php' ?>
</div>

</body>
</html>
