<?php

include "../api/StartSession.php";

?>



<!DOCTYPE html>

<html lang="<?= $language ?>" data-theme="<?=$_SESSION['theme']?>">

<head>
	<meta charset="UTF-8">
	<meta name="description"
		content="This is my portfolio as a developer, please feel free to check my personal projects on github,  also check the 'about me' page for more information">
	<meta name="keywords" content="portfolio, developer, hire, freelance, showcase">
	<meta name="author" content="Andre Carvalho Filho">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>
		<?= $lang['portfolio-page-title'] ?>
	</title>
	<link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../styles/main.css">
	<link rel="stylesheet" href="../styles/portfolio.css">
</head>

<body>
	<?php include '../includes/header.php'; ?>


	<div class="main-content">
		<img data-dark-img="../assets/img/github-mark-white.png" data-light-img="../assets/img/github-mark.png" class="portfolio-gh-logo theme-dependant" src="../assets/img/github-mark-white.png" alt="">
		<div class="feature-container">
			<div class="f-card-main theme-dependant <?=$_SESSION['theme']?>">
				<p class="f-card-title theme-dependant <?=$_SESSION['theme']?>">Most commits</p>
				<p class="f-card-name f-card-content theme-dependant <?=$_SESSION['theme']?>">my-repository-name</p>
				<p class="f-card-desc f-card-content theme-dependant <?=$_SESSION['theme']?>">This is a description for
					my repository, testingaaa</p>
				<p class="f-card-date f-card-content theme-dependant <?=$_SESSION['theme']?>">Updated: 1/1/9999 00:00:00
				</p>
			</div>
			<div class="f-card-main theme-dependant <?=$_SESSION['theme']?>">
				<p class="f-card-title theme-dependant <?=$_SESSION['theme']?>">Last updated</p>
				<p class="f-card-name f-card-content theme-dependant <?=$_SESSION['theme']?>">my-repository-name</p>
				<p class="f-card-desc f-card-content theme-dependant <?=$_SESSION['theme']?>">This is a description for
					my repository, testingapsdokaspdokadspaaa</p>
				<p class="f-card-date f-card-content theme-dependant <?=$_SESSION['theme']?>">Updated: 1/1/9999 00:00:00
				</p>
			</div>

		</div>

	</div>


	<?php include '../includes/footer.php'; ?>

	<script src="../scripts/portfolio.js"></script>
	<script src="../scripts/main.js"></script>
</body>

</html>