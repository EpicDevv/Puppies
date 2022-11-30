import React, { useState } from "react";
import { send } from 'emailjs-com';

const contact = () => {
  const [sentContactEmail, setSentContactEmail] = useState(false);
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    send(
      `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
      toSend,
      `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  if(sentContactEmail === true) {
    return (
      <div className="flex justify-center text-center text-[20px] text-emerald-400 mb-[100px]">
        Thank you for your interest, We will contact you within one business day.
      </div>
    )
  }
  if (sentContactEmail === false) {

    return (
      <div id="contact" className="max-w-[1240px] flex flex-col justify-center items-center m-auto p-4 h-screen">
        <div className=" bg-opacity-50 rounded-lg shadow-lg bg-emerald-400 p-[20px] inline-flex flex-col items-center">

          <h1 className="text-2xl font-bold text-center p-4">
            Send me a 🏃 message
          </h1>
          <form onSubmit={() => { onSubmit; setSentContactEmail(true); }} className="max-w-[600px]">
            <div className="grid grid-cols-2 gap-2">
              <input
                className="border placeholder-black shadow-lg p-3"
                type="text"
                placeholder="Name"
                name='name'
                onChange={handleChange}
              />
              <input
                className="border placeholder-black shadow-lg p-3"
                type="email"
                placeholder="Email"
                name='email'
                onChange={handleChange}
              />
            </div>
            <input
              className="border placeholder-black shadow-lg p-3 w-full my-2"
              type="text"
              placeholder="Subject"
              name='subject'
              onChange={handleChange}
            />
            <textarea
              className="border placeholder-black shadow-lg p-3 w-full"
              cols={30}
              rows={10}
              placeholder="Message"
              name='message'
              onChange={handleChange}
            ></textarea>
            <button type="submit" disabled={toSend.name === '' || toSend.email === '' || toSend.subject === '' || toSend.message === ''} className=" rounded-lg bg-emerald-400 hover:bg-emerald-500 shadow-lg p-3 w-full mt-2">Submit</button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center mt-[50px]">
          <div>
            <h1 className="text-center mb-1 underline">Call text or email us</h1>
            <a href="mailto: zayne.mngmt@gmail.com"> <h1 className="mb-1">
              Email: Zayne.mngmt@gmail.com
            </h1></a>
            <a href="tel:949-867-8321"><h1>Phone: (949) 867-8321 </h1></a>
          </div>
        </div>
      </div>
    );
  }
};

export default contact;
