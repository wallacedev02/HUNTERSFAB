<?php
session_start();

// PEGANDO OS DADOS DO FORMULÁRIO
$email = $_POST['email'] ?? '';
$password = $_POST['senha'] ?? '';

// DADOS DE CONEXÃO
$server      = 'localhost';
$usuario     = 'root';
$senha_banco = '';
$banco       = 'formulario_cadastro';

// CRIANDO CONEXÃO
$conn = new mysqli($server, $usuario, $senha_banco, $banco);
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// BUSCANDO USUÁRIO PELO EMAIL
$sql = "SELECT * FROM mensagens WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

// VERIFICANDO SENHA
if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row['senha'])) {
        // LOGIN OK
        $_SESSION['usuario'] = $row['nome'];
        $msg = "✅ Login realizado com sucesso! Redirecionando para a página de performance...";
        $cor = "#28a745";
        header("refresh:2;url=performace.html"); // Redireciona para sua página HTML
    } else {
        // SENHA ERRADA
        $msg = "❌ Usuário ou senha incorretos! Tente novamente...";
        $cor = "#dc3545";
        header("refresh:3;url=index.php"); // Volta para o login
    }
} else {
    // USUÁRIO NÃO ENCONTRADO
    $msg = "❌ Usuário ou senha incorretos! Tente novamente...";
    $cor = "#dc3545";
    header("refresh:3;url=index.php"); // Volta para o login
}

// MENSAGEM VISUAL
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
