import React from 'react'

function ERR_404() {
  return (
    <div className='selection:bg-blue-400 flex flex-col gap-y-8 items-center h-screen justify-center bg-slate-900'>

    <h1 className='text-9xl font-bold text-slate-200'>404</h1>
    <h2 className='text-4xl font-medium text-slate-300' >You have found a secret place.</h2>
    <p className='text-lg text-slate-400 text-center'>Unfortunately, this is only a 404 page. You may have mistyped <br /> the address, or the page has been moved to another URL.</p>
    <button className='text-blue-400 p-4 rounded-xl duration-200 text-lg hover:bg-blue-500 hover:bg-opacity-30'>
        <a href="/">Take me back to home page</a>
    </button>
    </div>
  )
}

export default ERR_404