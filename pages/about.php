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
	<title data-i18n="about.title">
		<?= $lang['about']['title'] ?>
	</title>
	<link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../styles/main.css">
	<script>
		const theme = localStorage.getItem('theme') || '<?= $DEFAULT_THEME ?>';
		document.documentElement.classList.add(`theme-${theme}`);
	</script>
</head>

<body>
	<?php include __DIR__ . '/../includes/header.php'; ?>

	<main class="main-content">

		<h1 data-i18n="about.heading_1">
			<?= $lang['about']['heading_1'] ?>
		</h1>

		<section>
			<h2 data-i18n="about.heading_2">
				<?= $lang['about']['heading_2'] ?>
			</h2>

			<p class=" " data-i18n="about.p_1">
				<?= $lang['about']['p_1'] ?>
			</p>

			<ul class=" custom-list">
				<li data-i18n="about.li_1">
					<?= $lang['about']['li_1'] ?>
				</li>
				<li data-i18n="about.li_2">
					<?= $lang['about']['li_2'] ?>
				</li>
				<li data-i18n="about.li_3">
					<?= $lang['about']['li_3'] ?>
				</li>
				<li data-i18n="about.li_4">
					<?= $lang['about']['li_4'] ?>
				</li>
				<li data-i18n="about.li_5">
					<?= $lang['about']['li_5'] ?>
				</li>
				<li data-i18n="about.li_6">
					<?= $lang['about']['li_6'] ?>
				</li>
				<li data-i18n="about.li_7">
					<?= $lang['about']['li_7'] ?>
				</li>
				<li data-i18n="about.li_8">
					<?= $lang['about']['li_8'] ?>
				</li>
				<li data-i18n="about.li_9">
					<?= $lang['about']['li_9'] ?>
				</li>
				<li data-i18n="about.li_10">
					<?= $lang['about']['li_10'] ?>
				</li>
			</ul>

			<p class=" " data-i18n="about.p_2">
				<?= $lang['about']['p_2'] ?>
			</p>

			<ul class=" custom-list">
				<li data-i18n="about.li_11">
					<?= $lang['about']['li_11'] ?>
				</li>
				<li data-i18n="about.li_12">
					<?= $lang['about']['li_12'] ?>
				</li>
				<li data-i18n="about.li_13">
					<?= $lang['about']['li_13'] ?>
				</li>
				<li data-i18n="about.li_14">
					<?= $lang['about']['li_14'] ?>
				</li>
				<li data-i18n="about.li_15">
					<?= $lang['about']['li_15'] ?>
				</li>
				<li data-i18n="about.li_16">
					<?= $lang['about']['li_16'] ?>
				</li>
				<li data-i18n="about.li_17">
					<?= $lang['about']['li_17'] ?>
				</li>
			</ul>

			<call-out
				cout-type="note"
				cout-title="<?= $lang['about']['note'] ?>"
				cout-content="<?= $lang['about']['p_3'] ?>"
				title-i18n="about.note"
				content-i18n="about.p_3">
			</call-out>

			<br><br>

			<p id="about_li_1_note" class=" footnote" data-i18n="about.li_1_note">
				<?= $lang['about']['li_1_note'] ?>
			</p>

		</section>

	</main>


	<?php include __DIR__ . '/../includes/footer.php'; ?>


	<script src="../scripts/main.js"></script>
</body>

</html>