<?php

$action=$_GET['action'];




$jsondData=file_get_contents("file/data.json");
$data = json_decode($jsondData,true);
if($action=='pull'){
//   echo "hello pull";
//   exit();
 echo json_encode($data);
}

if($action=='search'){
     $id=$_GET['id'];


     // echo $id;
    $filterData=array();
    foreach($data['data'] as $key => $value2){
    

//         // echo $value2['id'];
//         // echo $value2['from'];
//         // echo $value2['to'];
//         // echo $value2['arrival'];
        if($value2['id']==$id){
            echo json_encode($value2);
            break;

        }
   
}

}

if($action=='update'){

     $id=$_GET['id'];
     $from=$_GET['from'];
     $to=$_GET['to'];
     $ari=$_GET['arrival'];
     $dp=$_GET['departure'];

     foreach($data['data'] as $key => $value2){
    

          // echo $value2['id'];
          // echo $value2['from'];
          // echo $value2['to'];
          // echo $value2['arrival'];
          if($value2['id']==$id){
  
            $data['data'][$key]['id']=$id;
            $data['data'][$key]['from']=$from;
            $data['data'][$key]['to']=$to;
            $data['data'][$key]['arrival']=$ari;
            $data['data'][$key]['departure']=$dp;
            break;
          }
     
  }
  file_put_contents('file/data.json', json_encode($data));
  echo "data updated";
}
// echo json_encode($data);
    

// echo "<pre>";
// print_r($data['data']['0']['id']);
// echo "</pre>";
// foreach($data['data'] as $key => $value2){
    

//         echo $value2['id'];
//         echo $value2['from'];
//         echo $value2['to'];
//         echo $value2['arrival'];
//         if($value2['id']==$id){

//           $data['data'][$key]['id']=
//           $data['data'][$key]['from']=
//           $data['data'][$key]['to']=
//           $data['data'][$key]['arrival']=
//           $data['data'][$key]['departure']=
//         }
   
// }
// file_put_contents('data.json', json_encode($data));

?>