{"filter":false,"title":"process.php","tooltip":"/process.php","undoManager":{"mark":49,"position":49,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":37,"column":24},"action":"insert","lines":["<?php","$errors = array(); // array to hold validation errors","$data = array(); // array to pass back data","// validate the variables ======================================================","if (empty($_POST['name']))","$errors['name'] = 'Name is required.';","if (empty($_POST['email']))","$errors['email'] = 'Email is required.';","if (empty($_POST['message']))","$errors['message'] = 'Message is required.';","// return a response ===========================================================","// response if there are errors","if ( ! empty($errors)) {","  // if there are items in our errors array, return those errors","  $data['success'] = false;","  $data['errors'] = $errors;","  $data['messageError'] = 'Please check the fields in red';","} else {","  // if there are no errors, return a message","  $data['success'] = true;","  $data['messageSuccess'] = 'Hey! Thanks for reaching out. I will get back to you soon';","  // CHANGE THE TWO LINES BELOW","  $email_to = \"yourEmailHere@gmail.com\";","  $email_subject = \"message submission\";","  $name = $_POST['name']; // required","  $email_from = $_POST['email']; // required","  $message = $_POST['message']; // required","  $email_message = \"Form details below.nn\";","  $email_message .= \"Name: \".$name.\"n\";","  $email_message .= \"Email: \".$email_from.\"n\";","  $email_message .= \"Message: \".$message.\"n\";","  $headers = 'From: '.$email_from.\"rn\".","  'Reply-To: '.$email_from.\"rn\" .","  'X-Mailer: PHP/' . phpversion();","  @mail($email_to, $email_subject, $email_message, $headers);","}","// return all our data to an AJAX call","echo json_encode($data);"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":15},"end":{"row":22,"column":28},"action":"remove","lines":["yourEmailHere"]},{"start":{"row":22,"column":15},"end":{"row":22,"column":16},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"insert","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"insert","lines":["4"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":18},"end":{"row":8,"column":25},"action":"remove","lines":["message"]},{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":18},"end":{"row":8,"column":22},"action":"remove","lines":["tele"]},{"start":{"row":8,"column":18},"end":{"row":8,"column":27},"action":"insert","lines":["telephone"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":22},"end":{"row":9,"column":29},"action":"remove","lines":["Message"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":["T"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":22},"end":{"row":9,"column":26},"action":"remove","lines":["Tele"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":31},"action":"insert","lines":["Telephone"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":46},"end":{"row":10,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":0},"end":{"row":11,"column":46},"action":"insert","lines":["if (empty($_POST['telephone']))","$errors['message'] = 'Telephone is required.';"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":0},"end":{"row":11,"column":46},"action":"remove","lines":["if (empty($_POST['telephone']))","$errors['message'] = 'Telephone is required.';"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":46},"end":{"row":10,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":9},"end":{"row":9,"column":16},"action":"remove","lines":["message"]},{"start":{"row":9,"column":9},"end":{"row":9,"column":18},"action":"insert","lines":["telephone"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":2},"end":{"row":34,"column":26},"action":"insert","lines":["$data['success'] = true;"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":26},"end":{"row":34,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":27},"end":{"row":34,"column":28},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":25},"end":{"row":34,"column":28},"action":"remove","lines":["; ="]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":21},"end":{"row":34,"column":25},"action":"remove","lines":["true"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":9},"end":{"row":34,"column":16},"action":"remove","lines":["success"]},{"start":{"row":34,"column":9},"end":{"row":34,"column":10},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":10},"end":{"row":34,"column":11},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":11},"end":{"row":34,"column":12},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"remove","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":15},"end":{"row":34,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":16},"end":{"row":34,"column":17},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":17},"end":{"row":34,"column":18},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":18},"end":{"row":34,"column":19},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":19},"end":{"row":34,"column":20},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":20},"end":{"row":34,"column":21},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":21},"end":{"row":34,"column":22},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":22},"end":{"row":34,"column":23},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":23},"end":{"row":34,"column":24},"action":"insert","lines":["s"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":0},"end":{"row":4,"column":0},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":234,"mode":"ace/mode/php"}},"timestamp":1424922594799,"hash":"ce5f6cc532f67bf4595383443ef8880938983233"}