// import React, { useRef } from 'react';
// import styles from '../css/Contact.module.css';
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import emailjs from 'emailjs-com';

// const ContactUs = () => {
//   const form = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_ayrypqr',  // Replace with your EmailJS service ID
//       'template_xxxxxxx',  // Replace with your EmailJS template ID
//       form.current,
//       'your_public_key'   // Replace with your EmailJS public key
//     ).then(
//       (result) => {
//         alert('Message sent successfully!');
//       },
//       (error) => {
//         alert('Failed to send message. Please try again later.');
//       }
//     );

//     e.target.reset();  // Clears the form after submission
//   };

//   return (
//     <div className={styles.container}>
//       {/* Header Section */}
//       <div className={styles.headerContainer}>
//         <h1 className={styles.heading}>CONTACT ME</h1>
//         <div className={styles.contactInfo}>
//           <div className={styles.contactItem}>
//             <FaEnvelope className={styles.icon} />
//             <span>sujigayatrikadiyala@gmail.com</span>
//           </div>
//           <div className={styles.contactItem}>
//             <FaPhoneAlt className={styles.icon} />
//             <span>+91 703 656 3390</span>
//           </div>
//           <div className={styles.contactItem}>
//             <FaMapMarkerAlt className={styles.icon} />
//             <span>Andhra Pradesh, India</span>
//           </div>
//         </div>
//         <div>
//           <div className={styles.contactwithme}>Connect with me on</div>
//           <div className={styles.contactItems}>
//             <a
//               href="https://github.com/SujiGayatri"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.iconLink}
//             >
//               <FaGithub className={styles.icon} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/suji-gayatri-kadiyala-075030256/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.iconLink}
//             >
//               <FaLinkedin className={styles.icon} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <form ref={form} className={styles.formContainer} onSubmit={handleSubmit}>
//         <div className={styles.row}>
//           <input
//             type="text"
//             name="user_name"
//             className={`${styles.input} ${styles.halfInput}`}
//             placeholder="Name*"
//             required
//           />
//         </div>
//         <input
//           type="email"
//           name="user_email"
//           className={styles.input}
//           placeholder="Email*"
//           required
//         />
//         <textarea
//           name="message"
//           className={`${styles.input} ${styles.textArea}`}
//           placeholder="Message"
//           rows="4"
//           required
//         ></textarea>
//         <button type="submit" className={styles.button}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;

const express=require('express');
const StudentData=require("../Models/StudentSchema");

const LoginSchema=require("../Models/LoginSchema");

const GetData=async(req,res)=>{
    return res.status(200).json("I am Responding");
}

exports.GetData=GetData;




// const express=require('express')
// const nodemailer=require('nodemailer')

// const MailSender=(req,res,next)=>{
//     const Transporter=nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:"vyshnavimalladi2004@gmail.com",
//             pass:"pkae qhjj uerp csxz"
//         }
//     })
//     const MailOptions={
//         from:"vyshnavimalladi2004@gmail.com",
//         to:req.body.email,
//         subject:"Checking NodeMailer",
//         text:"It is Working"
//     }
//     Transporter.sendMail(MailOptions,(err,info)=>{
//         if(err){
//             return res.status(500).json(err);
//         }
//         return res.status(200).json('Mail Sent Successfully');
//     })

// }

// exports.MailSender=MailSender;






// const express=require('express')
// const multer=require('multer')
// const path=require('path')

// const MyStorage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"public")
//     },
//     filename:function(req,file,cb){
//         cb(null,'Vyshu'+path.extname(file.originalname))
//     }
// })

// const MyFileFilter=(req,file,cb)=>{
//     const MyfileExtensions=/png|jpg/
//    const value= MyfileExtensions.test(path.extname(file.originalname))
//    if(value==true)
//    {
//     cb(n8ll,true)
//    }
//    else
//    {
//     cb("Please Upload Correct Image Format")
//    }
// }

// const upload=multer({
//     storage:MyStorage,
//     fileFilter:MyFileFilter,
//     limits:{
//         fileSize:1000000
//     }
// }).single("")


// const ImageUpload=(req,res)=>{
//     upload(req,res,(err)=>{
//         if(err)
//         {
//             return res.status(400).json(err)
//         }
//         return res.status(200).json("Image Uploaded")
//     })

// }

// exports.ImageUpload=ImageUpload;
