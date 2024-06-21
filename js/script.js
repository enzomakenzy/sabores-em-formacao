async function loadHTML(url, elementId) {
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      document.getElementById(elementId).innerHTML = html;
      return true;
  } catch (error) {
      console.error(`Failed to fetch ${url}:`, error);
      return false;
  }
}

async function initialize() {
  const headerLoaded = await loadHTML('cabecalho.html', 'cabecalho');
  await loadHTML('rodape.html', 'rodape');

  if (headerLoaded) {
      // Abrir o menu lateral
      document.getElementById('menu-icon').addEventListener('click', function() {
          document.getElementById('side-menu').style.width = '250px';
      });

      // Fechar o menu lateral
      document.getElementById('close-btn').addEventListener('click', function() {
          document.getElementById('side-menu').style.width = '0';
      });
  }
}

// Inicializar após o DOM estar carregado
document.addEventListener('DOMContentLoaded', initialize);