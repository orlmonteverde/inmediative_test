<?php include 'partials/head.php'; ?>
   <header class="main-header">
     <div class="main-header__container">
       <h1 class="main-header__title"><?= $json["title"] ?></h1>
       <nav class="main-nav">
         <ul class="nav-bar">
           <?php foreach ($json["menu"] as $li): ?>
            <li class='nav-bar__item btn'>
              <?= "<a class='nav-bar__link' href='{$li['href']}'>{$li['title']}</a>"; ?>
            </li>
           <?php endforeach; ?>
         </ul>
       </nav>
     </div>
   </header>
   <section class="jumbotron">
     <div class="jumbotron__data">
       <h2 class="jumbotron__title"><?= $json["jumbotron"]["title"] ?></h2>
       <p class="jumbotron__text"><?= $json["jumbotron"]["subtitle"] ?></p>
     </div>
     <aside class="main-aside"></aside>
     <button class="jumbotron__button btn">descargar</button>
   </section>
   <section class="info">

    <div class="info-left">
      <h2 id="link1" class="info-left__title"><?= $json["box"]["title"] ?></h2>
      <p class="info-left__text"><?= $json["box"]["text"] ?></p>
    </div>
    <div class="info-right">
    <h2 id="link2" class="info-right__title">Moment</h2>
    <ul class="moment">
      <?php
        $i = 1;
        foreach ($json["moment"] as $moment):
          echo "<li class='moment__item'>{$moment}</li>";
          $i++;
        endforeach;
      ?>
    </ul>
    </div>
   </section>
   <div class="screenshots">
    <h2 id="link3" class="screenshots__title">Screenshots</h2>
    <div class="screenshots__container">
      <div id="arrow_left" class="arrow">
        <div class="fas fa-angle-left fa-3x"></div>
      </div>
      <div class="slider">
        <ul id="slider" class="slider__container">
        <?php
          $i = 1;
          foreach ($json["slide"] as $slide):
        ?>
          <li class='slider__item'>
            <?php
             echo "<img class='slider__img' src='docs/{$slide}' alt='slider image 0{$i}'>";
            $i++;
            ?>
          </li>
        <?php endforeach; ?>
        </ul>
      </div>
      <div id="arrow_right" class="arrow">
        <div class="fas fa-angle-right fa-3x"></div>
      </div>
    </div>
   </div>
  <?php include 'partials/footer.php'; ?>