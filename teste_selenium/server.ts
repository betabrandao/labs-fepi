import { Builder, By, Key, Capabilities, until } from 'selenium-webdriver';


// Configurar o driver do Selenium para o navegador Chrome
// var driver = await new Builder().forBrowser('chrome').build();

// Configurar o WebDriver para usar o Selenium Grid,
// disponivel no docker-composer no repositorio

//variavem do site
  const urlTeste = "https://robertabrandao.com.br";

async function iniciarSessao() { 
   const capabilities = Capabilities.chrome(); // Pode ser substituído por outros navegadores
   let driver = await new Builder()
     .usingServer('http://localhost:4444/wd/hub') // URL do hub do Selenium Grid
     .withCapabilities(capabilities)
     .build();

     return driver;
}

async function executarTeste() {

  const driver = await iniciarSessao();

  try {
    // 1. Abrir o site robertabrandao.com.br
    await driver.get(urlTeste);

    // 2. Esperar até que uma determinada condição seja atendida (por exemplo, a página carregar)
    // 2.1 Validar se o titulo da pagina está correto - https://www.selenium.dev/documentation/webdriver/waits/
    await driver.wait(until.titleIs('Roberta Brandão'), 10000);
    
    // 3. Encontrar um elemento na página (por exemplo, o camino de menu)
    
      //validar menus:
      
      validarLinkPorTexto('Posts', '/posts/');
      
      validarLinkPorTexto('Tags', '/tags/');
      
      validarLinkPorTexto('Categories', '/categories/');
      
      validarLinkPorTexto('Calculadora Fepi', '/calculadora-fepi/');
      
      //validarLinkPorTexto('Calculadora FUVESP', '/blablabla/');

    // 4. Verificar se o título da postagem está correto.
      // 4.1 verificação se a url do link está apontando para o local correto
      validarLinkPorTexto('Curadoria de Aprendizagem Linux', '/posts/aprendizagem-linux/');

      // 4.2 verificar se o texto procurado no titulo contem a tag correta
      //validarTagPorTexto('Curadoria de Aprendizagem Linux', 'a')

    // 5. Verificar se o conteúdo da postagem está sendo exibido corretamente.
    // 6. Envio de comentários em postagens.
    // 7. Navegação entre páginas.
    // 8. Visualização de postagens.
    // 9. Validação de links e botões.
    // 10. Responsividade do site em diferentes dispositivos.



    // Exemplo de saída de informações
   // console.log('Teste executado com sucesso!');
  } catch (error) {
    // Lidar com erros, registrar informações de falhas, tirar capturas de tela, etc.
    logging(`O teste falhou: ${error}`, 'ERROR');
  } finally {
    // Fechar o navegador ao final do teste
    await driver.quit();
  }
}

// funcao validarLinkPorTexto
// entradas: textoDoLink - corresponde ao texto a ser buscado, que necessita ser o valor que 
//                         é representado na tag que necessita retornar.
//                         exemplo: https://www.selenium.dev/documentation/webdriver/elements/locators/#link-text
//           urlEsperada - corresponde a url relativa que necessita ser testada.
// exemplo: validarLinkPorTexto('Calculadora FEPI','/calculadora-fepi')
async function validarLinkPorTexto(textoDoLink: string, urlEsperada: string) {
  // Configurar o driver do Selenium para o navegador Chrome
  // let driver = await new Builder().forBrowser('chrome').build();

  const driver = await iniciarSessao();

  try {
    // Abrir o site robertabrandao.com.br
    await driver.get(urlTeste);

    // Encontrar o link com o texto específico - https://www.selenium.dev/documentation/webdriver/elements/finders/
    let link = await driver.findElement(By.linkText(textoDoLink));
    let urlChecagem = urlTeste+urlEsperada; 

    // Verificar se o link está presente na página
    if (link) {
      // Obter a URL do link
      let href = await link.getAttribute('href');
      
      logging(`Iniciando o teste para ${textoDoLink}...`);
      logging(`E o que precisamos testar é: ${urlChecagem}`, 'INFO');
      logging(`A url que o selenium buscou no site é: ${href}`, 'INFO');

      // Verificar se a URL do link corresponde à URL esperada
      if (href === urlChecagem) {
        logging(`O link "${textoDoLink}" está presente e redireciona para a URL correta.`,'INFO');
      } else {
        logging(`O link "${textoDoLink}" está presente, mas redireciona para uma URL diferente.`,'WARM');
      }
    } else {
      logging(`O link "${textoDoLink}" não foi encontrado no elemento.`, 'ERROR');
    }
  } catch (error) {
    logging(`O link "${textoDoLink}" não foi encontrado no elemento e retornou o erro: ${error}`, 'ERROR');
  } finally {
    // Fechar o navegador ao final do teste
    await driver.quit();
  }
}

async function validarTagPorTexto(textoDoLink: string, tagEsperada: string) {
  // Configurar o driver do Selenium para o navegador Chrome
  // let driver = await new Builder().forBrowser('chrome').build();

  const driver = await iniciarSessao();

  try {
    // Abrir o site robertabrandao.com.br
    await driver.get(urlTeste);

    // Encontrar o link com o texto específico - https://www.selenium.dev/documentation/webdriver/elements/finders/
    let article = await driver.findElement(By.linkText(textoDoLink)); 

    //mapear quais elementos tenho na tag
    let element = await article.findElement(By.tagName('h1'));

    console.log(element.getTagName());
    

    // Verificar se o link está presente na página
  //  if (tag) {
  //    // Obter a URL do link
  //    let href = await link.getAttribute('href');
  //    
  //    logging(`Iniciando o teste para ${textoDoLink}...`);
  //    logging(`E o que precisamos testar é: ${urlChecagem}`, 'INFO');
  //    logging(`A url que o selenium buscou no site é: ${href}`, 'INFO');

  //    // Verificar se a URL do link corresponde à URL esperada
  //    if (href === urlChecagem) {
  //      logging(`O link "${textoDoLink}" está presente e redireciona para a URL correta.`,'INFO');
  //    } else {
  //      logging(`O link "${textoDoLink}" está presente, mas redireciona para uma URL diferente.`,'WARM');
  //    }
  //  } else {
  //    logging(`O link "${textoDoLink}" não foi encontrado no elemento.`, 'ERROR');
  //  }
  } catch (error) {
    //logging(`O link "${textoDoLink}" não foi encontrado no elemento e retornou o erro: ${error}`, 'ERROR');
  } finally {
    // Fechar o navegador ao final do teste
    await driver.quit();
  }
}
// perfumarias
function estiloConsole(texto: string, corTexto: string, corFundo: string = '') {
  // Definir códigos de escape ANSI com base nas estiloConsole fornecidas
  const corTextoCode = corTexto ? `\x1b[${corTexto}m` : '';
  const corFundoCode = corFundo ? `\x1b[${corFundo}m` : '';
  const resetCode = '\x1b[0m';

  // Concatenar os códigos de escape com o texto fornecido e retornar
  return `${corFundoCode}${corTextoCode}${texto}${resetCode}`;
}

function logging(texto: string, tipo: string = 'MESSAGE') {
  let corTexto = '';
  let corFundo = ''; 

  switch (tipo) {
     case 'INFO':
       corTexto = '32';
       corFundo = ''; 
      break;
     case 'ERROR':
       corTexto = '31';
       corFundo = ''; 
      break;
     case 'WARN':
       corTexto = '33';
       corFundo = ''; 
      break;
     default: 
       corTexto = '37';
       corFundo = ''; 
      break;
  }
  console.log(estiloConsole(`${tipo}: ${texto}`,corTexto, corFundo));
}

// Chamar a função para executar o teste
executarTeste();
