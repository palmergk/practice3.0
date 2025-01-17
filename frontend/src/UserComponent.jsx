import React, { useState } from 'react'
import { backendURL, ErrorAlert, SuccessAlert } from './utils'
import axios from 'axios'
import Loading from './Loading'

const UserComponent = ({ allUsers, setAllUsers, setForm, FetchUsers }) => {
  const [loading, setLoading] = useState(false)

  //deleting users on frontend only
  // const DeleteUser = (id) => {
  //    const unMatched = allUsers.filter(item => item.id !== id)
  //    setAllUsers(unMatched)
  // }

  const Edit = (item) => {
    setForm({
      username: item.username,
      email: item.email,
      password: item.password,
      user_id: item.id
    })
  }

  const DeleteUser = async (id) => {
    const endPoint = 'api/user/delete-user'
    try {
      setLoading(true)
      const response = await axios.post(`${backendURL}/${endPoint}`, { user_id: id }) //api
      if (response.data.status === 200) {
        FetchUsers()
        SuccessAlert(response.data.msg)
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
    <div className='mt-20 bg-full h-fit shadow-lg rounded-md p-5'>
      <div className='mt-10 flex flex-wrap gap-8 items-center justify-center'>
        {allUsers.length > 0 &&
          <>
            {allUsers.map((item, i) => (
              <div className='w-fit h-fit bg-white shadow-2xl border rounded-md flex flex-col gap-4 py-5 px-8 relative' key={i}>
                {loading && <Loading />}
                <div className='flex justify-between gap-10 capitalize'>
                  <span className='font-medium'>username:</span>
                  <span>{item.username}</span>
                </div>
                <div className='flex justify-between gap-10'>
                  <span className='font-medium'>email:</span>
                  <span>{item.email}</span>
                </div>
                <div className='flex justify-between gap-10 capitalize'>
                  <span className='font-medium'>password:</span>
                  <span>{item.password}</span>
                </div>
                <div className='flex gap-4 ml-auto'>
                  <button className='w-fit h-fit py-2 px-4 bg-[#2e2ead] mx-auto rounded-md mt-4 font-medium text-xs capitalize text-white' onClick={() => Edit(item)}>edit</button>
                  <button className='w-fit h-fit py-2 px-4 bg-[#2e2ead] mx-auto rounded-md mt-4 font-medium text-xs capitalize text-white' onClick={() => DeleteUser(item.id)}>delete</button>
                </div>
              </div>
            ))}
          </>
        }
      </div>
    </div>
  )
}

export default UserComponent