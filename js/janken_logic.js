// クリックすると敵が出現する
// 敵は３種類出現する
// 敵は種類によってHPが異なる

var hit_point_teki = 0
var hit_point_mikata = 100
var hit_point_teki_plus = 0
var hit_point_mikata_plus = 0
var random_mikata = 0
var random_teki = 0

$("#teki_btm").on('click',function(){
    random_teki = Math.floor(Math.random()*3)
    // console.log(random_teki)

if(random_teki === 0){
    hit_point_teki = 100
    // $("#teki_btm").text("雷の敵 HP")
    $("#teki_btm").html('<img src="img/rdesign_15430.png" class="h-40">')
    $('#hitpoint_text').text("HP:")
    $("#hitpoint_btm").text(hit_point_teki)
}else if(random_teki === 1){
    hit_point_teki = 110
    // $("#teki_btm").text("氷の敵 HP")
    $("#teki_btm").html('<img src="img/rdesign_15429.png" class="h-40">')
    $('#hitpoint_text').text("HP:")
    $("#hitpoint_btm").text(hit_point_teki)
}else{
    hit_point_teki = 120
    // $("#teki_btm").text("炎の敵 HP")
    $("#teki_btm").html('<img src="img/rdesign_15427.png" class="h-40">')
    $('#hitpoint_text').text("HP:")
    $("#hitpoint_btm").text(hit_point_teki)
}
})

// クリックすると仲間が出現する
// 仲間は３種類出現する

$("#mikata_btm").on('click',function(){
    random_mikata = Math.floor(Math.random()*3)
    console.log(random_mikata)

if(random_mikata === 0){
    hit_point_mikata = 200
    // $("#mikata_btm").text("雷の仲間 HP")
    $("#mikata_btm").html('<img src="img/rdesign_15430.png" class="h-40">')
    $('#hitpoint_mikata_text').text("HP:")
    $("#hitpoint_mikata_btm").text(hit_point_mikata)
}else if(random_mikata === 1){
    hit_point_mikata = 210
    // $("#mikata_btm").text("氷の仲間 HP")
    $("#mikata_btm").html('<img src="img/rdesign_15429.png" class="h-40">')
    $('#hitpoint_mikata_text').text("HP:")
    $("#hitpoint_mikata_btm").text(hit_point_mikata)
}else{
    hit_point_mikata = 220
    // $("#mikata_btm").text("炎の味方 HP")
    $("#mikata_btm").html('<img src="img/rdesign_15427.png" class="h-40">')
    $('#hitpoint_mikata_text').text("HP:")
    $("#hitpoint_mikata_btm").text(hit_point_mikata)
}
})




$("#attack_btm").on('click',function(){
    var attack_point_mikata = 0
    var attack_point_teki = 0
    var random_attack = Math.floor(Math.random()*3)
    console.log(attack_point_teki)


// 敵と味方の相性によって攻撃力を調整
// 雷0は氷1に強く、炎2に弱い
// 氷1は炎2に強く、雷0に弱い
// 炎2は雷0に強く、氷1に弱い


if(random_mikata === 0 && random_teki === 1){
    // 味方は雷（0）、敵は氷（1）
    hit_point_teki_plus = 0
    hit_point_mikata_plus = 10
}else if(random_mikata === 0 && random_teki === 2){
    // 味方は雷（0）、敵は炎（2）
    hit_point_teki_plus = 10
    hit_point_mikata_plus = 0
}else if(random_mikata === 1 && random_teki === 2){
    // 味方は氷（1）、敵は雷（0）
    hit_point_teki_plus = 0
    hit_point_mikata_plus = 10
}else if(random_mikata === 1 && random_teki === 0){
    // 味方は氷（1）、敵は炎（2）
    hit_point_teki_plus = 10
    hit_point_mikata_plus = 0
}else if(random_mikata === 2 && random_teki === 0){
    // 味方は氷（1）、敵は雷（0）
    hit_point_teki_plus = 0
    hit_point_mikata_plus = 10
}else if(random_mikata === 2 && random_teki === 1){
    // 味方は氷（1）、敵は炎（2）
    hit_point_teki_plus = 10
    hit_point_mikata_plus = 0
}






if(random_attack === 0){
    attack_point_teki = 0 + hit_point_teki_plus
    attack_point_mikata = 10 + hit_point_mikata_plus
    $("#attack_teki_btm").text(attack_point_teki)
    $("#attack_mikata_btm").text(attack_point_mikata)

    hit_point_teki = hit_point_teki - attack_point_mikata
    hit_point_mikata = hit_point_mikata - attack_point_teki
    $("#hitpoint_btm").text(hit_point_teki)
    $("#hitpoint_mikata_btm").text(hit_point_mikata)

}else if(random_attack === 1){

    attack_point_teki = 5  + hit_point_teki_plus
    attack_point_mikata = 5 + hit_point_mikata_plus
    $("#attack_teki_btm").text(attack_point_teki)
    $("#attack_mikata_btm").text(attack_point_mikata)

    hit_point_teki = hit_point_teki - attack_point_mikata
    hit_point_mikata = hit_point_mikata - attack_point_teki
    $("#hitpoint_btm").text(hit_point_teki)
    $("#hitpoint_mikata_btm").text(hit_point_mikata)


}else{

    attack_point_teki = 10  + hit_point_teki_plus
    attack_point_mikata = 0 + hit_point_mikata_plus
    $("#attack_teki_btm").text(attack_point_teki)
    $("#attack_mikata_btm").text(attack_point_mikata)

    hit_point_teki = hit_point_teki - attack_point_mikata
    hit_point_mikata = hit_point_mikata - attack_point_teki
    $("#hitpoint_btm").text(hit_point_teki)
    $("#hitpoint_mikata_btm").text(hit_point_mikata)
}


if(hit_point_teki <= 0){
    $("#attack_btm").html('<span class="flex justify-center text-red-500">あなたの勝ち</span>')
}else if(hit_point_mikata <= 0 )
    $("#attack_btm").html('<span class="flex justify-center text-red-500">あなたの負け</span>')

})









