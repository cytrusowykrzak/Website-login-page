const signup=document.querySelector(".signuptext");
const login=document.querySelector(".logintext");
const loginpage=document.querySelector(".loginpage");
const registerpage=document.querySelector(".registerpage");
const email=document.querySelector("email");
const password=document.querySelector("password");
const submit=document.querySelector("submit");
const form=document.querySelector("form");

//
const hidder = ()=>{

    loginpage.style.display="none";
    registerpage.style.display='';

};
const showpage=()=>{
    loginpage.style.display='';
    registerpage.style.display="none";
}

/*form.addEventListener('submit',(e)=>{
    let messages=[]
    if(email.value===''|| email.value===null)
    {
        messages.push('name is required')
}
    if(password.value.lenght<=6){
        messages.push('Password must be longer than 6 characters')
    }

    if(messages.length>0){
        e.preventDefault()
    }
})*/



signup.addEventListener("click",hidder);
login.addEventListener("click",showpage);


