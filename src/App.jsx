import React, { useEffect, useState } from 'react'
import avatar from './assets/images/avatar-jessica.jpeg';
import axios from 'axios';


function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('https://api.github.com/users/Devendra-singh-baghel')
      .then(response => {
        setUser(response.data)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const socialLinks = [
    { title: "GitHub", url: "https://github.com/Devendra-singh-baghel" },
    { title: "Frontend Mentor", url: "https://www.frontendmentor.io/profile/Devendra-singh-baghel" },
    { title: "LinkedIn", url: "https://linkedin.com/in/devendra-singh-baghel-267023351" },
    { title: "Twitter", url: "#" },
    { title: "Instagram", url: "#" }
  ]

  return (
    <div className='bg-[#141414] h-screen flex justify-center items-center'>
      <div className='bg-[#1f1f1f] max-w-85 w-full p-8 text-white flex flex-col justify-center items-center space-y-4.5 rounded-xl'>
        <img
          src={user.avatar_url}
          alt=""
          className='rounded-full w-18'
        />
        <div className='text-center'>
          <h2 className='text-xl font-bold mb-1'>{user.name}</h2>
          <p className='text-sm font-medium text-[#c5f82a]'>{user.location}</p>
        </div>
        <p className='text-sm mb-5'>"Front-end developer and avid reader."</p>
        <div className='flex flex-col space-y-3 w-full'>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target='_blank'
              className='bg-[#333333] text-center text-sm rounded-md py-2 font-semibold cursor-pointer hover:bg-[#c5f82a] hover:text-black duration-300 transition-all'
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
