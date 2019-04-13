var Server = window.location.host;

//var path = "http://" + Server + "/madeeasywebsite/";
var path = "https://" + Server + "/";  // for live 

$(document).ready(function() { 
    

    $("#candidateDOBDate").datetimepicker({
        timepicker:false,
	formatDate:'d/m/Y',
        format:'d/m/Y',
        max: new Date(),
        hide_on_select	: true ,
        scrollInput:false,
        trigger_event: 'click'
    });
    
    $('input:radio[name="payment"]').click(function(){
       if($('input[name="payment"]:checked').val()=="onlinePayment"){
          paymentType(0); 
           /*
           var BatchFeesId = $("#BatchFeesId").val();
           if($("#totalCost").length){
             var totalFee    = $("#totalCost").val();
           }
           var url         = "mode=checkInstallment&BatchFeesId="+BatchFeesId +"&totalFee="+totalFee+"&mode1=BatchFees" ;
           $.ajax({
                type: 'POST',
                url : path+"ajax.php",
                data: url,
                error: function (jqXHR, textStatus, errorThrown) {
                    
                },
                success: function (data, textStatus, jqXHR) {
                        if(data == 0 ){
                            document.getElementById("PaymentType").options[2].disabled = true ;
                        }else if(data == 1){
                            document.getElementById("PaymentType").options[2].disabled = false ;
                        }
                }
               
           });
           $("#choosePayment").show();
            */
       }else{
           $("#choosePayment").hide();
           $("#showBlnc").hide();
       }
   });
   $('input:radio[name="payment"]').click(function(){
       if($('input[name="payment"]:checked').val()=="DDPayment"){
            $("#DD_Details").show();
       }else{
           $("#DD_Details").hide();
       }
   });
   $('input:radio[name="payment"]').click(function(){
       if($('input[name="payment"]:checked').val()=="chequePayment"){
            $("#Cheque_Details").show();
       }else{
           $("#Cheque_Details").hide();
       }
   });
   $('#PermanentAddrChk').click(function(){
       var PermanentAddrChk = ($('input:checkbox[name="PermanentAddrChk"]').is(":checked"))? 1:0;
       if(PermanentAddrChk==1){
           var statePresent        = escape(encodeURIComponent($("#statePresent").val())); 
           var city_townPresent    = escape(encodeURIComponent($("#city_townPresent").val()));
           var other_cityPresent   = escape(encodeURIComponent($("#other_cityPresent").val()));
           var pincodePresent      = escape(encodeURIComponent($("#pincodePresent").val()));
           var AddrPresent         = escape(encodeURIComponent($("#AddrPresent").val()));
           var statePresentValue   = escape(encodeURIComponent($("#statePresentValue").val()));

           if(statePresent!=''){
                 $("#statePerm").val(unescape(decodeURIComponent(statePresent)));
                 $("#statePerm").attr("disabled",true);
           }
           if(city_townPresent!=''){
               $("#city_townPerm").val(unescape(decodeURIComponent(city_townPresent)));
               $("#city_townPerm").attr("readonly",true);
           }
           if(other_cityPresent!=''){
               $("#other_cityPerm").val(unescape(decodeURIComponent(other_cityPresent)));
               $("#other_cityPerm").attr("readonly",true);
           }
           if(pincodePresent!=''){
               $("#pincodePerm").val(unescape(decodeURIComponent(pincodePresent)));
               $("#pincodePerm").attr("readonly",true);
           }
           if(AddrPresent!=''){
               $("#AddrPerm").val(unescape(decodeURIComponent(AddrPresent)));
               $("#AddrPerm").attr("readonly",true);
           }
           if(statePresentValue!=''){
                 $("#statePermValue").val(unescape(decodeURIComponent(statePresentValue)));
                 $("#statePermValue").attr("readonly",true);
           }

       }else{
            $("#statePerm").attr("disabled",false);
            $("#city_townPerm").attr("readonly",false);
            $("#other_cityPerm").attr("readonly",false);
            $("#pincodePerm").attr("readonly",false);
            $("#statePermValue").attr("readonly",false);
            $("#AddrPerm").attr("readonly",false);
            $("#statePerm").val("");
            $("#city_townPerm").val("");
            $("#other_cityPerm").val("");
            $("#pincodePerm").val("");
            $("#statePermValue").val("");
            $("#AddrPerm").val("");
    
            
            // rk end
           $("#PermanentAddrDiv").find("input").attr("readonly",false);
           $("#PermanentAddrDiv").find("input").val("");
           $("#PermanentAddrDiv").find("select").attr("readonly",false);
           $("#PermanentAddrDiv").find("select").val("");
       }
   });
    $("#paymentAmnt").change(function(){
        var paymentAmnt = $("#paymentAmnt").val();
        var totalcost   = $("#totalCost").val();
        if(paymentAmnt>totalcost){
             $('#paymentAmnt').val("");
             $("#amntError").show();
             $("#amntError").html("Amount should be less than total fees.");
             $('#paymentAmnt').addClass('error_msg');
             $('#paymentAmnt').focus();
        }else{
            $("#amntError").hide();
            $("#amntError").html("");
        }
    });
});

function getoldCourseName(id){
    var url="id="+id+"&mode=getcoursename";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){
        },
        success:function(data){
            var html="";
            
            if(data!=""){
                var result = eval(data);
                var option="<select id='oldCourseName' name='oldCourseName' onchange='getoldCourseName(this.value);remove_class(this.id);$('#oldCourseName').val(''),$('#oldExamName').val('')'><option selected='selected'  value='' >Select Course*</option>";
                for( var index in result){
                    html = html + "<option value='" +result[index].CentreCourseMapId+ "' >" + unescape(decodeURIComponent(result[index].CourseName)) +"</option>";
                }
                html = option + html;
            }
            $("#oldCourseName").html(html);
        }
    });
}


function getoldExamName(id){
    var url="id="+id+"&mode=getexamname";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){
        },
        success:function(data){
            var html="";
            var option="<select id='oldExamName' name='oldExamName' onchange='remove_class(this.id);'><option selected='selected'  value='' >Select Exam*</option>";
            /* to checked the courses if already mapped with centre */
           if(data!=""){
                var result = eval(data);
                for( var index in result){
                    html = html + "<option value='" +result[index].CourseExamMapId+ "' >" + unescape(decodeURIComponent(result[index].ExamName)) +"</option>";
                }
                html = option + html;
                $("#oldExamName").html(html);
            }

        }
    });
}

//   function blurFunction(){
//        var semail = $("#candidateEmail").val();
//        semail = semail.trim();
//        if(semail!=''){
//          var url="candidateEmail="+semail+"&mode=checkEmailidOld";
//           $.ajax({
//               type: "post",
//               url: path + "ajax.php",
//               data: url,
//               error: function(data) {//alert('error');
//               },
//               success: function(data)
//               {
//                 //  data = JSON.parse(data)   ;
////                  if  ( data['validEmail'] == "") {
////                    $('#candidateEmail').val("");
////                    $("#candidateEmail").attr("placeholder", "Please enter valid email Id");
////                    $('#candidateEmail').addClass('error_msg');
////                    $('#candidateEmail').focus();
////                    return false;
////                } else 
////                if (data['dbExist'] > 0) {
////                    $('#candidateEmail').val("");
////                    $("#candidateEmail").attr("placeholder", "Already Exist.");
////                    $('#candidateEmail').addClass('error_msg');
////                    $('#candidateEmail').focus();
////                    return false;
////                }
//                 if(data > 0){
//                    $('#candidateEmail').val("");
//                    $("#candidateEmail").attr("placeholder", "Already Exist.");
//                    $('#candidateEmail').addClass('error_msg');
//                    $('#candidateEmail').focus();
//                    return false;
//                }
//             
//            }
//
//           });
//      }
//   }
   function getCourseName(id){
    var url="id="+id+"&mode=getcoursename";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){
        },
        success:function(data){
            var html="";
            
            if(data!=""){
                var result = eval(data);
                var option="<select id='courseSelDetails' name='courseSelDetails' onchange='getExamName(this.value);remove_class(this.id)'><option selected='selected'  value='' >Select Course*</option>";
                for( var index in result){
                    //html = html + "<option value='" +result[index].CentreCourseMapId+ "' >" + unescape(decodeURIComponent(result[index].CourseName)) +"</option>";
                    html = html + "<option value='" +result[index].CentreCourseMapId+ "' >" + unescape(decodeURIComponent(result[index].CourseName)) +"</option>";
                }
                html = option + html;
            }
            $("#courseSelDetails").html(html);
        }
    });
}
function getExamName(id){
    var url="id="+id+"&mode=getexamname";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){
        },
        success:function(data){
            var html="";
            var option="<select id='examSelDetails' name='examSelDetails' onchange='getExamMappedStrm(this.value);remove_class(this.id);'><option selected='selected'  value='' >Select Exam*</option>";
            
           if(data!=""){
                var result = eval(data);
                for( var index in result){
                    html = html + "<option value='" +result[index].CourseExamMapId+ "' >" + unescape(decodeURIComponent(result[index].ExamName)) +"</option>";
                }
                html = option + html;
                $("#examSelDetails").html(html);
            }

        }
    });
}
function getExamMappedStrm(id){
    var courseId = $('#courseSelDetails').val();
    var centreId = $('#centreSelDetails').val();
    var url="id="+id+"&courseId="+courseId+"&centreId="+centreId+"&mode=getStreamnameOlReg";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){
        },
        success:function(data){
            var html="";
            var option="<select id='streamSelDetails' name='streamSelDetails' onchange='remove_class(this.id);showFees();getUpcomingBatchDetail(this.value);$('#showAvailableSeat').hide();'><option value='' selected='selected'>Select Stream*</option>";

            
         if(data!=""){
                var result = eval(data);
                for( var index in result){
                    html = html + "<option value='" +result[index].StreamId+ "' >" + unescape(decodeURIComponent(result[index].StreamName)) +"</option>";
                }
                html = option + html;
                $("#streamSelDetails").html(html);
            }

        }
    });
}

function getUpcomingBatchDetail(streamId){ 
    var batchFeesId = $('#BatchFeesId').val();//alert(batchFeesId);
    var url="streamId="+ streamId + "&batchFeesId=" + batchFeesId + "&mode=getUpcomingBatchDetail"; 
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){//alert('error');
        },
        success:function(data){//alert(data);
            var html="";
            var option="<select id='batchStartDate' name='batchStartDate' onchange='AvailableSeats(this.value);remove_class(this.id);'><option value='' selected='selected'>Select Preferred Batch Code*</option>";
            if(data!=""){                
                var result = eval(data);
                for( var index in result){
                    if(result[index].Status==1){//alert(result[index].UpcomingBatchesId);
                    html = html + "<option value='" +result[index].UpcomingBatchesId+ "' >" + unescape(decodeURIComponent(result[index].BatchCode)) +"</option>";
                }}
                html = option + html;
                $("#batchStartDate").html(html);
            }
        }
    }); 
}

function showFees(StreamId){
    //$("input[type='radio'][name='payment']:checked").prop('checked', false);
    
    var paymentMode = $("input[type='radio'][name='payment']:checked").val();
            if( $.trim(paymentMode) == "onlinePayment"){
                $("#PaymentType").val("") ;
                $("#paymentAmnt").val("") ;
            }else if($.trim(paymentMode) == "DDPayment"){
                $("#DDBankName").val("") ;
                $("#ddNum").val("") ;
            }
    
    var oldRegistrationNo = $("#studentOldRollNo").val();
    var oldCourseName     = $.trim($("#oldCourseName option:selected").text());    // for old Course name
    var currentCourseName = $.trim($("#courseSelDetails option:selected").text());    // for old Course name
    var getFeesArr        = {};
    getFeesArr['data']    = {}; 
    getFeesArr['mode']    = "getExamBatchFees" ;
    
    getFeesArr['data']['is_old'] = 0 ; 
    
    /*if student is old */
    if( $("#oldDetails").is(':checked') == true){
        if(oldRegistrationNo!=''){
                getFeesArr['data']['is_old']   = 1 ;
                getFeesArr['data']['old_stu']  = {};
                
                var is_old                   = $("#oldDetails").is(':checked')?1:0 ;
                var old_centre               = $("#oldCentreName").val();
                var OldCentreCourseMapId     = $("#oldCourseName").val();
                var courseExamMapId          = $("#oldExamName").val();
                var old_batch                = $("#OldbatchSelDetails").val();
                var old_session              = $("#oldSessionName").val();
                
                getFeesArr['data']['old_stu']['old_centre']             = old_centre;
                getFeesArr['data']['old_stu']['OldCentreCourseMapId']   = OldCentreCourseMapId;
                getFeesArr['data']['old_stu']['courseExamMapId']        = courseExamMapId;
                getFeesArr['data']['old_stu']['old_batch']              = old_batch;
                getFeesArr['data']['old_stu']['old_session']            = old_session;
    }
}

    /*Old student case end */
    
    var CentreCourseMapId = $("#courseSelDetails").val();
    var CourseExamMapId   = $("#examSelDetails").val();
    var BatchId           = $("#batchSelDetails").val();
    var SessionId         = $("#sessionSelDetails").val();
    var HandicapValue     = ($('input:checkbox[name="handicapVal"]').is(":checked"))? 1:0;
    
    getFeesArr['data']['CentreCourseMapId'] = CentreCourseMapId ;
    getFeesArr['data']['CourseExamMapId']   = CourseExamMapId ;
    getFeesArr['data']['BatchId']           = BatchId ;
    getFeesArr['data']['SessionId']         = SessionId ;
    getFeesArr['data']['HandicapValue']     = HandicapValue ;
    getFeesArr['data']['StreamId']          = StreamId;
    
    var getFeesJson  =  JSON.stringify(getFeesArr) ;
    var url          = "data="+getFeesJson ;
//alert(path + 'kk');
    $.ajax({
        type:"post",
        url : path+"ajaxNew.php",
        data:url,
        async:false,
        traditional: true,
        dataType:'JSON',
        error:function(data,rr,erre){
         //alert('error');
        },
        success:function(data){ 
           // alert(data);
       if($.trim(data)!==""){
                var result = eval(data);
                if(result!==''){
//                    for(var index in result){
//                        $("#totalCost").val(result[index].TotalFee);
//                        $("#BatchFeesId").val(result[index].BatchFeesId);
//                    }
                    $("#showFeesDiv").show();
                    $("#showFeesDiv").html(result.totalFees);
                    $("#totalCost").val(result.totalFees);
                    $("#BatchFeesId").val(result.BatchFeesId);
                    //rk
                    $("#paymentAmnt").val(result.totalFees);
                    $("#totalFee").val(result.totalFees);
                    //end
                    
                    if ($('input:checkbox[name="oldDetails"]').is(":checked") == true){ // show the fees after discount
                        $("#showFeesDiv").show();
                        $("#showFeesDiv").html("Fee: "+result.totalFees);
                        $("#showFeesDivOld").html("Fee: "+result.totalFees);
                        $("#showAvailableSeatOld").html($("#showAvailableSeat").html());
                    }
                    
                   
                }
            } else {
//                $("#BatchFeesId").val(result[index].BatchFeesId);
                  $("#showFeesDiv").html("No Fees Available.");   
            }
            if(currentCourseName=='Postal Study Package'){
                $("#showFeesDiv").show();
            } else{
                if ($('input:checkbox[name="oldDetails"]').is(":checked") == true){ // show the fees after discount
                    $("#showFeesDiv").show();
                }else{
                     $("#showFeesDiv").hide();
                }
               
            }
        }
    });
}


function paymentType(val) {
    if(val == 1 || val == '1'){
        $('#installmentMsg').show();
    }else{
        $('#installmentMsg').hide();
    }
    var totalFee    = $("#totalCost").val();
        $("#showBlnc").show();
    if(val==1) {
        //installment
        $("#showBlncHtml").html(" Amount: ");
        var BatchFeesId = $("#BatchFeesId").val();
        var url = "totalFee=" + totalFee + "&BatchFeesId="+ BatchFeesId + "&mode=firstInstallmentDetail";
        $.ajax({
            type:"post",
            url: path + "ajax.php",
            data:url,
            async:false,
            error:function(data){
            },
            success: function (data) {
                totalFee = parseInt(data);
                $("#paymentAmnt").prop("readonly", true);
            }
        });        
        $("#paymentAmnt").val(totalFee);
        $("#totalFee").val(totalFee);
    }
    if(val==0) {
       //full amount
       var totalCost = $("#totalCost").val() ;
       $("#choosePayment").show();
       $("#paymentAmnt").show();
       $("#PaymentType").hide();
       
       $("#paymentAmnt").val(totalCost);
       $("#totalFee").val(totalCost);
       $("#paymentAmnt").prop("readonly", true);
       $("#showBlncHtml").html(" Full Amount: ");
       $("#showBlnc").show();
       
    }else  if(val=='') {
       $("#showBlnc").hide();
    }
}

function removeData(){
    $('#PaymentType').val("");
    $('#PaymentAmnt').val("");
    $('#BankName').val("");
    $('#ddNum').val("");
}

function ValidatePincode() {
    if($.trim($('#pincodePresent').val())!="" || $.trim($('#pincodePresent').val())!=null || $.trim($('#pincodePresent').val())!='null'){
        if(IsNumeric($.trim($('#pincodePresent').val()))==false || $.trim($('#pincodePresent').val()).length!=6){
            $('#pincodePresent').val("");
            document.getElementById("pincodePresent").placeholder = "Please enter Valid Pincode.";
            document.getElementById("pincodePresent").classList.add('error_msg');
            $("#pincodePresent").focus();
            return false;
        }
    }
}

function previewFile(id){
    document.getElementById('demo'+id).style.display="none";
    document.getElementById('main'+id).style.display="block";
    var preview = document.querySelector('.img'+id); 
    var file    = document.getElementById(id).files[0]; 
    var reader  = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file); 
    } else {
        preview.src = "";
    }
}

function checkImageSize(id){
    var imgName = $('#photoFile').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("photoFile");
    var txt = "";
    if(ext!='.jpeg' && ext!='.png' && ext!='.jpg' && ext!='.JPEG' && ext!='.PNG' && ext!='.JPG'){
        document.getElementById("photoFile").classList.add('error_msg');
        $("#photoFile_Err").show();
        $("#photoFile_Err").html("Please upload Image in jpeg/jpg/png format.");
        $("#photoFile").focus();
        return false;
    }else if ('files' in img) {
        for (var i = 0; i < img.files.length; i++) {
            txt += "<br><strong>" + (i+1) + ". file</strong><br>";
            var file = img.files[i];
            if ('size' in file) {
                var imgSize =Math.round((file.size/1024) * 10) / 10
                if(imgSize<=15 || imgSize>=100){
                    document.getElementById("photoFile").classList.add('error_msg');
                    $("#photoFile_Err").show();
                    $("#photoFile_Err").html("Please select the image upto size 15kB-100kB.");
                    return false;
                }else{
                    document.getElementById('photoFile_Err').style.display="none";
                }
            }
        }
    }
}

function checkSignatureSize(id){
    var imgName = $('#signatureFile').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("signatureFile");
    var txt = "";
    if(ext!='.jpeg' && ext!='.png' && ext!='.jpg' && ext!='.JPEG' && ext!='.PNG' && ext!='.JPG'){
        document.getElementById("signatureFile").classList.add('error_msg');
        $("#signatureFile_Err").show();
        $("#signatureFile_Err").html("Please upload Image in jpeg/jpg/png format.");
        $("#signatureFile").focus();
        return false;
    }else if ('files' in img) {
        for (var i = 0; i < img.files.length; i++) {
            txt += "<br><strong>" + (i+1) + ". file</strong><br>";
            var file = img.files[i];
            if ('size' in file) {
                var imgSize =Math.round((file.size/1024) * 10) / 10
                if(imgSize<=15 || imgSize>=100){
                    document.getElementById("signatureFile").classList.add('error_msg');
                    $("#signatureFile_Err").show();
                    $("#signatureFile_Err").html("Please select the image upto size 15kB-100kB.");
                    return false;
                }else{
                    document.getElementById('signatureFile_Err').style.display="none";
                }
            }
        }
    }
}

function UploadImage(){

                
                if($("#signatureFile").val()!=""){
                    var datas=$("#signatureFile")[0].files;
                        if (window.FormData) {
                            var formdata = new FormData();
                         }
                    var i = 0, len = datas.length, img, reader, file1;
                    for ( ; i < len; i++ ) {
                    file1 = datas[i];
                        if ( window.FileReader ) {
                            reader = new FileReader();
                            reader.onloadend = function (e) {};
                            reader.readAsDataURL(file1);
                        }
                        if (formdata) {
                            formdata.append("file[]", file1);
                        }
                        formdata = formdata+ "&m=saveImg";
                    }
                    if (formdata){
                        $.ajax({
                            url: "index.php?pagename=uploadImages&m=saveImg",
                            type: "POST",
                            data: formdata,
                            processData: false,
                            contentType: false,
                            async:false,
                            error:function(data){
                            
                            },
                            success: function (data) {
                            }
                        });
                    }
                }

}
function clearFeesDiv(){
    if(document.getElementById("centreSelDetails").value == ""){
        document.getElementById("showFeesDiv").style.display="none";
    }else{
        document.getElementById("showFeesDiv").style.display="block"; // rk
    }
}

function redirectforReg(centreId,courseId,examId,batchId,SessionId,feeTotal,batchFeesId ,streamNameArr , streamIdArr ,id,isSuperTalent,admissionFee){
    streamNameArr    = streamNameArr.split(",");
    streamIdArr      = streamIdArr.split(","); 
    var streamStrip  = '';
            for (var i = 0; i < streamNameArr.length; i++) {
        if (admissionFee == 'admissionFee') {
            if (streamNameArr.length == 1) {
                streamStrip = streamStrip + "<li id='" + streamIdArr[i] + "' class='active stream' onclick='streamUBatchFees(" + streamIdArr[i] + " , " + centreId +")' style='width:100%;'>" + streamNameArr[i] + "</li>";
            } else {
                streamStrip = streamStrip + "<li id='" + streamIdArr[i] + "' class='active stream' onclick='streamUBatchFees(" + streamIdArr[i] + ", " + centreId +")'>" + streamNameArr[i] + "</li>";
            }
        } else {
            if (streamNameArr.length == 1) { 
                streamStrip = streamStrip + "<li id='" + streamIdArr[i] + "' class='active stream' onclick='streamUBatchFees(" + streamIdArr[i] + ")' style='width:100%;'>" + streamNameArr[i] + "</li>";
            } else {
                streamStrip = streamStrip + "<li id='" + streamIdArr[i] + "' class='active stream' onclick='streamUBatchFees(" + streamIdArr[i] + ")'>" + streamNameArr[i] + "</li>";
            }
        }
    }
    if($.trim(id) == 'StremListF'){
        $("#StremListF").html(streamStrip) ;
    }else{
        $("#streamList").html(streamStrip) ;    
    }
    
    $("#onloadPopup").show() ;
    $("#blackPopup").show() ;
    
    
    
    if(admissionFee == 'admissionFee'){
    $('#feeCentreId'+centreId).val(centreId);
    $('#feeCentreCourseMapId'+centreId).val(courseId);
    $('#feeCourseExamMapId'+centreId).val(examId);
    $('#feeBatchId'+centreId).val(batchId);
    $('#feeSessionId'+centreId).val(SessionId);
    $('#feeTotal'+centreId).val(feeTotal);
    $('#batchFeeId'+centreId).val(batchFeesId);
    $('#isSuperTalent'+centreId).val(isSuperTalent); 
    $('#mode'+centreId).val("FeeSturctureReg"+centreId);
    }else{
    $('#feeCentreId').val(centreId);
    $('#feeCentreCourseMapId').val(courseId);
    $('#feeCourseExamMapId').val(examId);
    $('#feeBatchId').val(batchId);
    $('#feeSessionId').val(SessionId);
    $('#feeTotal').val(feeTotal);
    $('#batchFeeId').val(batchFeesId);
    $('#isSuperTalent').val(isSuperTalent); 
    if($.trim(id) == 'StremListF'){
        $('#modecentre').val("FeeSturctureRegcentre");
        $('#isSuperTalentcentre').val(isSuperTalent);
    }else{
        $('#mode').val("FeeSturctureReg");
        $('#isSuperTalent').val(isSuperTalent);
    }
    }
    
    
}
 function streamUBatchFees(streamId,centreId){
 if(centreId !=null && centreId!= 'undefined' && centreId!= undefined && centreId != ''){
     $('#streamId'+centreId).val(streamId);
     var feeStructureinfo = 'feeStructureinfo'+centreId;
     document.getElementById(feeStructureinfo).submit();
     //document.feeStructureinfo.submit();
 }else{
     $('#streamId').val(streamId);
     document.feeStructureinfo.submit();
   }
 }

function AvailableSeats(UpcomingBatchId){
    var url = "UpcomingBatchesId=" + UpcomingBatchId + "&mode=availableSeats";
        $.ajax({
            type:"post",
            url: path + "ajax.php",
            data:url,
            async:false,
            error:function(data){
            },
            success: function (data) {
                if(data > 0){
                    //$("#showAvailableSeat").html("Available Seat : " + data);
                    //$("#showAvailableSeat").show();
                    $("#showFeesDiv").show();
                    $("#seatsAvail").html(data);
                    $("#showBatchData").show();
                    paymentType("0") ;
                }else{
                    $("#showAvailableSeat").html("No Seats are available for above selection, Select Other Batch Code");
                    $("#showAvailableSeat").show();
                    $("#showFeesDiv").show();
                }
            }
        });
}

function getSessionName(id){
    var url="id="+id+"&mode=getsessionname";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){
        },
        success:function(data){
            var html="";
            var option="<select id='sessionSelDetails' name='sessionSelDetails' onchange='remove_class(this.id); showFees(this.value);'><option selected='selected'  value='' >Select Session*</option>";
           
           if(data!=""){
                var result = eval(data);
                for( var index in result){
                    if(result[index].IsActive==1){
                    html = html + "<option value='" +result[index].SessionId+ "' >" + unescape(decodeURIComponent(result[index].SessionName)) +"</option>";
                } }
                html = option + html;
                $("#sessionSelDetails").html(html);
            }

        }
    });
}

function getoldSessionName(id){
    var url="id="+id+"&mode=getsessionname";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){
        },
        success:function(data){
            var html="";
            var option="<select id='oldSessionName' name='oldSessionName' onchange='remove_class(this.id);'><option selected='selected'  value='' >Select Session*</option>";
            
           if(data!=""){
                var result = eval(data);
                for( var index in result){
                    if(result[index].IsActive==1){
                    html = html + "<option value='" +result[index].SessionId+ "' >" + unescape(decodeURIComponent(result[index].SessionName)) +"</option>";
                } }
                html = option + html;
                $("#oldSessionName").html(html);
            }

        }
    });
}
function getOldBatchFeesId(){  
    var oldRegistrationNo = $("#studentOldRollNo").val();
    var oldCourseName     = $.trim($("#oldCourseName option:selected").text());    // for old Course name
    var currentCourseName   = $.trim($("#courseSelDetails option:selected").text());    // for old Course name
    
     var OldCentreCourseMapId = $("#oldCourseName").val();
     var OldCourseExamMapId = $("#oldExamName").val();
     var OldbatchSelDetails   = $("#OldbatchSelDetails").val();
     var OldSessionId = $("#oldSessionName").val();
    var url="&OldCourseExamMapId="+OldCourseExamMapId+ "&OldCentreCourseMapId=" + OldCentreCourseMapId +"&OldbatchSelDetails="+OldbatchSelDetails+"&OldSessionId="+OldSessionId+ "&mode=getOldExamBatchFees";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){
            
        },
        success:function(data){
         if(data!=""){
                var result = eval(data);
                if(result!=''){
                    for(var index in result){
                        //$("#totalCost").val(result[index].TotalFee);
                        //$("#BatchFeesId").val(result[index].BatchFeesId);
                        $("#OldBatchFeesId").val(result[index].OldBatchFeesId);
                    }
                    $("#showFeesDiv").html("Fee: "+result[index].TotalFee);
                }else{
                   // $("#BatchFeesId").val(result[index].BatchFeesId);
                    $("#OldBatchFeesId").val(result[index].OldBatchFeesId);
                    $("#showFeesDiv").html("No Fees Available.");
                }
         }
        }
    });
}

function isNumberDecimalKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if(charCode==46)
{
    if(($("#marks1").val()).length!=2){return false};
}else{
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
    { return false;}else if(($("#marks1").val()).length==2 && (charCode!=46  && charCode!=8 && charCode!=9)){return false;}
    else{return true;}
    }
}
$('#marks1').blur(function(){
  var pattern=/^\d{0,3}(\.\d{1,2})?$/;
   var booleanValue=pattern.test($('#marks1').val());
    if(!booleanValue || $('#marks1').val()>100)
    {

                     $('#marks1').val('');
                     $('#marks1').attr("placeholder", "please enter correct marks");
                     $('#marks1').focus();
                     $('#marks1').addClass('error_txtbx');
    }else{
            if($('#marks1').val()!=''){
            var val=parseFloat($('#marks1').val()).toFixed(2);
            $('#marks1').val(val);
            }
        }
 });

function hide2(){ 
    $("#onloadPopup").fadeOut(400);
    $("#blackPopup").fadeOut(400);
}
function getContent(id){
        $('.cont_desc_btn').removeClass('selectclassroom');
        $('#'+id).addClass("selectclassroom");
        $('#getContent').show();
        $('#cont_desc').removeClass("selectclassroom");
        $('#feeStructure').hide();
        var url="id="+id+"&mode=getCourseContent";
           $.ajax({
               type: "post",
               url: path + "ajax.php",
               data: url,
               error: function(data) {
               },
               success: function(data)
               { 
                   $("#getContent").html(data);
                }
           });
    }
    function getFee(id){
        $('.cont_desc_btn').removeClass('selectclassroom');
        $(".cont_desc").removeClass('selectclassroom');  
        $("#"+id).addClass("selectclassroom");
//        $('#cont_desc').addClass("selectclassroom");
        $('#feeStructure').show();
        $('#getContent').hide();
    }
    function hide2(){ 
    $("#onloadPopup,#blackPopup").fadeOut(400)();
}

function show_enroll(){ 
    $("#onloadPopup,#blackPopup").fadeIn(400);
}
function getEnroll(){
        window.location.href = path + 'home/StudentOnlineRegistration' 
    }
 function getBatchName(id){
   var currntCourse = $.trim($("#courseSelDetails option:selected").text());
    var url="currntCourse="+currntCourse+"&mode=getBatchname";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){
        },
        success:function(data){
            var html="";
            var option="<select id='batchSelDetails' name='batchSelDetails' onchange='remove_class(this.id); $('#sessionSelDetails').val('');$('#streamSelDetails').val('');$('#batchStartDate').val('');$('#showAvailableSeat').hide();$('#showFeesDiv').hide();'><option selected='selected'  value='' >Select Batch*</option>";
            
           if(data!=""){
                var result = eval(data);
                for( var index in result){
                    html = html + "<option value='" +result[index].BatchId+ "' >" + unescape(decodeURIComponent(result[index].BatchName)) +"</option>";
                 }
                html = option + html;
                $("#batchSelDetails").html(html);
            }

        }
    });
}
function getOldBatchName(id){
   var currntCourse = $.trim($("#oldCourseName option:selected").text());
    var url="currntCourse="+currntCourse+"&mode=getBatchname";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){
        },
        success:function(data){
            var html="";
            var option="<select id='OldbatchSelDetails' name='OldbatchSelDetails' onchange='remove_class(this.id); $('#oldSessionName').val('');'><option selected='selected'  value='' >Select Batch*</option>";
            
           if(data!=""){
                var result = eval(data);
                for( var index in result){
                    html = html + "<option value='" +result[index].BatchId+ "' >" + unescape(decodeURIComponent(result[index].BatchName)) +"</option>";
                 }
                html = option + html;
                $("#OldbatchSelDetails").html(html);
            }

        }
    });
}
function IsSuperTalent(id){
    var url="id="+id+"&mode=getIsSuperTalent";
    $.ajax({
        type:"post",
        url: path + "ajax.php",
        data:url,
        async:false,
        error:function(data){//alert('error');
        },
        success:function(data){
            if(data == 1 || data == 2){
                $('#superTalentPDFHide').show();
            }else{
                $('#superTalentPDFHide').hide();
            }

        }
    });
}
function getAllData(UpcomingBatchId){
    var url = "UpcomingBatchesId=" + UpcomingBatchId + "&mode=getBatchData";
        $.ajax({
            type:"post",
            url: path + "ajax.php",
            data:url,
            async:false,
            dataType:'JSON',
            error:function(data){
            },
            success: function (data) {
                if($.trim(data)!==""){
                var result = eval(data); 
                if(result!==''){
                    $('.hideNotAvailMsg').hide();
                    $("#BatchTime").html(result.BatchTiming);
                    $("#BatchDate").html(result.BatchStartDate);
                    $("#BatchVenue").html(result.Venue);
                    if(result.Status == 1){
                        $("#BatchStatus").html('Open');
                    }else{
                       $("#BatchStatus").html('Closed');
                    }
            }}}
        });
}
paymentType("0") ;


function onblurEmail(Email,table,column,id){
      if(Email!=''){
          var url="candidateEmail="+Email+"&tableName="+table+"&columnName="+column+"&mode=checkEmailid";
           $.ajax({
               type: "post",
               url: path + "ajax.php",
               data: url,
               error: function(data) {//alert('error');
               },
               success: function(data)
               {
                 if(data > 0){
//                     alert('Email Already Exist');
                    $("#"+id).val("");
                    $("#"+id).attr("placeholder", "Email Already Exist.");
                    $("#"+id).addClass('error_msg');
                    $("#"+id).focus();
                    return false;
                }
             
            }

           });
      }
   }
