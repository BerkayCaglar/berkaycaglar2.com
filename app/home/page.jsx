"use client";

import Image from "next/image";

/* import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; */

// Components
import Works from "@/components/Works";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    link: "https://nextjs.org/",
  },

  {
    name: "Tailwind CSS",
    image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    link: "https://nodejs.org/",
  },
  {
    name: "Express",
    image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    link: "https://www.mongodb.com/",
  },
];

const midProjects = [
  {
    title: "Fake For Me",
    description: "JsonGPT supported fake data generator.",
    image: "/mid-works/fake-for-me.png",
    href: "https://fakefor.me/",
  },
  {
    title: "Digital Hive",
    description: "My startup company website.",
    image: "/mid-works/startup.png",
    href: "https://hive-digital.vercel.app/",
  },
  {
    title: "Alypto Blockchain",
    description: "Alypto Blockchain website.",
    image: "/junior-works/alypto-blockchain.png",
    href: "https://alypto.netlify.app/",
  },
  {
    title: "Online XOX",
    description: "An online XOX game. Also you can play offline.",
    image: "/junior-works/online-xox.png",
    href: "https://aliblackeye-xox.netlify.app/",
  },
  {
    title: "Realtime Chat App",
    description: "A realtime chat app. Chat with your friends!",
    image: "/junior-works/realtime-chat-app.png",
    href: "https://aliblackeye-chat.netlify.app/",
  },
];

const juniorProjects = [

  {
    title: "Oceanland Clone",
    description: "A NFT marketplace clone named Oceanland.",
    image: "/junior-works/oceanland-clone.png",
    href: "https://aliblackeye-oceanland-clone.netlify.app/",
  },
  {
    title: "Age Calculator",
    description: "A simple age calculator.",
    image: "/junior-works/age-calculator.png",
    href: "https://alikaragoz-projects.vercel.app/junior/age-calculator",
  },
  {
    title: "News Page",
    description: "A news page.",
    image: "/junior-works/news-page.png",
    href: "https://alikaragoz-projects.vercel.app/junior/news-page",
  },
  {
    title: "hCaptcha",
    description: "A HCaptcha.",
    image: "/junior-works/hcaptcha.png",
    href: "https://alikaragoz-projects.vercel.app/junior/hcaptcha",
  },
  {
    title: "Restaurant App",
    description: "A responsive restaurant app. See the menu!",
    image: "/junior-works/restaurant-app.png",
    href: "https://aliblackeye-restaurant.netlify.app/",
  },
  
];

const internProjects = [

  {
    title: "Three Column Card",
    description: "A three column card.",
    image: "/intern-works/three-column-card.png",
    href: "https://alikaragoz-projects.vercel.app/intern/three-column-card",
  },

  {
    title: "Huddle Landing",
    description: "A huddle landing page.",
    image: "/intern-works/huddle-landing.png",
    href: "https://alikaragoz-projects.vercel.app/intern/huddle-landing",
  },
  {
    title: "Ping Single Column",
    description: "A ping single column.",
    image: "/intern-works/ping-single-column.png",
    href: "https://alikaragoz-projects.vercel.app/intern/ping-single-column",
  },
  {
    title: "Single Price Grid",
    description: "A single price grid.",
    image: "/intern-works/single-price-grid.png",
    href: "https://alikaragoz-projects.vercel.app/intern/single-price-grid",
  },
  {
    title: "Sign Up Form",
    description: "A sign up form with validation.",
    image: "/intern-works/sign-up-form.png",
    href: "https://alikaragoz-projects.vercel.app/intern/sign-up-form",
  },
  {
    title: "Base Apparel",
    description: "A base apparel.",
    image: "/intern-works/base-apparel.png",
    href: "https://alikaragoz-projects.vercel.app/intern/base-apparel",
  },
  {
    title: "Four Cards",
    description: "A four cards.",
    image: "/intern-works/four-cards.png",
    href: "https://alikaragoz-projects.vercel.app/intern/four-cards",
  },
  {
    title: "Article Preview",
    description: "An article preview.",
    image: "/intern-works/article-preview.png",
    href: "https://alikaragoz-projects.vercel.app/intern/article-preview",
  },
  {
    title: "Social Proof",
    description: "A social proof.",
    image: "/intern-works/social-proof.png",
    href: "https://alikaragoz-projects.vercel.app/intern/social-proof",
  },
  {
    title: "FAQ Accordion",
    description: "A FAQ accordion.",
    image: "/intern-works/faq-accordion.png",
    href: "https://alikaragoz-projects.vercel.app/intern/faq-accordion",
  },
  {
    title: "Profile Card",
    description: "A profile card.",
    image: "/intern-works/profile-card.png",
    href: "https://alikaragoz-projects.vercel.app/intern/profile-card",
  },

  {
    title: "Stats Preview",
    description: "A stats preview.",
    image: "/intern-works/stats-preview.png",
    href: "https://alikaragoz-projects.vercel.app/intern/stats-preview",
  },
  {
    title: "Order Summary",
    description: "An order summary.",
    image: "/intern-works/order-summary.png",
    href: "https://alikaragoz-projects.vercel.app/intern/order-summary",
  },
  {
    title: "QR Code",
    description: "A QR code.",
    image: "/intern-works/qr-code.png",
    href: "https://alikaragoz-projects.vercel.app/intern/qr-code",
  },
  {
    title: "Interactive Rating",
    description: "An interactive rating.",
    image: "/intern-works/interactive-rating.png",
    href: "https://alikaragoz-projects.vercel.app/intern/interactive-rating",
  },
  {
    title: "NFT Card",
    description: "An NFT card.",
    image: "/intern-works/nft-card.png",
    href: "https://alikaragoz-projects.vercel.app/intern/nft-card",
  },
  {
    title: "Product Preview Card",
    description: "A product preview.",
    image: "/intern-works/product-preview-card.png",
    href: "https://alikaragoz-projects.vercel.app/intern/product-preview-card",
  },

  {
    title: "Results Summary",
    description: "A results summary.",
    image: "/intern-works/results-summary.png",
    href: "https://alikaragoz-projects.vercel.app/intern/results-summary",
  },
  {
    title: "Workit Landing Page",
    description: "A workit landing page.",
    image: "/intern-works/workit-landing-page.png",
    href: "https://alikaragoz-projects.vercel.app/intern/workit-landing-page",
  },

];


export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="home-page"
    >
      <div className="profile-wrapper">
        <div className="profile-wrapper-top">
          <Image
            src={"https://avatars.githubusercontent.com/u/80913896?v=4"}
            alt="Ali Blackeye"
            width={96}
            height={96}
            className="profile-image"
          />
          <div className="name-and-bio">
            <h1 className="profile-name">Ali Karagoz</h1>
            <span className="profile-bio">Software Developer</span>
          </div>
        </div>
        <p className="profile-description">
          A full-stack developer exploring the webverse. Crafting immersive
          experiences through coding and design. Passionate about creating
          user-friendly and visually stunning websites and apps. Experienced in
          both front-end and back-end, bringing ideas to life.
        </p>
      </div>

      {/* 
             <Swiper
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        speed={2000}
        centeredSlides={true}
        loop={true}
        modules={[Autoplay]}
        className="stack-swiper mt-4"
      >
        {technologies.map((technology) => (
          <SwiperSlide key={technology.name}>
            <Link
              href={technology.link}
              target="_blank"
              rel="noreferrer"
            >
              {technology.image ? (
                <Image
                  src={technology.image}
                  alt={technology.name}
                  width={32}
                  height={32}
                  className="profile-image rounded-full"
                />
              ) : (
                technology.name
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper> 
      */}

      {/*       <Works
        title="Mid Works"
        href="/works/mid"
      /> */}
      
      <Works
        title="Mid Works"
        workItems={midProjects}
        href="/works/mid"
      />
      <Works
        title="Junior Works"
        workItems={juniorProjects}
        href="/works/junior"
      />
      <Works
        title="Intern Works"
        href="/works/intern"
        workItems={internProjects}
      />
    </motion.div>
  );
}
