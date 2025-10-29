<?php

include __DIR__ . "/../api/StartSession.php";

?>



<!DOCTYPE html>

<html lang="<?= $language ?>">

<head>
	<meta charset="UTF-8">
	<meta name="description"
		content="<?= $lang['portfolio']['description'] ?>">
	<meta name="keywords" content="<?= $lang['portfolio']['keywords'] ?>">
	<meta name="author" content="Andre Carvalho Filho">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta property="og:url" content="https://andrecarvalho.io/pages/portfolio.php">
	<meta property="og:type" content="website">
	<meta property="og:title" content="<?= $lang['portfolio']['title'] ?>">
	<meta property="og:description" content="<?= $lang['portfolio']['description'] ?>">
	<meta property="og:image" content="/assets/img/logo-with-bg.svg">

	<meta name="twitter:card" content="summary">
	<meta property="twitter:domain" content="andrecarvalho.io">
	<meta property="twitter:url" content="https://andrecarvalho.io/pages/portfolio.php">
	<meta name="twitter:title" content="<?= $lang['portfolio']['title'] ?>">
	<meta name="twitter:description" content="<?= $lang['portfolio']['description'] ?>">
	<meta name="twitter:image" content="/assets/img/logo-with-bg.svg">

	<title data-i18n="portfolio.title">
		<?= $lang['portfolio']['title'] ?>
	</title>
	<link rel="canonical" href="https://andrecarvalho.io/pages/portfolio.php">
	<link rel="icon" href="/favicon.svg" type="image/x-icon">
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
		<section class="github-repos-section">
			<img class="portfolio-gh-logo icon" src="../assets/img/github-mark.png" alt="github logo" draggable="false">

			<section id="feature-container" class="feature-container">
			</section>

			<h2 class="repos-list-heading">My public repositories</h2>

			<section id="repos-list">
			</section>

		</section>

	</main>


	<?php include __DIR__ . '/../includes/footer.php'; ?>

	<script src="../scripts/portfolio.js"></script>
	<script src="../scripts/main.js"></script>
</body>

</html>