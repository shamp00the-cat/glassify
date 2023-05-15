<?php
//Database Connection
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

class connectDb {
    private $servername = "localhost:3308"; // swiss server designated localhost
    private $dbname = "dev02db";
    private $username = "dev02dbuser";//replace with username for your database dev02dbuser,dev03dbuser, etc.
    private $password = "lFiP9QQtxWZvteUf";//replace with password for your database FM02web2020,FM03web2020, etc.

    public function connect() {
        try {
            $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error: ".$e->getMessage();
        }
    }
}
?>