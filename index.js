function UpdateYear(){
    const now = new Date();
    const year = now.getFullYear();
    document.getElementById("currentYear").textContent = year;
}

function SocialsClick(social){
    const button = document.getElementById(social);

        if(social === "instagram" && button.onclick){
            window.location.href = "https://www.instagram.com/ryan.tng";
        }else if(social === "linkedin" && button.onclick){
            window.location.href = "https://www.linkedin.com/in/ryan-tang-ab55192b1/";
        }else if(social === "github" && button.onclick){
            window.location.href = "https://www.github.com/ryantng05";
        }
    
}

UpdateYear();