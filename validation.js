
function isEMail(s){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var booleanValue=emailPattern.test(s);
  
    if(!booleanValue)
    {
        return true;
    }else{
        return false;
    }
}
function IsNumeric(sText){
    var ValidChars = "0123456789";
    var IsNumber=true;
    var Char;
    for (i = 0; i < sText.length && IsNumber == true; i++){
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1){
            IsNumber = false;
        }
    }
    return IsNumber;
}
function IsNumeric1(sText){
    var ValidChars = "0123456789.";
    var IsNumber=true;
    var Char;
    for (i = 0; i < sText.length && IsNumber == true; i++){
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1){
            IsNumber = false;
        }
    }
    return IsNumber;
}
function IsName(name) 
{  return /^[A-z ]+$/.test(name);
}
function isName(value)
{
    var ck_name = /^[A-Za-z./ ]{0,50}$/;
    if (value.match(ck_name)){
        return true;}
    else {
        return false;
    }
}
function isMobile(value)
{
    var phoneno = /^\d{10}$/;
    if (value.match(phoneno))
    { return true;}
    else{return false;}
} 
function subscribeNewsletter(){
    if($.trim($('#newsletterEmail').val())=='' || $.trim($('#newsletterEmail').val())=='null' || $.trim($('#newsletterEmail').val())==null  ) {
        $("#newsletterEmail").focus();
        $("#emailNewsletterErr").show();
        $("#emailNewsletterErr").html("Please provide Email.");
        $("#emailNewsletterErr").fadeOut(3000);
    }else if(isEMail($.trim($('#newsletterEmail').val()))){
        $("#newsletterEmail").focus();
        $("#emailNewsletterErr").show();
        $("#emailNewsletterErr").html("Please enter correct Email.");
        $("#emailNewsletterErr").fadeOut(3000);
    }else if($('#newsletterEmail').val()!=null){
        var data = "fieldID="+$.trim($('#newsletterEmail').val())+"&tblName=EmailSubscribe"+"&column=EmailId"+"&mode=checkEmail";
        $.ajax({
                type: "post",                
                url: path +"ajax.php",
                data: data,    
                error: function(data) {
                   
                                },
                success: function(data){
                    if($.trim(data) == 'true'){                        
                        $("#emailNewsletterErr").show();
                        $("#emailNewsletterErr").html("You have already been subscribed.");
                        $("#emailNewsletterErr").fadeOut(3000);
                        $("#newsletterEmail").focus();
                        $("#newsletterEmail").addClass('error_txtbx');
                        $("#newsletterEmail").addClass("needsfilled");
                        return false;
                    }else if($.trim(data) == "Inactive"){
                        $('#NewsletterEmailmode').val("editNewsletterEmail");
                        document.newsletterForm.action = "submit.php";
                        document.newsletterForm.submit();
                    }else{
                        $('#NewsletterEmailmode').val("addNewsletterEmail");
                        document.newsletterForm.action = "submit.php";
                        document.newsletterForm.submit();
                    }
            }
        });
    }
}

function validateRegForm(){
   var oldStudent = ($('input:checkbox[name="oldDetails"]').is(":checked"))? 1:0;
   if(oldStudent == 1){
        if($.trim($('#studentOldRollNo').val())=='' || $.trim($('#studentOldRollNo').val())=='null' || $.trim($('#studentOldRollNo').val())==null){
            document.getElementById("studentOldRollNo").placeholder = "Please enter Your Old RollNo.";
            document.getElementById('studentOldRollNo').classList.add('error_msg');
            $("#studentOldRollNo").focus();
            return false;
        }else if($.trim($('#oldCentreName').val())=='' || $.trim($('#oldCentreName').val())=='null' || $.trim($('#oldCentreName').val())==null){
            document.getElementById("oldCentreName").placeholder = "Please select Centre.";
            document.getElementById('oldCentreName').classList.add('error_msg');
            $("#oldCentreName").focus();
            return false;
        }else if($.trim($('#oldCourseName').val())=='' || $.trim($('#oldCourseName').val())=='null' || $.trim($('#oldCourseName').val())==null){
            document.getElementById("oldCourseName").placeholder = "Please select Course.";
            document.getElementById('oldCourseName').classList.add('error_msg');
            $("#oldCourseName").focus();
            return false;
        }else if($.trim($('#oldExamName').val())=='' || $.trim($('#oldExamName').val())=='null' || $.trim($('#oldExamName').val())==null){
            document.getElementById("oldExamName").placeholder = "Please select Exam.";
            document.getElementById('oldExamName').classList.add('error_msg');
            $("#oldExamName").focus();
            return false;
        }/*else if($.trim($('#OldbatchSelDetails').val())=='' || $.trim($('#OldbatchSelDetails').val())=='null' || $.trim($('#OldbatchSelDetails').val())==null){
            document.getElementById("OldbatchSelDetails").placeholder = "Please select Exam.";
            document.getElementById('OldbatchSelDetails').classList.add('error_msg');
            $("#OldbatchSelDetails").focus();
            return false;
        }*/else if($.trim($('#oldSessionName').val())=='' || $.trim($('#oldSessionName').val())=='null' || $.trim($('#oldSessionName').val())==null){
            document.getElementById("oldSessionName").placeholder = "Please select Exam.";
            document.getElementById('oldSessionName').classList.add('error_msg');
            $("#oldSessionName").focus();
            return false;
        }
        else if($.trim($('#testfile1').val())=='' || $.trim($('#testfile1').val())=='null' || $.trim($('#testfile1').val())==null  ) {
        $('#testfile1').val("");
        document.getElementById("testfile1").placeholder = "Please browse the file.";
        document.getElementById("testfile1").classList.add('error_msg');
        $("#testfile1").focus();
        return false;
        }
        else if(($.trim($('#testfile1').val())!='')&&(checkAdmitExtension('testfile1')==false)){
        $("#testfile1").focus();
        return false;
        }
    }if($.trim($('#candidateName').val())=='' || $.trim($('#candidateName').val())=='null' || $.trim($('#candidateName').val())==null  ) {
        $('#candidateName').val("");
        $("#candidateName").attr("placeholder", "");
        $("#candidateName").attr("placeholder", "Please enter your name.");
        document.getElementById('candidateName').classList.add('error_msg');
        $("#candidateName").focus();
        return false;
    }else if($.trim($('#candidateDOBDate').val())=='' || $.trim($('#candidateDOBDate').val())=='null' || $.trim($('#candidateDOBDate').val())==null  ) {     
        document.getElementById("candidateDOBDate").placeholder = "Please enter your DOB Date.";
        document.getElementById('candidateDOBDate').classList.add('error_msg');
        $("#candidateDOBDate").focus();
        return false;
    }else if($.trim($('#candidateGender').val())=='') {
        document.getElementById("candidateGender").placeholder = "Please enter your Gender.";
        document.getElementById("candidateGender").classList.add('error_msg');
        $("#candidateGender").focus();
        return false;
    }else if($.trim($('#candidateCategory').val())=='') {
        document.getElementById("candidateCategory").placeholder = "Please enter your Category.";
        document.getElementById("candidateCategory").classList.add('error_msg');
        $("#candidateCategory").focus();
        return false;
    }else if($.trim($('#candidateEmail').val())=='' || $.trim($('#candidateEmail').val())=='null' || $.trim($('#candidateEmail').val())==null  ) {
        $('#candidateEmail').val("");
        $("#candidateEmail").attr("placeholder", "Please enter your Email.");
        $('#candidateEmail').addClass('error_msg');
        $('#candidateEmail').focus();
        return false;
    }else if(isEMail($.trim($('#candidateEmail').val()))){
        $('#candidateEmail').val("");
        $("#candidateEmail").attr("placeholder", "Please enter correct Email.");
        $('#candidateEmail').addClass('error_msg');
        $('#candidateEmail').focus();
        return false;
    }else if($.trim($('#candidateMobile').val())=='' || $.trim($('#candidateMobile').val())=='null' || $.trim($('#candidateMobile').val())==null  ) {
        $('#candidateMobile').val("");
        document.getElementById("candidateMobile").placeholder = "Please enter your Mobile No.";
        document.getElementById("candidateMobile").classList.add('error_msg');
        $("#candidateMobile").focus();
        return false;
    }else if(IsNumeric($.trim($('#candidateMobile').val()))==false || $.trim($('#candidateMobile').val()).length!=10){
        $('#candidateMobile').val("");
        document.getElementById("candidateMobile").placeholder = "Please enter your Valid Mobile No.";
        document.getElementById("candidateMobile").classList.add('error_msg');
        $("#candidateMobile").focus();
        return false;
    }else if(IsNumeric($.trim($('#candidateContact').val()))==false){
        $('#candidateContact').val("");
        document.getElementById("candidateContact").placeholder = "Please enter your Valid Phone No.";
        document.getElementById("candidateContact").classList.add('error_msg');
        $("#candidateContact").focus();
        return false;
    }else if($.trim($('#statePresent').val())=='' || $.trim($('#statePresent').val())=='null' || $.trim($('#statePresent').val())==null  ) {
        $('#statePresent').val("");
        document.getElementById("statePresent").placeholder = "Please enter your State.";
        document.getElementById("statePresent").classList.add('error_msg');
        $("#statePresent").focus();
        return false;
    }else if($.trim($('#city_townPresent').val())=='' || $.trim($('#city_townPresent').val())=='null' || $.trim($('#city_townPresent').val())==null  ) {
        $('#city_townPresent').val("");
        document.getElementById("city_townPresent").placeholder = "Please enter your Present City.";
        document.getElementById("city_townPresent").classList.add('error_msg');
        $("#city_townPresent").focus();
        return false;
    }else if($.trim($('#pincodePresent').val())=='' || $.trim($('#pincodePresent').val())=='null' || $.trim($('#pincodePresent').val())==null  ) {
        $('#pincodePresent').val("");
        document.getElementById("pincodePresent").placeholder = "Please enter your Pincode.";
        document.getElementById("pincodePresent").classList.add('error_msg');
        $("#pincodePresent").focus();
        return false;
    }else if(IsNumeric($.trim($('#pincodePresent').val()))==false || $.trim($('#pincodePresent').val()).length!=6){
        $('#pincodePresent').val("");
        document.getElementById("pincodePresent").placeholder = "Please enter Valid Pincode.";
        document.getElementById("pincodePresent").classList.add('error_msg');
        $("#pincodePresent").focus();
        return false;
    }else if($.trim($('#AddrPresent').val())=='' || $.trim($('#AddrPresent').val())=='null' || $.trim($('#AddrPresent').val())==null  ) {
        $('#AddrPresent').val("");
        document.getElementById("AddrPresent").placeholder = "Please enter Address.";
        document.getElementById("AddrPresent").classList.add('error_msg');
        $("#AddrPresent").focus();
        return false;
    }else if($.trim($('#statePerm').val())=='' || $.trim($('#statePerm').val())=='null' || $.trim($('#statePerm').val())==null  ) {
        $('#statePerm').val("");
        document.getElementById("statePerm").placeholder = "Please enter your State.";
        document.getElementById("statePerm").classList.add('error_msg');
        $("#statePerm").focus();
        return false;
    }else if($.trim($('#city_townPerm').val())=='' || $.trim($('#city_townPerm').val())=='null' || $.trim($('#city_townPerm').val())==null  ) {
        $('#city_townPerm').val("");
        document.getElementById("city_townPerm").placeholder = "Please enter your Permanent City.";
        document.getElementById("city_townPerm").classList.add('error_msg');
        $("#city_townPerm").focus();
        return false;
    }else if($.trim($('#pincodePerm').val())=='' || $.trim($('#pincodePerm').val())=='null' || $.trim($('#pincodePerm').val())==null  ) {
        $('#pincodePerm').val("");
        document.getElementById("pincodePerm").placeholder = "Please enter your Pincode.";
        document.getElementById("pincodePerm").classList.add('error_msg');
        $("#pincodePerm").focus();
        return false;
    }else if(IsNumeric($.trim($('#pincodePerm').val()))==false || $.trim($('#pincodePerm').val()).length!=6){
        $('#pincodePerm').val("");
        document.getElementById("pincodePerm").placeholder = "Please enter Valid Pincode.";
        document.getElementById("pincodePerm").classList.add('error_msg');
        $("#pincodePerm").focus();
        return false;
    }else if($.trim($('#AddrPerm').val())=='' || $.trim($('#AddrPerm').val())=='null' || $.trim($('#AddrPerm').val())==null  ) {
        $('#AddrPerm').val("");
        document.getElementById("AddrPerm").placeholder = "Please enter Address.";
        document.getElementById("AddrPerm").classList.add('error_msg');
        $("#AddrPerm").focus();
        return false;
    }else if($.trim($('#fatherName').val())=='' || $.trim($('#fatherName').val())=='null' || $.trim($('#fatherName').val())==null  ) {
        $('#fatherName').val("");
        document.getElementById("fatherName").placeholder = "Please enter your Father's Name.";
        document.getElementById("fatherName").classList.add('error_msg');
        $("#fatherName").focus();
        return false;
    }else if($.trim($('#fatherContact').val())=='' || $.trim($('#fatherContact').val())=='null' || $.trim($('#fatherContact').val())==null  ) {
        $('#fatherContact').val("");
        document.getElementById("fatherContact").placeholder = "Please enter your Father's Mobile No.";
        document.getElementById("fatherContact").classList.add('error_msg');
        $("#fatherContact").focus();
        return false;
    }else if(IsNumeric($.trim($('#fatherContact').val()))==false || $.trim($('#fatherContact').val()).length!=10){
        $('#fatherContact').val("");
        document.getElementById("fatherContact").placeholder = "Please enter Valid Mobile No.";
        document.getElementById("fatherContact").classList.add('error_msg');
        $("#fatherContact").focus();
        return false;
    }else if($.trim($('#centreSelDetails').val())=='' || $.trim($('#centreSelDetails').val())=='null' || $.trim($('#centreSelDetails').val())==null  ) {
        document.getElementById("centreSelDetails").placeholder = "Please select the Centre.";
        document.getElementById("centreSelDetails").classList.add('error_msg');
        $("#centreSelDetails").focus();
        return false;
    }else if($.trim($('#courseSelDetails').val())=='' || $.trim($('#courseSelDetails').val())=='null' || $.trim($('#courseSelDetails').val())==null  ) {
        document.getElementById("courseSelDetails").placeholder = "Please select the Course.";
        document.getElementById("courseSelDetails").classList.add('error_msg');
        $("#courseSelDetails").focus();
        return false;
    }else if($.trim($('#examSelDetails').val())=='' || $.trim($('#examSelDetails').val())=='null' || $.trim($('#examSelDetails').val())==null  ) {
        document.getElementById("examSelDetails").placeholder = "Please select the Exam.";
        document.getElementById("examSelDetails").classList.add('error_msg');
        $("#examSelDetails").focus();
        return false;
    }else if($.trim($('#batchSelDetails').val())=='' || $.trim($('#batchSelDetails').val())=='null' || $.trim($('#batchSelDetails').val())==null  ) {
        document.getElementById("batchSelDetails").placeholder = "Please select the Batch.";
        document.getElementById("batchSelDetails").classList.add('error_msg');
        $("#batchSelDetails").focus();
        return false;
    }else if($.trim($('#sessionSelDetails').val())=='' || $.trim($('#sessionSelDetails').val())=='null' || $.trim($('#sessionSelDetails').val())==null  ) {
        document.getElementById("sessionSelDetails").placeholder = "Please select the Session.";
        document.getElementById("sessionSelDetails").classList.add('error_msg');
        $("#sessionSelDetails").focus();
        return false;
    }else if($.trim($('#streamSelDetails').val())=='' || $.trim($('#streamSelDetails').val())=='null' || $.trim($('#streamSelDetails').val())==null  ) {
        document.getElementById("streamSelDetails").placeholder = "Please select the Stream.";
        document.getElementById("streamSelDetails").classList.add('error_msg');
        $("#streamSelDetails").focus();
        return false;
    }else if( ($.trim($('#batchStartDate').val())=='' || $.trim($('#batchStartDate').val())=='null' || $.trim($('#batchStartDate').val())== null ) && $.trim($("#courseSelDetails option:selected").text()) != 'Postal Study Package'    ) {
        document.getElementById("batchStartDate").placeholder = "Please select the Start Date.";
        document.getElementById("batchStartDate").classList.add('error_msg');
        $("#batchStartDate").focus();
        return false;
    }else if($.trim($('#IdproofId').val())=='') {
        document.getElementById("IdproofId").classList.add('error_msg');
        $("#IdproofId").focus();
        return false;
    }else if($.trim($('#IdProofNo').val())=='' || $.trim($('#IdProofNo').val())=='null' || $.trim($('#IdProofNo').val())==null  ) {
        $('#IdProofNo').val("");
        document.getElementById("IdProofNo").placeholder = "Please enter your ID Proof No.";
        document.getElementById("IdProofNo").classList.add('error_msg');
        $("#IdProofNo").focus();
        return false;
    }else if($.trim($('#IdProofName').val())=='' || $.trim($('#IdProofName').val())=='null' || $.trim($('#IdProofName').val())==null  ) {
        $('#IdProofName').val("");
        document.getElementById("IdProofName").placeholder = "Please enter holder Name.";
        document.getElementById("IdProofName").classList.add('error_msg');
        $("#IdProofName").focus();
        return false;
    }else if($.trim($('#qualificationSel1').val())=='' || $.trim($('#qualificationSel1').val())=='null' || $.trim($('#qualificationSel1').val())==null  ) {
        $('#qualificationSel1').val("");
        document.getElementById("qualificationSel1").placeholder = "Please enter your Qualification.";
        document.getElementById("qualificationSel1").classList.add('error_msg');
        $("#qualificationSel1").focus();
        return false;
    }else if($.trim($('#college1').val())=='' || $.trim($('#college1').val())=='null' || $.trim($('#college1').val())==null  ) {
        $('#college1').val("");
        document.getElementById("college1").placeholder = "Name Of College (with City)*";
        document.getElementById("college1").classList.add('error_msg');
        $("#college1").focus();
        return false;
    }else if($.trim($('#year1').val())=='' || $.trim($('#year1').val())=='null' || $.trim($('#year1').val())==null  ) {
        $('#year1').val("");
        document.getElementById("year1").placeholder = "Passing Year*";
        document.getElementById("year1").classList.add('error_msg');
        $("#year1").focus();
        return false;
    }else if(IsNumeric($.trim($('#year1').val()))==false){
        $('#year1').val("");
        document.getElementById("year1").placeholder = "Numeric value only.";
        document.getElementById("year1").classList.add('error_msg');
        $("#year1").focus();
        return false;
    }else if($.trim($('#marks1').val())=='' || $.trim($('#marks1').val())=='null' || $.trim($('#marks1').val())==null  ) {
        $('#marks1').val("");
        document.getElementById("marks1").placeholder = "Marks in %*";
        document.getElementById("marks1").classList.add('error_msg');
        $("#marks1").focus();
        return false;
    }else if(IsNumeric1($.trim($('#marks1').val()))==false){
        $('#marks1').val("");
        document.getElementById("marks1").placeholder = "Numeric value only.";
        document.getElementById("marks1").classList.add('error_msg');
        $("#marks1").focus();
        return false;
    }else if($.trim($('#photoFile').val())=='' || $.trim($('#photoFile').val())=='null' || $.trim($('#photoFile').val())==null  ) {
        $('#photoFile').val("");
        document.getElementById("photoFile").placeholder = "Please browse the Photograph.";
        document.getElementById("photoFile").classList.add('error_msg');
        $("#photoFile").focus();
        return false;
    }else if(checkImageSize('photoFile')==false){
        $("#photoFile").focus();
        return false;
    }else if($.trim($('#signatureFile').val())=='' || $.trim($('#signatureFile').val())=='null' || $.trim($('#signatureFile').val())==null  ) {
        $('#signatureFile').val("");
        document.getElementById("signatureFile").placeholder = "Please browse the Signature.";
        document.getElementById("signatureFile").classList.add('error_msg');
        $("#signatureFile").focus();
        return false;
    }else if(checkSignatureSize('signatureFile')==false){
        $("#signatureFile").focus();
        return false;
    }else if($.trim($('#testfile4').val())=='' || $.trim($('#testfile4').val())=='null' || $.trim($('#testfile4').val())==null  ) {
        $('#testfile4').val("");
        document.getElementById("testfile4").placeholder = "Please browse the file.";
        document.getElementById("testfile4").classList.add('error_msg');
        $("#testfile4").focus();
        return false;
    }else if(($.trim($('#testfile4').val())!='')&&(checkIDProof('testfile4')==false)){
        $("#testfile4").focus();
        return false;
    }else if($.trim($('#totalCost').val())==0 || $.trim($('#totalCost').val())=='') {
        alert("No Batch Available for this Course");
        return false;
    }
    /*
    else if(($('input:radio[name="payment"]').is(":checked")) == false) {
        document.getElementById("paymentError").style.display="block";
        return false;
    } */  
    /*else if($('input[name="payment"]:checked').val()=="onlinePayment"){
        if($.trim($('#PaymentType').val())=='' || $.trim($('#PaymentType').val())=='null' || $.trim($('#PaymentType').val())==null  ) {
            $('#PaymentType').val("");
            document.getElementById("PaymentType").placeholder = "Please select Payment Type.";
            document.getElementById("PaymentType").classList.add('error_msg');
            $("#PaymentType").focus();
            return false;
        }else if($('#PaymentType').val()=="0"){
            if($.trim($('#paymentAmnt').val())=='' || $.trim($('#paymentAmnt').val())=='null' || $.trim($('#paymentAmnt').val())==null  ) {
                $('#paymentAmnt').val("");
                document.getElementById("paymentAmnt").placeholder = "Please enter the Amount.";
                document.getElementById("paymentAmnt").classList.add('error_msg');
                $("#paymentAmnt").focus();
                return false;
            }
        } }*/
    
    
    /*else if((($('input:radio[name="payment"]').is(":checked")) != false) && (($('input:radio[name="trnsMode"]').is(":checked")) == false)) {
        document.getElementById("paymentTrans").style.display="block";
        $('#paymentTrans').fadeOut(300);
        return false;
    }else if($('input[name="payment"]:checked').val()=="DDPayment"){
        if($.trim($('#DDBankName').val())=='' || $.trim($('#DDBankName').val())=='null' || $.trim($('#DDBankName').val())==null  ) {
            $('#DDBankName').val("");
            document.getElementById("DDBankName").placeholder = "Please select the bank.";
            document.getElementById("DDBankName").classList.add('error_msg');
            $("#DDBankName").focus();
            return false;
        }else if($.trim($('#ddNum').val())=='' || $.trim($('#ddNum').val())=='null' || $.trim($('#ddNum').val())==null  ) {
            $('#ddNum').val("");
            document.getElementById("ddNum").placeholder = "Please enter the DD number.";
            document.getElementById("ddNum").classList.add('error_msg');
            $("#ddNum").focus();
            return false;
        }
    }*/
    
    /*else if($('input[name="payment"]:checked').val()=="chequePayment"){
        if($.trim($('#ChequeBankName').val())=='' || $.trim($('#ChequeBankName').val())=='null' || $.trim($('#ChequeBankName').val())==null  ) {
            $('#ChequeBankName').val("");
            document.getElementById("ChequeBankName").placeholder = "Please select the bank.";
            document.getElementById("ChequeBankName").classList.add('error_msg');
            $("#ChequeBankName").focus();
            return false;
        }else if($.trim($('#chequeNum').val())=='' || $.trim($('#chequeNum').val())=='null' || $.trim($('#chequeNum').val())==null  ) {
            $('#chequeNum').val("");
            document.getElementById("chequeNum").placeholder = "Please enter the Cheque number.";
            document.getElementById("chequeNum").classList.add('error_msg');
            $("#chequeNum").focus();
            return false;
        }
    }*/
//    else if(  $('input:radio[name="trnsMode"]').is(":checked") == false ) {
//         document.getElementById("paymentTrans").style.display="block";
//         $('#paymentTrans').fadeOut(3000);
//        return false;
//    }
    
       if ($('#batchStartDate').val()!='') { /* if seats not available cant register */
        var url = "UpcomingBatchesId=" + $('#batchStartDate').val() + "&mode=availableSeats";
        $.ajax({
            type:"post",
            url: path + "ajax.php",
            data:url,
            async:false,
            error:function(data){
               
            },
            success: function (data) {
                if(data > 0){
                    
                     var centreCourseMapId = $('#courseSelDetails').val();
                        var url="id="+centreCourseMapId+"&mode=getIsSuperTalent";
                        $.ajax({
                        type:"post",
                        url: path + "ajax.php",
                        data:url,
                        async:false,
                        error:function(data){//alert('error');
                        },
                        success:function(data){
                            if(data == 1){
                              if($.trim($('#testfile2').val())=='' || $.trim($('#testfile2').val())=='null' || $.trim($('#testfile2').val())==null  ) {
                             $('#testfile2').val("");
                             document.getElementById("testfile2").placeholder = "Please browse the file.";
                             document.getElementById("testfile2").classList.add('error_msg');
                             $("#testfile2").focus();
                             return false;
                            }else if(($.trim($('#testfile2').val())!='')&&(checkSuperTalentPDF('testfile2')==false)){
                             $("#testfile2").focus();
                             return false;
                            }else if(($('input:checkbox[name="agree"]').is(":checked"))!=1){
                               alert("Please Click on agree box");
                              return false;
                            }else{
                                document.onlineRegForm.submit();
                            }  
                           }else{
                               if(($('input:checkbox[name="agree"]').is(":checked"))!=1){
                               alert("Please Click on agree box");
                              return false;
                            }else{
                               document.onlineRegForm.submit();
                           }
                           }
                        }
                    });
                }else{
                    alert('No Seats are available for this Course.');
                    document.getElementById('showAvailableSeat').classList.add('error_msg');
                    $("#showAvailableSeat").focus();
                    return false;
                }
            }
        });
    }else if($.trim($("#courseSelDetails option:selected").text()) == 'Postal Study Package' ){
        if($.trim($('#testfile2').val())=='' || $.trim($('#testfile2').val())=='null' || $.trim($('#testfile2').val())==null  ) {
                             $('#testfile2').val("");
                             document.getElementById("testfile2").placeholder = "Please browse the file.";
                             document.getElementById("testfile2").classList.add('error_msg');
                             $("#testfile2").focus();
                             return false;
                            }else if(($.trim($('#testfile2').val())!='')&&(checkPostalPDF('testfile2')==false)){
                             $("#testfile2").focus();
                             return false;
                            }else if(($('input:checkbox[name="agree"]').is(":checked"))!=1){
                               alert("Please Click on agree box");
                              return false;
                            }else{
                                document.onlineRegForm.submit();
                            }  
//        if(($('input:checkbox[name="agree"]').is(":checked"))!=1){
//                               alert("Please Click on agree box");
//                              return false;
//                            }else{
//                               document.onlineRegForm.submit();
//                           }
    }
}

function validateContactUs() {
    if($.trim($("#ContactFullName").val())=="") {
        $('#ContactFullName').val("");
        document.getElementById("ContactFullName").placeholder = "Full Name*";
        document.getElementById("ContactFullName").classList.add('error_msg');
        $("#ContactFullName").focus();
        return false;
    }else if($.trim($("#ContactGender").val())==""){
        $('#ContactGender').val("");
        document.getElementById("ContactGender").placeholder = "Select Gender*";
        document.getElementById("ContactGender").classList.add('error_msg');
        $("#ContactGender").focus();
        return false;
    }else if($.trim($("#ContactEmail").val())==""){
        $('#ContactEmail').val("");
        document.getElementById("ContactEmail").placeholder = "Email Id*";
        document.getElementById("ContactEmail").classList.add('error_msg');
        $("#ContactEmail").focus();
        return false;
    }else if(isEMail($.trim($('#ContactEmail').val()))){
        $('#ContactEmail').val("");
        $("#ContactEmail").attr("placeholder", "Please enter correct Email.");
        $('#ContactEmail').addClass('error_msg');
        $('#ContactEmail').focus();
        return false;
    }else if($.trim($("#ContactMobile").val())==""){
        $('#ContactMobile').val("");
        document.getElementById("ContactMobile").placeholder = "Mobile No.*";
        document.getElementById("ContactMobile").classList.add('error_msg');
        $("#ContactMobile").focus();
        return false;
    }else if(IsNumeric($.trim($('#ContactMobile').val()))==false || $.trim($('#ContactMobile').val()).length!=10){
        $('#ContactMobile').val("");
        document.getElementById("ContactMobile").placeholder = "Please enter your Valid Contact No.";
        document.getElementById("ContactMobile").classList.add('error_msg');
        $("#candidateContact").focus();
        return false;
    }else if(IsNumeric($.trim($('#ContactPhn').val()))==false){
        $('#ContactPhn').val("");
        document.getElementById("ContactPhn").placeholder = "Please enter your Valid Phone No.";
        document.getElementById("ContactPhn").classList.add('error_msg');
        $("#ContactPhn").focus();
        return false;
    }else if($.trim($("#ContactStream").val())==""){
        $('#ContactStream').val("");
        document.getElementById("ContactStream").placeholder = "Select Stream*";
        document.getElementById("ContactStream").classList.add('error_msg');
        $("#ContactStream").focus();
        return false;
    }else if($.trim($("#ContactQuery").val())==""){
        $('#ContactQuery').val("");
        $("#ContactQuery").focus();
        return false;
    }else{
        document.ContactUsform.submit();
    }
}

function validatePreschool() {
    if($.trim($("#namechild").val())=="") {
        $('#namechild').val("");
        document.getElementById("namechild").placeholder = "Child Name*";
        document.getElementById("namechild").classList.add('error_msg');
        $("#namechild").focus();
        return false;
    }else if($.trim($("#age").val())==""){
        $('#age').val("");
        document.getElementById("age").placeholder = "Enter Age*";
        document.getElementById("age").classList.add('error_msg');
        $("#age").focus();
        return false;
    }else if($.trim($("#fname").val())==""){
        $('#fname').val("");
        document.getElementById("fname").placeholder = "Father/Mother Name*";
        document.getElementById("fname").classList.add('error_msg');
        $("#fname").focus();
        return false;
    }else if($.trim($("#area").val())==""){
        $('#area').val("");
        document.getElementById("area").placeholder = "Area*";
        document.getElementById("area").classList.add('error_msg');
        $("#area").focus();
        return false;
    }else if($.trim($("#mobile").val())==""){
        $('#mobile').val("");
        document.getElementById("mobile").placeholder = "Mobile Number*";
        document.getElementById("mobile").classList.add('error_msg');
        $("#mobile").focus();
        return false;
    }else if(isEMail($.trim($('#email').val()))){
        $('#email').val("");
        $("#email").attr("placeholder", "Please enter correct Email.");
        $('#email').addClass('error_msg');
        $('#email').focus();
        return false;
     }else if(IsNumeric($.trim($('#mobile').val()))==false || $.trim($('#mobile').val()).length!=10){
        $('#mobile').val("");
        document.getElementById("mobile").placeholder = "Please enter your Valid Mobile No.";
        document.getElementById("mobile").classList.add('error_msg');
        $("#mobile").focus();
        return false;
    }else{
        document.preSchlform.submit();
    }
}

function validateResume(){
   if($.trim($("#ResumePost").val())==""){
        $('#ResumePost').val("");
        document.getElementById("ResumePost").placeholder = "Select Post*";
        document.getElementById("ResumePost").classList.add('error_msg');
        $("#ResumePost").focus();
        return false;
    }else if($.trim($("#ResumeFullName").val())=="") {
        $('#ResumeFullName').val("");
        document.getElementById("ResumeFullName").placeholder = "Full Name*";
        document.getElementById("ResumeFullName").classList.add('error_msg');
        $("#ResumeFullName").focus();
        return false;
    }
    else if($.trim($("#ResumeGender").val())==""){
        $('#ResumeGender').val("");
        document.getElementById("ResumeGender").placeholder = "Select Gender*";
        document.getElementById("ResumeGender").classList.add('error_msg');
        $("#ResumeGender").focus();
        return false;
    }else if($.trim($("#ResumeDOBDay").val())=="") {
        $('#ResumeDOBDay').val("");
        document.getElementById("ResumeDOBDay").placeholder = "Day*";
        document.getElementById("ResumeDOBDay").classList.add('error_msg');
        $("#ResumeDOBDay").focus();
        return false;
    }else if($.trim($("#ResumeDOBMonth").val())=="") {
        $('#ResumeDOBMonth').val("");
        document.getElementById("ResumeDOBMonth").placeholder = "Month*";
        document.getElementById("ResumeDOBMonth").classList.add('error_msg');
        $("#ResumeDOBMonth").focus();
        return false;
    }else if($.trim($("#ResumeDOBYear").val())=="") {
        $('#ResumeDOBYear').val("");
        document.getElementById("ResumeDOBYear").placeholder = "Year*";
        document.getElementById("ResumeDOBYear").classList.add('error_msg');
        $("#ResumeDOBYear").focus();
        return false;
    }else if($.trim($("#ResumeEmail").val())==""){
        $('#ResumeEmail').val("");
        document.getElementById("ResumeEmail").placeholder = "Email Id*";
        document.getElementById("ResumeEmail").classList.add('error_msg');
        $("#ResumeEmail").focus();
        return false;
    }else if(isEMail($.trim($('#ResumeEmail').val()))){
        $('#ResumeEmail').val("");
        $("#ResumeEmail").attr("placeholder", "Please enter correct Email.");
        $('#ResumeEmail').addClass('error_msg');
        $('#ResumeEmail').focus();
        return false;
    }else if($.trim($("#ResumeMobile").val())==""){
        $('#ResumeMobile').val("");
        document.getElementById("ResumeMobile").placeholder = "Mobile No.*";
        document.getElementById("ResumeMobile").classList.add('error_msg');
        $("#ResumeMobile").focus();
        return false;
    }else if(IsNumeric($.trim($('#ResumeMobile').val()))==false || $.trim($('#ResumeMobile').val()).length!=10){
        $('#ResumeMobile').val("");
        document.getElementById("ResumeMobile").placeholder = "Please enter your Valid Contact No.";
        document.getElementById("ResumeMobile").classList.add('error_msg');
        $("#ResumeMobile").focus();
        return false;
    }else if(IsNumeric($.trim($('#ResumePhone').val()))==false){
        $('#ResumePhone').val("");
        document.getElementById("ResumePhone").placeholder = "Please enter your Valid Phone No.";
        document.getElementById("ResumePhone").classList.add('error_msg');
        $("#ResumePhone").focus();
        return false;
    }else if($.trim($("#ResumeState").val())=="") {
        $('#ResumeState').val("");
        document.getElementById("ResumeState").placeholder = "State*";
        document.getElementById("ResumeState").classList.add('error_msg');
        $("#ResumeState").focus();
        return false;
    }else if($.trim($("#ResumeCity").val())=="") {
        $('#ResumeCity').val("");
        document.getElementById("ResumeCity").placeholder = "City*";
        document.getElementById("ResumeCity").classList.add('error_msg');
        $("#ResumeCity").focus();
        return false;
    }else if($.trim($("#ResumePin").val())=="") {
        $('#ResumePin').val("");
        document.getElementById("ResumePin").placeholder = "Pin Code*";
        document.getElementById("ResumePin").classList.add('error_msg');
        $("#ResumePin").focus();
        return false;
    }else if(IsNumeric($.trim($('#ResumePin').val()))==false || $.trim($('#ResumePin').val()).length!=6){
        $('#ResumePin').val("");
        document.getElementById("ResumePin").placeholder = "Please enter your Valid Pin Code";
        document.getElementById("ResumePin").classList.add('error_msg');
        $("#ResumePin").focus();
        return false;
    }else if($.trim($("#ResumeMailing").val())=="") {
        $('#ResumeMailing').val("");
        document.getElementById("ResumeMailing").placeholder = "Mailing Address*";
        document.getElementById("ResumeMailing").classList.add('error_msg');
        $("#ResumeMailing").focus();
        return false;
    }else if($.trim($('#testfile').val())=='' || $.trim($('#testfile').val())=='null' || $.trim($('#testfile').val())==null  ) {
        
        $('#testfile').val("");
        document.getElementById("testfile").placeholder = "Please browse the Photograph.";
        document.getElementById("testfile").classList.add('error_msg');
        $("#testfile").focus();
        return false;
    }else if(checkPhotoExtension('testfile')==false){
        $("#testfile").focus();
        return false;
    }else if($.trim($('#testfile1').val())=='' || $.trim($('#testfile1').val())=='null' || $.trim($('#testfile1').val())==null  ) {
        $('#testfile1').val("");
        document.getElementById("testfile1").placeholder = "Please browse your Resume.";
        document.getElementById("testfile1").classList.add('error_msg');
        $("#testfile1").focus();
        return false;
    }else if(checkResumeExtension('testfile1')==false){
        $("#testfile1").focus();
        return false;
    }else if($.trim($('#testfile2').val())=='' || $.trim($('#testfile2').val())=='null' || $.trim($('#testfile2').val())==null  ) {
        $('#testfile2').val("");
        document.getElementById("testfile2").placeholder = "Please browse the Signature.";
        document.getElementById("testfile2").classList.add('error_msg');
        $("#testfile2").focus();
        return false;
    }else if(checkSignExtension('testfile2')==false){
        $("#testfile2").focus();
        return false;
    }else{
        document.ResumeForm.submit();
    }
    
}
 
function remove_class(id) {
    $("#"+id).removeClass("error_msg");
}
$(document).ready(function(){
    $("#addStudent").click(function(){        
        validateRegForm();
    });
    $("#addContactUs").click(function(){
        validateContactUs();
    });
    $("#addpreSchl").click(function(){
        validatePreschool();
    });
    $("#addResume").click(function(){
        validateResume();
    });
    
    $("#addFeedback").click(function(){
       validateFeedback() ;
    });
    $("#addEnquiry").click(function(){
       validateQuickenquiry() ;
    });
    $("#addDDConfirmation").click(function(){
       validateDDConfirmation() ;
    });
    $("#addEnquiryMainTest").click(function(){
       validateTestSeries() ;
    });
    $("#enquiry_pop_up").click(function(){
       validateenquiry() ;
    });
//    $("#detailSubmit").click(function(){
//       validateSolutionReg() ;
//    });
//    $("#loginSubmit").click(function(){
//       validateSolutionLogin() ;
//    });
    $("#chlngSubmit").click(function(){
       validateChallenge() ;
    });
    $("#test2").change(function(){
       var file = this.value;
       file = file.replace(/^.*\\/, "");
       $("#testfile2").val(file);
    });
    $("#test1").change(function(){
       var file = this.value;
       file = file.replace(/^.*\\/, "");
       $("#testfile1").val(file);
    });
    $("#test").change(function(){
       var file = this.value;
       file = file.replace(/^.*\\/, "");
       $("#testfile").val(file);
    });
    $("#test4").change(function(){
       var file = this.value;
       file = file.replace(/^.*\\/, "");
       $("#testfile4").val(file);
    });
    $("#photoUpload").change(function(){
       var file = this.value;
       file = file.replace(/^.*\\/, "");
       $("#photoFile").val(file);
    });
    $("#admitUpload").change(function(){
       var file = this.value;
       file = file.replace(/^.*\\/, "");
       $("#admitFile").val(file);
    });
    $("#idProofUpload").change(function(){
       var file = this.value;
       file = file.replace(/^.*\\/, "");
       $("#idProofFile").val(file);
    });
    $("#recepitUpload").change(function(){
       var file = this.value;
       file = file.replace(/^.*\\/, "");
       $("#recepitFile").val(file);
    });

});

function checkPhotoExtension(id){
    var imgName = $('#testfile').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("test");
    var txt = "";
    if(ext!='.jpeg' && ext!='.png' && ext!='.jpg' ){
        $('#testfile').val("");
            document.getElementById("testfile").placeholder = "Please enter valid Photo";
            document.getElementById("testfile").classList.add('error_msg');
            $("#testfile").focus();
            return false;    
    }else if ('files' in img) {
        for (var i = 0; i < img.files.length; i++) {
            txt += "<br><strong>" + (i+1) + ". file</strong><br>";
            var file = img.files[i];
            if ('size' in file) {
                var imgSize =Math.round((file.size/1024) * 10) / 10;
                if(imgSize<=15 || imgSize>=20){
                    $('#testfile').val("");
                    document.getElementById("testfile").placeholder = "Please select the image upto size 15kB-20kB.";
                    document.getElementById("testfile").classList.add('error_msg');
                    $("#testfile").focus();
                    return false;
                }
            }
        }
    }}
 
function checkResumeExtension(id){
    var imgName = $('#testfile1').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("testfile1");
    var txt = "";
    if(ext!='.doc' && ext!='.pdf' && ext!='.PDF' && ext!='.docx'){
        $('#testfile1').val("");
            document.getElementById("testfile1").placeholder = "Please upload doc/pdf file";
            document.getElementById("testfile1").classList.add('error_msg');
            $("#testfile1").focus();
            return false;    
    }}

function checkSignExtension(id){
    var imgName = $('#testfile2').val();
    var dotIndex = imgName.lastIndexOf('.');
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("test2");
    var txt = "";
    if(ext!='.jpeg' && ext!='.png' && ext!='.jpg' ){
        $('#testfile2').val("");
            document.getElementById("testfile2").placeholder = "Please enter valid Signature";
            document.getElementById("testfile2").classList.add('error_msg');
            $("#testfile2").focus();
            return false;    
    }else if ('files' in img) {
        for (var i = 0; i < img.files.length; i++) {
            txt += "<br><strong>" + (i+1) + ". file</strong><br>";
            var file = img.files[i];
            if ('size' in file) {
                var imgSize =Math.round((file.size/1024) * 10) / 10;
                if(imgSize<=15 || imgSize>=20){
                    $('#testfile2').val("");
                    document.getElementById("testfile2").placeholder = "Please select the image upto size 15kB-20kB.";
                    document.getElementById("testfile2").classList.add('error_msg');
                    $("#testfile2").focus();
                    return false;
                }
            }
        }
    }}

function validateFeedback(){
     if(($('input:radio[name="FeedbackSource"]').is(":checked")) == false) {
         document.getElementById("knowAboutError").style.display="block";
         return false;
    }else  if(($('input:radio[name="visit"]').is(":checked")) == false) {
        document.getElementById("visitError").style.display="block";
        return false;
    }else if($.trim($("#FeedbackName").val())=="") {
        $('#FeedbackName').val("");
        document.getElementById("FeedbackName").placeholder = "Full Name*";
        document.getElementById("FeedbackName").classList.add('error_msg');
        $("#FeedbackName").focus();
        return false;
    }else if($.trim($("#FeedbackEmail").val())==""){
        $('#FeedbackEmail').val("");
        document.getElementById("FeedbackEmail").placeholder = "Email Id*";
        document.getElementById("FeedbackEmail").classList.add('error_msg');
        $("#FeedbackEmail").focus();
        return false;
    }else if(isEMail($.trim($('#FeedbackEmail').val()))){
        $('#FeedbackEmail').val("");
        $("#FeedbackEmail").attr("placeholder", "Please enter correct Email.");
        $('#FeedbackEmail').addClass('error_msg');
        $('#FeedbackEmail').focus();
        return false;
    }else if($.trim($("#FeedbackMobile").val())==""){
        $('#FeedbackMobile').val("");
        document.getElementById("FeedbackMobile").placeholder = "Mobile No.*";
        document.getElementById("FeedbackMobile").classList.add('error_msg');
        $("#FeedbackMobile").focus();
        return false;
    }else if(IsNumeric($.trim($('#FeedbackMobile').val()))==false || $.trim($('#FeedbackMobile').val()).length!=10){
        $('#FeedbackMobile').val("");
        document.getElementById("FeedbackMobile").placeholder = "Please enter your Valid Contact No.";
        document.getElementById("FeedbackMobile").classList.add('error_msg');
        $("#FeedbackMobile").focus();
        return false;
    }else if(IsNumeric($.trim($('#FeedbackContact').val()))==false){
        $('#FeedbackContact').val("");
        document.getElementById("FeedbackContact").placeholder = "Please enter your Valid Phone No.";
        document.getElementById("FeedbackContact").classList.add('error_msg');
        $("#FeedbackContact").focus();
        return false;
    }else if($.trim($("#FeedbackRemark").val())==""){
        $('#FeedbackRemark').val("");
        document.getElementById("FeedbackRemark").placeholder = "Please enter remark.";
        document.getElementById("FeedbackRemark").classList.add('error_msg');
        $("#FeedbackRemark").focus();
        return false;
    }else{
        document.Feedbackform.submit();
    }
}

function validateQuickenquiry()
{
    var contactYou = $('input[name=contactYou]:checked').val();
    var gateFormType = $('#gateFormType').val();
    if($.trim($("#EnquiryFullName").val())==""){
        $('#EnquiryFullName').val("");
        document.getElementById("EnquiryFullName").placeholder = "Enter Full Name*";
        document.getElementById("EnquiryFullName").classList.add('error_msg');
        $("#EnquiryFullName").focus();
        return false;
    }else if (!isName($.trim($("#EnquiryFullName").val()))) {
        $("#EnquiryFullName").val('');
        document.getElementById("EnquiryFullName").placeholder = "Please Enter valid Name.";
        document.getElementById("EnquiryFullName").classList.add('error_msg');
        $("#EnquiryFullName").focus();
        return false ;
    }else if($.trim($("#EnquiryEmail").val())==""){
        $('#EnquiryEmail').val("");
        document.getElementById("EnquiryEmail").placeholder = "Email Id*";
        document.getElementById("EnquiryEmail").classList.add('error_msg');
        $("#EnquiryEmail").focus();
        return false;
    }else if(isEMail($.trim($('#EnquiryEmail').val()))){
        $('#EnquiryEmail').val("");
        $("#EnquiryEmail").attr("placeholder", "Please enter correct Email.");
        $('#EnquiryEmail').addClass('error_msg');
        $('#EnquiryEmail').focus();
        return false;
    }else if($.trim($("#EnquiryMobile").val())==""){
        $('#EnquiryMobile').val("");
        document.getElementById("EnquiryMobile").placeholder = "Mobile No.*";
        document.getElementById("EnquiryMobile").classList.add('error_msg');
        $("#EnquiryMobile").focus();
        return false;
    }else if(IsNumeric($.trim($('#EnquiryMobile').val()))==false || $.trim($('#EnquiryMobile').val()).length!=10){
        $('#EnquiryMobile').val("");
        document.getElementById("EnquiryMobile").placeholder = "Please enter your Valid Contact No.";
        document.getElementById("EnquiryMobile").classList.add('error_msg');
        $("#EnquiryMobile").focus();
        return false;
    }
    else if($("input[type=radio][name=contactYou]:checked").length <1 ){
        $("#contactYouError").show();
        $("#contactYouError").html("please choose your Contact");
        $("#contactYouError").fadeOut(5000);
        return false ;        
    }
    else if($.trim($("#enquiryCourse").val())=="") {
        $('#enquiryCourse').val("");
        document.getElementById("enquiryCourse").classList.add('error_msg');
        $("#enquiryCourse").focus();
        return false;
    }else if($.trim($("#enquiryStream").val())=="") {
        $('#enquiryStream').val("");
        document.getElementById("enquiryStream").classList.add('error_msg');
        $("#enquiryStream").focus();
        return false;
    }else if(gateFormType == 1 && $.trim($("#enquiryCentre").val())=="") {
        $('#enquiryCentre').val("");
        document.getElementById("enquiryCentre").classList.add('error_msg');
        $("#enquiryCentre").focus();
        return false;
    }else if(gateFormType == 1 && $.trim($("#enquiryCourseOff").val())=="") {
        $('#enquiryCourseOff').val("");
        document.getElementById("enquiryCourseOff").classList.add('error_msg');
        $("#enquiryCourseOff").focus();
        return false;
    }else if($.trim($("#enquirySem").val())=="" && $("#mode").val() == 'addEnquiryDetail') {
        $('#enquirySem').val("");
        document.getElementById("enquirySem").classList.add('error_msg');
        $("#enquirySem").focus();
        return false;
    }else if($.trim($("#EnquiryCentre").val())=="" && $("#mode").val() == 'addEnquiryDetail') {
        $('#EnquiryCentre').val("");
        document.getElementById("EnquiryCentre").placeholder = "Select Centre*";
        document.getElementById("EnquiryCentre").classList.add('error_msg');
        $("#EnquiryCentre").focus();
        return false;
    }else if($.trim($("#EnquiryPincode").val())=="" && $("#mode").val() == 'addEnquiryDetail') {
        $('#EnquiryPincode').val("");
        document.getElementById("EnquiryPincode").placeholder = "Pin Code*";
        document.getElementById("EnquiryPincode").classList.add('error_msg');
        $("#EnquiryPincode").focus();
        return false;
    }else if((IsNumeric($.trim($('#EnquiryPincode').val()))==false || $.trim($('#EnquiryPincode').val()).length!=6) && $("#mode").val() == 'addEnquiryDetail'){
        $('#EnquiryPincode').val("");
        document.getElementById("EnquiryPincode").placeholder = "Please enter your Valid Pin Code";
        document.getElementById("EnquiryPincode").classList.add('error_msg');
        $("#EnquiryPincode").focus();
        return false;
    }else if($.trim($("#enquiryAddress").val())=="" && $("#mode").val() == 'addEnquiryDetail') {
        $('#enquiryAddress').val("");
        document.getElementById("enquiryAddress").placeholder = "Mailing Address*";
        document.getElementById("enquiryAddress").classList.add('error_msg');
        $("#enquiryAddress").focus();
        return false;
    }else if($.trim($("#enquiryQuery").val())=="" && $("#mode").val() == 'addEnquiryDetail') {
        $('#enquiryQuery').val("");
        document.getElementById("enquiryQuery").placeholder = "Please Enter Your Query*";
        document.getElementById("enquiryQuery").classList.add('error_msg');
        $("#enquiryQuery").focus();
        return false;
    }else{
        var mode = $("#mode").val();
        if(mode == 'addEnquiryDetail'){
          document.EnquiryForm.submit();
       }else if(mode == 'addEnquiryGateIES'){ 
           var gateFormType = $('#gateFormType').val();
           $('#preloader').show();
           var url = "mode=addEnquiryGateIES&EnquiryFullName="+$.trim($("#EnquiryFullName").val()) +"&EnquiryEmail="+$.trim($("#EnquiryEmail").val()) +"&EnquiryMobile="+$.trim($("#EnquiryMobile").val()) +"&enquiryQuery="+$('#enquiryQuery').val() +"&EnquiryPincode="+$.trim($("#EnquiryPincode").val()) +"&enquiryAddress="+$.trim($("#enquiryAddress").val()) +"&EnquiryCentre="+$('#EnquiryCentre').val() +"&enquiryCourse="+$.trim($("#enquiryCourse").val()) +"&enquiryStream="+$.trim($("#enquiryStream").val()) +"&enquirySem="+$('#enquirySem').val()+"&gateFormType="+$('#gateFormType').val()+"&contactYou="+contactYou+"&madeEasyCentre="+$('#enquiryCentre').val()+"&madeEasyCourse="+$('#enquiryCourseOff').val();
            $.ajax({
            type:'POST',
            url: path +"submit.php",
            data:url,
            async: false,
            error: function (data) { $('#preloader').hide();alert('error');
            },
            success: function (data) { $('#preloader').hide();
                    var gateFormType = $('#gateFormType').val();
                    
                   // $('#enquiryThanku').show();
                  //  $('#enquiryFormGate').hide();
                    //setInterval(function(){ countdown(); },1000);
                    if(gateFormType == 1 || gateFormType == 0){
                      location.href = 'GATE-IES-IAS-PSUs-thanku';
                    }else if(gateFormType == 2){
                      location.href = 'GATE-ESE-Classroom-Coaching-thanku';  
                    }else if(gateFormType == 3){
                      location.href = 'GATE-ESE-Online-Test-Series-thanku'; 
                    }else if(gateFormType == 4){
                      location.href = 'GATE-ESE-Postal-Study-Course-thanku';
                    }else if(gateFormType == 5){
                      location.href = 'GATE-ESE-Weekend-Coaching-thanku';
            }
            }
        });
       }
    }
}

function checkAdmitExtension(id){
    var imgName = $('#testfile1').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("test1");
    var txt = "";
    if(ext!='.jpg' && ext!='.png' && ext!='.pdf' && ext!='.jpeg' && ext!='.JPG' && ext!='.PNG' && ext!='.PDF' && ext!='.JPEG'){
        $('#testfile1').val("");
            document.getElementById("testfile1").placeholder = "Please file upload in pdf/jpg/jpeg/png";
            document.getElementById("testfile1").classList.add('error_msg');
            $("#testfile1").focus();
            return false;    
    }else if ('files' in img) {
        for (var i = 0; i < img.files.length; i++) {
            txt += "<br><strong>" + (i+1) + ". file</strong><br>";
            var file = img.files[i];
            if ('size' in file) {
                var imgSize =Math.round((file.size/1000) * 10) / 10; 
                if(imgSize>1024){
                    document.getElementById("test1").classList.add('error_msg');
                    $('#testfile1').val("");
            document.getElementById("testfile1").placeholder = "Please file upload max 1MB size";
            document.getElementById("testfile1").classList.add('error_msg');
            $("#testfile1").focus();
            return false; 
                }
            }
        }
    }}

  function validateDDConfirmation(){  
  if($.trim($("#centreSelDetails").val())=="") {
        $('#centreSelDetails').val("");
        document.getElementById("centreSelDetails").placeholder = "Select Centre*";
        document.getElementById("centreSelDetails").classList.add('error_msg');
        $("#centreSelDetails").focus();
        return false;
    }else if($.trim($("#courseSelDetails").val())=="") {
        $('#courseSelDetails').val("");
        document.getElementById("courseSelDetails").placeholder = "Select Centre*";
        document.getElementById("courseSelDetails").classList.add('error_msg');
        $("#courseSelDetails").focus();
        return false;
    }else if($.trim($("#DDBankName").val())=="") {
        $('#DDBankName').val("");
        document.getElementById("DDBankName").placeholder = "Select Centre*";
        document.getElementById("DDBankName").classList.add('error_msg');
        $("#DDBankName").focus();
        return false;
    }else if($.trim($("#DDraftNo").val())=="") {
        $('#DDraftNo').val("");
        document.getElementById("DDraftNo").placeholder = "Enter Draft No.*";
        document.getElementById("DDraftNo").classList.add('error_msg');
        $("#DDraftNo").focus();
        return false;
    }else{
        var url = "mode=getDDConfirmation&DDNO="+$.trim($("#DDraftNo").val()) +"&centre="+$.trim($("#centreSelDetails").val()) +"&course="+$.trim($("#courseSelDetails").val()) +"&bank="+$('#DDBankName').val();
        $.ajax({
            type:'POST',
            url: path +"ajax.php",
            data:url,
            async: false,
            error: function (jqXHR, textStatus, errorThrown) {
            },
            success: function (data, textStatus, jqXHR) {
               var data = JSON.parse(data);
                if(data['status'] == 1){
                     $("#ddStatus").text("");
                     $("#showDD_Detail").show();
                     $("#DDSerialNo").text(data['sno']) ;
                     $("#DDStudentName").text(data['name']) ;
                     $("#DDCourse").text(data['course']) ;
                     $("#DDNo").text(data['ddno']) ;
                     $("#DDRollNo").text(data['rolno']) ;
                     $("#DDCentre").text(data['centre']) ;
                     $("#DDBank").text(data['bank']) ;
                     $("#DDStatus").text(data['msg']) ;
                }else{
                    $("#showDD_Detail").hide();
                    $("#ddStatus").text(data['msg']);
                }
            }      
        });
    }
    
  }
 
function checkSuperTalentPDF(id){ 
    var imgName = $('#testfile2').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("test2");
    var txt = "";
    if(ext!='.pdf' && ext!='.PDF' && ext!='.doc' && ext!='.DOC' && ext!='.docx' && ext!='.DOCX'){
        $('#testfile2').val("");
            document.getElementById("testfile2").placeholder = "Please file upload in pdf or doc";
            document.getElementById("testfile2").classList.add('error_msg');
            $("#testfile2").focus();
            return false;    
    }}
function checkIDProof(id){
    var imgName = $('#testfile4').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("test4");
    var txt = "";
    if(ext!='.pdf' && ext!='.PDF' && ext!='.jpg' && ext!='.jpeg' && ext!='.png' && ext!='.JPG' && ext!='.PNG' && ext!='.JPEG'){
        $('#testfile4').val("");
            document.getElementById("testfile4").placeholder = "Please upload jpg/jpeg/png/pdf file";
            document.getElementById("testfile4").classList.add('error_msg');
            $("#testfile4").focus();
            return false;    
    }}
function checkPostalPDF(id){ 
    var imgName = $('#testfile2').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("test2");
    var txt = "";
    if(ext!='.pdf' && ext!='.PDF' && ext!='.jpg' && ext!='.jpeg' && ext!='.png' && ext!='.JPG' && ext!='.JPEG' && ext!='.PNG'){
        $('#testfile2').val("");
            document.getElementById("testfile2").placeholder = "Please upload jpg/jpeg/png/pdf file";
            document.getElementById("testfile2").classList.add('error_msg');
            $("#testfile2").focus();
            return false;    
    }}
function returnValidate(){
   if($.trim($("#updName").val())=="") {
        $('#updName').val("");
        document.getElementById("updName").placeholder = "Full Name*";
        document.getElementById("updName").classList.add('error_msg');
        $("#updName").focus();
        return false;
    }
   else if($.trim($("#updMobile").val())=="") {
        $('#updMobile').val("");
        document.getElementById("updMobile").placeholder = "Mobile Number*";
        document.getElementById("updMobile").classList.add('error_msg');
        $("#updMobile").focus();
        return false;
    }
    else if(IsNumeric($.trim($('#updMobile').val()))==false || $.trim($('#updMobile').val()).length!=10){
        $('#updMobile').val("");
        document.getElementById("updMobile").placeholder = "Enter Valid Mobile No.";
        document.getElementById("updMobile").classList.add('error_msg');
        $("#updMobile").focus();
        return false;
    }
   else if($.trim($("#updMail").val())=="") {
        $('#updMail').val("");
        document.getElementById("updMail").placeholder = "Email Id*";
        document.getElementById("updMail").classList.add('error_msg');
        $("#updMail").focus();
        return false;
    }
    else if(isEMail($.trim($('#updMail').val()))){
        $('#updMail').val("");
        $("#updMail").attr("placeholder", "Enter Valid Email.");
        $('#updMail').addClass('error_msg');
        $('#updMail').focus();
        return false;
    }
    else{
    var radioVal = $('input[name="connect_via"]:checked').val();
        $('#preloader_1').show();
        var isTermChk = $('#updTerms').is(':checked');
        var query = escape(encodeURIComponent($.trim($("#updQuery").val())));
        var url = "mode=latestUpdate&name="+$.trim($("#updName").val()) +"&mobile="+$.trim($("#updMobile").val()) +"&mail="+$.trim($("#updMail").val()) +"&query="+query+"&terms="+isTermChk+"&radioVal="+radioVal;
        $.ajax({
            type:'POST',
            url: path+"ajax.php",
            data:url,
            async: false,
            error: function (data) {
                $('#preloader_1').hide();
                alert('Error');
            },
            success: function (data) {
                $('#preloader_1').hide();
                $("#subscribe_popup_main").hide();
                $("#subscribe_popup,#blackPopup1").fadeOut(300)();
               // $("#thanku_pop").fadeIn(300)();
            }      
        });
    }
}
function validateTestSeries(){
   if($('#formType').val() == 2 && $('#testSeriesMode').val() == ''){
        $("#testSeriesMode").show();
        $("#testSeriesMode").val('');
        document.getElementById("testSeriesMode").classList.add('error_msg1');
        $("#testSeriesMode").focus();
    }else if ($.trim($("#fullName").val()) == '') {
        $("#fullName").show();
        $("#fullName").val('');
        document.getElementById("fullName").placeholder = "Please Enter Name.";
        document.getElementById("fullName").classList.add('error_msg1');
        $("#eseFullName").focus();
    }else if (!isName($.trim($("#fullName").val()))) {
        $("#fullName").val('');
        document.getElementById("fullName").placeholder = "Please Enter valid Name.";
        document.getElementById("fullName").classList.add('error_msg1');
        $("#fullName").focus();
    }else if ($.trim($("#fatherName").val()) == '') {
        $("#fatherName").show();
        $("#fatherName").val('');
        document.getElementById("fatherName").placeholder = "Please Enter Father Name.";
        document.getElementById("fatherName").classList.add('error_msg1');
        $("#fatherName").focus();
    }else if (!isName($.trim($("#fatherName").val()))) {
        $("#fatherName").val('');
        document.getElementById("fatherName").placeholder = "Please Enter valid Father Name.";
        document.getElementById("fatherName").classList.add('error_msg1');
        $("#fatherName").focus();
    }else if ($.trim($("#dob").val()) == '') {
        $("#dob").show();
        $("#dob").val('');
        document.getElementById("dob").placeholder = "Please Enter Date of Birth.";
        document.getElementById("dob").classList.add('error_msg1');
        $("#dob").focus();
    } else if ($.trim($("#UPSCRollNo").val()) == '') {
        $("#UPSCRollNo").show();
        $("#UPSCRollNo").val('');
        document.getElementById("UPSCRollNo").placeholder = "Please Enter UPSC RollNo.";
        document.getElementById("UPSCRollNo").classList.add('error_msg1');
        $("#UPSCRollNo").focus();
    } else if ($.trim($("#stream").val()) == '') {
        $("#stream").show();
        document.getElementById("stream").classList.add('error_msg1');
        $("#stream").focus();
    } else if ($.trim($("#category").val()) == '') {
        $("#category").show();
        document.getElementById("category").classList.add('error_msg1');
        $("#category").focus();
    }else if ($.trim($("#mobileNo").val()) == '') {
        $("#mobileNo").show();
        $("#mobileNo").val('');
        document.getElementById("mobileNo").placeholder = "Please enter Mobile No.";
        document.getElementById("mobileNo").classList.add('error_msg1');
        $("#mobileNo").focus();
    } else if (!isMobile($("#mobileNo").val())) {
        $("#mobileNo").show();
        $("#mobileNo").val('');
        document.getElementById("mobileNo").placeholder = "Please enter valid Mobile No.";
        document.getElementById("mobileNo").classList.add('error_msg1');
        $("#mobileNo").focus();
    }else if (($.trim($("#alternateNo").val()) != '') && (!isMobile($("#alternateNo").val()))) {
        $("#alternateNo").show();
        $("#alternateNo").val('');
        document.getElementById("alternateNo").placeholder = "Please enter valid No.";
        document.getElementById("alternateNo").classList.add('error_msg1');
        $("#mobileNo").focus();
    }else if ($.trim($("#email").val()) == '') {
        $("#email").show();
        document.getElementById("email").placeholder = "Please enter Email.";
        document.getElementById("email").classList.add('error_msg1');
        $("#email").focus();
    }else if (isEMail($.trim($('#email').val()))) {
        $("#email").show();
        $("#email").val('');
        document.getElementById("email").placeholder = "Please Enter correct Email.";
        document.getElementById("email").classList.add('error_msg1');
        $("#email").focus();
    } else if ($.trim($("#address").val())=='' ) {
        $("#address").val('');
        document.getElementById("address").placeholder = "Please enter Address";
        document.getElementById("address").classList.add('error_msg1');
        $("#address").focus();
        return false;
    } else if ($.trim($("#city").val())=='' ) {
        $("#city").val('');
        document.getElementById("city").placeholder = "Please enter City";
        document.getElementById("city").classList.add('error_msg1');
        $("#city").focus();
        return false;
    } else if ($.trim($("#state").val())=='' ) {
        $("#state").val('');
        document.getElementById("state").placeholder = "Please enter State";
        document.getElementById("state").classList.add('error_msg1');
        $("#state").focus();
        return false;
    } else if ($.trim($("#pincode").val())=='' ) {
        $("#pincode").val('');
        document.getElementById("pincode").placeholder = "Please enter Pin Code";
        document.getElementById("pincode").classList.add('error_msg1');
        $("#pincode").focus();
        return false;
    } else if ($.trim($("#college").val())=='' ) {
        $("#college").val('');
        document.getElementById("college").placeholder = "Please enter College";
        document.getElementById("college").classList.add('error_msg1');
        $("#college").focus();
        return false;
    } else if ($.trim($("#clgCity").val())=='' ) {
        $("#clgCity").val('');
        document.getElementById("clgCity").placeholder = "Please enter College City";
        document.getElementById("clgCity").classList.add('error_msg1');
        $("#clgCity").focus();
        return false;
    }else if($("input[type=radio]:checked").val() == 1 && $.trim($("#centre").val())==''){
        $("#centre").val('');
        document.getElementById("centre").placeholder = "Please enter Centre";
        document.getElementById("centre").classList.add('error_msg1');
        $("#centre").focus();
        return false;
    }else if($("input[type=radio]:checked").val() == 1 && $.trim($("#joiningYear").val())==''){
        $("#joiningYear").val('');
        document.getElementById("joiningYear").classList.add('error_msg1');
        $("#joiningYear").focus();
        return false;
    }else if($("input[type=radio]:checked").val() == 1 && $.trim($("#courseJoined").val())==''){
        $("#courseJoined").val('');
        document.getElementById("courseJoined").classList.add('error_msg1');
        $("#courseJoined").focus();
        return false;
    }else if($("input[type=radio]:checked").val() == 1 && $.trim($("#rollNo").val())==''){
        $("#rollNo").val('');
        document.getElementById("rollNo").placeholder = "Please enter Roll No.";
        document.getElementById("rollNo").classList.add('error_msg1');
        $("#rollNo").focus();
        return false;
    }else if($("input[type=radio]:checked").val() == 1 && $.trim($("#recepitFile").val())==''){
        $("#recepitFile").val('');
        document.getElementById("recepitFile").placeholder = "Please Upload ID Card/Fee Receipt";
        document.getElementById("recepitFile").classList.add('error_msg1');
        $("#recepitFile").focus();
        return false;
    }else if($("input[type=radio]:checked").val() == 1 && checkReciptExt('recepitFile')==false){
        $("#recepitFile").focus();
        return false;
    }else if($.trim($("#photoFile").val())==''){
        $("#photoFile").val('');
        document.getElementById("photoFile").placeholder = "Please Upload Photo";
        document.getElementById("photoFile").classList.add('error_msg1');
        $("#photoFile").focus();
        return false;
    }else if(checkPhotoExt('photoFile')==false){
        $("#photoFile").focus();
        return false;
    }else if($.trim($("#admitFile").val())==''){
        $("#admitFile").val('');
        document.getElementById("admitFile").placeholder = "Please Upload Admit Card";
        document.getElementById("admitFile").classList.add('error_msg1');
        $("#admitFile").focus();
        return false;
    }else if(checkAdmitExt('admitFile')==false){
        $("#admitFile").focus();
        return false;
    }else if($.trim($("#idProofFile").val())==''){
        $("#idProofFile").val('');
        document.getElementById("idProofFile").placeholder = "Please Upload Id Proof";
        document.getElementById("idProofFile").classList.add('error_msg1');
        $("#idProofFile").focus();
        return false;
    }else if(checkIdProofExt('idProofFile')==false){
        $("#idProofFile").focus();
        return false;
    }else if(($('#formType').val() == 1 || $('#formType').val() == 3) && ($('input:checkbox[name="agree"]').is(":checked"))!=1){
        alert("Please Click on agree box");
       return false;
    }
    else{
        document.testSeriesForm.submit();
    }
    
    $("html, body").animate({ scrollTop: 0 }, "slow");
}
 function checkPhotoExt(id){
     var imgName = $('#photoFile').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("photoUpload");
    var txt = "";
    if(ext!='.jpg' && ext!='.jpeg' && ext!='.png' && ext!='.JPG' && ext!='.PNG' && ext!='.JPEG'){
        $('#photoFile').val("");
            document.getElementById("photoFile").placeholder = "Upload jpg/jpeg/png file";
            document.getElementById("photoFile").classList.add('error_msg');
            $("#photoFile").focus();
            return false;    
    }}
 function checkAdmitExt(id){
    var imgName = $('#admitFile').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("admitUpload");
    var txt = "";
    if(ext!='.jpg' && ext!='.jpeg' && ext!='.png' && ext!='.JPG' && ext!='.PNG' && ext!='.JPEG' && ext!='.pdf' && ext!='.PDF'){
        $('#admitFile').val("");
            document.getElementById("admitFile").placeholder = "Upload jpg/jpeg/png/pdf file";
            document.getElementById("admitFile").classList.add('error_msg');
            $("#admitFile").focus();
            return false;    
    }}
 function checkIdProofExt(id){
    var imgName = $('#idProofFile').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("idProofUpload");
    var txt = "";
    if(ext!='.jpg' && ext!='.jpeg' && ext!='.png' && ext!='.JPG' && ext!='.PNG' && ext!='.JPEG' && ext!='.pdf' && ext!='.PDF'){
        $('#idProofFile').val("");
            document.getElementById("idProofFile").placeholder = "Upload jpg/jpeg/png/pdf file";
            document.getElementById("idProofFile").classList.add('error_msg');
            $("#idProofFile").focus();
            return false;    
    }}
function checkReciptExt(id){
    var imgName = $('#recepitFile').val();
    var dotIndex = imgName.lastIndexOf('.'); 
    var ext = imgName.substring(dotIndex); 
    var img = document.getElementById("recepitUpload");
    var txt = "";
    if(ext!='.jpg' && ext!='.jpeg' && ext!='.png' && ext!='.JPG' && ext!='.PNG' && ext!='.JPEG' && ext!='.pdf' && ext!='.PDF'){
        $('#recepitFile').val("");
            document.getElementById("recepitFile").placeholder = "Upload jpg/jpeg/png/pdf file";
            document.getElementById("recepitFile").classList.add('error_msg');
            $("#recepitFile").focus();
            return false;    

    }
    }
function validateSolutionReg(){
    
     if($.trim($("#studentName").val())=="") {
        $('#studentName').val("");
        document.getElementById("studentName").placeholder = "Enter Name*";
        document.getElementById("studentName").classList.add('error_msg');
        $("#studentName").focus();
        return false;
    }else if($.trim($("#studentRollNo").val())=="") {
        $('#studentRollNo').val("");
        document.getElementById("studentRollNo").placeholder = "Enter RollNo*";
        document.getElementById("studentRollNo").classList.add('error_msg');
        $("#studentRollNo").focus();
        return false;
    }else if($.trim($("#studentDOB").val())=="") {
        $('#studentDOB').val("");
        document.getElementById("studentDOB").placeholder = "Enter Date of Birth*";
        document.getElementById("studentDOB").classList.add('error_msg');
        $("#studentDOB").focus();
        return false;
    }else if($.trim($("#studentMobile").val())==""){
        $('#studentMobile').val("");
        document.getElementById("studentMobile").placeholder = "Enter Mobile No.*";
        document.getElementById("studentMobile").classList.add('error_msg');
        $("#studentMobile").focus();
        return false;
    }else if(IsNumeric($.trim($('#studentMobile').val()))==false || $.trim($('#studentMobile').val()).length!=10){
        $('#studentMobile').val("");
        document.getElementById("studentMobile").placeholder = "Please enter your Valid Mobile No.";
        document.getElementById("studentMobile").classList.add('error_msg');
        $("#studentMobile").focus();
        return false;
    }else if($.trim($("#studentEmail").val())==""){
        $('#studentEmail').val("");
        document.getElementById("studentEmail").placeholder = "Enter Email Id*";
        document.getElementById("studentEmail").classList.add('error_msg');
        $("#studentEmail").focus();
        return false;
    }else if(isEMail($.trim($('#studentEmail').val()))){
        $('#studentEmail').val("");
        $("#studentEmail").attr("placeholder", "Please enter correct Email.");
        $('#studentEmail').addClass('error_msg');
        $('#studentEmail').focus();
        return false;
    }else if($.trim($("#studentPass").val())==""){
        $('#studentPass').val("");
        document.getElementById("studentPass").placeholder = "Please enter Password.";
        document.getElementById("studentPass").classList.add('error_msg');
        $("#studentPass").focus();
        return false;
    }else if($.trim($("#studentConfirmPass").val())==""){
        $('#studentConfirmPass').val("");
        document.getElementById("studentConfirmPass").placeholder = "Please enter Confirm Password.";
        document.getElementById("studentConfirmPass").classList.add('error_msg');
        $("#studentConfirmPass").focus();
        return false;
    }else if(($.trim($("#studentPass").val()) != $.trim($("#studentConfirmPass").val()))){
        $('#studentPass').val("");
        $('#studentConfirmPass').val("");
        document.getElementById("studentPass").placeholder = "Please enter Correct Password.";
        document.getElementById("studentPass").classList.add('error_msg');
        $("#studentPass").focus();
        return false;
    }else{
        
        var data = "studentName=" + $.trim($('#studentName').val()) + "&studentRollNo=" + $.trim($('#studentRollNo').val()) + "&studentDOB=" + $.trim($('#studentDOB').val())+ "&studentMobile=" + $.trim($('#studentMobile').val())+ "&studentEmail=" + $.trim($('#studentEmail').val())+ "&studentPass=" + $.trim($('#studentPass').val()) + "&mode=solutionLoginReg&stream="+  $.trim($('#streamReg').val()) + "&paper=" + $.trim($('#paperReg').val());
        $.ajax({
                type: "post",                
                url: path +"ajax.php",
                data: data,  
                error: function(data) {
//                   alert('error');
                                },
                success: function(data){
//                alert('You have successfully Registered. Please Login.');
//               document.regForm.reset();
                 if(data == 1){
                     location.href='solutionChallenge';
                 }
            }
        });
       // document.Feedbackform.submit();
    }
}
function validateSolutionLogin(){
     if($.trim($("#loginEmail").val())==""){
        $('#loginEmail').val("");
        document.getElementById("loginEmail").placeholder = "Enter Email Id*";
        document.getElementById("loginEmail").classList.add('error_msg');
        $("#loginEmail").focus();
        return false;
    }else if(isEMail($.trim($('#loginEmail').val()))){
        $('#loginEmail').val("");
        $("#loginEmail").attr("placeholder", "Please enter correct Email.");
        $('#loginEmail').addClass('error_msg');
        $('#loginEmail').focus();
        return false;
    }else if($.trim($("#loginPass").val())==""){
        $('#loginPass').val("");
        document.getElementById("loginPass").placeholder = "Please enter Password.";
        document.getElementById("loginPass").classList.add('error_msg');
        $("#loginPass").focus();
        return false;
    }else{
        var data = "loginEmail=" + $.trim($('#loginEmail').val()) + "&loginPass=" + $.trim($('#loginPass').val())+"&mode=solutionLogin"+ "&loginStream=" + $.trim($('#streamLogin').val()) + "&loginPaper=" + $.trim($('#paperLogin').val());
        $.ajax({
                type: "post",                
                url: path +"ajax.php",
                data: data,    
                error: function(data) {
//                   alert('error');
                                },
                success: function(data){
                    if(data == 1){
                        location.href = 'solutionChallenge';
                    }else if(data == 2){
                        alert('Sorry!! You have already give the challenge');
                        return false;
                    }else{
                        alert('Incorrect Email or Password');
                        return false;
                    }
            }
        });
    }
}

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
   // validation in pop-up enquiry form by abhinav sharma
   
   function validateenquiry()
{
    var name=$("#enquiryName").val();
    var mobile=$("#enquiryMobile").val();
    var email=$("#enquiryEmail").val();
    var centre=$("#enquiryCenter").val();
    var course=$("#enquiryCourse").val();
    var stream=$("#enquiryStream").val();
    
 var connect = $('input[name="connect"]:checked').val();
 
    if($.trim($("#enquiryName").val())==""){
        $('#enquiryname').val("");
        document.getElementById("enquiryName").placeholder = "Enter Your Name*";
//        $('#enquiryName').addClass('error_msg');
        document.getElementById("enquiryName").classList.add('error_msg');
       $("#enquiryName").focus();
        return false;
    }else if (!isName($.trim($("#enquiryName").val()))) {
        $("#enquiryName").val('');
        document.getElementById("enquiryName").placeholder = "Please Enter valid Name.";
        $('#enquiryName').addClass('error_msg');
        $("#enquiryName").focus();
        return false ;
    }else if($.trim($("#enquiryMobile").val())==""){
        $('#enquiryMobile').val("");
        document.getElementById("enquiryMobile").placeholder = "Mobile No.*";
         $('#enquiryMobile').addClass('error_msg');
        $("#enquiryMobile").focus();
        return false;
    }else if(IsNumeric($.trim($('#enquiryMobile').val()))==false || $.trim($('#enquiryMobile').val()).length!=10){
        $('#enquiryMobile').val("");
        document.getElementById("enquiryMobile").placeholder = "Please enter your Valid Contact No.";
         $('#enquiryMobile').addClass('error_msg');
        $("#enquiryMobile").focus();
        return false;
    }else if($.trim($("#enquiryEmail").val())==""){
        $('#enquiryEmail').val("");
        document.getElementById("enquiryEmail").placeholder = "Email Id*";
     
      $('#enquiryEmail').addClass('error_msg');
        $("#enquiryEmail").focus();
        return false;
    }    else if(isEMail($.trim($('#enquiryEmail').val()))){
        $('#enquiryEmail').val("");
        $("#enquiryEmail").attr("placeholder", "Please enter correct Email.");
       
         $('#enquiryEmail').addClass('error_msg');
        $('#enquiryEmail').focus();
        return false;
    }
    else if($.trim($("#enquiryCenter").val())=="" ) {
        $('#enquiryCenter').val("");
        document.getElementById("enquiryCenter").placeholder = "Select Centre*";
   
       $('#enquiryCenter').addClass('error_msg');
        $("#enquiryCenter").focus();
        return false;
    }else if($.trim($("#enquiryCourse").val())=="" || $.trim($("#enquiryCourse").val())=="Less than 500" ) {
        $('#enquiryCourse').val("");
     
       $('#enquiryCourse').addClass('error_msg');
        $("#enquiryCourse").focus();
        return false;
    }else if($.trim($("#enquiryStream").val())=="") {
        $('#enquiryStream').val("");
    
     $('#enquiryStream').addClass('error_msg');
        $("#enquiryStream").focus();
        return false;
    }else if($.trim($('input[name="connect"]:checked').val())=="") {
        //$('#connect-via').val("");
        $('#connect-via').addClass('error_msg');
        $("#connect-via").focus();
        return false;
 
    }else{ $('#preloader_1_1').show();
        var data = "mode=addpopupEnquiry&Name=" +name + "&mobile=" + mobile+"&email="+email +"&stream=" +stream + "&centre=" + centre +"&course=" +course +"&connect_via="+connect;
        $.ajax({
                type: "post",                
                url: path +"submit.php",
                data: data,    
                error: function(data) {$('#preloader_1_1').hide();
//                   alert('error');
                                },
                success: function(data){$('#preloader_1_1').hide();
                    //alert("Your Record is Submitted Successfully");
                     $("#error").show();
                     
                     $("#error").html("Your Query has been submitted");
                     $("#error").fadeOut(3000);
                      document.EnquiryForm.reset();
                     
            }
        });
    }
}
// end of pop-up validation by abhinav sharma






// function validateChallenge(){alert('jjjj');
//     var i;
//     for(i=1;i<=75;i++){
//         var file = "file_"+i;
//    if($.trim($("#file_"+i).val())!='' && checkSolFile(file)==false){alert('rrrr');
//        alert('Please upload file in jpg/jpeg/png/pdf format');
//        $("#file_"+i).focus();
//        return false;
//    }
//    }
//}
// function checkSolFile(id){alert(id+'yyyy');
//    var imgName = $("#"+id).val();
//    var dotIndex = imgName.lastIndexOf('.'); 
//    var ext = imgName.substring(dotIndex); 
//    var img = document.getElementById("#"+id);
//    var txt = "";
//    if(ext!='.jpg' && ext!='.jpeg' && ext!='.png' && ext!='.JPG' && ext!='.PNG' && ext!='.JPEG' && ext!='.pdf' && ext!='.PDF'){
//        $("#"+id).val("");
//            document.getElementById(id).placeholder = "Upload jpg/jpeg/png/pdf file";
//            document.getElementById(id).classList.add('error_msg');
//            $("#"+id).focus();
//            return false;    
//    }}