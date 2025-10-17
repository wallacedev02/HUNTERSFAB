// ===============================
// INICIALIZAÇÃO DO FRAMEWORK7
// ===============================
document.addEventListener('deviceready', onDeviceReady, false);

var app = new Framework7({
  el: '#app',
  name: 'My App',
  id: 'com.myapp.test',
  panel: { swipe: true },
  dialog: { buttonOk: 'Sim', buttonCancel: 'Cancelar' },
  cache: false, // <-- DESABILITA CACHE GLOBAL
  routes: [
    {
      path: '/index/',
      url: 'index.html',
      animate: false,
      options: { reloadCurrent: true, ignoreCache: true }, // força recarregamento
      on: {
        pageBeforeIn: function () {
          console.log("🔁 Preparando para recarregar a Index do zero...");
        },
        pageInit: function () {
          console.log("✅ Página index carregada com todos os componentes.");
          initIndexPage();
        }
      }
    },
    {
      path: '/performace/',
      url: 'performace.html',
      animate: false,
      options: { reloadCurrent: true, ignoreCache: true },
      on: {
        pageInit: function () {
          console.log("✅ Página performace carregada do zero.");
          initPerformacePage();
        }
      }
    },
    { path: '/login/', url: 'login.html', animate: false, options: { reloadCurrent: true, ignoreCache: true } },
    { path: '/cadastro/', url: 'cadastro.html', animate: false, options: { reloadCurrent: true, ignoreCache: true } },
    { path: '/menu/', url: 'menu.html', animate: false, options: { reloadCurrent: true, ignoreCache: true } },
    { path: '/sobre/', url: 'sobre.html', animate: false, options: { reloadCurrent: true, ignoreCache: true } },
    { path: '/sobre_o_trabalho/', url: 'sobre_o_trabalho.html', animate: false, options: { reloadCurrent: true, ignoreCache: true } },
    { path: '/contatos/', url: 'contatos.html', animate: false, options: { reloadCurrent: true, ignoreCache: true } }
  ]
});

// ===============================
// CRIAÇÃO DA VIEW PRINCIPAL
// ===============================
var mainView = app.views.create('.view-main', { url: '/index/', reloadCurrent: true, ignoreCache: true });

// ===============================
// FUNÇÃO DE ROTEAMENTO GLOBAL
// ===============================
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log("Rota atual:", currentRoute);

  // Ativa item do menu
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) targetEl.classList.add('active');

  // Oculta menu em login e cadastro
  var path = route.route.path;
  if (path === '/login/' || path === '/cadastro/') {
    $('#menuPrincipal').hide();
  } else {
    $('#menuPrincipal').show();
  }
});

// ===============================
// FUNÇÃO QUANDO O DISPOSITIVO ESTÁ PRONTO (CORDOVA)
// ===============================
function onDeviceReady() {
  document.addEventListener("backbutton", function (e) {
    if (mainView.router.currentRoute.path === '/index/') {
      e.preventDefault();
      app.dialog.confirm('Deseja sair do aplicativo?', function () {
        navigator.app.exitApp();
      });
    } else {
      e.preventDefault();
      mainView.router.back({ force: true });
    }
  }, false);
}

// ===============================
// FUNÇÃO ESPECÍFICA PARA A PÁGINA INDEX
// ===============================
function initIndexPage() {
  window.swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: { delay: 3000 },
    breakpoints: {
      50: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    }
  });

  window.swiper2 = new Swiper(".categorias", {
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: { delay: 3000 },
    loop: true,
    breakpoints: {
      50: { slidesPerView: 4 },
      640: { slidesPerView: 7 },
      992: { slidesPerView: 9 },
      1200: { slidesPerView: 13 }
    }
  });

  $.getScript('js/index.js');
}

// ===============================
// FUNÇÃO ESPECÍFICA PARA A PÁGINA PERFORMACE
// ===============================
function initPerformacePage() {
  console.log("🔹 Scripts e personalizações da página performace carregados.");

  var selects = document.querySelectorAll('.page[data-name="performace"] select');
  selects.forEach(function (sel) {
    sel.style.color = '#fff';
    sel.style.background = 'rgba(255,255,255,0.1)';
  });
}
