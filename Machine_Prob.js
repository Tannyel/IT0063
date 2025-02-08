const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');

const colors = {
  monday: '#4B0082',
  tuesday: '#6A0DAD',
  wednesday: '#8F00FF',
  thursday: '#DA70D6',
  friday: '#FBAED2',
  saturday: '#FFA6C9',
  sunday: '#FFD1DC',
};

let activeBox = 1;

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const day = button.id;

    if (activeBox === 1) {
      box1.style.transition = 'transform 1s linear, opacity 1s linear';
      box1.style.transform = 'translateY(-200px)';
      box1.style.opacity = '0';

      box2.style.transition = 'transform 1s linear, background-color 1s linear';
      box2.style.transform = 'translateY(200px)';
      box2.style.backgroundColor = colors[day];
      box2.style.opacity = '1';

      activeBox = 2; 
    } else {
      box2.style.transition = 'transform 1s linear, opacity 1s linear';
      box2.style.transform = 'translateY(-200px)';
      box2.style.opacity = '0';

      box1.style.transition = 'transform 1s linear, background-color 1s linear';
      box1.style.transform = 'translateY(200px)';
      box1.style.backgroundColor = colors[day];
      box1.style.opacity = '1';

      activeBox = 1; 
    }
  });
});
