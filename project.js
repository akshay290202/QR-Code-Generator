
const apival = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let input = document.getElementById("inputtext");
let imgBox = document.getElementById("imgbox");
let imgId = document.getElementById("imgid");

function generateqr() {
    if (input.value.length > 0) {
        imgId.src = apival + input.value;
        imgBox.classList.add("show-img");
    }
    else{
        input.classList.add("error");
        setTimeout(() => {
            imgBox.classList.remove("error");
        },1000);
    }
};
