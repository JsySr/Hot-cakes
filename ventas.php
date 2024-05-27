

<?php
$servername = "localhost";
$username = "admin";
$password = "Superman123#";
$dbname = "hot_cakes";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$fechaInicio = $_POST['fechaInicio'];
$fechaFinal = $_POST['fechaFinal'];
$tipoPago = $_POST['tipoPago'];

$sql = "SELECT c.nombre_cliente, v.total_venta, v.fecha_venta
        FROM ms_contabilidad v
        INNER JOIN clientes c ON v.clave_cliente = c.clave
        WHERE v.fecha_venta BETWEEN '$fechaInicio' AND '$fechaFinal' 
        AND v.clave_pago = '" . ($tipoPago == 'contado' ? 1 : 2) . "'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2>Resultados del Reporte</h2>";
    echo "<table border='1'>";
    echo "<tr><th>Cliente</th><th>Venta</th><th>Fecha</th></tr>";

    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["nombre_cliente"] . "</td><td>" . $row["total_venta"] . "</td><td>" . $row["fecha_venta"] . "</td></tr>";
    }

    echo "</table>";
} else {
    echo "No se encontraron ventas para el período seleccionado.";
}

$conn->close();
?>