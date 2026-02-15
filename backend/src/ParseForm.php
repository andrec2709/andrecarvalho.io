<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
error_log($_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php <<<<<<<<_--------------');
$CONFIG_PATH = getenv('CONFIG_PATH');

include $CONFIG_PATH;

use Google\Cloud\RecaptchaEnterprise\V1\Client\RecaptchaEnterpriseServiceClient;
use Google\Cloud\RecaptchaEnterprise\V1\Event;
use Google\Cloud\RecaptchaEnterprise\V1\Assessment;
use Google\Cloud\RecaptchaEnterprise\V1\CreateAssessmentRequest;
use Google\Cloud\RecaptchaEnterprise\V1\TokenProperties\InvalidReason;



/**
 * Create an assessment to analyze the risk of a UI action.
 * @param string $recaptchaKey The reCAPTCHA key associated with the site/app
 * @param string $token The generated token obtained from the client.
 * @param string $project Your Google Cloud Project ID.
 * @param string $action Action name corresponding to the token.
 */
function create_assessment(
    string $recaptchaKey,
    string $token,
    string $project,
    string $action
): void {
    // Create the reCAPTCHA client.
    // TODO: Cache the client generation code (recommended) or call client.close() before exiting the method.
    $client = new RecaptchaEnterpriseServiceClient();
    $projectName = $client->projectName($project);

    // Set the properties of the event to be tracked.
    $event = (new Event())
        ->setSiteKey($recaptchaKey)
        ->setToken($token);

    // Build the assessment request.
    $assessment = (new Assessment())
        ->setEvent($event);

    $request = (new CreateAssessmentRequest())
        ->setParent($projectName)
        ->setAssessment($assessment);

    try {
        $response = $client->createAssessment($request);

        // Check if the token is valid.
        if ($response->getTokenProperties()->getValid() == false) {
            error_log('The CreateAssessment() call failed because the token was invalid for the following reason: ');
            error_log(InvalidReason::name($response->getTokenProperties()->getInvalidReason()));
            return;
        }

        // Check if the expected action was executed.
        if ($response->getTokenProperties()->getAction() == $action) {
            // Get the risk score and the reason(s).
            // For more information on interpreting the assessment, see:
            // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
            error_log('The score for the protection action is:');
            error_log($response->getRiskAnalysis()->getScore());

            if ($response->getRiskAnalysis()->getScore() >= .35){

                $to = "contato@andrecarvalho.io";
                $subject = "E-mail from " . $_POST["username"] . " via andrecarvalho.io";
                $msg = $_POST["message"];
                $headers = "From: " . $_POST["email"];

                $resp = mail($to, $subject, $msg, $headers);
                echo json_encode(['success' => $resp]);

            }

        } else {
            error_log('The action attribute in your reCAPTCHA tag does not match the action you are expecting to score');
            error_log("Action is -> " . $response->getTokenProperties()->getAction());
        }
    } catch (exception $e) {
        error_log('CreateAssessment() call failed with the following error: ');
        error_log($e);
    }
}

// TODO: Replace the token and reCAPTCHA action variables before running the sample.
create_assessment(
    $recaptchaSite,
    $_POST["token"],
    $projectID,
    'submit'
);
