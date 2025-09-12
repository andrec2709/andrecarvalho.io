<?php
$language = ($_GET['lang'] == 'pt') ? 'pt' : 'en';
include "../lang/$language.php";
?>

<header>
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
            <span id="page-mode" class="header-item" role="button" tabindex="0">
                <img src="../assets/icons/light-mode.png" alt="<?=$lang['switch-mode-alt']?>" width="20">
            </span>
            <span id="display-lang" class="header-item" role="banner">
                <a title="<?=$lang['lang-icon-alt']?>" class="header-item"
                    href="?lang=<?= $language === 'pt' ? 'en' : 'pt' ?>"><img src="../assets/icons/<?=$language?>.png"
                        alt="<?=$lang['lang-icon-alt']?>" width="20"></a>
            </span>
            <span id="github-profile" class="header-item" role="banner">
                <a title="<?=$lang['to-github-alt']?>"  href="https://github.com/andrec2709/" target="_blank">
                    <img src="../assets/icons/github-mark-white.png" alt="<?=$lang['to-github-alt']?>" width="20">
                </a>
            </span>
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
            <span id="start-sidebar" class="header-item" role="banner">
               <a href="../pages/index.php?lang=<?=$language?>"><?= $lang['start'];?></a> 
            </span>
            <span id="portfolio-sidebar" class="header-item" role="banner">
               <a href="../pages/portfolio.php?lang=<?=$language?>"><?= $lang['portfolio'];?></a> 
            </span>
            <span id="contact-sidebar" class="header-item" role="banner">
               <a href="../pages/portfolio.php?lang=<?=$language?>"><?= $lang['contact'];?></a> 
            </span>
            <span id="about-me-sidebar" class="header-item" role="banner">
               <a href="../pages/portfolio.php?lang=<?=$language?>"><?= $lang['about'];?></a> 
            </span>

            <span id="github-profile-sidebar" class="header-item" role="banner">
                <a title="<?=$lang['to-github-alt']?>" href="https://github.com/andrec2709/" target="_blank">Github
                    <img src="../assets/icons/github-mark-white.png" alt="<?=$lang['to-github-alt']?>">
                </a>
            </span>

        </div>
    </div>
</header>