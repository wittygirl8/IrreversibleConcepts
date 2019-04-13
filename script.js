/******for fade in fad outimages *********/
$(function () {
    var FadeinFadeOutImgCnt = $("#FadeinFadeOutImgCnt").val();
    $('#ca_banner1').banner({
        steps: [
            [
                //1 step:
                [{"to": "2"}, {"effect": "slideOutRight-slideOutRight"}],
                [{"to": "1"}, {}],
                [{"to": "2"}, {}]
            ],
            [
                //2 step:
                [{"to": "1"}, {"effect": "slideOutLeft-slideInLeft"}],
                [{"to": "1"}, {}],
                [{"to": "2"}, {}]
            ],
            [
               
                [{"to": "3"}, {"effect": "slideOutRight-slideInRight"}],
                [{"to": "2"}, {}]
                [{"to": "1"}, {}]
            ],
            [
                //4 step
                [{"to": "4"}, {"effect": "slideOutLeft-slideInLeft"}],
                [{"to": "2"}, {}],
                [{"to": "3"}, {}]
            ],
            [
                //5 step
                [{"to": "5"}, {"effect": "slideOutRight-slideOutRight"}],
                [{"to": "3"}, {}],
                [{"to": "4"}, {}]
            ],
            [
                //6 step
                [{"to": "6"}, {"effect": "slideOutLeft-slideInLeft"}],
                [{"to": "3"}, {}],
                [{"to": "4"}, {}]
            ],
            [
                //7 step
                [{"to": "7"}, {"effect": "slideOutRight-slideOutRight"}],
                [{"to": "4"}, {}],
                [{"to": "5"}, {}]
            ],
            [
                //8 step
                [{"to": "8"}, {"effect": "slideOutLeft-slideInLeft"}],
                [{"to": "9"}, {}],
                [{"to": "7"}, {}]
            ],
            [
                //9 step
                [{"to": "9"}, {"effect": "slideOutRight-slideOutRight"}],
                [{"to": "6"}, {}],
                [{"to": "8"}, {}]
            ],
            [
                //10 step
                [{"to": "10"}, {"effect": "slideOutRight-slideOutRight"}],
                [{"to": "7"}, {}],
                [{"to": "9"}, {}]
            ]
           
        ],
        total_steps: FadeinFadeOutImgCnt,
        speed: 5000
    });
    $("#resetContactUs").click(function(){
        $("#ContactFullName").val("");
        document.getElementById("ContactFullName").placeholder = "Full Name*";
        $("#ContactGender").val("");
        document.getElementById("ContactGender").placeholder = "Select Gender*";
        $("#ContactEmail").val("");
        document.getElementById("ContactEmail").placeholder = "Email Id*";
        $("#ContactMobile").val("");
        document.getElementById("ContactMobile").placeholder = "Mobile No.*";
        $("#ContactPhn").val("");
        document.getElementById("ContactPhn").placeholder = "Phone No.";
        $("#ContactStream").val("");
        document.getElementById("ContactStream").placeholder = "Select Stream*";
        $("#ContactQuery").val("");
        document.getElementById("ContactQuery").placeholder = "Add Query*";
    });
});
/*get quick link content */
function getQuickLinkContent(quickLinkTypeId,QuickLinkId){
    var data = "QuickLinkId=" + QuickLinkId + "&quickLinkTypeId="+ quickLinkTypeId + "&mode=getQuickLinkcontent";
    $.ajax({
        type: "post",                
        url: path + "ajax.php",
        data: data,   
        error: function(data) {
            //alert("error");
        },
        success: function(data){
            var QuickLinkContent = $.trim(data);
                var divId = QuickLinkId+'_postal';
                var html = '<div id='+ divId + ' style="display:block;">' + QuickLinkContent + '</div>'; 
                $("#pageContent").html(html); 
               // window.location.hash = '#quickLinkCntnt';
        }
    });
}
function getQuickLinkContent1(quickLinkTypeId,QuickLinkId){
    var data = "QuickLinkId=" + QuickLinkId + "&quickLinkTypeId="+ quickLinkTypeId + "&mode=getQuickLinkcontent";
    $.ajax({
        type: "post",                
        url: path + "ajax.php",
        data: data,   
        error: function(data) {
            //alert("error");
        },
        success: function(data){
            var QuickLinkContent = $.trim(data);
                var divId = QuickLinkId+'_postal';
                var html = '<div id='+ divId + ' style="display:block;">' + QuickLinkContent + '</div>'; 
                $("#pageContent1").html(html);   
               // window.location.hash = '#quickLinkCntnt';
        }
    });
}
function getQuickLinkContent2(quickLinkTypeId,QuickLinkId){
    var data = "QuickLinkId=" + QuickLinkId + "&quickLinkTypeId="+ quickLinkTypeId + "&mode=getQuickLinkcontent";
    $.ajax({
        type: "post",                
        url: path + "ajax.php",
        data: data,   
        error: function(data) {
            //alert("error");
        },
        success: function(data){
            var QuickLinkContent = $.trim(data);
                var divId = QuickLinkId+'_postal';
                var html = '<div id='+ divId + ' style="display:none;">' + QuickLinkContent + '</div>'; 
                $("#pageContent2").html(html);     
               // window.location.hash = '#quickLinkCntnt';
        }
    });
}
function getQuickLinkContent3(quickLinkTypeId,QuickLinkId){
    var data = "QuickLinkId=" + QuickLinkId + "&quickLinkTypeId="+ quickLinkTypeId + "&mode=getQuickLinkcontent";
    $.ajax({
        type: "post",                
        url: path + "ajax.php",
        data: data,   
        error: function(data) {
            //alert("error");
        },
        success: function(data){
            var QuickLinkContent = $.trim(data);
                var divId = QuickLinkId+'_postal';
                var html = '<div id='+ divId + ' style="display:none;">' + QuickLinkContent + '</div>'; 
                $("#pageContent3").html(html);     
               // window.location.hash = '#quickLinkCntnt';
        }
    });
}
function getQuickLinkContent4(quickLinkTypeId,QuickLinkId){
    var data = "QuickLinkId=" + QuickLinkId + "&quickLinkTypeId="+ quickLinkTypeId + "&mode=getQuickLinkcontent";
    $.ajax({
        type: "post",                
        url: path + "ajax.php",
        data: data,   
        error: function(data) {
            //alert("error");
        },
        success: function(data){
            var QuickLinkContent = $.trim(data);
                var divId = QuickLinkId+'_postal';
                var html = '<div id='+ divId + ' style="display:none;">' + QuickLinkContent + '</div>'; 
                $("#pageContent4").html(html);     
               // window.location.hash = '#quickLinkCntnt';
        }
    });
}