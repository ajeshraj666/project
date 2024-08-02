<div class="modal fade careerApply enquiryForm" id="enquiryForm" aria-hidden="true" aria-labelledby="enquiryFormLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="enquiryFormClose"></button>

            <div class="modal-body p-0">
                <div class="d-flex careerPopupBox">
                <picture><img src="web/images/about/mission.jpg" width="580" height="720" alt="" class="w-100 img-fluid h-100"></picture>
                    <div>
                    <p>ENQUIRY</p>
                    <form action="" id="popupForm" method="post" enctype="multipart/form-data">
                      
                        <div class="formGroup">
                            <label for="name">Full Name</label> 
                            <input type="text" id="name_enquiry" name="name_enquiry">
                            <span id="name_enquiryError" class="error-message">Please enter your name</span>
                        </div>
                        <div class="formGroup">
                        <label for="email">E-mail</label> 
                        <input type="email" id="email_enquiry" name="email_enquiry" >
                        <span id="email_enquiryError" class="error-message">Please enter your email</span>

                        </div>
                        <div class="formGroup">
                        <label for="phone">Phone</label> 
                            <input type="tel" id="phone_enquiry" name="phone_enquiry" class="phone_number">
                            <span id="phone_enquiryError" class="error-message">Please enter your phone</span>

                        </div>
                     
                        <!-- <div class="formGroup">
                        <label for="service">Service</label>
                            <select name="" id="enquiry-service">
                                <option value=""  selected="selected" hidden="hidden">Please Select</option>
                                <option value="">Integrated Facilities Management </option>
                                <option value="">Hard Services</option>
                                <option value="">Hospitality Services</option>
                            </select>
                        <span id="sevice_enquiryError" class="error-message">Please upload your resume</span>

                        </div> -->
                        <div class="formGroup">
                            <label for="message">Message</label> 
                            <textarea id="message_enquiry" name="message_enquiry" rows="1" cols="1" ></textarea>
                            <span id="message_enquiryError" class="error-message">Please your message</span>

                        </div>
                        <button type="submit" class="btn  themeBtn loadMore">
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"> <g clip-path="url(#clip0_1566_268)"> <path d="M14.1667 10.5C14.1667 10.9608 13.7933 11.3333 13.3333 11.3333H10.8333V13.8333C10.8333 14.2942 10.46 14.6667 10 14.6667C9.54 14.6667 9.16667 14.2942 9.16667 13.8333V11.3333H6.66667C6.20667 11.3333 5.83333 10.9608 5.83333 10.5C5.83333 10.0392 6.20667 9.66667 6.66667 9.66667H9.16667V7.16667C9.16667 6.70583 9.54 6.33333 10 6.33333C10.46 6.33333 10.8333 6.70583 10.8333 7.16667V9.66667H13.3333C13.7933 9.66667 14.1667 10.0392 14.1667 10.5ZM20 4.66667V16.3333C20 18.6308 18.1308 20.5 15.8333 20.5H4.16667C1.86917 20.5 0 18.6308 0 16.3333V4.66667C0 2.36917 1.86917 0.5 4.16667 0.5H15.8333C18.1308 0.5 20 2.36917 20 4.66667ZM18.3333 4.66667C18.3333 3.28833 17.2117 2.16667 15.8333 2.16667H4.16667C2.78833 2.16667 1.66667 3.28833 1.66667 4.66667V16.3333C1.66667 17.7117 2.78833 18.8333 4.16667 18.8333H15.8333C17.2117 18.8333 18.3333 17.7117 18.3333 16.3333V4.66667Z" fill="white"></path> </g> <defs> <clipPath id="clip0_1566_268"> <rect width="20" height="20" fill="white" transform="translate(0 0.5)"></rect> </clipPath> </defs> </svg></i>   
                            SEND</button>
                    </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<!-- <script>
       function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var resume = document.getElementById('resume').value;
        var message = document.getElementById('message').value;

        if (name === "") {
            document.getElementById('nameError').style.display = 'block';
            return false;
        } else {
            document.getElementById('nameError').style.display = 'none';
        }

        if (email === "") {
            document.getElementById('emailError').style.display = 'block';
            return false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        if (phone === "") {
            document.getElementById('phoneError').style.display = 'block';
            return false;
        } else {
            document.getElementById('phoneError').style.display = 'none';
        }

        if (resume === "") {
            document.getElementById('resumeError').style.display = 'block';
            return false;
        } else {
            document.getElementById('resumeError').style.display = 'none';
        }

        if (message === "") {
            document.getElementById('messageError').style.display = 'block';
            return false;
        } else {
            document.getElementById('messageError').style.display = 'none';
        }

        // If all fields are valid, you can submit the form
        return true;
    }
</script> -->