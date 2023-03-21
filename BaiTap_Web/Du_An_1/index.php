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
    <style>
        *{box-sizing: border-box; font-family: 'Montserrat', sans-serif; padding: 0px; text-align: center;}
        a{
            color: #e2dbdb;
        }
        #Logo{
            width: 150px;
            height: 50px;           
            padding-top: 20px;
            padding-bottom: 20px;
            box-sizing: content-box;
           padding-right: 10px;
           left: 0px;
        }
        .nav-justified{
            padding-top: 25px;
            padding-bottom: 20px;
            width: 800px;
        }
        .navbar-right>li>a{
            color: #5e5e5e;
            font-weight: bold;
        }
        .Can-Le{margin-left: 0px; padding: 0px; text-align: left;}
        .Car-box{
            width: 90%;
            margin-top: 30px;
        }
        .Title-Pic{
            text-align: left;
        }
        H4{
            color: #ffb400;
        }
        H4.btom{
            color: #e4e4dc;
        }
        .bgr{
            padding-top: 80px;
            background-image:  url(Picture/bg-img-3-scaled.jpg);
            color: aliceblue;
            background-position: center center;
            background-repeat:  no-repeat;
            background-size: cover;
            position: relative;
        }
        .s-border {
             width: 80px;
            height: 1.5px;
            margin-bottom: 2px;
            border-radius: 50px;
            background: #e4e0e0;
        }
        .m-border {
             width: 50px;
            height: 1px;
            margin-bottom: 2px;
            border-radius: 50px;
            background: #f0e7e7;;
        }
    </style>
    <title>Web Ban o to</title>
</head>
<body>
    <div class="container-fluid">
            <?php
                include("Web/head_ql.php");
                include("Web/body_ql.php");
                include("Web/footer_ql.php");
            ?>
    </div>
</body>
</html>