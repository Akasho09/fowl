import Twoo from "@/components/mainpage/twoImgs";
import TeenTexts from "@/components/mainpage/threeText";

const Home = () => {
  const content = {
    greeting: "Hi There! 👋 I'm Akash Ahmad Malik",
    title: "🚀 Full-Stack Web Developer | Problem Solver | Cricket Enthusiast.",
    description: `I’m a software engineer passionate about development, design, and performance. 
      Currently, I am seeking an internship opportunity where I can apply my technical skills in a real-world setting, collaborate with experienced professionals, 
      and contribute to impactful projects.`,
    connect: "Always eager to learn, build, and solve real-world problems. Let’s connect and build something amazing! 🌱💻🏏",
    links: [{
      l1: "https://drive.google.com/file/d/14WEpPVvOIJfzTyv-qBlH6rNEKZemNoHe/view?usp=drive_link",
      l2: "📄 Resume"
    }]
  };

  return (
  <div className="h-screen flex overflow-x-auto md:overflow-visible">
  <div className="h-screen border-r w-[92vw] md:w-[20rem]">
    <TeenTexts
              t1={content.greeting}
              t2={content.title}
              t3={content.connect}
              t4={content.description}
              links={content.links} />
    </div>
          <div className="h-screen flex border-r w-[92vw] md:w-[20rem]">
            <Twoo/> 
          </div>
  </div>
  )}

export default Home;