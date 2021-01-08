const container = document.getElementById('container');
window.onmousemove = function(event){
    const x = - event.clientX/5,
          y = - event.clientY/5;

    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
};