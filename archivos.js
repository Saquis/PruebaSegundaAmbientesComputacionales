
document.addEventListener('DOMContentLoaded', function() {
    
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        this.style.backgroundColor = '#2c3e50';
        setTimeout(() => {
            this.style.backgroundColor = '#35424a';
        }, 500);
    });

    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.fontWeight = 'bold';
            this.style.fontSize = '1.1em';
        });
        
        link.addEventListener('mouseout', function() {
            this.style.fontWeight = 'normal';
            this.style.fontSize = '1em';
        });
    });

    
    const mainContent = document.querySelector('.main-content');
    mainContent.addEventListener('click', function() {
        console.log('Has hecho clic en el área de contenido principal');
    });

    
    const footer = document.querySelector('footer p');
    const originalText = footer.textContent;
    footer.textContent = originalText.replace('2023', new Date().getFullYear());

    
    const alertButton = document.createElement('button');
    alertButton.textContent = 'Haz clic aquí';
    alertButton.style.margin = '20px auto';
    alertButton.style.display = 'block';
    alertButton.style.padding = '10px 20px';
    alertButton.style.backgroundColor = '#e8491d';
    alertButton.style.color = 'white';
    alertButton.style.border = 'none';
    alertButton.style.borderRadius = '5px';
    alertButton.style.cursor = 'pointer';
    
    alertButton.addEventListener('click', function() {
        alert('¡Botón clickeado! Gracias por interactuar con esta página.');
    });

    mainContent.appendChild(alertButton);
});