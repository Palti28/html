window.onload = function () {

    const previousBtn = document.getElementById('previousBtn');
    const nextBtn = document.getElementById('nextButton');
    const finishBtn = document.getElementById('finishBtn');
    const content = document.getElementById('content');
    const bullets = [...document.querySelectorAll('.bullet')];

    const MAX_STEPS = 4;
    var currentStep = 1;


    previousBtn.disabled = true
    finishBtn.style.visibility = "hidden"
    nextBtn.addEventListener('click', () => {
        bullets[currentStep - 1].classList.add('completed');
        currentStep += 1;
        previousBtn.disabled = false;
    
        if (currentStep === MAX_STEPS) {
            finishBtn.style.visibility = "visible"
            nextBtn.disabled = true;
        } else {
            finishBtn.style.visibility = "hidden"
        }
        
        content.innerText = `Step Number ${currentStep}`;
    });

    //previous button action
    previousBtn.addEventListener('click', () => {
        bullets[currentStep - 2].classList.remove('completed');
        bullets[currentStep - 1].classList.remove('finished');
        currentStep -= 1;
        nextBtn.disabled = false;

        if (currentStep === 1) {
            previousBtn.disabled = true;
        }
        if (currentStep !== MAX_STEPS) {
            finishBtn.style.visibility = "hidden"
        }
        content.innerText = `Step Number ${currentStep}`;
    });

    //finish button action
    finishBtn.addEventListener('click', () => {
        bullets[currentStep - 1].classList.add('finished');
        
        // window.alert('Okay')
        //location.reload()
    });


}
