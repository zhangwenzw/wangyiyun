$(function(){
    $("#fullpage").fullpage({
        anchors: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
        menu: '#menu'
        //navigationTooltips:['a','b','c','d','e','f','g','h','i','j']


        //onLeave:function(index, nextIndex, direction){
        //    index=index-1;
        //    $(".section").eq(index).find(".text").css({
        //        transform:"scale(1,1)"
        //
        //    })
        //},
        //afterLoad:function(anchorLink, index){
        //    //index=index-1;
        //    $(".section").eq(index).find(".text").css({
        //        transform:"scale(2,2)"
        //    })
        //}
    });

})