import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Smart Resume" },
    { name: "description", content: "AI resume feedback" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg)] bg-cover">
      <Navbar />

      <section className='main-section'>
          <div className='page-heading'>
              <h1>Track Your Resume Feedback</h1>
              <h2>Review your resume and get feedback using AI</h2>
          </div>
      </section>
  </main>
}
