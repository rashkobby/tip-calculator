let billInput,peopleInput, percent, active, customTip, peopleError, tipAmount, totalAmount, resetBtn;




billInput = document.getElementById("yourBill");
peopleInput = document.getElementById("noOfPeople");
active = document.querySelector('.active')

percent = document.querySelectorAll('.tipPercent');
customTip = document.getElementById('customTip');
peopleError = document.querySelector('.error');
tipAmount - document.querySelector('#tipAmt');
totalAmount = document.querySelector('#total');
resetBtn = document.querySelector('.btn');



//////// FUNCTIONS
const result = function (input) {
    let bill = Number(document.getElementById("yourBill").value); // BILL
    let people = Number(document.getElementById("noOfPeople").value); // NUMBER OF PEOPLE

    let tip =`$${((bill * input) / people).toFixed(2)}`;
    let totalBill =`$${((bill + bill * input) / people).toFixed(2)}`

    
    document.getElementById('tipAmt').textContent = tip;
    document.getElementById('total').textContent = totalBill;
    

    return;
  };



percent.forEach((tipPercent)=>{
    tipPercent.addEventListener('click', ()=>{
        let btnPercentage = Number(tipPercent.textContent.replace("%", "")) / 100;
        active.classList.remove('active');
        customTip.value = '';

        tipPercent.classList.add('active');
        active = tipPercent;

        let bill = Number(document.getElementById("yourBill").value);
        let people = Number(document.getElementById("noOfPeople").value);

        if (bill <= 0 || !Number(bill)) {
            billInput.style.border = "2px solid rgb(255, 0, 0)";
            
            
            return;
          }
          billInput.style.border = "2px solid transparent";
        
        
        if (people <= 0 || !Number(people)) {
            peopleError.style.display = "block";
            peopleInput.style.border = "2px solid rgb(255, 0, 0)";
            return;
          }
          peopleInput.style.border = "2px solid transparent";
          peopleError.style.display = "none";
          

          
          
          
        result(btnPercentage);
          

    });
});

billInput.addEventListener('click',()=>{
    customTip.value ='';
    peopleInput.value = '';
    active.classList.remove('active');
})

peopleInput.addEventListener('click',()=>{
    customTip.value ='';
    active.classList.remove('active');
    
    
})

customTip.addEventListener("input", () => {
    let customValue = Number(document.getElementById("customTip").value) / 100;
    active.classList.remove('active');
    active = customTip;
    let bill = Number(document.getElementById("yourBill").value);
        let people = Number(document.getElementById("noOfPeople").value);

        if (bill <= 0 || !Number(bill)) {
            billInput.style.border = "2px solid rgb(255, 0, 0)";
            
            return;
          }
          billInput.style.border = "2px solid transparent";
        
        
        if (people <= 0 || !Number(people)) {
            peopleError.style.display = "block";
            peopleInput.style.border = "2px solid rgb(255, 0, 0)";
            return;
          }
          peopleInput.style.border = "2px solid transparent";
          peopleError.style.display = "none";
          
    
    result(customValue);
  });


  resetBtn.addEventListener('click', ()=>{
    customTip.value = '';
    peopleInput.value = '';
    billInput.value = '';
    document.getElementById('tipAmt').textContent = '$0.00';
    document.getElementById('total').textContent ='$0.00';
    active.classList.remove('active')
    const defaultactive = document.querySelector('.default');
    active = defaultactive;
    billInput.style.border = "none";
    peopleInput.style.border = "none";

  })