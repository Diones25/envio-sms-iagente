import axios from "axios";

const renderSMS = (req, res) => {
  res.render('pages/home');
}

const createSMS = (req, res) => {
  const celular = req.body.celular;
  const mensagem = req.body.mensagem;

  axios.post(`https://api.iagentesms.com.br/webservices/http.php?metodo=envio&usuario=pereiradiones987@gmail.com&senha=Libriano@25&celular=${celular}&mensagem=${mensagem}`)
  .then((response) => {
    return res.status(response.status).json(response.data);
  })

}

export default {
  renderSMS,
  createSMS
}
