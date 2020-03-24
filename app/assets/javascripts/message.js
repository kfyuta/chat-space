$(function() {
  function buildHTML(message) {
    if( message.image ) {
      let html = 
      `<div class="message">
        <div class="upper-message__user-name">
        ${message.user_name}
        </div>
        <div class="upper-message__date">
        ${message.created_at}
        </div>
      </div>
      <div class="lower-message">
        <p class="lower-message__content">
        ${message.content}
        </p>
      </div>
      <div class="lower-message__content">
        <img src=${message.image}>
      </div>`
      return html;
    } else {
      var html =
      `<div class="message">
        <div class="upper-message__user-name">
          ${message.user_name}
        </div>
        <div class="upper-message__date">
          ${message.created_at}
        </div>
        </div>
        <div class="lower-message">
        <p class="lower-message__content">
          ${message.content}
        </p>
        </div>
      </div>`
      return html;
    }
  }


  $("#new_message").on('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done((data) => {
      let html = buildHTML(data);
      $(".message--list").append(html);
      $('.message--list').animate({ scrollTop: $('.message--list')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(() => {
      alert('error');
    })
    .always(() => {
      $('#form__submit').prop("disabled", false);
    })
  })
});