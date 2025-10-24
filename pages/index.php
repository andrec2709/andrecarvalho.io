<?php

include __DIR__ . "/../api/StartSession.php";

?>



<!DOCTYPE html>

<html lang="<?= $language ?>" data-theme="<?= $_SESSION['theme'] ?>">

<head>
	<meta charset="UTF-8">
	<meta name="description" content="This is my portfolio as a developer, please feel free to check my personal projects on github,  also check the 'about me' page for more information">
	<meta name="keywords" content="portfolio, developer, hire, freelance, showcase">
	<meta name="author" content="Andre Carvalho Filho">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title data-i18n="index.title"><?= $lang['index']['title'] ?></title>
	<link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../styles/main.css">
	<script>
		const theme = localStorage.getItem('theme') || 'light';
		document.documentElement.classList.add(`theme-${theme}`);
	</script>
</head>

<body class=" <?= $_SESSION['theme'] ?>">
	<?php include __DIR__ . '/../includes/header.php'; ?>

	<?php include __DIR__ . '/../includes/construction.php'; ?>

	&nbsp;
	<?php include __DIR__ . '/../includes/footer.php'; ?>
	<script src="../scripts/main.js"></script>
</body>

</html>