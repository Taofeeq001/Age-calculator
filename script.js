const form = document.querySelector("form"),
day = document.querySelector(".dayInp"),
month = document.querySelector(".monthInp"),
year = document.querySelector(".yearInp"),
show = document.querySelector(".show"),
show2 = document.querySelector(".showMonth"),
head = document.querySelector('.head'),
head2 = document.querySelector(".head2"),
head3 = document.querySelector(".head3"),
show3 = document.querySelector(".showYear"),
great = document.querySelector('.great'),
greater = document.querySelector('.greater'),
greatest = document.querySelector('.greatest')

document.querySelector(".odun").innerHTML = "-- Years";
document.querySelector(".osu").innerHTML = "-- Months";
document.querySelector(".ojo").innerHTML = "-- Days";
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let date = new Date().getFullYear();
    let odun = date - year.value;
    document.querySelector(".odun").innerHTML = odun + " Years";
    
    let osu = 12 - month.value;
    document.querySelector(".osu").innerHTML = osu + " Months";
    
    let ojo = 31 - day.value;
    document.querySelector(".ojo").innerHTML = ojo + "Days";



    if(day.value===""){
        show.style.display = "block"
        day.style.border = "2px solid red"
        head.style.color = "red"
    }
    else{
        show.style.display = "none"
        day.style.border = "2px solid green"
        head.style.color = "green";
    }
    if(month.value===""){
        show2.style.display = "block"
        month.style.border = "2px solid red"
        head2.style.color = "red"
        
    }
    else {
        show2.style.display = 'none'
        month.style.border = "2px solid green"
        head2.style.color = "green";
    }
    if(year.value===""){
        show3.style.display = "block"
        year.style.border = "2px solid red"
        head3.style.color = "red"

    }
    else {
        show3.style.display = 'none'
        year.style.border = "2px solid green"
        head3.style.color = "green";
    }
    if(day.value > 31){
        great.style.display = "block"
        day.style.border = "2px solid red"
        head.style.color = "red"
    }
    if(month.value > 12){
        greater.style.display = "block"
        month.style.border = "2px solid red"
        head2.style.color = "red"
    }
    if(year.value > 2023){
        greatest.style.display = "block"
        year.style.border = "2px solid red"
        head3.style.color = "red"
    }
})



// function submit(){
//     if(day.value ===""){
//         show.style.display = "block"
//     }
// }
// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     checkError();
// })
// function checkError(){
//     if(day.value ===""){
//         errorHandling("Must be a valid day", day)
//     }
// }

// function errorHandling(text, input){
//     const parentElement = input.parentElement;
//     const message = parentElement.querySelector(".show");
//     message.innerText = text;
//     message.classList.add("active")
// }

