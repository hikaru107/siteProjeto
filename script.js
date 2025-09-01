/* Dropdown */
const btn = document.querySelector(".custom-dropdown-btn");
const menu = document.querySelector(".custom-dropdown-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("show");
  }
});

/* Receita */
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const cardId = params.get('id');
  const conteudoDiv = document.getElementById('conteudo-dinamico');

  if (!conteudoDiv) return;

  let html = '';

  console.log('cardId:', cardId);

  switch (cardId) {
    case 'card1':
      html = `
        <article class="receita">
        </article>
      `;
      break;

    case 'card2':
      html = `
        <article class="receita">
          <img class="receita-capa" src="https://www.receiteria.com.br/wp-content/uploads/almondegas-de-carne-com-aveia.jpeg" alt="Almôndegas de carne com aveia">
          <h2>Almôndegas de carne com aveia</h2>
          <p class="meta">4 porções • 25 min</p>
          <section class="ingredientes">
            <h3>Ingredientes</h3>
            <ul>
              <li>3/4 de xícara de chá de aveia em flocos finos (75 gramas)</li>
              <li>300 gramas de patinho moído (ou outra carne de sua preferência)</li>
              <li>2 dentes de alho amassados ou batidos</li>
              <li>1 clara de ovo médio</li>
              <li>1/2 colher de café de sal (ou a gosto)</li>
              <li>1/4 de colher de chá de pimenta-do-reino (ou a gosto)</li>
              <li>2 colheres de sopa de salsinha (ou cebolinha picada)</li>
              <li>1 colher de sopa de azeite</li>
              <li>1 cebola picada (150 gramas)</li>
            </ul>
            <h4>Ingredientes do molho</h4>
            <ul>
              <li>1 colher de sopa de azeite</li>
              <li>1 lata de tomate pelado (390 gramas)</li>
              <li>1/4 de xícara de chá de manjericão fresco (5 gramas)</li>
              <li>1/2 colher de café de sal (ou a gosto)</li>
              <li>1/4 de colher de chá de pimenta-do-reino (ou a gosto)</li>
              <li>1/2 xícara de chá de água (120 ml)</li>
            </ul>
          </section>
          <section class="modo">
            <h3>Modo de preparo</h3>
            <ol>
              <li>Em uma tigela grande, coloque a carne moída, metade do alho amassado, metade da cebola picada, o sal, a pimenta-do-reino, a cebolinha e a salsinha. Misture com uma colher.</li>
              <li>Acrescente a clara de ovo e continue misturando até ficar homogêneo.</li>
              <li>Junte a aveia e misture novamente. Com as mãos higienizadas, aperte a mistura; quando, ao apertar uma porção, os pedacinhos ficarem unidos, a massa está pronta.</li>
              <li>Para modelar as almôndegas, utilize uma colher de sopa para medir a porção. Não as deixe muito grandes nem muito pequenas. Aperte a porção com a palma da mão e modele em movimentos circulares até formar bolinhas firmes. Repita com toda a massa.</li>
              <li>Em uma frigideira antiaderente, em fogo alto, aqueça 1 colher de sopa de azeite. Posicione as almôndegas separadas e deixe-as selar por cerca de 3 minutos, virando delicadamente para dourarem por igual.</li>
              <li>Reserve todas as almôndegas em uma travessa.</li>
              <li>Na mesma panela, adicione 1 colher de sopa de azeite (se necessário), o restante do alho e da cebola e refogue por cerca de 1 minuto.</li>
              <li>Quando o alho e a cebola estiverem levemente dourados, acrescente o molho de tomate e um pouco de água. Tempere com sal e pimenta-do-reino.</li>
              <li>Quebre os tomates pelados com uma colher para que se incorporem ao molho. Deixe ferver e, quando começar a ferver, adicione as almôndegas e as folhas de manjericão.</li>
              <li>Cozinhe em fogo baixo por cerca de 4 a 5 minutos, até que as almôndegas estejam cozidas por dentro e o molho esteja bem apurado.</li>
              <li>Sirva as almôndegas em uma travessa e decore com mais folhas frescas de manjericão. Bom apetite!</li>
            </ol>
          </section>
        </article>
      `;
      break;

    case 'card3':
      html = `
        <article class="receita">
          <img class="receita-capa" src="https://www.receiteria.com.br/wp-content/uploads/strogonoff-de-frango-fit.jpg" alt="Strogonoff de frango fit">
          <h2>Strogonoff de frango fit</h2>
          <p class="meta">4 porções • 20 min</p>
          <section class="ingredientes">
            <h3>Ingredientes</h3>
            <ul>
              <li>500 gramas de peito ou filé de frango</li>
              <li>1 e 1/2 colher de chá de páprica (ou a gosto)</li>
              <li>1 colher de chá de sal (ou a gosto)</li>
              <li>1 colher de chá de ervas secas (ou a gosto)</li>
              <li>1 pote de creme de ricota light (180 gramas)</li>
              <li>1/4 de xícara de chá de molho de tomate zero (60 ml)</li>
            </ul>
          </section>
          <section class="modo">
            <h3>Modo de preparo</h3>
            <ol>
              <li>Reúna os ingredientes para fazer o strogonoff de frango fit, ideal para quem quer manter a dieta sem abrir mão de um bom prato;</li>
              <li>Em uma tábua, coloque o frango e corte-o em pedaços e transfira para uma tigela;</li>
              <li>Tempere com sal, ervas secas e páprica. Misture com uma colher para todos os pedaços pegarem o sabor dos temperos;</li>
              <li>Leve uma frigideira em fogo médio para alto e coloque os pedaços de frango. Mexa com a colher até dourar;</li>
              <li>Em seguida, coloque o creme de ricota light e mexa novamente;</li>
              <li>Adicione o molho de tomate zero e misture mais uma vez até o creme ficar com a clássica cor do strogonoff tradicional;</li>
              <li>Sirva o strogonoff de frango fit com arroz e batata palha. Bom apetite!</li>
            </ol>
          </section>
        </article>
      `;
      break;

    case 'card4':
      html = `
        <article class="receita">
          <img class="receita-capa" src="https://www.receiteria.com.br/wp-content/uploads/abobora-refogada-capa.jpeg" alt="Abobóra refogada">
          <h2>Abobóra refogada</h2>
          <p class="meta">5 porções • 25 min</p>
          <section class="ingredientes">
            <h3>Ingredientes</h3>
            <ul>
              <li>1 kg de abóbora madura</li>
              <li>Sal e pimenta-do-reino gosto</li>
              <li>3 colheres de sopa de óleo</li>
              <li>2 dentes de alho picado</li>
              <li>1 cebola picadinha</li>
              <li>Cheiro-verde picadinho a gosto</li>
            </ul>
          </section>
          <section class="modo">
            <h3>Modo de preparo</h3>
            <ol>
              <li>Reúna os ingredientes da abóbora refogada;</li>
              <li>Em cima de uma tábua, descasque a abóbora e corte-a em pedacinhos;</li>
              <li>Em uma panela no fogo médio, coloque o óleo, refogue a abóbora com sal, alho picado e cebola;</li>
              <li>Após uns 5 minutos, tampe a panela e deixe cozinhar em fogo baixo;</li>
              <li>Assim que a abóbora estiver cozida (aproximadamente 8 minutos), acrescente pimenta e acerte o sal;</li>
              <li>Desligue o fogo e salpique cheiro-verde por cima do refogado. Aproveite e bom apetite!</li>
          </section>
        </article>
      `;
      break;

    case 'card5':
      html = `
        <article class="receita">
          <img class="receita-capa" src="https://www.receiteria.com.br/wp-content/uploads/wrap-fit-integral-facil.jpeg" alt="Wrap fit integral">
          <h2>Wrap fit integral</h2>
          <p class="meta">3 unidades • 45 min</p>
          <section class="ingredientes">
            <h3>Ingredientes da massa</h3>
            <ul>
              <li>1/2 xícara de chá de farinha de trigo integral</li>
              <li>1 colher de sopa de azeite de oliva (ou óleo de coco)</li>
              <li>3 colheres de sopa de água</li>
              <li>Sal a gosto</li>
            </ul>
            <h3>Ingredientes do recheio</h3>
            <ul>
              <li>Folhas de alface crespa a gosto</li>
              <li>1 pepino japonês cortada em tiras</li>
              <li>1 cenoura cortada em tiras</li>
              <li>Cream cheese a gosto</li>
            </ul>
          </section>
          <section class="modo">
            <h3>Modo de preparo</h3>
            <ol>
              <li>Reúna todos os ingredientes wrap fit integral fácil;</li>
              <li>Em um recipiente, coloque a farinha, o azeite, o sal e a água. Misture bem até formar uma massinha;</li>
              <li>Depois, transfira para uma superfície lisa, polvilhada com farinha e sove a massa por 5 minutos;</li>
              <li>Separe a massa em 3 partes iguais;</li>
              <li>Abra cada parte com um rolo, deixando uma espessura bem fininha;</li>
              <li>Corte as massas no formato de discos. Você pode usar um bowl médio redondo para medir o tamanho e formato dos discos;</li>
              <li>Esquente uma frigideira e asse os discos de massa até levantar bolhas. Vire, e asse o outro lado, tomando cuidado para não ressecar a massa;</li>
              <li>Em seguida, recheie os wraps com folhas de alface, as tiras de pepino, as cenouras e o cream cheese;</li>
              <li>Por fim, enrole as massas delicadamente;</li>
              <li>Sirva essa delícia e aproveite!</li>
          </section>
        </article>
      `;
      break;

    case 'card6':
      html = `
        <article class="receita">
          <img class="receita-capa" src="https://www.receiteria.com.br/wp-content/uploads/brigadeiro-fit-com-3-ingredientes-rotated.jpeg" alt="Brigadeiro fit com 3 ingredientes">
          <h2>Brigadeiro fit com 3 ingredientes</h2>
          <p class="meta">16 unidades • 30 min</p>
          <section class="ingredientes">
            <h3>Ingredientes</h3>
            <ul>
              <li>2 bananas-nanicas bem maduras</li>
              <li>2 colheres de sopa mais o suficiente para decorar de cacau em pó (100% cacau)</li>
              <li>4 colheres de sopa de leite em pó</li>
            </ul>
          </section>
          <section class="modo">
            <h3>Modo de preparo</h3>
            <ol>
              <li>Reúna todos os ingredientes;</li>
              <li>Descasque as bananas e leve-as ao micro-ondas, em uma tigela, por cerca de 2 minutos (remova a água que formará durante o processo);</li>
              <li>Com um garfo, amasse todas as bananas, até virar uma pasta bem lisa;</li>
              <li>Acrescente as colheres de cacau e leite em pó e misture bem, até todos os ingredientes ficarem bem incorporados;</li>
              <li>Deixe o brigadeiro esfriar um pouco em temperatura ambiente e, em seguida, cubra a massa com um plástico filme. Leve para a geladeira por cerca de 20 minutos;</li>
              <li>Passado o tempo necessário, modele pequenas bolinhas da massa, usando as mãos levemente úmidas;</li>
              <li>Por fim, passe as bolinhas no cacau em pó para decorar;</li>
              <li>Agora é só servir. Bom apetite!</li>
          </section>
        </article>
      `;
      break;

    case 'card7':
      html = `
        <article class="receita">
          <img class="receita-capa" src="https://receitadaboa.com.br/wp-content/uploads/2024/07/iStock-499807145.jpg" alt="Bolo prestígio saudável">
          <h2>Bolo prestígio saudável</h2>
          <p class="meta">8 porções • 30 min</p>
          <section class="ingredientes">
            <h3>Ingredientes do bolo</h3>
            <ul>
              <li>1 ovo</li>
              <li>1 colher de sopa de óleo de sua preferência</li>
              <li>1 colher de sopa de leite desnatado</li>
              <li>2 colheres de sopa de açúcar mascavo ou adoçante</li>
              <li>2 colheres de sopa de farinha de aveia</li>
              <li>2 colheres de sopa de polvilho doce</li>
              <li>1 colher de sopa de cacau em pó</li>
              <li>1 colher de chá de cheia fermento químico em pó (fermento para bolo)</li>
            </ul>
            <h3>Ingredientes da cobertura</h3>
            <ul>
              <li>1/2 xícara de chá de leite desnatado</li>
              <li>1 colher de sopa de cacau em pó</li>
              <li>1 colher de sopa rasa amido de milho</li>
              <li>1 colher de sopa de açúcar mascavo</li>
              <li>Coco ralado para decorar</li>
            </ul>
          </section>
          <section class="modo">
            <h3>Modo de preparo</h3>
            <ol>
              <li>Em uma tigela, misture todos os ingredientes da massa.</li>
              <li>Depois que a massa estiver lisa e homogênea, transfira para uma forma pequena untada.</li>
              <li>Leve ao forno preaquecido a 180 °C por aproximadamente 20 minutos. Reserve.</li>
              <li>Para a cobertura, misture todos os ingredientes em uma panela.</li>
              <li>Leve ao fogo mexendo sempre até engrossar.</li>
              <li>Despeje a cobertura no bolo e finalize com coco ralado.</li>
              <li>E está pronto para servir! Aproveite.</li>
          </section>
        </article>
      `;
      break;




    case 'card8':
      html = `
        <article class="receita">
          <img class="receita-capa" src="https://www.receiteria.com.br/wp-content/uploads/bolinho-de-chuva-saudavel-1.jpeg" alt="Bolinho de chuva saudável">
          <h2>Bolinho de chuva saudável</h2>
          <p class="meta">12 Unidades • 35 min</p>
          
          <section class="ingredientes">
            <h3>Ingredientes</h3>
            <ul>
              <li>1 banana pequena e madura</li>
              <li>200 ml de leite de coco</li>
              <li>2 ovos</li>
              <li>1 xícara de chá de farinha de aveia</li>
              <li>1 xícara de chá de mix de farinha sem glúten (ou farinha de arroz)</li>
              <li>4 colheres de sopa de açúcar demerara</li>
              <li>1 colher de café de canela em pó</li>
              <li>1 colher de chá de fermento químico em pó (fermento para bolo)</li>
              <li>1 colher de sopa de açúcar demerara (para untar)</li>
              <li>Canela em pó a gosto (para untar)</li>
            </ul>
          </section>

          <section class="modo">
            <h3>Modo de preparo</h3>
            <ol>
              <li>Reúna todos os ingredientes.</li>
              <li>Em um recipiente, coloque a banana amassada e os ovos, misture bem até formar um purê.</li>
              <li>Acrescente o restante dos ingredientes (menos o fermento) e misture bem.</li>
              <li>Adicione o fermento e misture até incorporar.</li>
              <li>Despeje porções da massa em forminhas de mini cupcakes untadas e polvilhadas com uma mistura de açúcar demerara e canela em pó.</li>
              <li>Finalize polvilhando mais mistura por cima dos bolinhos e leve ao forno preaquecido a 200 °C por cerca de 20 a 25 minutos.</li>
              <li>Agora é só servir. Bom apetite!</li>
            </ol>
          </section>
        </article>
      `;
      break;



    case 'card9':
      html = `
        <article class="receita">
          <img class="receita-capa" src="https://www.receiteria.com.br/wp-content/uploads/bolinho-de-brocolis-saudavel-e1693229893561-730x919.jpg" alt="Bolinho de brócolis saudável">
          <h2>Bolinho de brócolis saudável</h2>
          <p class="meta">4 porções • 30 min</p>
          
          <section class="ingredientes">
            <h3>Ingredientes</h3>
            <ul>
              <li>1/2 brócolis cozido e picado</li>
              <li>1 batata cozida e amassada</li>
              <li>1 ovo</li>
              <li>2 colheres de sopa de farelo de aveia</li>
              <li>Sal a gosto</li>
              <li>Azeite para fritar</li>
            </ul>
          </section>

          <section class="modo">
            <h3>Modo de preparo</h3>
            <ol>
              <li>Em uma tigela, misture o brócolis e a batata, mexendo bem até formar uma massa uniforme.</li>
              <li>Junte o ovo, o farelo de aveia e o sal. Misture novamente para incorporar.</li>
              <li>Aqueça uma frigideira com um pouco de azeite e, usando uma colher, faça bolinhas com a massa e coloque-as para fritar.</li>
              <li>Quando dourarem de um lado, vire os bolinhos para fritarem do outro lado.</li>
              <li>Agora é só servir! Bom apetite.</li>
            </ol>
          </section>
        </article>
      `;
      break;

    default:
      html = '<p>Conteúdo não encontrado. Por favor, volte para a página inicial.</p>';
      break;
  }

  // Insere o HTML gerado dentro do contêiner da página de receita
  conteudoDiv.innerHTML = html;
});
