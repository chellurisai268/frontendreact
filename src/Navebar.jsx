import React from 'react'
import { Link } from 'react-router-dom'

function Navebar() {
  return (
    <div>
        <ul class="nav nav-tabs">
        <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " aria-current="page" to="/login">Login</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/signup">SignUp</Link>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-disabled="true">Disabled</a>
  </li>
</ul>
    </div>
  )
}

export default Navebar