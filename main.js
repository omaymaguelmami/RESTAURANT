 var favorite=[];
    var price={
        espresso:2.5,
        cappuccino:3.5,
        late:3.5,
        coka:3.8,
        fanta:3.8,
        schweeeps:4,
        strawberry:5.5,
        wood:5.8,
        banane:5,
        caesar:18,
        pulp:26,
        green:13,
        salmon:28,
        cheese:25,
        sea:35,
        tuna:8,
        veget:7.5,
        pcheese:12,
        bveg:12,
        bcheese:15,
        meat:18,
        nutella1:7.5,
        caramel1:6,
        japanese:6,
        nuttella2:7.5,
        ferero:9,
        caramel2:7,
        fruitsalad:13
    }
//     function add(){
//        favorite= favorite.concat(Array.prototype.filter.call($('input[type=checkbox]'),function($ele){
//           return $ele.checked
//         }).map(function($ele){
// return $ele.value
// }))
//     }
     $(function() {
       $("#price").click(function(){
            $.each($("input[type='checkbox']:checked"), function(){
                favorite.push($(this).val());
              
            });
             $('#revenue').text(result()+'dt');

           });
       $("#but").click(function(e){
        
        if (favorite.length>0){
          $("#rev").text("you choose: "+favorite.join(","));
      }
      else{
      alert("you didn't choose anything");}
          e.preventDefault();
      });
       $('#another').on('click',function(){
         location.reload(true);
       });
    });
    function reset(){
        favorite=[];
         $('#revenue').text(result()+'dt');

    }
    function result(){
        var total=0;
        for(var i=0;i<favorite.length;i++){
            total=total+price[favorite[i]];
        }
        return total;
    }





  $("#btn1").on("click",function(){
    $("#drinks").show();
    $("#salty").hide();
    $("#sweet").hide();
  })

$("#btn2").on("click",function(){
    $("#salty").show();
    $("#drinks").hide();
    $("#sweet").hide();
  })
$("#btn3").on("click",function(){
    $("#sweet").show();
    $("#salty").hide();
    $("#drinks").hide();
  })
// $('document').ready(function(){
// $('#price').on("click",function(){
//   add()
//   $("#revenue").text(result())
// })})