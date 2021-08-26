 <!-- <?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
//require 'vendor/autoload.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language/');
$mail->IsHTML(true);

try {
    // //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    // $mail->isSMTP();                                            //Send using SMTP
    // $mail->Host       = 'smtp.example.com';                     //Set the SMTP server to send through
    // $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    // $mail->Username   = 'user@example.com';                     //SMTP username
    // $mail->Password   = 'secret';                               //SMTP password
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    // $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('walyawalikowa@gmail.com', 'Mailer');
    $mail->addAddress('favari5888@ansomesa.com', 'Joe User');     //Add a recipient
               //Name is optional
   // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
$body = '<h2>The letter is came</h2>';
if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя</strong> '.$_POST['name'].'</p>';

}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail</strong> '.$_POST['email'].'</p>';
    
}

$mail->Body = $body;

//отправка
if(!$mail->send()){
$message = 'Ошибка';
} else {
    $message = 'данные отправлены!';
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);


  

    
   
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}  