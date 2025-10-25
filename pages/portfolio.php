<?php

include __DIR__ . "/../api/StartSession.php";

?>



<!DOCTYPE html>

<html lang="<?= $language ?>" data-theme="<?= $_SESSION['theme'] ?>">

<head>
	<meta charset="UTF-8">
	<meta name="description"
		content="This is my portfolio as a developer, please feel free to check my personal projects on github,  also check the 'about me' page for more information">
	<meta name="keywords" content="portfolio, developer, hire, freelance, showcase">
	<meta name="author" content="Andre Carvalho Filho">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title data-i18n="portfolio.title">
		<?= $lang['portfolio']['title'] ?>
	</title>
	<link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../styles/main.css">
	<link rel="stylesheet" href="../styles/portfolio.css">
	<script>
		const theme = localStorage.getItem('theme') || '<?= $DEFAULT_THEME ?>';
		document.documentElement.classList.add(`theme-${theme}`);
	</script>
</head>

<body>
	<?php include __DIR__ . '/../includes/header.php'; ?>


	<main class="main-content">
		<img class="portfolio-gh-logo icon" src="../assets/img/github-mark.png" alt="github logo" draggable="false">
		<section id="feature-container" class="feature-container">


		</section>
		<h2 class="repos-list-heading">My public repositories</h2>
		<section id="repos-list">
		</section>

	</main>


	<?php include __DIR__ . '/../includes/footer.php'; ?>

	<script src="../scripts/portfolio.js"></script>
	<script src="../scripts/main.js"></script>
</body>

</html>