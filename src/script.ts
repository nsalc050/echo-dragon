 const inputfield = document.getElementById("amount") as HTMLInputElement;
const button = document.getElementById("generate") as HTMLButtonElement;
 const output = document.getElementsByTagName("output")[0] as HTMLOutputElement;

//assign event types to our event listeners
button.addEventListener("click",(e:MouseEvent) => {
    console.log(e.button);
    buildboxes();
});

inputfield.addEventListener("keydown",(e:KeyboardEvent) => {
   if(e.key === "Enter")
   {
    buildboxes();
   }
});

function buildboxes(){

}
