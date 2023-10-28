var student={
    "abhi@gmail.com":{
        "firstname":"abhishek",
        "lastname":"varma",
        "mobile":"9012346321",
        "age":25,
        "city":"Delhi",
    },
    "babu@gmail.com":{
        "firstname":"Babu",
        "lastname":"annam",
        "mobile":"9012456789",
        "age":20,
        "city":"Hyderabad",
    },
    "chaitra@gmail.com":{
        "firstname":"chaitra",
        "lastname":"kumar",
        "mobile":"9012456987",
        "age":22,
        "city":"Banglore",
    },
    "deepa@gmail.com":{
        "firstname":"Deepa",
        "lastname":"varma",
        "mobile":"9012789654",
        "age":27,
        "city":"Chennai",
    },
    "vamsi@gmail.com":{
        "firstname":"vamsi",
        "lastname":"varma",
        "mobile":"9014589654",
        "age":28,
        "city":"Pune",
    },
    "uday@gmail.com":{
        "firstname":"uday",
        "lastname":"giri",
        "mobile":"9045589654",
        "age":21,
        "city":"Nellore",
    },
    "bharg@gmail.com":{
        "firstname":"aditya",
        "lastname":"bhrag",
        "mobile":"9745589654",
        "age":22,
        "city":"Vizag",
    },
    "bhteja@gmail.com":{
        "firstname":"teja",
        "lastname":"varma",
        "mobile":"9785589654",
        "age":20,
        "city":"Bezawada",
    },
    "vamsik@gmail.com":{
        "firstname":"udaygiri",
        "lastname":"vamsi",
        "mobile":"9788989654",
        "age":27,
        "city":"wayanad",
    },
    "krishnaank@gmail.com":{
        "firstname":"shankar",
        "lastname":"krishna",
        "mobile":"9788989654",
        "age":29,
        "city":"Kollam",
    },
    "harreddy@gmail.com":{
        "firstname":"harish",
        "lastname":"reddy",
        "mobile":"9788989654",
        "age":23,
        "city":"Bellary",
    },
    "sairamkrishna@gmail.com":{
        "firstname":"sai",
        "lastname":"ramakrishna",
        "mobile":"7075251318",
        "age":21,
        "city":"Kakinada",
    },
    "pavanramesh@gmail.com":{
        "firstname":"pavan",
        "lastname":"ramesh",
        "mobile":"7075251318",
        "age":22,
        "city":"Kochi",
    },
    "suryapavan@gmail.com":{
        "firstname":"surya",
        "lastname":"pavan",
        "mobile":"7085251318",
        "age":28,
        "city":"Vizag",
    },
    "astabharg@gmail.com":{
        "firstname":"aditya",
        "lastname":"bharag",
        "mobile":"982220122",
        "age":29,
        "city":"Madurai",
    },
    "pavankalyan@gmail.com":{
        "firstname":"pavan",
        "lastname":"kalyan",
        "mobile":"9090898978",
        "age":30,
        "city":"Amaravathi",
    },
    "vinaytelukuntla@gmail.com":{
        "firstname":"vinay",
        "lastname":"telikuntla",
        "mobile":"9090898978",
        "age":22,
        "city":"Madras",
    },
    "jettivishnu@gmail.com":{
        "firstname":"jetti",
        "lastname":"vishnu",
        "mobile":"7305257823",
        "age":26,
        "city":"Pondicherry",
    },
    "sandeepkona@gmail.com":{
        "firstname":"sandeep",
        "lastname":"kona",
        "mobile":"9090878978",
        "age":29,
        "city":"Tenali",
    },
    "kondaharsha@gmail.com":{
        "firstname":"konda",
        "lastname":"harsha",
        "mobile":"9090877578",
        "age":20,
        "city":"Kanchipuram",
    },

    
}

function func(){
    info1=localStorage.getItem("student");
    if(info1==null){

        localStorage.setItem("student",JSON.stringify(student));
    }
    var students=JSON.parse(info1);
var head="<div class='table'><div class='header'><span class='column'>Full Name</span><span class='column'>Age</span><span class='column'>Mobile</span><span class='column'>Email</span><span class='column'>City</span></div>";

var stds="";
for(var std in students)
{
    stds+=`<div class='table1'>
        <span class='column'>${students[std].firstname} ${students[std].lastname}</span>
        <span class='column'>${students[std].age}</span>
        <span class='column'>${students[std].mobile}</span>
        <span class='column'>${std}</span>
        <span class='column'>${students[std].city}</span></div>`

document.getElementById("table").innerHTML=head+stds+"</div>";
    }

}