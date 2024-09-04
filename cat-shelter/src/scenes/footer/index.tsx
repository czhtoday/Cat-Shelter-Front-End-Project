import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          This website, crafted by Zhihang Cheng, is a dedicated platform for cat enthusiasts 
          and those looking to adopt or learn more about cats. It uniquely combines the 
          capabilities of React, Vite, TailwindCSS and TypeScript.
          </p>
          <p>© MeowSave All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Author Links</h4>
          <p className="my-5">
            <a href="https://www.linkedin.com/in/chengzhihang/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              https://www.linkedin.com/in/chengzhihang/
            </a>
          </p>
          <p className="my-5">
            <a href="https://github.com/czhtoday" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              https://github.com/czhtoday
            </a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Website Author</h4>
          <p className="my-5">Zhihang Cheng</p>
          <p>czhtoday@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
