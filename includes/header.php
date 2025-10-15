<?php

include __DIR__ . "/../api/StartSession.php";

?>

<header id="header-main-container">

    <div id="header-wide">

        <button id="page-logo" class="header-item" aria-label="Go to main page">
            andrecarvalho<span class="highlight">.io</span>
        </button>

        <div id="header-options">

            <button id="start" class="header-item" aria-label="Go to main page">
                <?= $lang['start'];?>
            </button>

            <button id="portfolio" class="header-item" aria-label="Go to portfolio page">
                <?= $lang['portfolio'];?>
            </button>

            <button id="contact" class="header-item" aria-label="Go to contact page">
                <?= $lang['contact'];?>
            </button>
            
            <button id="about-me" class="header-item" aria-label="Go to about page">
                <?= $lang['about'];?>
            </button>

        </div>

        <div id="header-icons">

            <button id="page-mode" class="header-item" aria-label="change the display theme">
                <img src="../assets/icons/light-mode.png" alt="<?=$lang['switch-mode-alt']?>">
            </button>

            <button id="display-lang" class="header-item" aria-label="Change the display language">
                    <img src="../assets/icons/<?=$language?>.png" alt="<?=$lang['lang-icon-alt']?>">
            </button>

            <button id="github-profile" class="header-item" aria-label="Go to my github profile">
                <img src="../assets/icons/github-mark-white.png" alt="<?=$lang['to-github-alt']?>">
            </button>

            <button id="open-sidebar-icon" class="header-item sidebar-open-close" title="<?=$lang['open-sidebar-description']?>" aria-label="Open the sidebar">
                <img src="../assets/icons/open.png" role="banner" alt="<?=$lang['open-sidebar-alt']?>">
            </button>

        </div>

    </div>

    <div id="sidebar-narrow">

        <div id="header-options-sidebar">

            <button id="close-sidebar-icon" class="header-item sidebar-open-close" aria-label="close sidebar">
                <img src="../assets/icons/close.png" alt="<?=$lang['close-sidebar-alt']?>">
            </button>

            <button id="start-sidebar" class="header-item sidebar-item" aria-label="Go to main page">
                <?= $lang['start'];?> 
            </button>

            <button id="portfolio-sidebar" class="header-item sidebar-item" aria-label="Go to portfolio page">
               <?= $lang['portfolio'];?> 
            </button>

            <button id="contact-sidebar" class="header-item sidebar-item" aria-label="Go to contact page">
               <?= $lang['contact'];?> 
            </button>

            <button id="about-me-sidebar" class="header-item sidebar-item" aria-label="Go to about page">
               <?= $lang['about'];?> 
            </button>

            <button id="github-profile-sidebar" class="header-item sidebar-item" aria-label="Go to my github profile">
                Github <img src="../assets/icons/github-mark-white.png" alt="<?=$lang['to-github-alt']?>">
            </button>

        </div>

    </div>

</header>