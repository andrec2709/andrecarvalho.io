<?php

include "../api/StartSession.php";

?>


<!DOCTYPE html>

<html lang="<?=$language?>">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="This is my portfolio as a developer, please feel free to check my personal projects on github,  also check the 'about me' page for more information">
		<meta name="keywords" content="portfolio, developer, hire, freelance, showcase">
		<meta name="author" content="Andre Carvalho Filho">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title><?=$lang['about-page-title']?></title>
		<link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">
		<link rel="stylesheet" href="../styles/main.css">
	</head>
	<body>
		<?php include '../includes/header.php';?>

		<div class="main-content">

			<h1 class="<?=$_SESSION['theme']?> theme-dependant "><?=$lang['about']?></h1>

			<h2 class="<?=$_SESSION['theme']?> theme-dependant"><?=$lang['about_heading_2']?></h2>

			<p class="<?=$_SESSION['theme']?> theme-dependant"><?=$lang['about_p_1']?></p>

			<ul class="<?=$_SESSION['theme']?> theme-dependant custom-list">
				<li><?=$lang['about_li_1']?></li>
				<li><?=$lang['about_li_2']?></li>
				<li><?=$lang['about_li_3']?></li>
				<li><?=$lang['about_li_4']?></li>
				<li><?=$lang['about_li_5']?></li>
				<li><?=$lang['about_li_6']?></li>
				<li><?=$lang['about_li_7']?></li>
				<li><?=$lang['about_li_8']?></li>
				<li><?=$lang['about_li_9']?></li>
				<li><?=$lang['about_li_10']?></li>
			</ul>

				<p class="<?=$_SESSION['theme']?> theme-dependant"><?=$lang['about_p_2']?></p>

			<ul class="<?=$_SESSION['theme']?> theme-dependant custom-list">
				<li><?=$lang['about_li_11']?></li>
				<li><?=$lang['about_li_12']?></li>
				<li><?=$lang['about_li_13']?></li>
				<li><?=$lang['about_li_14']?></li>
				<li><?=$lang['about_li_15']?></li>
				<li><?=$lang['about_li_16']?></li>
				<li><?=$lang['about_li_17']?></li>
			</ul>

			<h2 class="theme-dependant <?=$_SESSION['theme']?>"><?=$lang['note']?></h2>
			
			<p class="theme-dependant <?=$_SESSION['theme']?>"><?=$lang['about_p_3']?></p>
			
			<br><br>
			
			<p id="about_li_1_note" class="theme-dependant <?=$_SESSION['theme']?> footnote"><?=$lang['about_li_1_note']?></p>
		</div>


		<?php include '../includes/footer.php';?>


		<script src="../scripts/main.js"></script>
	</body>
</html>
