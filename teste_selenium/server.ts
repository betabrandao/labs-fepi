import { Builder, By, Key, until } from 'selenium-webdriver';
import 'chromedriver';


// Configurar o driver do Selenium para o navegador Chrome
// var driver = await new Builder().forBrowser('chrome').build();

// Configurar o WebDriver para usar o Selenium Grid,
// disponivel no docker-composer no repositorio

var driver = await new Builder()
  .usingServer('http://localhost:4444/wd/hub') // URL do hub do Selenium Grid
  .forBrowser('chrome')
  .build();

//variavem do site
var urlTeste = "https://robertabrandao.com.br";

async function executarTeste(seleniumDriver: object) {
  
  let driver = seleniumDriver;

  try {
    // 1. Abrir o site robertabrandao.com.br
    await driver.get(urlTeste);

    // 2. Esperar até que uma determinada condição seja atendida (por exemplo, a página carregar)
    await driver.wait(until.titleIs('Roberta Brandão'), 10000);
    
    // 3. Encontrar um elemento na página (por exemplo, o camino de menu)
    
      //validar menus:
      validarLinkPorTexto('Posts', 'posts');
      validarLinkPorTexto('Posts', 'posts');
      validarLinkPorTexto('Posts', 'posts');

    // 4. Verificar se o título da postagem está correto.
    // 5. Verificar se o conteúdo da postagem está sendo exibido corretamente.
    // 6. Envio de comentários em postagens.
    // 7. Navegação entre páginas.
    // 8. Visualização de postagens.
    // 9. Validação de links e botões.
    // 10. Responsividade do site em diferentes dispositivos.



    // Exemplo de saída de informações
    console.log('Teste executado com sucesso!');
  } catch (error) {
    // Lidar com erros, registrar informações de falhas, tirar capturas de tela, etc.
    console.error('O teste falhou:', error);
  } finally {
    // Fechar o navegador ao final do teste
    await driver.quit();
  }
}


async function validarLinkPorTexto(textoDoLink: string, urlEsperada: string, seleniumDriver: object) {
  // Configurar o driver do Selenium para o navegador Chrome
  // let driver = await new Builder().forBrowser('chrome').build();

  let driver = seleniumDriver;

  try {
    // Abrir o site robertabrandao.com.br
    await driver.get(urlTeste);

    // Encontrar o link com o texto específico
    let link = await driver.findElement(By.linkText(urlTeste + '/' + textoDoLink));

    // Verificar se o link está presente na página
    if (link) {
      // Obter a URL do link
      let href = await link.getAttribute('href');

      // Verificar se a URL do link corresponde à URL esperada
      if (href === urlEsperada) {
        console.log(`O link "${textoDoLink}" está presente e redireciona para a URL correta.`);
      } else {
        console.log(`O link "${textoDoLink}" está presente, mas redireciona para uma URL diferente.`);
      }
    } else {
      console.log(`O link "${textoDoLink}" não foi encontrado na página.`);
    }
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  } finally {
    // Fechar o navegador ao final do teste
    await driver.quit();
  }
}


// Chamar a função para executar o teste
executarTeste(driver);
