import React from 'react'
import { ImageRegister } from '../../assets/export_image';
import './register.scss'
import { Button, Input } from '../../components/index_com'
import { tw } from 'https://cdn.skypack.dev/twind'

const Register = () => {
  return (
    <div className="main-page">
        <div className="left">
            <img src={ImageRegister} className="image-left" />
        </div>
        <div className="right">
          <Input label="Full Name" placeholder="Enter your fullname" />
          <Input label="Email" placeholder="Enter your email" />
          <Input label="Password" placeholder="Enter your password" />

          <Button label="Register" className={tw`px-6 py-2 my-3 bg-green-700 text-white rounded-xl font-bold`} />
        </div> 
    </div>
  )
}

export default Register;