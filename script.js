const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = document.documentElement.scrollTop;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id"),
              sectionsClass = document.querySelector(".navbar a[href*=" + sectionId + "]");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active");
        } else if(sectionsClass.classList.contains("active")) {
            sectionsClass.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", scrollActive);

let menu = document.querySelector("#menu-icon"),
navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
    console.log("done")
}

window.onscroll = () => {
    navbar.classList.remove("active");
}

darkmode.onclick = () => {
    if(darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("dark");
    } else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("dark");
    }
}

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 10,
    reset: false
})

sr.reveal(`.home-content, .heading, .skills-box, .project-card, .form-container, 
    .footer-social, .edu-container img`);
sr.reveal(`.home-img`, {origin: "bottom"});
sr.reveal(`.left`, {origin: "left"});
sr.reveal(`.right`, {origin: "right"});

let fullName = document.getElementById("name"),
    email = document.getElementById("email_id"),
    msg = document.getElementById("message");

let formContainer = document.querySelector(".form-container");
let submitBtn = document.querySelector(".contact-button");
let formMsg = document.querySelector(".form-msg");

submitBtn.addEventListener("click", sendMail);

function sendMail() {
    if(fullName.value === "" || email.value === "" || msg.value === "") {
        formContainer.classList.add("error");
        formMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>&nbsp;All fields are mandatory!`;
    } else {
        if(formContainer.classList.contains("error")) {
            formContainer.classList.remove("error");
        }
        formContainer.classList.add("success");
        formMsg.innerText = "Sent Succesfully!";

        let params = {
            from_name: fullName.value,
            email_id: email.value,
            message: msg.value
        }
    
        emailjs.send("null", "null", params);
    }
}

