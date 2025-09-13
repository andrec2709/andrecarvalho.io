<?php

session_start();

if (!isset($_SESSION['language'])){
    $_SESSION['language'] = $_GET['lang'] === 'pt' ? 'pt' : 'en';
}

$language = $_SESSION['language'];
include "../lang/$language.php";


?>

<header id="header-main-container">
    <div id="header-wide">
        <div id="logo-container" class="header-item">
            <a href="../pages/index.php?lang=<?=$language?>"><span id="page-logo">andrecarvalho<span class="highlight">.io</span></span></a>
        </div>
        <div id="header-options">
            <span id="start" class="header-item" role="banner">
               <a href="../pages/index.php?lang=<?=$language?>"><?= $lang['start'];?></a> 
            </span>
            <span id="portfolio" class="header-item" role="banner">
               <a href="../pages/portfolio.php?lang=<?=$language?>"><?= $lang['portfolio'];?></a> 
            </span>
            <span id="contact" class="header-item" role="banner">
               <a href="../pages/contact.php?lang=<?=$language?>"><?= $lang['contact'];?></a> 
            </span>
            <span id="about-me" class="header-item" role="banner">
               <a href="../pages/about.php?lang=<?=$language?>"><?= $lang['about'];?></a> 
            </span>
        </div>
        <div id="header-icons" role="banner">
            <button id="page-mode" class="header-item" role="button" tabindex="0">
                <img src="../assets/icons/light-mode.png" alt="<?=$lang['switch-mode-alt']?>" width="20">
            </button>
            <button id="display-lang" class="header-item">
                    <img src="../assets/icons/<?=$language?>.png" alt="<?=$lang['lang-icon-alt']?>" width="20">
            </button>
            <button id="github-profile" class="header-item">
                <img src="../assets/icons/github-mark-white.png" alt="<?=$lang['to-github-alt']?>" width="20">
            </button>
            <button id="open-sidebar-icon" class="header-item sidebar-open-close" title="<?=$lang['open-sidebar-description']?>">
                <img src="../assets/icons/open.png" role="banner" alt="<?=$lang['open-sidebar-alt']?>" width="20">
            </button>
        </div>
    </div>
    <div id="sidebar-narrow">
        <div id="header-options-sidebar">
            <button id="close-sidebar-icon" class="header-item sidebar-open-close">
                <img src="../assets/icons/close.png" alt="<?=$lang['close-sidebar-alt']?>" width="20">
            </button>
            <button id="start-sidebar" class="header-item sidebar-item">
               <a href="../pages/index.php?lang=<?=$language?>"><?= $lang['start'];?></a> 
            </button>
            <button id="portfolio-sidebar" class="header-item sidebar-item">
               <a href="../pages/portfolio.php?lang=<?=$language?>"><?= $lang['portfolio'];?></a> 
            </button>
            <button id="contact-sidebar" class="header-item sidebar-item">
               <a href="../pages/portfolio.php?lang=<?=$language?>"><?= $lang['contact'];?></a> 
            </button>
            <button id="about-me-sidebar" class="header-item sidebar-item">
               <a href="../pages/portfolio.php?lang=<?=$language?>"><?= $lang['about'];?></a> 
            </button>

            <button id="github-profile-sidebar" class="header-item sidebar-item">
                Github <img src="../assets/icons/github-mark-white.png" alt="<?=$lang['to-github-alt']?>">
            </button>

        </div>
    </div>
</header>