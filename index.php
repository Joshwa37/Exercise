<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="index.php" method=post>
        <label>items</label><br>
        <select name="items" id="cars">
            <option value="pizza">pizza </option>
            <option value="burgar">burgar</option>
        </select><br>
        <label>quantity:</label>
        <input type=text name=quantity1>
    </form>
</body>

</html>
<?php
echo "{$_POST["quantity1"]}<br>";
?>