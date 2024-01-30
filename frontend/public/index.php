<?php
$con = pg_connect("host=localhost dbname=postgres user=postgres password=root");
if (!$con) {
    echo "DB not connected :(";
    exit;
}
$result = pg_query($con, "SELECT * FROM pgtest");
if (!$result) {
    echo "no result!";
    exit;
}
while ($row = pg_fetch_assoc($result)) {
    echo $row['testval'];
    echo "<br/>";
}
?>