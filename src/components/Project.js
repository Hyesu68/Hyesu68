const Project = () => {
  return (
    <div className="project">
      <div className="project_title">
        <h1 className="project_heading">Project</h1>
      </div>
      <div className="project_row">
        <div className="project_box">
          <div className="project_image">
            <a href="https://github.com/Hyesu68/Picstagram">
              <img
                className="project_img"
                alt="mymoviestar"
                src="https://user-images.githubusercontent.com/40760917/268475559-9bfb557b-9e5b-4d81-9381-e0a47592829f.jpeg"
              />
            </a>
          </div>
          <div className="box_info">
            <h1 className="box_title">Social Media App</h1>
            <p className="box_company">Picstagram</p>
            <p className="box_content">
              Picstagram is a React-based web application designed with a
              primary focus on mobile devices, offering a seamless experience
              for photo sharing and social interaction.
            </p>
            <a href="https://github.com/Hyesu68/Picstagram" alt="github">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
                class="icon_image"
              />
            </a>
          </div>
        </div>

        <div className="project_box">
          <div className="project_image">
            <a href="https://github.com/Hyesu68/MyMovieStar">
              <img
                className="project_img"
                alt="mymoviestar"
                src="https://user-images.githubusercontent.com/40760917/241353973-99e351d9-1b4c-4366-be2f-2309585401e6.jpg"
              />
            </a>
          </div>
          <div className="box_info">
            <h1 className="box_title">Movie Review App</h1>
            <p className="box_company">My movie star</p>
            <p className="box_content">
              A movie review application that allows users to explore current
              showing movies, search for movies, and write reviews about them.
            </p>
            <a href="https://github.com/Hyesu68/MyMovieStar" alt="github">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
                class="icon_image"
              />
            </a>
          </div>
        </div>

        <div className="project_box">
          <div className="project_image">
            <a href="https://github.com/Hyesu68/BerryMe">
              <img
                className="project_img"
                alt="berryme"
                src="https://user-images.githubusercontent.com/40760917/234770777-dd8379c2-5b15-4b46-9494-5684b0bcd699.jpg"
              />
            </a>
          </div>
          <div className="box_info">
            <h1 className="box_title">Social Media App</h1>
            <p className="box_company">BerryMe</p>
            <p className="box_content">
              Android social media application that enables users to connect
              with others, share posts, and engage in conversations.
            </p>
            <a href="https://github.com/Hyesu68/BerryMe" alt="github">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
                class="icon_image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
