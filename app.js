var student={
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup",keyUp);
}

function keyUp(event){
  calculateNumericOutput();
}

function calculateNumericOutput(){
  var n=document.getElementById('name').value;


  document.getElementById('output').innerText=n;
}
