import { useState } from 'react'

const useShow = () => {

  const [showText, setShowText] = useState(false)

  return {
    showText,
    setShowText
  }
}

export default useShow