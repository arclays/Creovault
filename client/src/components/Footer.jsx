const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-950 text-white py-10">
        <div className="text-center">
          <div className="flex gap-6 px-10">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
            <p className="">
              &copy; <span>{new Date().getFullYear()}</span>{" "}
              <b className="text-red-700">Creovault</b>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
