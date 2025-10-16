<?php
// PEGANDO OS DADOS VINDOS DO FORMULÁRIO
$nome         = $_POST['nome'];
$email        = $_POST['email'];
$telefone     = $_POST['telefone'];
$modelo_carro = $_POST['modelo_carro'];
$ano          = $_POST['ano'];
$km           = $_POST['km'];
$cidade       = $_POST['cidade'];
$estado       = $_POST['estado'];
$endereco     = $_POST['endereco'];
$senha        = $_POST['senha'];

// HASH DA SENHA
$senha_hash = password_hash($senha, PASSWORD_DEFAULT);

// DADOS DE CONEXÃO
$server      = 'localhost';
$usuario     = 'root';
$senha_banco = ''; // senha do XAMPP
$banco       = 'formulario_cadastro';

// CRIANDO CONEXÃO
$conn = new mysqli($server, $usuario, $senha_banco, $banco);

// VERIFICANDO CONEXÃO
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// INSERINDO DADOS NO BANCO
$stmt = $conn->prepare("
    INSERT INTO mensagens (nome, email, telefone, modelo_carro, ano, km, cidade, estado, endereco, senha)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
");

$stmt->bind_param("ssssiissss", $nome, $email, $telefone, $modelo_carro, $ano, $km, $cidade, $estado, $endereco, $senha_hash);

// EXECUTANDO E MOSTRANDO RESULTADO
if ($stmt->execute()) {
    echo "
    <html>
    <head>
        <meta charset='UTF-8'>
        <title>Cadastro realizado</title>
        <meta http-equiv='refresh' content='3;url=login.php'>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f3f3f3;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }
            .msg {
                background: #ffffff;
                padding: 30px 50px;
                border-radius: 12px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                text-align: center;
            }
            h2 {
                color: #28a745;
            }
            p {
                color: #555;
            }
        </style>
    </head>
    <body>
        <div class='msg'>
            <h2>✅ Cadastro realizado com sucesso!</h2>
            <p>Você será redirecionado para a página de login em alguns segundos...</p>
        </div>
    </body>
    </html>
    ";
} else {
    echo "Erro ao cadastrar: " . $stmt->error;
}

// FECHANDO CONEXÃO
$stmt->close();
$conn->close();
?>
