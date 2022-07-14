import React from 'react'
import { ImageLogin } from '../../assets/export_image';
import { Button, Input } from '../../components/index_com'
import './login.scss'
import { tw } from 'https://cdn.skypack.dev/twind'

 const Login = () => {
  return (
    <div className="main-page">
        <div className="left">
            <img src={ImageLogin} className="image-left" />
        </div>
        <div className="right">
          <Input label="Email" placeholder="Enter your email" />
          <Input label="Password" placeholder="Enter your password" />

          <Button label="Login" className={tw`px-6 py-2 my-3 bg-blue-500 text-white rounded-xl font-bold`} />
        </div> 
    </div>
  )
}

export default Login;