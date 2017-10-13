<?php
	require_once("../../../wp-load.php");
	

	$to = get_bloginfo('admin_email');
	$subject = 'Price calculator data';
	$headers[] = 'From: Price calculator <' . get_bloginfo('admin_email') . '>';
	$headers[] = 'Content-Type: text/html; charset=UTF-8';
		
	$data = json_decode(file_get_contents('php://input'), true);

	$projectInfoHTML = '<table style="border: 1px solid #000; text-align: center; padding: 4px; border-spacing: 0; border-collapse: collapse; width: 100%; max-width: 990px;"> <caption style="text-align: center; margin-top: 25px;">Project info</caption> <tbody> <tr> <th style="border: 1px solid #000; text-align: center; padding: 4px;">Location</th> <th style="border: 1px solid #000; text-align: center; padding: 4px;">People needed</th> <th style="border: 1px solid #000; text-align: center; padding: 4px;">Project period</th> <th style="border: 1px solid #000; text-align: center; padding: 4px;">Want to start</th> <th style="border: 1px solid #000; text-align: center; padding: 4px;">Client Email</th> </tr><tr> <th style="border: 1px solid #000; text-align: center; padding: 4px; font-weight: normal;">' . $data["projectInfo"]["location"] . '</th> <th style="border: 1px solid #000; text-align: center; padding: 4px; font-weight: normal;">' . $data["projectInfo"]["peopleInTeam"] . '</th> <th style="border: 1px solid #000; text-align: center; padding: 4px; font-weight: normal;">' . $data["projectInfo"]["projectPeriod"] . '</th> <th style="border: 1px solid #000; text-align: center; padding: 4px; font-weight: normal;">' . $data["projectInfo"]["wantToStart"] . '</th> <th style="border: 1px solid #000; text-align: center; padding: 4px; font-weight: normal;"><a href="email">' . $data["clientEmail"] . '</a></th> </tr><tr></tbody></table>';


	// loop with pattern:
	$developerPattern = '/(developer-)\d+/';
	$developersHTMLBefore = '<table style="border: 1px solid #000; text-align: center; padding: 4px; border-spacing: 0; border-collapse: collapse; width: 100%; max-width: 990px;"> <caption style="text-align: center; margin-top: 25px">Developers</caption> <tbody> <tr> <th style="border: 1px solid #000; text-align: center; padding: 4px">ID</th> <th style="border: 1px solid #000; text-align: center; padding: 4px">Level</th> <th style="border: 1px solid #000; text-align: center; padding: 4px">Skills</th> <th style="border: 1px solid #000; text-align: center; padding: 4px">Type</th> </tr>';
	$developersHTMLAfter = '</tbody></table>';

	$developersHTMLFull = '';
	$developersHTMLFull .= $developersHTMLBefore;


	function echoArray($array) {
		$temp = array();

		if (is_array($array) || is_object($array)) {
			foreach($array as $item => $value) {
				array_push($temp, $array[$item]);
			}
		}

		$result = implode(", ", $temp);
		empty($result) ? $result = 'Not selected' : $result = $result;

		return $result;
	}



	foreach($data['developers'] as $key => $value) {
	    $developersHTMLFull .= '<tr><th style="border: 1px solid #000; text-align: center; padding: 4px; font-weight: normal;">' . $data['developers'][$key]['developerID'] . '</th><th style="border: 1px solid #000; text-align: center; padding: 4px; font-weight: normal;">' . $data['developers'][$key]["level"] . '</th><th style="border: 1px solid #000; text-align: center; padding: 4px; font-weight: normal;">' . echoArray($data['developers'][$key]["type"]) . '</th><th style="border: 1px solid #000; text-align: center; padding: 4px; font-weight: normal;">' . echoArray($data['developers'][$key]["skill"]) . '</th></tr>';
	}

	$developersHTMLFull .= $developersHTMLAfter;

	$fullHTML = $projectInfoHTML . $developersHTMLFull;
	 
	wp_mail($to, $subject, $fullHTML, $headers);
?>