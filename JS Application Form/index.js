const form = document.getElementById('form1');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    let firstname = document.getElementById("namebox").value;
    localStorage.setItem("Firstname",firstname);
    let lastname = document.getElementById('namebox1').value;
    localStorage.setItem("Lastname",lastname);
    let email = document.getElementById('emailbox').value;
    localStorage.setItem("Email",email);
    let phone = document.getElementById('contactbox').value;
    localStorage.setItem("PhoneNumber",phone);
    let position = document.getElementById("posbox").value;
    localStorage.setItem("AppliedPosition",position);
    let city = document.getElementById('place').value;
    localStorage.setItem("City",city);
    let edate = document.getElementById('datebox').value;
    localStorage.setItem("Early Possible Date",edate);
    let idate = document.getElementById('idatebox').value;
    localStorage.setItem("Preferred Interview Date",idate);


    let name = /^[A-Za-z\s]+$/;
    let emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    let phonepattern = /^[0-9]{10}$/;
    let positionpatern =  /^[A-Za-z\s]+$/;

    if(!name.test(firstname)){
        alert("Enter a Valid FirstName");
        return;
    }
   
    // if(name.test(lastname ==='')){
    //     alert("LastName is required");
    //     return;
    // }
    if(!name.test(lastname)){
        alert("Enter a Valid LastName");
        return;
    }
    if(emailpattern.test(email==='')){
        alert("Email is required");
        return;
    }
    if(!emailpattern.test(email)){
        alert("Enter a Valid Email");
        return;
    }
    if(phonepattern.test(phone==='')){
        alert("Phone Number is required");
        return;
    }
    if(!phonepattern.test(phone)){
        alert("Enter a Valid Phone Number");
        return;
    }
    if(!positionpatern.test(position)){
        alert("Enter a Valid Position");
        return;
    }


    alert("You have Successfully Applied for Full Stack Developer");
   
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(phone);
    console.log(position);
    console.log(city);
    console.log(idate);
    console.log(edate);
})

window.onload = reload; 

function reload(){
        document.getElementById("namebox").value = localStorage['Firstname'];
        if(document.getElementById("namebox").value == 'undefined'){
            document.getElementById("namebox").value = "";
        }
        document.getElementById("namebox1").value = localStorage['Lastname'];
        if(document.getElementById("namebox1").value == 'undefined'){
            document.getElementById("namebox1").value = ""; 
        }
        document.getElementById("emailbox").value = localStorage['Email'];
        if(document.getElementById("emailbox").value == 'undefined'){
            document.getElementById("emailbox").value = "";
        }
        document.getElementById("contactbox").value = localStorage['PhoneNumber'];
        if( document.getElementById("contactbox").value == 'undefined'){
            document.getElementById("contactbox").value = "";
        }
        document.getElementById("posbox").value = localStorage['AppliedPosition'];
        if(document.getElementById("posbox").value == 'undefined'){
            document.getElementById("posbox").value = "";
        }
}