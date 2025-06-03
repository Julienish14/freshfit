import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5 ">
            Hi There this is a sample footer for Evogym. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Facilis nemo iusto similique
            optio explicabo modi deleniti aliquid quo porro obcaecati suscipit
            natus quidem eveniet, quae veniam perferendis assumenda! In, facere!
          </p>
          <p> © copy Evogym All Right Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">links on website</p>
          <p className="my-5">https://x.com/___jish</p>
          <p>https://www.instagram.com/julienish14/</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">natus quidem eveniet</p>
          <p>(334)434-6894</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
