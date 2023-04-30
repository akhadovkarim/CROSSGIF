const URL_API = "https://api.telegram.org/bot6163618076:AAG1VjVWyL2Ufn1gNTX6Di6ciQXcBac-R_8/sendMessage";
const CHAT_ID = "-812033709";
const network = document.querySelector('input[name=network]')
const tech = document.querySelector('input[name=tech]')
const marketing = document.querySelector('input[name=marketing]')

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let message = `<b>Заявка из сайта</b>\n`;
    message += `<b>Телеграм: </b> ${ this.telegram.value }\n`;
    message += `<b>Телефон номер 📱: </b> ${ this.phone.value } \n`;
    message += `<b>Почта: </b> ${ this.email.value }\n`;
    if(network.checked || tech.checked || marketing.checked) {
        message += `Интересует: `;
      }
    if(network.checked) {
        message += `<b>Арбитраж траффика 💵</b>`;
      }
    if(tech.checked) {
        message += `<b> Разработка 👨‍💻</b>`;
      }
    if(marketing.checked) {
        message += `<b> Маркетинг и реклама 📊 </b>   `;
      }
    

      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      })
    .then((res) => {
      this.telegram.value = "";
      this.phone.value = "";
      this.email.value = "";

      success();  
    })
    .catch((err) => {
      console.warn(err);
      emptyerror();
    })
    .finally(() => {
      console.log('Конец')
    })
})
function emptyerror () {
  swal({
    title: "Оо нет ",
    text: "Кажется не заполнили все поля",
    icon: "error",
  });
}
function success () {
  swal({
    title: "Сообщение успешно отправлено",
    text: "С вами свяжуться в течении 24часа",
    icon: "success",
  });
}
