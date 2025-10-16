<?php
session_start();

$nome = $_POST['nome'] ?? '';
$password = $_POST['senha'] ?? '';

$server      = 'localhost';
$usuario     = 'root';
$senha_banco = '';
$banco       = 'formulario_cadastro';

$conn = new mysqli($server, $usuario, $senha_banco, $banco);
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

$sql = "SELECT * FROM mensagens WHERE nome = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $nome);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row['senha'])) {
        $_SESSION['usuario'] = $nome;
        header("refresh:2;url=painel.php");
        $msg = "✅ Login realizado com sucesso! Redirecionando para o painel...";
        $cor = "#28a745";
    } else {
        $msg = "❌ Usuário ou senha incorretos! Tente novamente...";
        $cor = "#dc3545";
        header("refresh:3;url=index.php");
    }
} else {
    $msg = "❌ Usuário ou senha incorretos! Tente novamente...";
    $cor = "#dc3545";
    header("refresh:3;url=index.php");
}

echo "
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f3f3f3;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        .msg {
            background: #fff;
            padding: 30px 50px;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        h2 { color: $cor; }
    </style>
</head>
<body>
    <div class='msg'>
        <h2>$msg</h2>
    </div>
</body>
</html>
";

$stmt->close();
$conn->close();
?>
