"use client";
import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image"; // Import next/image for image optimization
import designPic from "../../public/images/profile/Untitled design.png";
import TransitionEffect from "@/components/TransitionEffect";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact page description" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout>
          <div className="grid grid-cols-2 gap-4 mt-4 w-full col-span-2 xl:grid-cols-1 xl:justify-center">
            <Contact />
            <div className="xl:hidden">
              <Image
                src={designPic}
                alt="Design"
                width={500}
                height={500}
                className="w-full h-auto"
                loading="eager"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ContactPage;
