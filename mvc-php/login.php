<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Login</title> 
</head> 
<body> 
    <form action="controller.php" method="post"> 
        <input type="text" name="username" placeholder="Username">
        <br>
        <input type="password" name="password" placeholder="Password"> 
        <br>
        <button type="submit">Login</button>
    </form>
    <?php if(isset($_GET['erro'])) : ?>
        <div> INVALID USERNAME OR PASSWORD. PLEASE TRY AGAIN </div>
    <?php endif; ?>

</body>
</html>