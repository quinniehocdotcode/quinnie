const loader = document.querySelector('.loader');

/// select input
const submitBtn = document.querySelector('.submit-btn');
const Name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notifications');


submitBtn.addEventListener('click',()=>{
    // if(Name.value.length < 3){
    //     showAlert('name must be 3 letters long');
    // }
    // else if(!email.value.length)
    //     showAlert("enter your email!")
    // else if(password.value.length < 8)
    //     showAlert("password should be letters long")
    // else if(!number.value.length)
    //     showAlert('enter your phone number')
    // else if(!Number(number.value) || number.value.length <10)
    //     showAlert("invalid number,please enter valid one");
    // else if(!tac.checked){
    //     showAlert("you need to accept terms and conditions");
    // }
    // else {
        loader.style.display='block';
        ///submit form
        sendData('/signup',{
            name:Name.value,
            email:email.value,
            password:password.value,
            number:number.value,
            tac:tac.checked,
            notification: notification.checked,
            seller:false
        })
   // }
})

/// sent data function
const sendData = (path,data)=>{
    fetch(path,{
        method:'post',
        headers:new Headers({'Content-Type':'application/json'}),
        body:JSON.stringify(data)
    }).then((res)=>res.json())
    .then(response=>{
        processData(response);
    })
}
const processData = (data)=>{
    loader.style.display=null;
    if(data.alert){
        showAlert(data.alert);
    }
}
/// alter function
const showAlert = (msg)=>{
    let alertBox  = document.querySelector('.alter-box');
    let alertMsg = document.querySelector('.alter-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(()=>{
        alertBox.classList.remove('show');
    },3000)
}