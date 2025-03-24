import React, { useRef, useEffect } from 'react';
import Heading from './utils/Heading';
import Details from './utils/Details';
import { FaFacebookF, FaDribbble, FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";
import Input from './utils/Input';
import PrimaryButton from './utils/primaryButton';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hsbmvxw', 'template_xgwjzms', form.current, {
        publicKey: 'Z2J6L-fOlaRMG-wny',
      })
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Your form has been submitted",
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='contact' className='translate-y-[60px] z-[300]'>
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[100px] p-4 lg:p-[88px] rounded-2xl shadowContact'>
          {/* Left Side - Contact Info */}
          <div className="contactCnt">
            <Heading>Let’s discuss your Project</Heading>
            <Details className='text-gray-400 text-sm lg:text-lg mt-4'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterations.
            </Details>
            <div className="card max-w-[336px] mx-auto lg:mx-0">
              {[
                { label: "Address:", value: "New Mexico 31134" },
                { label: "My Email:", value: "mymail@mail.com" },
                { label: "Call Me Now:", value: "00-1234 00000" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 lg:p-6 rounded-[10px] transition duration-300 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)]">
                  <div className="transition duration-300 hover:bg-primary-500 p-3 rounded-full">
                    <img src="/contact.png" alt="Contact Icon" className="w-8 h-8 lg:w-12 lg:h-12" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-xs lg:text-[14px] font-[400] leading-[143%]">{item.label}</p>
                    <h5 className="text-sm lg:text-[16px] font-medium leading-[150%] text-gray-900">{item.value}</h5>
                  </div>
                </div>
              ))}
              <div className="icon flex gap-4 mt-[20px] lg:mt-[35px] justify-center lg:justify-start">
                {[FaFacebookF, FaDribbble, FaBehance, FaInstagram, FaLinkedin].map((Icon, index) => (
                  <a key={index} href="#" className="p-2 lg:p-3 rounded-[4px] text-primary-500 hover:text-white transition-all duration-300 hover:bg-primary-500">
                    <Icon className="w-4 h-4 lg:w-6 lg:h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contactForm">
            <Details className='text-gray-400 text-sm lg:text-[18px] leading-[133%]'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterations.
            </Details>
            <form ref={form} onSubmit={sendEmail}>
              <Input placeholder="Your Name *" name="user_name" />
              <Input placeholder="Your Email *" type='email' name="user_email" />
              <Input placeholder="Location" name="location" type='text' />
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
                <Input placeholder="Budget *" name="budget" type='number' />
                <Input placeholder="Subject *" name="subject" type='text' className='md:col-span-2' />
              </div>
              <Input placeholder="Message" name="message" />
              <PrimaryButton className='mt-6 lg:mt-[50px] flex items-center gap-[14px] w-full lg:w-auto justify-center'>
                Submit <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.34 7.32013L4.34 0.320128C3.78749 0.0451374 3.16362 -0.0527612 2.55344 0.03978C1.94326 0.132321 1.37646 0.410798 0.930335 0.837244C0.484207 1.26369 0.180456 1.81735 0.060496 2.42274C-0.059464 3.02813 0.0102046 3.65578 0.260003 4.22013L2.66 9.59013C2.71446 9.71996 2.74251 9.85934 2.74251 10.0001C2.74251 10.1409 2.71446 10.2803 2.66 10.4101L0.260003 15.7801C0.0567034 16.2368 -0.029241 16.7371 0.00998036 17.2355C0.0492018 17.7339 0.212345 18.2145 0.484585 18.6338C0.756825 19.0531 1.12953 19.3977 1.56883 19.6363C2.00812 19.875 2.50009 20 3 20.0001C3.46823 19.9955 3.92949 19.8861 4.35 19.6801L18.35 12.6801C18.8466 12.4303 19.264 12.0474 19.5557 11.5742C19.8474 11.101 20.0018 10.556 20.0018 10.0001C20.0018 9.44424 19.8474 8.89928 19.5557 8.42605C19.264 7.95282 18.8466 7.56994 18.35 7.32013H18.34ZM17.45 10.8901L3.45 17.8901C3.26617 17.9784 3.05973 18.0084 2.85839 17.976C2.65705 17.9436 2.47041 17.8504 2.32352 17.709C2.17662 17.5675 2.07648 17.3845 2.03653 17.1846C1.99658 16.9846 2.01873 16.7772 2.1 16.5901L4.49 11.2201C4.52094 11.1484 4.54766 11.075 4.57 11.0001H11.46C11.7252 11.0001 11.9796 10.8948 12.1671 10.7072C12.3546 10.5197 12.46 10.2653 12.46 10.0001C12.46 9.73491 12.3546 9.48056 12.1671 9.29302C11.9796 9.10549 11.7252 9.00013 11.46 9.00013H4.57C4.54766 8.9253 4.52094 8.85184 4.49 8.78013L2.1 3.41013C2.01873 3.22309 1.99658 3.01568 2.03653 2.8157C2.07648 2.61572 2.17662 2.43273 2.32352 2.29128C2.47041 2.14982 2.65705 2.05666 2.85839 2.02428C3.05973 1.9919 3.26617 2.02186 3.45 2.11013L17.45 9.11013C17.6138 9.19405 17.7513 9.32154 17.8473 9.47857C17.9433 9.63561 17.994 9.81608 17.994 10.0001C17.994 10.1842 17.9433 10.3647 17.8473 10.5217C17.7513 10.6787 17.6138 10.8062 17.45 10.8901Z" fill="white" />
</svg>
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;