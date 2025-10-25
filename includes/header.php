<?php

include __DIR__ . "/../api/StartSession.php";

?>

<header>
    <nav class="nav-horizontal">
        <a href="/pages/index.php" id="logo-container">
            <svg aria-label="logo" width="45.218628mm" height="37.469528mm" viewBox="0 0 45.218628 37.469528"
                version="1.1" id="svg1" inkscape:version="1.4.2 (ebf0e94, 2025-05-08)"
                sodipodi:docname="logos-test.svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                <sodipodi:namedview id="namedview1" pagecolor="#505050" bordercolor="#ffffff" borderopacity="1"
                    inkscape:showpageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="1"
                    inkscape:deskcolor="#505050" inkscape:document-units="mm" showguides="true" inkscape:zoom="2"
                    inkscape:cx="17.75" inkscape:cy="40.75" inkscape:window-width="1920"
                    inkscape:window-height="1021" inkscape:window-x="0" inkscape:window-y="29"
                    inkscape:window-maximized="1" inkscape:current-layer="layer1">
                    <sodipodi:guide position="23.951441,288.97816" orientation="1,0" id="guide17"
                        inkscape:locked="false" />
                    <sodipodi:guide position="23.951441,277.73713" orientation="0,-1" id="guide18"
                        inkscape:locked="false" />
                    <sodipodi:guide position="40.379995,291.33826" orientation="-0.63770934,0.77027709" id="guide19"
                        inkscape:locked="false" />
                    <sodipodi:guide position="9.2788977,293.2163" orientation="-0.72576382,-0.68794395" id="guide20"
                        inkscape:locked="false" />
                    <inkscape:page x="0" y="0" width="45.218628" height="37.469528" id="page2" margin="0"
                        bleed="0" />
                </sodipodi:namedview>
                <defs id="defs1" />
                <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1"
                    transform="translate(-70.772495,-110.20247)">
                    <path id="path28"
                        style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;enable-background:accumulate;stop-color:#000000;stop-opacity:1"
                        d="m 87.448174,111.6246 c -8.668693,3.59069 -13.224734,13.01762 -11.008362,21.86529 l 5.155744,-2.13558 c -1.139743,-6.0351 2.044052,-12.19907 7.95735,-14.64844 5.9133,-2.44937 12.522084,-0.34162 15.983274,4.73191 l 5.15575,-2.13558 c -4.68877,-7.82357 -14.575069,-11.26829 -23.243756,-7.6776 z m -14.971908,23.49642 a 2.7601802,2.7601802 0 0 0 -1.493526,3.60663 2.7601802,2.7601802 0 0 0 3.606165,1.49373 2.7601802,2.7601802 0 0 0 1.684983,-2.87434 l 16.177171,-6.70081 a 2.7601802,2.7601802 0 0 0 3.22393,0.841 2.7601802,2.7601802 0 0 0 1.684984,-2.87434 l 8.088587,-3.3504 c 2.03276,-0.0308 2.19235,1.25655 2.19235,1.25655 1.14029,6.03535 -2.0418,12.20038 -7.955128,14.64976 -5.913328,2.44938 -12.52382,0.34057 -15.985497,-4.73322 l -5.155745,2.13558 c 4.689139,7.82376 14.577266,11.2696 23.24597,7.67891 8.66871,-3.5907 13.22293,-13.01876 11.00615,-21.86661 -0.36399,-1.84425 1.35589,-2.72628 1.35589,-2.72628 l 1.83857,-0.76156 -0.57409,-1.38598 -18.631624,7.71747 a 2.7601802,2.7601802 0 0 0 -3.223056,-0.84024 2.7601802,2.7601802 0 0 0 -1.684905,2.87319 l -16.178124,6.7012 a 2.7601802,2.7601802 0 0 0 -3.223055,-0.84024 z" />
                </g>
            </svg>
            andrecarvalho<mark>.io</mark>
        </a>
        <div class="nav-links wide">
            <a href="/pages/index.php" data-i18n="header.start"><?= $lang['header']['start'] ?></a>
            <a href="/pages/portfolio.php" data-i18n="header.portfolio"><?= $lang['header']['portfolio'] ?></a>
            <a href="/pages/about.php" data-i18n="header.about"><?= $lang['header']['about'] ?></a>
            <a href="/pages/contact.php" data-i18n="header.contact"><?= $lang['header']['contact'] ?></a>
        </div>
        <button id="open-sidebar" class="sidebar-btn" onclick="toggleSidebar(this)" data-action="open"><img src="/assets/icons/sidebar-open.png" alt=""></button>
    </nav>
    <div class="pref-btn-container">
        <button id="lang-pref" class="pref-btn" data-menu="lang" onclick="showMenu(this)"><img src="/assets/icons/translate-icon.png"
                alt="" aria-label="choose language"></button>
        <button id="theme-pref" class="pref-btn" data-menu="theme" onclick="showMenu(this)"><img src="/assets/icons/theme-icon.png"
                alt="" aria-label="choose theme"></button>
        <ul id="theme-options" class="list-options" hidden>
            <li><button data-value="light" onclick="setTheme(this)">Light theme</button></li>
            <li><button data-value="dark" onclick="setTheme(this)">Dark theme</button></li>
            <li><button data-value="abyss" onclick="setTheme(this)">Abyss</button></li>
        </ul>
        <ul id="lang-options" class="list-options" hidden>
            <li><button data-value="en" onclick="toggleLang(this)" data-i18n="lang_options.en"><?= $lang['lang_options']['en'] ?></button></li>
            <li><button data-value="pt" onclick="toggleLang(this)"data-i18n="lang_options.pt"><?= $lang['lang_options']['pt'] ?></button></li>
        </ul>
    </div>
    <nav class="nav-sidebar">
        <button id="close-sidebar" class="sidebar-btn" onclick="toggleSidebar(this)" data-action="close"><img src="/assets/icons/sidebar-close.png" alt=""></button>
        <div class="nav-links sidebar">
            <a href="/pages/index.php" data-i18n="header.start"><?= $lang['header']['start'] ?></a>
            <a href="/pages/portfolio.php" data-i18n="header.portfolio"><?= $lang['header']['portfolio'] ?></a>
            <a href="/pages/about.php" data-i18n="header.about"><?= $lang['header']['about'] ?></a>
            <a href="/pages/contact.php" data-i18n="header.contact"><?= $lang['header']['contact'] ?></a>
        </div>
    </nav>
</header>