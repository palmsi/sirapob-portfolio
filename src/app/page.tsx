// app/page.tsx or pages/index.js (depending on your setup)

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 font-sans max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16 bg-gradient-to-b from-blue-50 to-white py-12 rounded-xl shadow-md">
        <Image
          src="/profile.jpg"
          alt="Sirapob Sithi"
          width={128}
          height={128}
          className="mx-auto rounded-full shadow-lg mb-4 object-cover"
        />
        <h1 className="text-4xl sm:text-6xl font-bold mb-4"><blockquote>Hi, I'm Sirapob Sithi</blockquote></h1>
        <p className="text-xl text-gray-600 mb-6">Web Developer</p>
        <Link href="#projects" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">View My Work</Link>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <blockquote className="text-gray-700 leading-relaxed">
            I'm a self-taught web developer with a strong passion for building modern, 
            responsive web applications using frameworks like Next.js and Laravel. My nickname is <strong>Palm</strong> and I was born on <strong>May 6, 1997</strong>. I am currently working for the <strong>Royal Thai Navy</strong> as a developer.
            <br /><br />
            I want to be honest that I can't do everything by myself. I always use tools like ChatGPT to help me solve problems, understand coding logic, and improve my systems. I combine what I know with the support of these tools to build real solutions that work. I dedicate time every day to learning and improving, especially in the area of AI development. I'm currently seeking freelance opportunities where I can apply my skills and continue growing as a developer.
          </blockquote>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="text-gray-700 list-disc list-inside">
            <li><strong><blockquote>Bachelor's Degree in Computer Science</blockquote></strong> — Chiang Mai University, Thailand</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="border p-6 rounded-xl shadow-md bg-blue-50 border-blue-300">
            <h3 className="text-xl font-bold mb-2 text-blue-800">🚨 Emergency Request System (sos.navy.mi.th)</h3>
            <blockquote className="text-gray-800 mb-4">
              My proudest project: a mission-critical system built for the Royal Thai Navy to manage and respond to emergency assistance requests from the public.
              The platform handles case registration, tracking, and admin management, ensuring smooth coordination between citizens and response units.
              Built using modern technologies including Next.js, NextAPI, NextAuth, Prisma, and MariaDB.
            </blockquote>
            <a href="https://sos.navy.mi.th" className="text-blue-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>

          {/* Project 2 */}
          <div className="border p-6 rounded-xl shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">Testing Student Management</h3>
            <blockquote className="text-gray-700 mb-4">
              An internal examination management system developed for the Royal Thai Navy.
              The system covers the entire testing process — from student registration and profile verification
              to seat arrangement, score management, and results announcement.
              Built using the Laravel framework.
            </blockquote>
          </div>

          {/* Project 3 */}
          <div className="border p-6 rounded-xl shadow-md bg-white">
            <h3 className="text-xl font-bold mb-2">Pastel Keyboard - VIP Premium</h3>
            <p className="text-gray-700 mb-4">
              I contributed to the development of <strong>Pastel Keyboard</strong>, a popular mobile application available on Google Play with over 500,000 downloads.
              This keyboard app features customizable pastel themes, translation, and gesture features.
              I worked on improving the app functionality and user experience using Objective-C and Swift within Xcode.
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.iappcreation.pastelkeyboardfree&hl=en&pli=1" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View on Google Play</a>
          </div>
        </div>
      </section>

      {/* Skills + Learning Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Frontend: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Laravel, PHP, MaterialUI</li>
            <li>Backend: Node.js, Express.js, Prisma, REST API</li>
            <li>Database: SQL, MariaDB</li>
            <li>Tools: Git, GitHub, VS Code, Postman</li>
          </ul>
        </div>

        <div className="bg-white border p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Currently Learning</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>AI fundamentals and model integration</li>
            <li>Chatbot AI in websites (OpenAI, LangChain)</li>
            <li>Python for backend automation and AI development</li>
            <li>GraphQL and Facebook Graph API</li>
            <li>Docker for containerized deployments</li>
            <li>Kubernetes for orchestrating scalable apps</li>
            <li>Microservice architecture design</li>
          </ul>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-3xl mx-auto mb-20 bg-white border p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="text-gray-700 list-disc list-inside">
          <li><strong>Laravel Developer</strong> at Siripantawee (Software House)</li>
          <li><strong>iOS Developer</strong> at i-App Creation Co.,Ltd. — developed and improved iOS applications</li>
        </ul>
      </section>

      {/* Inspiration Quote Section */}
      <section className="max-w-3xl mx-auto mb-20 bg-blue-50 p-8 rounded-xl shadow-md text-center">
        <blockquote className="text-xl italic text-gray-700">"What I don't know today, I'll learn tomorrow."</blockquote>
        <p className="mt-4 text-gray-600">— My guiding mindset</p>
        <p className="mt-4 text-gray-700">This quote reflects my approach to learning and growth: every unknown is just a challenge waiting to be understood with effort and persistence.</p>
      </section>

      {/* Contact Section */}
      <section className="text-center bg-gradient-to-t from-blue-50 to-white py-12 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-700 mb-4">Reach me by email or connect on GitHub.</p>
        <p className="text-blue-600">sirapob.sithi@gmail.com | <a href="https://github.com/sirapob" className="underline">GitHub</a></p>
      </section>
    </main>
  );
}
