
// Abrir o menu lateral
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('side-menu').style.width = '250px';
});

// Fechar o menu lateral
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('side-menu').style.width = '0';
});

// Inicializar após o DOM estar carregado
document.addEventListener('DOMContentLoaded', initialize);