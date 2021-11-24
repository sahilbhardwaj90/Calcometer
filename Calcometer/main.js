let screen = document.getElementById("result");
buttons = document.querySelectorAll(".rest input");

for (btn of buttons){
    btn.addEventListener("click" , (e)=>{
        buttonValue = e.target.value;
        console.log(`Button Value is ${buttonValue}`);
        // screen.value = screen.value + buttonValue;
        if(buttonValue == "x"){
            buttonValue = "*";
            screen.value+= buttonValue;
            screen.value = screen.value;
        }
        else if(buttonValue == "C"){
            screen.value = "";
            screen.value = screen.value;
        }
        else if(buttonValue == "="){
            screen.value = eval(screen.value);
        }else{
            screen.value += buttonValue;
            screen.value = screen.value;
        }
    })
}