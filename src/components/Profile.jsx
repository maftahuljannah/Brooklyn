import React from 'react'
import { FaFacebookF, FaDribbble, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import Heading from './utils/Heading'
import Details from './utils/Details';
import PrimaryButton from './utils/primaryButton';
import { BsDownload } from "react-icons/bs";

const Profile = () => {

    const socialLinks =[
        {
            id: 1,
            url: "#",
            icon: <FaFacebookF />,
          },
        {
            id: 2,
            url:"#",
            icon:<FaDribbble />,
        },
        {
            id: 3,
            url:"#",
            icon:<FaInstagram />,
        },
        {
            id: 4,
            url:"#",
            icon:<FaLinkedinIn />,
        },
        {
            id: 5,
            url:"#",
            icon:<FaBehance />,
        },
    
    
    ];


  return (
    <section id='profileArea' className='mt-[50px] lg:mt-[212px] relative z-10 '>
      <div className="container relative transform translate-y-[20px] lg:translate-y-[72px]">
        <div className="shadow-custom lg:p-[112px] bg-white grid gap-[70px] lg:gap-[136px] lg:grid-cols-2 items-center rounded-2xl ">

<div className="profileImage relative">
<img src="/banner-2.png" className='w-full' alt="" />
{/* social icon */}
<div className="flex w-full max-w-[264px] shadow-social justify-center p-3 rounded-sm
absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white ">
    {socialLinks.map((link) =>(
<a className='w-12 h-12 text-primary-500 text-lg hover:text-white hover:bg-primary-500 transition-colors duration-300 
rounded-sm grid place-items-center' key={link.id} href={link.url}>{link.icon}</a>
    ))}
</div>
</div>

<div className="profileCnt px-8 pb-8 lg:px-0">
<Heading>I am Professional User Experience Designer</Heading>
<Details className="mt-8 mb-4">I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</Details>
<Details>I design and develop services for customers specializing creating stylish, modern websites, web services.</Details>



<div className="flex gap-4 mt-8">
<PrimaryButton>My Project</PrimaryButton>
<PrimaryButton className="!flex gap-3 items-center bg-transparent !text-primary-500 border border-primary-500"><BsDownload /> Download CV</PrimaryButton>
</div>

</div>

        </div>
      </div>
    </section>
  )
}

export default Profile
