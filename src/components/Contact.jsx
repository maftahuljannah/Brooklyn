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
    <section id='contact' className='relative z-[100]'>
      <div className="container relative transform translate-y-[60px]">
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
                Submit
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;