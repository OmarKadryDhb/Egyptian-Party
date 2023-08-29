$(function(){
    $(window).scroll(function () {
        let secOffset=$("#singers").offset().top;
    
        let windowScroll=$(window).scrollTop();
        if (windowScroll<secOffset) {
           $("#open").show()
        }
        else{
            $("#open").hide()
        }
    })
    
    let sideBarineerWidth=$(".sideBar-ineer").innerWidth();
    $("#sideBar").css('left',-sideBarineerWidth);
    
    $("#open").click(function () {
            $("#sideBar").animate({left:"0px"},1000)
            console.log(-sideBarineerWidth);
        
    })

    $("#close").click(function () {
         
        $("#sideBar").animate({left:-sideBarineerWidth},1000)
    })
    $("a[href^='#']").click(function(e){
      let aHref = e.target.getAttribute('href')
      let secOffset=$(aHref).offset().top;
      $("html,body").animate({scrollTop:secOffset},500)
  
    })


    let slide =$(".singerClose h2").siblings("p")
    slide.slideUp();
    
    $(".singerStyle h2").click(function (e) {
        let slide =$(e.target).siblings("p")
        slide.slideToggle();
    })    
            
      setInterval(()=>{
          let now =new Date(); 
          
          let deadline =new Date("2023-10-20")
          let days = deadline.getDay();
          let hours = deadline.getHours();
          let min = deadline.getMinutes();
          let sec = deadline.getSeconds();
       
            let cartona =`
             <div class=" content text-white m-auto h-100 d-flex justify-content-between align-items-center ">
              <div class="time-box d-flex justify-content-center align-items-center">
              <span class="fs-2">${deadline.getDay()-now.getDay()} D</span>
             </div>          
             <div class="time-box d-flex justify-content-center align-items-center">
              <span class="fs-2">${deadline.getHours()-now.getHours()} h</span>
             </div>          
             <div class="time-box d-flex justify-content-center align-items-center">
              <span class="fs-2">${deadline.getMinutes()-now.getMinutes()} m</span>
             </div>          
             <div class="time-box d-flex justify-content-center align-items-center">
              <span class="fs-2">${deadline.getSeconds()-now.getSeconds()} s</span>
             </div>          
             </div>`

       $("#durationInner").html(cartona)
        },1000)
      
      $("textarea").keyup(function () {
        let textareaLength = $(this).val().length;
        $(".calc-charachter h5 span").html(100-textareaLength)
      })
  })
