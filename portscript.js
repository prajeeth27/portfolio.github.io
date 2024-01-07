let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters=word.textContent.split(" ");
    word.textContent="";
    letters.forEach((letter)=>{
     let span=document.createElement("span");
     span.textContent=letter;
     span.className="letter";
     word.append(span);
    });
});
let currentindex=0;
let maxindex=words.length-1;
words[currentindex].style.opacity="1";
let changeText=()=>{
    let currentword=words[currentindex];
    let nextword=currentindex === maxindex ? words[0] : words[currentindex+1];
    Array.from(currentword.children).forEach((letter, i) =>{
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextword.style.opacity="1";
    Array.from(nextword.children).forEach((letter, i) =>{
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentindex=currentindex === maxindex ? 0 : currentindex + 1;

    };
    changeText();
    setInterval(changeText,3000)
// ... (Your existing JavaScript code) ...

// Add skill bars for Java Programming, Data Structures, and Communication
document.addEventListener('DOMContentLoaded', function () {
    populateSkillBar('java', 80); // Adjust the percentage as needed
    populateSkillBar('data-structures', 85); // Adjust the percentage as needed
    populateSkillBar('communication', 75); // Adjust the percentage as needed
});

// Function to populate skill bars
function populateSkillBar(skill, percentage) {
    const skillBar = document.querySelector(`.${skill}`);
    const width = (percentage > 100) ? 100 : (percentage < 0) ? 0 : percentage;
    skillBar.style.width = `${width}%`;
}

// ... (Your existing JavaScript code) ...
// Add this code to handle form submission using JavaScript
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
   
    alert("Form submitted!");
});







