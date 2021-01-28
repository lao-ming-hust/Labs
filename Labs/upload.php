<?php
header("Content-type:text/html; charset=utf-8");
if($_SERVER["REQUEST_METHOD"]=="POST"){
        $date=date("Y-m-d");
        $content=json_decode(file_get_contents("php://input"));
        $name=htmlspecialchars($content->{'name'});
        $number=htmlspecialchars($content->{'number'});
        $phone=htmlspecialchars($content->{'phone'});
        $school=htmlspecialchars($content->{'school'});
        $labCode=htmlspecialchars($content->{'labCode'});

}


if($con=mysqli_connect("localhost","Labs","abcd1234")){
    // echo "连接数据库成功<br>";
    if(mysqli_select_db($con,"Labs")){
       //  echo "选择数据库成功<br>";
        if(mysqli_query($con,"INSERT INTO labs_sign
        VALUES(null,'$date','$name','$number','$phone','$school','$labCode')")){
          echo "无所畏惧，未来可期！";
        
ob_end_clean();
        }
        else{
            echo "插入记录失败：".mysqli_error($con);
        }
    }
    else{
        echo "选择数据库失败".mysqli_error($con)."<br>";
    }
}
else{
    echo "连接数据库失败：".mysqli_error($con)."<br>";
}
mysqli_close($con);

?>