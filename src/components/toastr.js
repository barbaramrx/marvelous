import toastr from 'toastr'

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

export function getToastr(title, msg, type) {
    toastr[type](msg, title)
}

export function errorMsg(msg) {
    getToastr('Erro', msg, 'error')
}

export function successMsg(msg) {
    getToastr('Sucesso', msg, 'success')
}

export function warningMsg(msg) {
    getToastr('Alerta', msg, 'warning')
}