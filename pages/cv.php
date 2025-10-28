<?php

include __DIR__ . "/../api/StartSession.php";

?>


<!DOCTYPE html>

<html lang="<?= $language ?>">

<head>
	<meta charset="UTF-8">
	<meta name="description"
		content="<?= $lang['cv']['description'] ?>">
	<meta name="keywords" content="<?= $lang['cv']['keywords'] ?>">
	<meta name="author" content="Andre Carvalho Filho">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title data-i18n="cv.title">
		<?= $lang['cv']['title'] ?>
	</title>
	<link rel="canonical" href="https://andrecarvalho.io/pages/cv.php">
	<link rel="icon" href="/favicon.svg" type="image/x-icon">
	<link rel="stylesheet" href="/styles/main.css">
	<link rel="stylesheet" href="/styles/cv.css">
	<script>
		const theme = localStorage.getItem('theme') || '<?= $DEFAULT_THEME ?>';
		document.documentElement.classList.add(`theme-${theme}`);
	</script>
</head>

<body>
	<?php include __DIR__ . '/../includes/header.php'; ?>

	<main class="main-content">
		<button id="download-button" class="custom-button" data-i18n="cv.save_pdf"><?= $lang['cv']['save_pdf'] ?></button>
		<div id="cv" class="cv-container">
			<section id="name-role-section">
				<h1 class="name-cv">Andre Carvalho Filho</h1>
				<h2 class="role-cv" data-i18n="cv.role"><?= $lang['cv']['role'] ?></h2>
			</section>
			<div class="cv-content">
				<div class="left-side">
					<section id="contact-information">
						<h3 class="field-cv" data-i18n="cv.contact"><?= $lang['cv']['contact'] ?></h3>
						<ul class="field-list">
							<li><strong>E-mail: </strong><span>contato@andrecarvalho.io</span></li>
							<li><strong data-i18n="cv.phone"><?= $lang['cv']['phone'] ?></strong><span>+55 41 99678-5605</span></li>
							<li><strong>LinkedIn: </strong><a class="p-link" href="https://linkedin.com/in/andrecarvalhofilho" target="_blank">/in/andrecarvalhofilho</a></li>
							<li><strong data-i18n="cv.location"><?= $lang['cv']['location'] ?></strong><span data-i18n="cv.location_val"><?= $lang['cv']['location_val'] ?></span></li>
						</ul>
					</section>
					<section id="technical-skills">
						<h3 class="field-cv" data-i18n="cv.tech_skills"><?= $lang['cv']['tech_skills'] ?></h3>
						<h4 class="field-cv" data-i18n="cv.langs"><?= $lang['cv']['langs'] ?></h4>
						<p data-i18n="cv.langs_val"><?= $lang['cv']['langs_val'] ?></p>
						<h4 class="field-cv" data-i18n="cv.fws"><?= $lang['cv']['fws'] ?></h4>
						<p data-i18n="cv.fws_val"><?= $lang['cv']['fws_val'] ?></p>
						<h4 class="field-cv" data-i18n="cv.dbs"><?= $lang['cv']['dbs'] ?></h4>
						<p data-i18n="cv.dbs_val"><?= $lang['cv']['dbs_val'] ?></p>
						<h4 class="field-cv" data-i18n="cv.oth_tools"><?= $lang['cv']['oth_tools'] ?></h4>
						<p data-i18n="cv.oth_tools_val"><?= $lang['cv']['oth_tools_val'] ?></p>
					</section>
				</div>
				<div class="right-side">
					<section id="profile-summary">
						<h3 class="field-cv" data-i18n="cv.pro_sum"><?= $lang['cv']['pro_sum'] ?></h3>
						<p data-i18n="cv.pro_sum_desc"><?= $lang['cv']['pro_sum_desc'] ?></p>
					</section>
					<section id="professional-experience">
						<h3 class="field-cv" data-i18n="cv.pro_exp"><?= $lang['cv']['pro_exp'] ?></h3>
						<section class="experience-item">
							<h4 class="field-cv" data-i18n="cv.item1_company"><?= $lang['cv']['item1_company'] ?><wbr><em data-i18n="cv.item1_date"><?= $lang['cv']['item1_date'] ?></em></h4>
							<p><em data-i18n="cv.item1_role"><?= $lang['cv']['item1_role'] ?></em></p>
							<p data-i18n="cv.item1_desc"><?= $lang['cv']['item1_desc'] ?></p>
						</section>
						<section class="experience-item">
							<h4 class="field-cv" data-i18n="cv.item2_company"><?= $lang['cv']['item2_company'] ?><wbr><em data-i18n="cv.item2_date"><?= $lang['cv']['item2_date'] ?></em></h4>
							<p><em data-i18n="cv.item2_role"><?= $lang['cv']['item2_role'] ?></em></p>
							<p data-i18n="cv.item2_desc"><?= $lang['cv']['item2_desc'] ?></p>
						</section>
					</section>
				</div>
			</div>
		</div>

	</main>


	<?php include __DIR__ . '/../includes/footer.php'; ?>


	<script src="../scripts/main.js"></script>

</body>

</html>