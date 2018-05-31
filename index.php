<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="/public/css/main.min.css">
  <title>Inmediative test</title>

</head>
<body>
  <?php
    $path = "db.json";
    if (!file_exists($path))
      exit('File not found');
    
    $data = file_get_contents($path);
    $json = json_decode($data, true);
    
    $title = $json["title"];
    $menu = $json["menu"];
    $jumbotron = $json["jumbotron"];
    $box = $json["box"];
    $moments = $json["moment"];
    $slides = $json["slide"];
  ?>
   <header class="main-header">
     <h1 class="main-header__title"><?php echo $json["title"]?></h1>
     <nav class="main-nav">
       <ul class="nav-bar">
         <?php 
          foreach ($menu as $li) {
            echo "<li class='nav-bar__item'><a class='nav-bar__link' href='{$li['href']}'>{$li['title']}</a></li>" . PHP_EOL;
         }
         ?>
       </ul>
     </nav>
   </header>
   <section class="jumbotron">
     <div class="jumbotron__data">
       <h2 class="jumbotron__title"><?php echo $jumbotron["title"] ?></h2>
       <p class="jumbotron__subtitle"><?php echo $jumbotron["subtitle"] ?></p>
     </div>
     <aside class="main-aside"></aside>
     <button>descargar</button>
   </section>
   <section class="info">
    <div class="info-left">
      <h2 id="link1" class="info-left__title"><?php echo $box["title"] ?></h2>
      <p class="info-left__text"><?php echo $box["text"] ?></p>
    </div>
    <div class="info-right">
    <h2 id="link2" class="info-right__title">Moment</h2>
    <ul class="moment">
      <?php
        $i = 1;
        foreach ($moments as $moment) {
          echo "<li class='moment__item'>{$moment}</li>" . PHP_EOL;
        $i++;
        }
      ?>
    </ul>
    
    </div>
   </section>
   <div class="slider">
    <h2 id="link3" class="slider__title">Screenshots</h2>
    <ul class="slider__container">
    <?php
      $i = 1;
      foreach ($slides as $slide) {
        echo "<li class='slider__item'><img class='slider__img' src='{$slide}' alt='slider image 0{$i}'></li>" . PHP_EOL;
        $i++;
      }
    ?>
    </ul>
   </div>
   <footer class="main-footer">
    <p class="main-footer__text">Gracias por tomarte este tiempo :)</p>
   </footer>
    <script src="/public/js/app.min.js"></script>
  </body>
  </html>