const app = {
  init: function() {
    $('#form').on('submit', app.onSubmit);
    app.onGet();
  },

  onGet: data => {
    $.ajax({
      url: '/data',
      method: 'GET',
      success: data => {

      },
      error: () => {
        console.log('This is an error');
      }
    });
  },

  onSubmit: event => {
    event.preventDefault();
    var data = ${'textarea'}.val();
    console.log('data', typeof data);
    $.ajax({
      url: '/data',
      method: 'POST',
      contentType: 'application/json',
      data: data,
      success: () => {
        app.onGet();
      }
    });
    $('textarea').val('');
  }
};

$(document).ready(app.init);
