const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact_heading">Contact</h1>
      <div className="contact_img_container">
        <a href="https://www.linkedin.com/in/hyesu-lee-6a0602168/">
          <img
            src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png"
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/Hyesu68">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
          />
        </a>

        <a href="mailto:hyesulee0608@gmail.com">
          <img
            src="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI"
            alt="gmail"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
