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
        pageBeforeIn: function (event, page) {
          // Fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // Fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // Fazer algo quando a página for inicializada
          app.views.main.router.navigate('/index/');
          $.getScript('js/index.js');

          var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
              delay: 3000,
            },
            breakpoints: {
              50: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            },
          });

          var swiper2 = new Swiper(".categorias", {
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
              50: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 7,
                spaceBetween: 10
              },
              992: {
                slidesPerView: 9,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 13,
                spaceBetween: 10
              }
            },
            autoplay: {
              delay: 3000,
            },
            loop: true,
          });
        },
        pageBeforeRemove: function (event, page) {
          // Fazer algo antes da página ser removida do DOM
        },
      }
    },
    {
      
      path: '/cadastro/',
      url: 'cadastro.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // Fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // Fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // Fazer algo quando a página for inicializada
          app.views.main.router.navigate('/index/');
          $.getScript('js/index.js');

          var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
              delay: 3000,
            },
            breakpoints: {
              50: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            },
          });

          var swiper2 = new Swiper(".categorias", {
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
              50: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 7,
                spaceBetween: 10
              },
              992: {
                slidesPerView: 9,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 13,
                spaceBetween: 10
              }
            },
            autoplay: {
              delay: 3000,
            },
            loop: true,
          });
        },
        pageBeforeRemove: function (event, page) {
          // Fazer algo antes da página ser removida do DOM
        },
      }
    },
    {

      path: '/index/',
      url: 'index.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // Fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // Fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // Fazer algo quando a página for inicializada
          app.views.main.router.navigate('/index/');
          $.getScript('js/index.js');

          var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
              delay: 3000,
            },
            breakpoints: {
              50: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            },
          });

          var swiper2 = new Swiper(".categorias", {
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
              50: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 7,
                spaceBetween: 10
              },
              992: {
                slidesPerView: 9,
                spaceBetween: 10
              },
              1200: {
                slidesPerView: 13,
                spaceBetween: 10
              }
            },
            autoplay: {
              delay: 3000,
            },
            loop: true,
          });
        },
        pageBeforeRemove: function (event, page) {
          // Fazer algo antes da página ser removida do DOM
        },
      }
    },
    {
      path: '/link2/',
      url: 'link2.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // Fazer algo antes da página ser exibida
        },
        pageAfterIn: function (event, page) {
          // Fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // Fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
          // Fazer algo antes da página ser removida do DOM
        },
      }
    },
    {
      path: '/games/',
      url: 'games.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // Fazer algo antes da página ser exibida
          $("#menuPrincipal").show("fast");
        },
        pageAfterIn: function (event, page) {
          // Fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // Fazer algo quando a página for inicializada

          $.getScript('js/games.js');
        },
        pageBeforeRemove: function (event, page) {
          // Fazer algo antes da página ser removida do DOM
        },
      }
    },


    {
      path: '/sobre/',
      url: 'sobre.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // Fazer algo antes da página ser exibida

        },
        pageAfterIn: function (event, page) {
          // Fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // Fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
          // Fazer algo antes da página ser removida do DOM
        },
      }
    },

    {
      path: '/sobre_o_trabalho',
      url: 'sobre_o_trabalho.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // Fazer algo antes da página ser exibida

        },
        pageAfterIn: function (event, page) {
          // Fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // Fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
          // Fazer algo antes da página ser removida do DOM
        },
      }
    },

    {
      path: '/contatos/',
      url: 'contatos.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // Fazer algo antes da página ser exibida

        },
        pageAfterIn: function (event, page) {
          // Fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          // Fazer algo quando a página for inicializada
        },
        pageBeforeRemove: function (event, page) {
          // Fazer algo antes da página ser removida do DOM
        },
      }
    },

  ],
  // ... other parameters
});



// Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

// EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});

function onDeviceReady() {
  // Quando estiver rodando no celular
  var mainView = app.views.create('.view-main', { url: '/index/' }); // Navega para a página inicial

  // COMANDO PARA "OUVIR" O BOTÃO VOLTAR NATIVO DO ANDROID 
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

