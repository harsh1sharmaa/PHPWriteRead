// $(document).ready(function () {
    $("#update").hide();
    $("#table").hide();
    $("#data").hide();

      $("#all").click(function () {
        $("#table").show();
        alert("a;;");
        $.ajax({
            method: "GET",
            url: "center.php",
            data: {
                // id:id,
                // from:from,
                // to:to,
                // arrival:arrival,
                // departure:departure,
                action: "pull",

            },
            dataType: "JSON"
        }).done(function (data) {
            // let newdata = JSON.parse(data);
            console.log(data);

            // console.log(data.data);
            // objarr.push(data);
            disply(data['data']);


        })
    })



    $("#search").click(function () {
          alert("btn");
          $("#data").show();
          $("#table").hide();
        let id = $("#input").val();
        console.log(id);
        $.ajax({
            method: "GET",
            url: "center.php",
            data: {
                // id:id,
                // from:from,
                // to:to,
                // arrival:arrival,
                // departure:departure,
                action: "search",
                id: id

            },
            dataType: "JSON"
        }).done(function (data) {
            // let newdata = JSON.parse(data);

            console.log(data);
            // objarr.push(data);
            // disply(data['data']);
            FilllData(data);


        })
    });

    function FilllData(data){
        $("#update").show();

        let id=data.id;
        let from=data.from;
        let to=data.to;
        let ar=data.arrival;
        let dp=data.departure;
        $("#fid").val(id);
        $("#from").val(from);
        $("#to").val(to);
        $("#ari").val(ar);
        $("#dep").val(dp);


    }

    function update(){
        $("#update").hide();
        $("#data").hide();

        let id= $("#fid").val();
        let from=$("#from").val();
        let to=$("#to").val();
        let ar=$("#ari").val();
        let dp=$("#dep").val();

        $.ajax({
            method: "GET",
            url: "center.php",
            data: {
                id:id,
                from:from,
                to:to,
                arrival:ar,
                departure:dp,
                action: "update",
                

            },
            // dataType: "JSON"
        }).done(function (data) {
            // let newdata = JSON.parse(data);

            console.log(data);
            // objarr.push(data);
            // disply(data['data']);
            // FilllData(data);


        })


    }


// });

// $(document).ready(function(){

//     let objarr=[];
// console.log("hello");


// for(let i=0;i<data.length;i++){
//     let obj=data[i];
//     let id=obj.id;
//     let from=obj.from;
//     let to=obj.to;
//     let arrival=obj.arrival;
//     let departure=obj.departure;






function disply(data) {



    let html = "<table><tr><th>ID </th><th> from</th><th>To</th><th>Arrival </th><th>Departure</th></tr>";
    for (let i = 0; i < data.length; i++) {
        // console.log(i);
        html += "<tr><td>"
            + data[i].id +
            "</td><td>"
            + data[i].from +
            "</td><td>"
            + data[i].to +
            "</td><td>"
            + data[i].arrival +
            "</td><td>" +
            data[i].departure +
            "</td></tr>"
    }
    html += "</table>";

    $("#table").html(html);

}

