const ratings = document.querySelectorAll('.rate');
let selectRating = null;
const submitBtn = document.getElementById('submit-btn');
const ratingState = document.querySelector('.rating-state');
const thankState = document.querySelector('.thank-state');
let rateOutput = document.querySelector('.output');

ratingState.style.display = 'block';
thankState.style.display = 'none';


ratings.forEach(rate => {
    rate.addEventListener('click', () => {
        ratings.forEach(r => r.classList.remove('selected'));
        rate.classList.add('selected');
        selectRating = rate.textContent;
        console.log(selectRating);
    });
});

submitBtn.addEventListener('click', () => {
    if (selectRating) {
        setTimeout(() => {
            thankState.style.display = 'block';
            rateOutput.textContent = selectRating;
        }, 1000);
        ratingState.style.display = 'none';
        
    } else {
        alert('Please select a rating.');
        ratingState.style.display = 'block';
        thankState.style.display = 'none';
    }
});