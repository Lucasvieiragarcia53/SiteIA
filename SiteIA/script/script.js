// ========================================
// FILTRO DAS VAGAS
// ========================================

const filtros = document.querySelectorAll(".filter");

const vagas = document.querySelectorAll("#jobTable tbody tr");


filtros.forEach(function (botao) {

    botao.addEventListener("click", function () {

        // Remove a classe active dos outros botões
        filtros.forEach(function (item) {
            item.classList.remove("active");
        });

        // Ativa o botão clicado
        botao.classList.add("active");


        const filtro = botao.dataset.filter;


        vagas.forEach(function (vaga) {

            const pais = vaga.dataset.country;

            const tipo = vaga.dataset.type;


            if (filtro === "todos") {

                vaga.style.display = "";

            }

            else if (filtro === "brasil") {

                vaga.style.display =
                    pais === "brasil" ? "" : "none";

            }

            else if (filtro === "internacional") {

                vaga.style.display =
                    pais === "internacional" ? "" : "none";

            }

            else if (filtro === "prompt") {

                vaga.style.display =
                    tipo === "prompt" ? "" : "none";

            }

            else if (filtro === "ia") {

                vaga.style.display =
                    tipo === "ia" ? "" : "none";

            }

        });

    });

});


// ========================================
// MENU: DESTACA A SEÇÃO ATUAL
// ========================================

const secoes = document.querySelectorAll("section");

const linksMenu = document.querySelectorAll(".menu a");


window.addEventListener("scroll", function () {

    let secaoAtual = "";

    secoes.forEach(function (secao) {

        const topo = secao.offsetTop - 150;

        const altura = secao.offsetHeight;

        if (
            window.scrollY >= topo &&
            window.scrollY < topo + altura
        ) {

            secaoAtual = secao.id;

        }

    });


    linksMenu.forEach(function (link) {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + secaoAtual) {

            link.style.color = "#8178ff";

        }

    });

});