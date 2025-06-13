import Config from "react-native-config";

export default {
  text: "Aperte no botão abaixo para acessar o nosso aplicativo utilizando a sua senha do",
  org: "GOV.BR",
  text_button: "Entrar com GOV.BR",
  need_to_help: "Precisa de ajuda?",
  press_here: "aperte aqui",
  received_invite: "Recebeu um convite de apoio?",
  log_in: "Faça seu login aqui",
  url: `${Config.AUTH_API_URL}/oauth2/authorize?response_type=code&client_id=3uha3pm7nfk5no8kampv4p7jnk&scope=openid+email+profile&redirect_uri=prevenir://callback&identity_provider=Google`,
};
