//import emailjs from "https://cdn.jsdelivr.net/npm/emailjs-com@2.4.0/dist/email.min.js"

document.getElementById('form_email').addEventListener("submit",(event)=>{
    event.preventDefault()
    
    sendEmail()
})


const verifyInfo = () => {
    //verify if any field its null
    const name = document.getElementById("nameInput").value
    const phone =  document.getElementById("phoneInput").value
    const email =  document.getElementById("emailInput").value
    const msg =  document.getElementById("msgInput").value
    const text =  document.getElementById("msgInput").value
}

const sendEmail = () =>{
    emailjs.init("L2ovCTAi9n2GqgGAa");
    
    let email;
    let whats;
    if( document.getElementById("emailCheck").checked !==null ||
    document.getElementById("emailCheck").checked !== ""){
        document.getElementById("emailCheck").checked==true?
        email="Sim" : email="Não"
    }else{
        email = "Não"
    }

    if(document.getElementById("whatsCheck").checked !==null
    || document.getElementById("whatsCheck").checked !== ""){
        document.getElementById("whatsCheck").checked==true?
        whats="Sim": whats="Não"
    }else{
        whats = "Não"
    }

    let templateParams = {
        name: document.getElementById("nameInput").value,
        phone: document.getElementById("phoneInput").value,
        email: document.getElementById("emailInput").value,
        msg: document.getElementById("msgInput").value,
        resp_whats: whats,
        resp_email:email
      };
    
      emailjs.send('service_nf5k43j', 'template_ez357cf', templateParams)
        .then(function(response) {
          alert('Email enviado com Sucesso!', response.status, response.text);
        }, function(error) {
          alert('Falha ao enviar email...', error);
        });
}

