<?php

include "../api/StartSession.php";

?>



<!DOCTYPE html>

<html lang="<?= $language ?>">

<head>
	<meta charset="UTF-8">
	<meta name="description" content="This is my portfolio as a developer, please feel free to check my personal projects on github,  also check the 'about me' page for more information">
	<meta name="keywords" content="portfolio, developer, hire, freelance, showcase">
	<meta name="author" content="Andre Carvalho Filho">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?= $lang['portfolio-page-title'] ?></title>
	<link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../styles/main.css">
	<link rel="stylesheet" href="../styles/portfolio.css">
</head>

<body>
	<?php include '../includes/header.php'; ?>

	<div class="features-container">
		<div class="repo-card-main">
			<p class="repo-card-title repo-card-text">Most commits</p>
			<div class="repo-card-content-container">
				<div class="repo-card-img-container">
					<img src="../assets/img/59283668.jpeg" alt="" class="repo-card-img">
				</div>
				<div class="repo-card-descriptive-container">
					<p class="repo-card-name repo-card-text">my-git-repository</p>
					<p class="repo-card-description repo-card-text">something about this repository</p>
					<p class="repo-card-last-up repo-card-text">last updated: 2/2/9999 00:00:00</p>
				</div>
			</div>
		</div>
		<div class="repo-card-main">
			<p class="repo-card-title repo-card-text">Most commits</p>
			<div class="repo-card-content-container">
				<div class="repo-card-img-container">
					<img src="../assets/img/59283668.jpeg" alt="" class="repo-card-img">
				</div>
				<div class="repo-card-descriptive-container">
					<p class="repo-card-name repo-card-text">my-git-repository</p>
					<p class="repo-card-description repo-card-text">something about this repository</p>
					<p class="repo-card-last-up repo-card-text">last updated: 2/2/9999 00:00:00</p>
				</div>
			</div>
		</div>

		<div class="main-content">

		</div>
	</div>

	<?php include '../includes/footer.php'; ?>

	<script src="../scripts/portfolio.js"></script>
	<script src="../scripts/main.js"></script>
</body>

</html>