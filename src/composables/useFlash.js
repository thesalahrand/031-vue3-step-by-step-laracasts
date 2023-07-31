import swal from 'sweetalert'

export function useFlash() {
  function flash(title, text, icon = 'success') {
    return swal(title, text, icon)
  }

  return { flash }
}
