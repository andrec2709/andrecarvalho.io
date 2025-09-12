<?php

$language = ($_GET['lang'] == 'pt') ? 'pt' : 'en';
include "../lang/$language.php";

?>

<div id="under-construction-container">
<h1 class="h-under-construction under-construction-txt"><?=$lang['thank you']?></h1>
<img id="under-construction-img" src="../assets/img/under-construction-dark.png" alt="Image showing that this page is not yet ready">
<p class="p-under-construction under-construction-txt"><?=$lang['construction']?></p>
</div>