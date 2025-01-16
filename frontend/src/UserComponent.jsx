import React, { useState } from 'react'

const UserComponent = ({ allUsers, setAllUsers }) => {
    const [search, setSearch] = useState('')

    //deleting users on frontend only
    // const DeleteUser = (id) => {
    //    const unMatched = allUsers.filter(item => item.id !== id)
    //    setAllUsers(unMatched)
    // }

    return (
        <div className='mt-20 bg-full h-fit shadow-lg rounded-md p-5'>
            <div className='flex items-center justify-center'>
                <input className='outline-none py-1 px-2 w-64 border border-gray-400' value={search} onChange={(event) => setSearch(event.target.value)}></input>
            </div>
            <div className='mt-10 flex flex-wrap gap-8 items-center justify-center'>
                {allUsers.length > 0 &&
                    <>
                        {allUsers.map((item, i) => (
                            <div className='w-fit h-fit bg-white shadow-2xl border rounded-md flex flex-col gap-4 py-5 px-8' key={i}>
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
                                    <button className='w-fit h-fit py-2 px-4 bg-[#2e2ead] mx-auto rounded-md mt-4 font-medium text-xs capitalize text-white'>update</button>
                                    <button className='w-fit h-fit py-2 px-4 bg-[#2e2ead] mx-auto rounded-md mt-4 font-medium text-xs capitalize text-white'>delete</button>
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