<?php

include __DIR__ . "/../api/StartSession.php";

?>



<!DOCTYPE html>

<html lang="<?= $language ?>">

<head>
	<meta charset="UTF-8">
	<meta name="description" content="<?= $lang['index']['description'] ?>">
	<meta name="keywords" content="<?= $lang['index']['keywords'] ?>">
	<meta name="author" content="Andre Carvalho Filho">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title data-i18n="index.title"><?= $lang['index']['title'] ?></title>
	<link rel="canonical" href="https://andrecarvalho.io/">
	<link rel="icon" href="/favicon.svg" type="image/x-icon">
	<link rel="stylesheet" href="../styles/main.css">
	<script>
		const theme = localStorage.getItem('theme') || '<?= $DEFAULT_THEME ?>';
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