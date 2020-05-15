const regex ={
    MobileNo : /^[\d]{10}$/ ,
    email : /^[a-z \d]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/,
    password: /^[\w@\.-]{8,20}$/ ,
    //Re-enterPassword: // 
}

function validate(e,regex){
    if(e.target.parentElement.className=="Re-enterPassword"){
        const inputpPass = document.querySelector('.password input')
        if(e.target.value===inputpPass.value){
            e.target.parentElement.id= "NoError"
        }else{
            e.target.parentElement.id ="Error"
        }
    }

    else{
        if (regex.test(e.target.value)){
            e.target.parentElement.id= "NoError"
            
        }
        else{
            e.target.parentElement.id ="Error"
        }
    }
}

const inputs = document.querySelectorAll("input")
inputs.forEach( (input) =>{
    input.addEventListener('input', (e) => {
      let identity= e.target.parentElement.className
      validate(e,regex[identity])
})
})