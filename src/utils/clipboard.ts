export const copyText = (value: string): void => {
  const textArea = document.createElement('textarea')

  textArea.style.display = 'block'
  textArea.style.left = '10000px'
  textArea.style.position = 'fixed'
  textArea.style.top = '0'

  document.body.appendChild(textArea)

  textArea.value = value
  textArea.select()
  textArea.setSelectionRange(0, value.length)

  document.execCommand('copy')
  document.body.removeChild(textArea)
}
