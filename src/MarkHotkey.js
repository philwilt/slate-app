export default function MarkHotKey(options) {
  const { type, key } = options

  return {
    onKeyDown(event, change, next) {
      if (!event.ctrlKey || event.key !== key) return next()
      event.preventDefault()

    change.toggleMark(type)
    return true
    }
  }
}
