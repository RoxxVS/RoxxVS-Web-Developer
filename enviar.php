<?php
//datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];
//correo electrónico
$destinatario = "roxanavaleriasolernou@gmail.com";
//asunto del correo
$asunto = "Nuevo mensaje dese el formulario de contacto";
//cuerpo del correo
$cuerpo = "Nombre: $nombre\nCorreo: $correo\nMensaje: $mensaje";
//encabezados del correo
$headers = "From: $nombre <$correo>\r\n";
//envía el correo
if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo "Mensaje enviado correctamente."; 
} else {
    echo "Error al enviar mensaje.";
}
