import initAnimacoesHome from "./modules/animacoesHome.js";
import animaLogin from "./modules/validacaoLogin.js";
import cursos from "./modules/cursos.js"
import trocaModo from "./modules/trocaModo.js";
import criarConta from "./modules/validacaoCriarConta.js";
import login from "./modules/validacaoLogin.js";
initAnimacoesHome();
trocaModo();
criarConta();
animaLogin();
cursos();
login();