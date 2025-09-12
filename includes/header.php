<?php
$language = ($_GET['lang'] == 'pt') ? 'pt' : 'en';
include "../lang/$language.php";
?>

<!DOCTYPE html>
<html lang="<?= $language ?>">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styles/main.css">
</head>
<body>
     <div id="header-wide">
        <span id="page-logo" class="header-item">andrecarvalho<span class="highlight">.io</span></span>
        <div id="header-options">
            <span id="start" class="header-item" role="button" tabindex="0"><?= $lang['start'];?></span>
            <span id="portfolio" class="header-item" role="button" tabindex="0"><?= $lang['portfolio'];?></span>
            <span id="contact" class="header-item" role="button" tabindex="0"><?= $lang['contact'];?></span>
            <span id="about-me" class="header-item" role="button" tabindex="0"><?= $lang['about'];?></span>
        </div>
        <div id="header-icons" role="banner">
            <span id="page-mode" class="header-item" role="button" tabindex="0">
                <img src="../assets/icons/light-mode.png" alt="Change display mode dark/light" width="20">
            </span>
            <span id="display-lang" class="header-item" role="banner">
                <a title="<?=$lang['lang-icon-alt']?>" class="header-item" href="?lang=<?= $language === 'pt' ? 'en' : 'pt' ?>"><img src="../assets/icons/<?=$language?>.png" alt="<?=$lang['lang-icon-alt']?>" width="20"></a>
            </span>
            <span id="github-profile" class="header-item" role="banner">
               <a title="<?=$lang['to-github']?>" alt="<?=$lang['to-github']?>" href="https://github.com/andrec2709/" target="_blank"><img src="../assets/icons/github-mark-white.png" alt="Link to my github profile" width="20"></a> 
            </span>
            <span id="open-sidebar-icon" class="header-item" role="button" tabindex="0" title="<?=$lang['open-sidebar-description']?>" alt="<?=$lang['open-sidebar-description']?>">
                <img src="../assets/icons/open.png" alt="Link to my github profile" width="20">
            </span>
        </div>
    </div>
    <div id="sidebar-narrow">
        <div id="header-options-sidebar">
            <span id="close-sidebar-icon" class="header-item" role="button" tabindex="0">
                <img src="../assets/icons/close.png" alt="Link to my github profile" width="20">
            </span>
            <span id="start-sidebar" class="header-item" role="button" tabindex="0"><?= $lang['start'];?></span>
            <span id="portfolio-sidebar" class="header-item" role="button" tabindex="0"><?= $lang['portfolio'];?></span>
            <span id="contact-sidebar" class="header-item" role="button" tabindex="0"><?= $lang['contact'];?></span>
            <span id="about-me-sidebar" class="header-item" role="button" tabindex="0"><?= $lang['about'];?></span>
            
            <span id="github-profile-sidebar" class="header-item" role="banner">
                <a title="<?=$lang['to-github']?>" alt="<?=$lang['to-github']?>" href="https://github.com/andrec2709/" target="_blank">Github 
                    <img src="../assets/icons/github-mark-white.png" alt="Link to my github profile">
                </a>
            </span>
            
        </div>
    </div>

    <script src="../scripts/main.js"></script>
</body>
</html>