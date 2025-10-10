// INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);

var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },
  // Add default routes
  routes: [

    {
      path: '/login/',
      url: 'login.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) { },
        pageAfterIn: function (event, page) { },
        pageInit: function (event, page) { }
      }
    },

    {
      path: '/cadastro/',
      url: 'cadastro.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) { },
        pageAfterIn: function (event, page) { },
        pageInit: function (event, page) { }
      }
    },

    {
      path: '/index/',
      url: 'index.html',
      animate: false,
      options: {
        reloadCurrent: true,
        ignoreCache: true
      },
      on: {
        pageBeforeIn: function (event, page) {
          console.log("🔁 Preparando para recarregar a Index...");
        },
        pageInit: function (event, page) {
          console.log("✅ Página index carregada com todos os componentes.");

          // --- Swiper 1 (carros) ---
          window.swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: { delay: 3000 },
            breakpoints: {
              50: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            },
          });

          // --- Swiper 2 (categorias) ---
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
            },
          });

          // --- Recarrega scripts e dados ---
          $.getScript('js/index.js');
        }
      }
    },

    {
      path: '/menu/',
      url: 'menu.html',
      animate: false,
    },

    {
      path: '/serviços/',
      url: 'serviços.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          $("#menuPrincipal").show("fast");
        },
        pageInit: function (event, page) {
          $.getScript('js/games.js');
        }
      }
    },

    {
      path: '/sobre/',
      url: 'sobre.html',
      animate: false,
    },

    {
      path: '/sobre_o_trabalho/',
      url: 'sobre_o_trabalho.html',
      animate: false,
    },

    {
      path: '/contatos/',
      url: 'contatos.html',
      animate: false,
    },

  ],
});

// Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

// EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);

  // Define o item ativo do menu (se houver)
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) targetEl.classList.add('active');

  // --- OCULTAR MENU EM LOGIN E CADASTRO ---
  var path = route.route.path;
  if (path === '/login/' || path === '/cadastro/') {
    $('#menuPrincipal').hide(); // esconde o menu
  } else {
    $('#menuPrincipal').show(); // mostra o menu nas outras páginas
  }
});

// FUNÇÃO QUANDO O DISPOSITIVO ESTIVER PRONTO (CORDOVA)
function onDeviceReady() {
  var mainView = app.views.create('.view-main', { url: '/index/' });

  // Botão voltar físico do Android
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
