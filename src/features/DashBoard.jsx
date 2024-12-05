import React from 'react'

function DashBoard() {
  return (
    <div>
        <h1>DashBoard</h1>
         <form action='http://localhost:3300/profile' method='POST' encType='multipart/form-data'>
            <input type="file" name='files' />
            <button>submit file</button>
         </form>   
    </div>
  )
}

export default DashBoard