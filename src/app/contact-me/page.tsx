import React from 'react';

function ContactMe() {
  return (
    <div className="min-h-screen bg-yellow-green text-black p-10">
      <h1 className="text-center text-5xl font-bold mb-10"><u>  CONTACT ME</u></h1>

      <div className="relative flex items-center justify-center">
        {/* Facebook Box (Top-Right Arrow) */}
        <div className="flex flex-col items-center space-y-4">
          <div className="arrow-up" />
          <div className="bg-black text-white p-4 rounded-lg shadow-lg w-64">
            <h2 className="text-xl font-bold">FACEBOOK</h2>
            <p>Account Name: Syeda Aramish</p>
            <p>Link: <a href="https://www.facebook.com/share/bpoi5reCtpBeMHbU/?mibextid=qi2Omg" target="_blank" className="text-blue-500 underline">Facebook Profile</a></p>
          </div>
        </div>

        {/* Instagram Box (Top-Left Arrow) */}
        <div className="flex flex-col items-center space-y-4 mx-10">
          <div className="arrow-up" />
          <div className="bg-black text-white p-4 rounded-lg shadow-lg w-64">
            <h2 className="text-xl font-bold">INSTAGRAM</h2>
            <p>Account Name: syedaaramish28</p>
            <p>Link: <a href="https://www.instagram.com/syeda_aramish_28?igsh=MWttbDF2OGN0MGJnbQ==" target="_blank" className="text-pink-500 underline">Instagram Profile</a></p>
          </div>
        </div>

        {/* Email Box (Bottom Arrow) */}
        <div className="flex flex-col items-center space-y-4">
          <div className="arrow-up" />
          <div className="bg-black text-white p-4 rounded-lg shadow-lg w-64">
            <h2 className="text-xl font-bold">EMAIL ADDRESS</h2>
            <p>aramishsyeda@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
