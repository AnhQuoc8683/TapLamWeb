<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Khai báo thư viện bootstrap -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <!-- Icon -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <title>Quan Tri Trang Web</title>
    <style>
        *{box-sizing: border-box;}
        .Can-Le{margin-left: 0px; padding: 6px; margin-top: 5px;}
        .Can-Cot{margin-top: 20px;}
        .table-bordered>thead{
            background-color: rgb(169, 210, 230);
        }
        .btn-info{
            font-size: 10px;
        }
    </style>
</head>
<body>
    <div class="container-fluid">
            <?php
                include("includes/head_ql.php");
                include("includes/body_ql.php");
                include("includes/footer_ql.php");
            ?>
    </div>
</body>
</html>