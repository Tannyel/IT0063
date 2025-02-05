const box = document.querySelector('.box');

const colors = {
  monday: '#4B0082',
  tuesday: '#6A0DAD',
  wednesday: '#8F00FF',
  thursday: '#DA70D6',
  friday: '#FBAED2',
  saturday: '#FFA6C9',
  sunday: '#FFD1DC',
};

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const day = button.id;

    box.style.transition = 'none';
    box.style.transform = 'translateY(0)';
    box.style.backgroundColor = 'transparent';

    setTimeout(() => {
      box.style.transition = 'transform 1s linear, background-color 1s linear';
      box.style.transform = 'translateY(200px)';
      box.style.backgroundColor = colors[day];
    }, 50);
  });
});
