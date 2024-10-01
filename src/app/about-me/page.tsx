import React from 'react';

function AboutMe() {
  return (
    <div className="min-h-screen bg-cream p-10">
      <h1 className="text-center text-5xl font-bold text-grey mb-10">
        ABOUT INFO OF SYEDA ARAMISH
      </h1>
      
      {/* Line between heading and description */}
      <hr style={{ border: '1px solid brown', marginBottom: '20px' }} />

      <div className="flex flex-col space-y-6">
        {/* Stepped Layout: Each heading and description pair */}
        <div style={{ marginLeft: '0px' }}>
          <h2 className="text-3xl font-semibold text-brown-dark">• Who I Am</h2>
          <p className="text-lg text-brown-dark">
            My name is Syeda Aramish Fatima, and I am 17 years old. I am currently pursuing my HSC II from Government Degree College Malir Cantt, specializing in the field of pre-engineering.
          </p>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <h2 className="text-3xl font-semibold text-brown-dark">• My Educational Journey</h2>
          <p className="text-lg text-brown-dark">
            I completed my matriculation (SSC II) from Green Peace School, where I worked diligently and achieved an impressive 85% A1 grade.
          </p>
        </div>

        <div style={{ marginLeft: '40px' }}>
          <h2 className="text-3xl font-semibold text-brown-dark">• Academic Interests</h2>
          <p className="text-lg text-brown-dark">
            I have a strong passion for studying physics and computer science, as I find both subjects fascinating and full of possibilities for innovation and problem-solving.
          </p>
        </div>

        <div style={{ marginLeft: '60px' }}>
          <h2 className="text-3xl font-semibold text-brown-dark">• Hobbies and Interests</h2>
          <p className="text-lg text-brown-dark">
            In addition to my studies, I enjoy expressing my creativity through art, craft, and drawing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
