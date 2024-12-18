"use client"
import Link from 'next/link'
import { useState } from "react"

export default function Login() {

    const [successMsg, setSuccessMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    async function handleForm(formData){
        const fd = {
        'username' : formData.get('username'),
        'password' : formData.get('password'),
        }
    
    const res = await fetch("http://127.0.0.1:8000/api/login", {"method": "POST", "body": JSON.stringify(fd), "headers": {
      "Content-Type":"application/json"
    }
  })
    const resData = await res.json()
    if (resData.error==null){
        var user = {
            'username':fd.username,
            'token':resData.token,
        }

        localStorage.setItem('user', JSON.stringify(user))
        setSuccessMsg(true)
        setErrorMsg(false)
        location.href="/user/dashboard"

    } else {
        var errorStr=[];
        errorStr.push(<p>{resData.error}</p>)
        if (typeof resData.error!=="string"){
          for(const [key, values] of Object.entries(resData)){  
          console.log(values[key]);
              for(let i=0; i<values.length; i++) {
                  errorStr.push(<p>{key}: {values[i]}</p>)
              }
          }
        }
        setSuccessMsg(false)
        setErrorMsg(errorStr)
    }
  }

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-10 offset-1">
              <h3 className="mb-5 text-center">Login</h3>
              {
                successMsg && <div className="alert alert-success">Welcome back!</div>
              }
              {
                errorMsg && <div className="alert alert-warning">{ errorMsg }</div>
              }
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="/banners/banner2.jpg" className="img-fluid" />
            </div>
            <form className="col-md-6 col-12 mb-3" action={handleForm}>
              <div className="row">
                <div className="col-12 mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" name="username" />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <button className="btn hms-bg-dark" type="submit">Login</button>
                </div>
                <p>
                  <Link className="text-danger" href="/user/forgotpassword">
                    Forgot password?
                  </Link>
                </p>
                <p>
                  Not a user yet? <Link href="/user/signup">Sign up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
