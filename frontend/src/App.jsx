import React, { useCallback, useEffect, useState } from 'react'
import UserComponent from './UserComponent'
import { ErrorAlert, SuccessAlert } from './utils'
import Loading from './Loading'
import axios from 'axios'

const App = () => {

  // const Object = {
  //   username /**key */: 'peter' /**value */,
  //   age: '20'
  // }
  // //extracting items from an object
  // console.log(Object.age)

  // const Array = [
  //   'allen',
  //   'peter',
  //   'joshua'
  // ]
  // //extracting items from an array
  // console.log(Array[2])

  // const ArrayOfObject = [
  //   {
  //     username: 'peter',
  //     age: '20'
  //   },
  //   {
  //     username: 'john',
  //     age: '24'
  //   }
  // ]

  // ArrayOfObject.map((ele, i) => (
  //   console.log(ele.username)
  // ))


  const [allUsers, setAllUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const HandleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  
  //creating users on frontend only//
  // const CreateUser = () => {
  //   if (!form.username || !form.email || !form.password) return ErrorAlert('Enter all fields')
  //   const date = new Date()
  //   const newForm = {
  //     ...form,
  //     id: date.getTime()
  //   }
  //   setAllUsers([
  //     ...allUsers,
  //     newForm
  //   ])
  //   setForm({
  //     username: '',
  //     email: '',
  //     password: ''
  //   })
  //   SuccessAlert('User created successfully')
  // }

  // const FetchUsers = useCallback(async () => {
  //   const endPoint = 'api/user/get-all-users'
  //   try {
  //     const response = await axios.get(`${backendURL}/${endPoint}`) //api
  //     // console.log(response)
  //     if (response.data.status === 200) {
  //       setAllUsers(response.data.msg)
  //     }
  //   } catch (error) {
  //     ErrorAlert(error.message)
  //   }
  // }, [])

  // useEffect(() => {
  //   FetchUsers()
  // }, [FetchUsers])

  const CreateUser = async () => {
    const endPoint = 'api/user/create-user'
    try {
      setLoading(true)
      const response = await axios.post(`${backendURL}/${endPoint}`, form) //api
      // console.log(response)
      if (response.data.status === 200) {
        FetchUsers()
        SuccessAlert(response.data.msg)
        setForm({
          username: '',
          email: '',
          password: ''
        })
      } else {
        ErrorAlert(response.data.msg)
      }
    } catch (error) {
      ErrorAlert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-11/12 mx-auto py-10'>
      <div className='bg-white shadow-lg w-fit h-fit rounded-md mx-auto flex flex-col gap-4 p-10 relative'>
        {loading && <Loading />}
        <div className='flex gap-10 justify-between capitalize'>
          <span>username:</span>
          <input className='outline-none py-1 px-2 w-44 border border-gray-400 rounded-sm' name='username' value={form.username} onChange={HandleForm}></input>
        </div>
        <div className='flex gap-10 justify-between capitalize'>
          <span>email:</span>
          <input className='outline-none py-1 px-2 w-44 border border-gray-400 rounded-sm' name='email' value={form.email} onChange={HandleForm}></input>
        </div>
        <div className='flex gap-10 justify-between capitalize'>
          <span>password:</span>
          <input className='outline-none py-1 px-2 w-44 border border-gray-400 rounded-sm' name='password' value={form.password} onChange={HandleForm}></input>
        </div>
        <button className='w-fit h-fit py-2 px-6 bg-[#d6d649] mx-auto rounded-md mt-4 font-medium' onClick={CreateUser}>Create</button>
      </div>
      <UserComponent allUsers={allUsers} setAllUsers={setAllUsers} />
    </div>
  )
}

export default App