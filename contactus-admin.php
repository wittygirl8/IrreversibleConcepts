<?php 
require_once "../Library/MyLib.php";
session_start();
if(!isset($_SESSION["role"]))
{
  header("Location:../AuthError.php");
  die();
}
$role=$_SESSION["role"];
$uid=$_SESSION["email"];
if($role!="admin")
{
  header("Location:../AuthError.php");
  die();
}?>
<!doctype html>



<html>



    
<head>

        
<link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>




        <meta charset="utf-8">



<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">


        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>







        <link rel="shortcut icon" href="../images/favicon.ico" />



        <link href="../css/style7e0c.css?v=0.1" rel="stylesheet" type="text/css">



       <link href="../css/screens.css" rel="stylesheet" type="text/css">



    


        <script src="../js/jquery-1.9.1.min.js"></script>



        <link rel="stylesheet" href="../css/jquery-ui.css" />



        <link href="../css/unite-gallery.css" rel="stylesheet" type="text/css">



        <script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>



        <link rel="stylesheet" href="../css/woco-accordion.min.css">







<script>



jQuery(document).ready(function($) {  











$(window).load(function(){



  $('#preloader').fadeOut('slow',function(){$(this).remove();});



});







});



</script>



<script>



function   categoryHideShow(id){



    var screenWidth = parseInt(screen.width) ;



        if(screenWidth < 982){



            $("#"+id).find('ul').toggle();



            



}}



    </script>



    <script type="text/javascript">



         



    $(document).ready(function(){



        $(window).scroll(function(){



            var window_top = $(window).scrollTop() + 0; 



            var div_top = $('#nav-anchor').offset().top;



                if (window_top > div_top) {



                    $('.nav_fixed').addClass('stick');



                } else {



                    $('.nav_fixed').removeClass('stick');



                }



        });







    });







</script> 



<style>

body {
    font-family: 'Nunito';font-size: 14px;
}

    .sprite_svg svg{



fill: #ab1522;



    }



</style>




    </head>



    <body>





<div id="preloader">






</div>



        



        <div class="rgt_fixed">





            <a href="Quickenquiry.html" class="crpt_film second">



                <i class="sprite qenqry"></i>



                <div class="cptext medium">Contact Us
        </div>



            </a>





        </div>



        <header>






            <div class="main_wrapper">



                <a href="../index.php" class="logo">



                    <img src="../images/logo.png" alt="Irreversible Concepts" title="Irreversible Concepts">



                </a>



                <div class="hdr_rgt">



                    <ul>







                        <li>



                            <a target="_blank" href="coming_soon.php">



                                <span class="span"><i class="sprite icn2"></i></span>



                                <div class="ln1">Online test</div>



                                <div class="ln2">series <span class="red">2019</span></div>



                            </a>



                        </li>



                        


                        <li>



                            <a href="icp.php" >



                                <span class="span"><i class="sprite icn4"></i></span>



                                <div class="ln1">Online </div>



                                  <div class="ln2">Admissions</div>



                            </a>



                        </li>



                        <li>



                            <a href="ContactUs.php">



                                <span class="span"><i class="sprite icn5"></i></span>



                                <div class="ln1">Contact us:</div>



                                <div class="ln2 red">+9182790-14077</div>



                            </a>



                        </li>



                      



                    </ul>



                </div>



            </div><nav>



                <div class="main-wrap1" >



                    <a class="toggleMenu" href="#">



                        <span class="tgl_mnu_txt">Menu</span>



                        <span class="menu_icon">



                            <i></i>



                            <i class="two"></i>



                            <i></i>



                        </span>



                    </a>



                    <div class="qklnk"></div>



                    <ul class="nav bold_font">



                        <li class="home_res_mob "><a href="#"><span class="brdrnav first">Registration</span></a>



                            <ul class="about">



                                <li><a href="studentreg.php" id="abtus2">Student</a></li>



                                <li><a href="facultyreg.php" class="border-none" id="abtus">Faculty</a></li>



                              

                            </ul>



                        </li>



                       


                       



                        



                       <li><a href="#"><span class="brdrnav">Manage Student</span></a>
             <ul class="about">



                                <li><a href="gatestudent.php" id="abtus2">Gate<b></b></a></li>



                                <li><a href="PSUstudent.php" class="border-none" id="abtus">PSU</a></li>



                              <li><a href="IESstudent.php" id="abtus2">IES</a></li>
                
                
                <li><a href="Jestudent.php" id="abtus2">JE</a></li>
                
                <li><a href="SearchStudent.php" id="abtus2">Search by name</a></li>

                            </ul>
             
             
             </li>

              <?php 
          $query="select * from message where mto='admin' and mstatus='0'";
  $result=FetchData($query);
  $n=mysqli_num_rows($result);
   $query="select * from careerwithus where status='0'";
  $result=FetchData($query);
  $n1=mysqli_num_rows($result);
  $query="select * from contactus where status='0'";
  $result=FetchData($query);
  $n2=mysqli_num_rows($result);
  
  
  
          ?>



                        



                        <li><a href="#"><span class="brdrnav">Message(<?php echo $n1+$n2+$n?>)</span></a>



                            <ul class="archive">



                                <li><a href="Messagetostudent.php"  class="border-none">Message to student</a></li>



                                <li><a href="Messagefromemployee.php">Message from employee(<?php echo $n?>)</a></li>  
                <li><a href="Messagetoemployee.php">Message to Employee</a></li>
                <li><a href="messagetoteacher.php">Message to Faculty</a></li>
                <li><a href="resume.php">Resume(<?php echo $n1?>)</a></li>
                <li><a href="contactus-admin.php">Contact Us(<?php echo $n2?>) </a></li>



                            </ul>







    </li>
  
  
  <li><a href="#"><span class="brdrnav">Manage Website</span></a>



                            <ul class="archive">



                                <li><a href="addcontent.php"  class="border-none">Add Content</a></li>



                                <li><a href="addlink.php">Add link</a></li>  
                <li><a href="controlemp.php">Manage Employee Panel</a></li>
                <li><a href="managepage.php">Manage</a></li>
                



                            </ul>







    </li>



            <li><a href="#"><span class="brdrnav">Logout</span></a></li>



                        



    </ul>



    



    



                    


                </div>



            </nav>



            



        </header>



        <section>



            <div class="main_wrapper">

<title>Admin Panel | Irreversible Concepts</title>
</section>
</div>
<section>
    <div class="inrpghdr_link">
        <div class="pageheaderimage">
            <img src="../images/Admission-header.jpg">
            <div class="main_wrapper">
                <div class="hdrpagetitle light">admin</div>
            </div>
        </div>
        <div class="pagelocation">
            <div class="main_wrapper">
                <ul>
                    <li><a href="www.irreversible.in/index.php">Home</a></li>
                    <li><a href="javascript:void(0)" class="last">admin</a></li>
                </ul>
                <div class="bkbtn"><a href="#" class="backpage" onClick="window.history.back();return false;">Back</a></div>
            </div>
        </div>
    </div>
    <div class="main_wrapper">
        <div class="lnk_ansaddwpr">
            <!-- for Quick Link Section -->
            <div class="qklink_wpr">
    
   
   </div>
</div>
            <div class="inrright_cntr" style="box-shadow:none;">
                <div class="tababout">

                    <div style="padding-left: 30px" class="enq">
					<br>
	<?php
require_once("../Library/MyLib.php");
$sql="select * from contactus order by date desc";
$result=mysqli_query($cn,$sql);
$n=mysqli_num_rows($result);
if($n>0)
{
while($rw=mysqli_fetch_array($result))
{
  $mid=$rw["id"];
  $sub=$rw["sub"];
  $email=$rw["email"];
  $mess=$rw["whyus"];
  $name=$rw["name"];
  $date=$rw["date"];
  $date1=date("d/m/y",$date);
  $date2=date("h:m:s",$date);
  
  ?>
  <h2><?php echo $sub; ?></h2>
    <p>
    
    Name : <?php echo $name; ?><br />
 
    Email : <?php echo $email; ?><br />
 
    
      Message : <?php echo $mess; ?><br />
        
        Date : <?php echo $date1; ?><br />
        Time : <?php echo $date2; ?><br />
          </p><?php
}
}
else
{
  echo 'no message present ';
}
$sql="update  contactus set status=1 where status=0";
$result=mysqli_query($cn,$sql);

?>


<!-- InstanceEndEditable -->
</br>
</br></br></br>
					
					
					
					
					
					
						</div></div></div></div></div>





<script>
    function getCentreEmail(id){//alert(id+'hhh');
        var Server = window.location.host;
       // var path = "http://" + Server + "/madeeasywebsite/";
       var path = "https://" + Server + "/";
       var url="centreID="+id+"&mode=getCentreEmail";
                    $.ajax({
                         type:"post",
                         url: path + "ajax.php",
                         data:url,
                          async:false,
                         error:function(data){//alert('error');
                           },
                         success:function(data){
                              // alert(data);
                               $('#centreEmail').val(data);
                              }
                           });
    }
    function enquiryReset()
    {
        $('#EnquiryFullName').val("");
        $('#EnquiryEmail').val("");
        $('#EnquiryMobile').val("");
        $('#EnquiryCentre').val("");
        $('#EnquiryPincode').val("");
        $('#enquiryAddress').val("");
        $('#enquiryQuery').val("");
    }
    </script>


<footer>

    

 <div class="main_wrapper footer_first">

  

  
                <div class="ftr_prt1 first">

                <h2 class="bold">ABOUT US</h2>

                <ul>

                
                          <li><a href="about-us.html">About Irreversible Concepts</a></li>

                      
                      
                          <li><a href=" coming_soon.html">Career with Irreversible Concepts</a></li>

                      
                          

                      
                </ul>

                </div>

            
               <div class="ftr_prt1">

                <h2 class="bold">COACHING</h2>

                <ul>

                
                          <li><a href="IES.html">ESE/ IES Coaching</a></li>

                      
                          <li><a href="GATE.html">GATE Coaching</a></li>

                      
                          <li><a href="PSUs.html">PSUs Coaching</a></li>

                      
                         
                      
                </ul>

                </div>

  
               <div class="ftr_prt1">

                <h2 class="bold">Legal</h2>

                <ul>

                
                          <li><a href="privacy.html">Privacy and Cookies</a></li>

                      
                          <li><a href="t&c.html">Terms of use</a></li>

                      
                          <li><a href="coming_soon.html">Refund and Cancellation</a></li>

                      
                       

                      
                </ul>

                </div>

  
                <div class="ftr_prt1">

                <h2 class="bold">ENQUIRY</h2>

                <ul>

                
                        
                      
                          <li><a href="ContactUs.html">Contact Us</a></li>

                </ul>

                </div>

  
  <div class="ftr_prt1 last" style="height:180px;">

      <h2>Irreversible Concepts</h2>

      <p class="foot_add">Chhatrapati Shivaji School<br>Shivpura, Rawatbhata Road<br>Kota, Rajasthan 324010<br></p><p class="foot_add">H.No. 220, Bapu nagar<br>Infront Bhuri Singh Vyam Shala, Near Kali Bagichi Chauraha, Bharatpur 321001<br>Contact: +91 82790-14066<br><br></p>

   

   </div>

      </div>

    <a href="#" class="scrollToTop"></a>

</footer>

 <div class="ftr_cprit">

     <div class="main_wrapper follow_on">

       

         <div class="cop_icn">

           

        <div class="socil_links">

              <i style="  float: left;margin-top: -4px;margin-right: 17px;">Follow us on:</i>

               
<div  class="face_pop"><a target="_blank" href="https://www.facebook.com/" ><i class="fa fa-facebook" style="color:black;" aria-hidden="true"></i>
</a><span class="face_book1"> facebook</span></div>

          <div  class="face_pop"><a target="_blank" href="https://twitter.com/" ><i class="fa fa-twitter" style="color:black;" aria-hidden="true"></i></a><span class="face_book1"> twitter</span></div>

            <div  class="face_pop"><a target="_blank" href="https://www.youtube.com/" ><i class="fa fa-youtube" style="color:black;" aria-hidden="true"></i></a><span class="face_book1">youtube</span></div>
        </div>

             <script >



             </script>

                 

            

   </div>

           <p class="copy">Copyright <span style="font-size:16px">©</span>All Rights Reserved.</p>

     </div>

 </div>

<script>

$(document).ready(function(){

	

	

	$(window).scroll(function(){

		if ($(this).scrollTop() > 100) {

			$('.scrollToTop').fadeIn();

		} else {

			$('.scrollToTop').fadeOut();

		}

	});

	

	

	$('.scrollToTop').click(function(){

		$('html, body').animate({scrollTop : 0},800);

		return false;

	});

	

});

 function displaySpan(){

          $("#open_facegate").toggle();

            }

            

</script>







<script type="text/javascript">

$(document).ready(function(fadeLoop) {

  

  var fad = $('.fader');

  var counter = 0;

  var divs = $('.fader').hide();

  var dur = 500;

  

  fad.children().filter('.fader').each(function(fad) {

    

    function animator(currentItem) {

      

      animator(fad.children(":first"));

      

      fad.mouseenter(function(){

        $(".fader").stop(); 

      });

      fad.mouseleave(function(){

        animator(fad.children(":first"));

      });

    };

    

  });

  

  function showDiv() {

    divs.fadeOut(dur)

    .filter(function(index) {

      return index == counter % divs.length;

    }) 

    .delay(dur) 

    .fadeIn(dur);

    counter++;

  };

  

  showDiv();

  

  return setInterval(function() { 

    showDiv(); 

  }, 2 * 1000);

  

  adfade();

  

});

 adfade();

function adfade(){

		$('#picOne').fadeIn(500).delay(5000).fadeOut(500);

		adfadetwo();

	}

	function adfadetwo(){

	    adfade();

	}

</script>






 <script>

    $(document).ready(function() {



      $("#owl-demo2").owlCarousel({

        items : 1,

        lazyLoad : true,

        navigation : true

      });



    });

</script>





<script>

    $(document).ready(function() {



      var owl = $("#owl-demo1");



      owl.owlCarousel({



        

        itemsCustom : [

          [0, 2],

          [450, 4],

          [600, 7],

          [700, 9],

          [1000, 10],

          [1200, 12],

          [1400, 13],

          [1600, 15]

        ],

        navigation : true



      });







    });

</script>

<script>

    $(document).ready(function() {

      $("#owl-demo3,#owl-demo4").owlCarousel({



      navigation : true,

      slideSpeed : 300,

      paginationSpeed : 400,

      singleItem : true



      });

    });

    </script>

    <script>

    $(document).ready(function() {



      $("#owl-demo5").owlCarousel({

        items : 5,

        lazyLoad : true,

        navigation : true

      });



    });

    </script>

    

<script>

    $(document).ready(function() {



      var time = 7; 

      var timeSlot  = 100 ;

      var $progressBar,

          $bar, 

          $elem, 

          isPause, 

          tick,

          percentTime;





        $("#owl-demo").owlCarousel({

          slideSpeed : 500,

          paginationSpeed : 500,

          singleItem : true,

          afterInit : progressBar,

          afterMove : moved,

          startDragging : pauseOnDragging

        });



    

        function progressBar(elem){

          $elem = elem;

    

          buildProgressBar();

    

          start();

        }



    

        function buildProgressBar(){

          $progressBar = $("<div>",{

            id:"progressBar"

          });

          $bar = $("<div>",{

            id:"bar"

          });

          $progressBar.append($bar).prependTo($elem);

        }



        function start() {

        

          percentTime = 0;

          isPause = false;

        

          tick = setInterval(interval, 10);

        };



        function interval() {

          if(isPause === false){

            percentTime += 1 / time;

            $bar.css({

               width: percentTime+"%"

             });

         

            //if(percentTime >= 100){

            if(percentTime >= timeSlot){

              $elem.trigger('owl.next')

            }

          }

        }



 

        function pauseOnDragging(){

          isPause = true;

        }



 

        function moved(){

 

          clearTimeout(tick);

 

          start();

        }

        // dpkia 

        $("#owl-demo").mouseover(function(){

            timeSlot  = 1000000 ;

        });

        

        $("#owl-demo").mouseout(function(){

            timeSlot  = 100 ;

        });

        // dpkia  end

    });

    </script>

    

 

<script type="text/javascript">

var ul;

var li_items;

var imageNumber;

var imageWidth;

var prev, next;

var currentPostion = 0;

var currentImage = 0;





function init(){

	ul = document.getElementById('image_slider');                

	li_items = ul.children;

	imageNumber = li_items.length;

	imageWidth = li_items[0].children[0].clientWidth;

	ul.style.width = parseInt(imageWidth * imageNumber) + 'px';

	prev = document.getElementById("prev");

	next = document.getElementById("next");

	prev.onclick = function(){ onClickPrev();};

	next.onclick = function(){ onClickNext();};

}



function animate(opts){

	var start = new Date;

	var id = setInterval(function(){

		var timePassed = new Date - start;

		var progress = timePassed / opts.duration;

		if (progress > 1){

			progress = 1;

		}

		var delta = opts.delta(progress);

		opts.step(delta);

		if (progress == 1){

			clearInterval(id);

			opts.callback();

		}

	}, opts.delay || 17);

	//return id;

}



function slideTo(imageToGo){

	var direction;

	var numOfImageToGo = Math.abs(imageToGo - currentImage);

	



	direction = currentImage > imageToGo ? 1 : -1;

	currentPostion = -1 * currentImage * imageWidth;

	var opts = {

		duration:500,

		delta:function(p){return p;},

		step:function(delta){

			ul.style.left = parseInt(currentPostion + direction * delta * imageWidth * numOfImageToGo) + 'px';

		},

		callback:function(){currentImage = imageToGo;}	

	};

	animate(opts);

}



function onClickPrev(){

	if (currentImage == 0){

		slideTo(imageNumber - 1);

	} 		

	else{

		slideTo(currentImage - 1);

	}		

}



function onClickNext(){

	if (currentImage == imageNumber - 1){

		slideTo(0);

	}		

	else{

		slideTo(currentImage + 1);

	}		

}



window.onload = init;

</script>


	<script type='text/javascript' src='../js/unitegallery.min.js'></script>

	<script type='text/javascript' src='../js/ug-theme-compact.js'></script>



<script src="../js/responsiveTabs.js"></script>

<script>

$(document).ready(function() {

	RESPONSIVEUI.responsiveTabs();

        var CentreName       = $.trim($("#getCntrFrmUrl").val());

        if(CentreName!=''){

           

            var tabActiveId      = $.trim($(".responsive-tabs-wrapper").find("li.responsive-tabs__list__item--active").attr('id'));

            var tabPanelActiveId = $.trim($('.responsive-tabs-wrapper').find('.responsive-tabs__panel--active').attr('id'));

            var tabId            = $.trim($('#feeStructure li:contains("'+ CentreName+'")').attr('id'));

            var tabIdLen         = tabId.length;

            var currtabcnt       = tabId.substring(tabIdLen-1,tabIdLen);

            $("#"+tabActiveId).removeClass("responsive-tabs__list__item--active");

            $("#"+tabPanelActiveId).removeClass(".responsive-tabs__panel--active");

            $("#"+tabPanelActiveId).hide();

            $("#"+tabId).addClass("responsive-tabs__list__item--active");

            $("#tablist1-panel"+currtabcnt).show();

            $("#tablist1-panel"+currtabcnt).addClass(".responsive-tabs__panel--active");

        }

});

   

</script>

<script src="../js/jquery-ui.js"></script>

<script src="../js/owl.carousel.js"></script>

    <script>

        $(document).ready(function () {

            $("#owl-demo66,#owl-demo67").owlCarousel({

                navigation: true,

                slideSpeed: 300,

                paginationSpeed: 400,

                singleItem: true,

            });

    //            alert(sessId);

        });

    </script>

    <script>

        $(document).ready(function () {

            $("#owl-demo100").owlCarousel({

                navigation: true,

                slideSpeed: 300,

                paginationSpeed: 400,

                singleItem: true,

     stopOnHover:true,

     autoPlay:3000,

     loop:true,

    goToFirst: true,

    rewindNav : true,

    scrollPerPage : false,

            });

    //            alert(sessId);

        });

        

        

    </script>

<script type="text/javascript" src="../js/woco.accordion.min.js"></script>

<link rel="stylesheet" href="../js/calender/jquery.datetimepicker.css">

<script type="text/javascript" src="../js/calender/jquery.datetimepicker.js"></script> 

        

<script>

    $(".accordion").accordion();

   $(".accordion1").accordion1();

   $(".accordion2").accordion2();

</script>



<script type="text/javascript" src="../js/jquery.nicescroll.min.js"></script>

<script>

   $(document).ready(function() {    

       $("#scroller").niceScroll(".nicescroll",{cursorcolor:"#770f18",boxzoom:true});

       $("#scroller1").niceScroll(".nicescroll1",{cursorcolor:"#770f18",boxzoom:true});

       $("#scroller2").niceScroll(".nicescroll2",{cursorcolor:"#770f18",boxzoom:true});

       $("#scroller3").niceScroll(".nicescroll3",{cursorcolor:"#770f18",boxzoom:true});

       $("#scroller4").niceScroll(".nicescroll4",{cursorcolor:"#770f18",boxzoom:true}); 

       $("#scroller5").niceScroll(".nicescroll5",{cursorcolor:"#770f18",boxzoom:true});

       $("#scroller6").niceScroll(".nicescroll6",{cursorcolor:"#770f18",boxzoom:true}); 

       $("#scroller7").niceScroll(".nicescroll7",{cursorcolor:"#770f18",boxzoom:true}); 

       $("#scroller8").niceScroll(".nicescroll8",{cursorcolor:"#770f18",boxzoom:true}); 

       $("#scroller9").niceScroll(".nicescroll9",{cursorcolor:"#770f18",boxzoom:true}); 

       $("#scroller10").niceScroll(".nicescroll10",{cursorcolor:"#770f18",boxzoom:true}); 

       $("#scroller11").niceScroll(".nicescroll11",{cursorcolor:"#770f18",boxzoom:true}); 

       $("#scroller12").niceScroll(".nicescroll12",{cursorcolor:"#770f18",boxzoom:true});

       $("#scroller16").niceScroll(".nicescroll16",{cursorcolor:"#770f18",boxzoom:true,railalign:"left"});     

    });

</script>





<script src="../js/advertisment/jquery.transform-0.8.0.min.js"></script>

<script src="../js/advertisment/jquery.banner.js" type="text/javascript"></script>

<script src="../js/script.js" type="text/javascript"></script>

<script src="../js/centreData.js" type="text/javascript"></script>



<script type="text/javascript" language="javascript" src="../js/slider/jquery.easing.1.3.js"></script>

<script type="text/javascript" language="javascript" src="../js/slider/jquery.skitter.min.js"></script>

<script type="text/javascript" language="javascript"  src="../js/jquery.horizontal.scroll.js"></script>

<script type="text/javascript" language="javascript">

	$(document).ready(function(){

		$('.box_skitter_large').skitter({fullscreen:true});

       	});

    

</script>



<script type="text/javascript">

var _TConnecto = _TConnecto || {};

_TConnecto.licenseKey = 'TDSRAFQN30HIOU13';



(function() {

var con = document.createElement('script'); con.type = 'text/javascript';

var host = (document.location.protocol === 'Quickenquiry.html') ? 'http://cdn' : 'https://server';

con.src = host + '.connecto.io/javascripts/connect.prod.min.js';

var s = document.getElementsByTagName('script')[0];

s.parentNode.insertBefore(con, s);

})();

</script>









<script type="text/javascript" src="../js/wowslider.js"></script>

<script type="text/javascript" src="../js/script1.js"></script>





<script src="../js/menu_script.js"></script>

<script type="text/javascript" src="../js/validation.js"></script> <!--used in enquiry form -->

<script type="text/javascript" src="../js/registration.js" ></script> <!--used in student online registration form -->




</body>


</html>

					</body></html>

					