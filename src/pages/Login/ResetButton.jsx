import React from 'react'
import { auth } from '../../firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'


const ResetButton = ({ email }) => {

    //* şifre sıfırlama e postası gönder
    const handleReset = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => toast.info("Şifre sıfırlama epostası gönderildi.Mailinizi kontrol ediniz")
    )
    .catch(() => toast.error("Mail gönderilemiyor"));
}
  return (
    <button onClick={handleReset}
     className='text-red-500'>
        Şifrenizi mi unuttunuz?
    </button>
  )
}

export default ResetButton