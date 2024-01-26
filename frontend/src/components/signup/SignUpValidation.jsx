export default function SignUpValidation(values) {
    
    let error = {}
    
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    
    if(values.name === "") {
        error.name = "Name should not be empty"
    } else if(values.name.length > 61){
        error.name="Invalid Name: Name should be less than or equal to 60 characters!"
    } else {
        error.name=""
    }
    
    if(isNaN(values.age)){
        error.age="Invalid Age: Age should be a numeric value only!";
    } else if (parseInt(values.age, 10) > 100){
        error.age= "Invalid Age: Age should be a less than 100!";
    } else {
        error.age=""
    }

    if(values.email === "") {
        error.email = "Email should not be empty"
    } else if(!email_pattern.test(values.email)) {
        console.log(email_pattern.test(values.email))
        error.email = "Email Didn't match"
    } else {
        error.email=""
    }
    
    if(values.password === "") {
        error.password = "Password should not be empty"
    } else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }
    return error;
}