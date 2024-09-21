const Intro = () => {
  const fileId = "1sTF3S1mqY-JYxqWQE4Wn-Yx9l1spjtEy";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  return (
    <div className="p-5 space-y-5">
      <div className="flex justify-center">
        <p className="text-xl font-medium">Hi, I am Harshith Nayak</p>
      </div>
      <div className="flex justify-center">
        <p className="text-center font-normal text-lg text-slate-500">
          I am a software developer with a strong computer science background.
          As a full-stack developer, I build and manage both the front-end and
          back-end of websites and web applications, contributing to the overall
          success of the product. Check out some of my work in the Projects
          section. I am open to job opportunities where I can contribute, learn,
          and grow. If you have an opportunity that aligns with my skills and
          experience, please don't hesitate to contact me.
        </p>
      </div>
      <div className="flex justify-center">
        <a href={downloadUrl} download="Harshith_resume.pdf">
          <button className="flex items-center px-3 py-2 rounded-lg  bg-sky-500 text-white shadow-2xl text-sm font-bold ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Intro;
