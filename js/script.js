$(".openNav").click(function(){
    $("#leftMenu").animate({width:"250px"})
    $("#home-content").animate({marginLeft:"250px"})
}
)
$(".closebtn").click(function(){
    $("#leftMenu").animate({width:"0px"})
    $("#home-content").animate({marginLeft:"0px"})
})

// let prev=$('.first');
$(".toggle").click(function(){
    $(".toggle").not($(this)).next().slideUp()
    $(this).next().slideToggle()
}
)
// $(".sidenav a").click(function(){
//     // let divID= $(this).attr("href")
//     // let target=$(divID).offset().top
//     // console.log(this,divID,target);

//     $("html,body").animate({scrollTop:500})
// })

$("#leftMenu a").click((e)=>{
    let divID=$(e.target).attr("href");
    let target=$(divID).offset().top;   
    $("html,body").animate({scrollTop:target},2000)
})
window.onload = function() {


//     let countDownDate = new Date("25 october 2023 11:59:00").getTime();

// // Update the count down every 1 second
// let x = setInterval(function() {

//   // Get today's date and time
//   let now = new Date().getTime();

//   // Find the distance between now and the count down date
//   let distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       $(".days").html(`${days} D`);
//     $(".hours").html(`${hours} h`);
//     $(".minutes").html(`${ minutes } m`);
//     $('.seconds').html(`${ seconds} s`);
//     console.log(distance)
// },1000);

   
    countDownToTime("25 october 2024 11:59:00");
  }

  function countDownToTime(DateTo) {
  
        let futureDate = new Date(DateTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let minutes = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let seconds = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ minutes } m`);
    $('.seconds').html(`${ seconds} s`)

  
    setInterval(function() {  countDownToTime(DateTo); }, 1000);
  }

  $("textarea").keyup(function(){
    let text=$(this).val()
    let wordCount=text.split(" ").length
    let charCount=text.length
    let charsLeft=100-charCount
    if(charsLeft<=0){
        $("#chars").html("You reached your limit of characters")
        $("#charText").html("")

    }
    else{
        $("#chars").html(charsLeft)
        $("#charText").html("Character Reamining")
    }
  })