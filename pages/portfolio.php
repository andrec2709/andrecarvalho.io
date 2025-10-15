<?php

include __DIR__ . "/../api/StartSession.php";

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

<body class="theme-dependant">
	<?php include '../includes/header.php'; ?>


	<div class="main-content">
		<img data-dark-img="../assets/img/github-mark-white.png" data-light-img="../assets/img/github-mark.png"
			class="portfolio-gh-logo theme-dependant" src="../assets/img/github-mark-white.png" alt="github logo"
			draggable="false">
		<div id="feature-container" class="feature-container">


		</div>
		<h3 id="repos-list-heading" class=" theme-dependant custom-heading">My public repositories</h3>
		<div id="repos-list" class="theme-dependant">
		</div>

	</div>


	<?php include '../includes/footer.php'; ?>

	<script src="../scripts/portfolio.js"></script>
	<script src="../scripts/main.js"></script>
</body>

</html>