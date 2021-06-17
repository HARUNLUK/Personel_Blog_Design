$(document).ready(function(){
    $("nav").animate({height:'0'},1)
    $("nav").animate({height:'60px'},1000)
    $("#PersonalImg img").hide(1)
    $("#PersonalNav ul li").hide(1)
    $("#PersonalDescription").fadeOut(1)
    $("#PersonalImg").animate({height:'0'},1).animate({height:'150px'},1000)
    $("#PersonalImg img").show(1000)
    $("#PersonalDescription").fadeIn(1000)
    $("#PersonalNav ul").animate({height:'0'},1).animate({height:"132px"},1000,function () {
        $("#PersonalNav ul li").animate({left:'-100px'},1).show(1).animate({left:'15px'},500)
    })
    $(".Title").fadeOut(1);
    $(".Title").fadeIn(2000);
    
    var skillScroll = false
    var educationScroll = false
    var skillAnimTime=1000;
    $("#java").css("width","0")
    $("#python").css("width","0")
    $("#cs").css("width","0")
    $("#js").css("width","0")
    $("#html").css("width","0")
    $("#css").css("width","0")
    $("#android").css("width","0")
    $("#unity").css("width","0")
    $("#UniversityDescription").fadeOut(1)
    $("#UniversityDescription").css("width","0")
    $("#UniversityCard").css("left","250px")
    $(window).scroll(function () {
        var scroll = $(window).scrollTop()
        if(scroll>$("#skills").scrollTop()+200 && !skillScroll){
            
            $("#java").animate({width:'100%'},skillAnimTime)
            skillAnimTime+=200
            $("#python").animate({width:'100%'},skillAnimTime)
            skillAnimTime+=200
            $("#cs").animate({width:'100%'},skillAnimTime)
            skillAnimTime+=200
            $("#js").animate({width:'100%'},skillAnimTime)
            skillAnimTime+=200
            $("#html").animate({width:'100%'},skillAnimTime)
            skillAnimTime+=200
            $("#css").animate({width:'100%'},skillAnimTime)
            skillAnimTime+=200
            $("#android").animate({width:'100%'},skillAnimTime)
            skillAnimTime+=200
            $("#unity").animate({width:'100%'},skillAnimTime)
            skillScroll=true
        }
        if(scroll>$("#Education").scrollTop()+700 && !educationScroll){
            
            $("#UniversityDescription").fadeIn(1000)
            if($(window).width()<850){
                $("#UniversityDescription").animate({width:"67%"},1000)
            }else{
                $("#UniversityDescription").animate({width:"500px"},1000)
            }
            $("#UniversityCard").animate({left:"0"},1000)
            educationScroll=true
        }
    })
});
$(window).resize(function () {
    if($(window).width()<850){
        $("#UniversityDescription").css("width","67%")
    }else{
        $("#UniversityDescription").css("width","500px")
    }
});