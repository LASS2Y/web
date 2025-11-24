import CvEntry from "../component/CvEntry";
import Navbar from "../component/Navbar";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl my-0">Curriculum Vitae</h1>
      <div className="lg:flex">
        <section className="border border-amber-50 rounded-xl p-4 m-4">
          <h2>About me</h2>
        </section>
        <section className="lg:grow">
          <h2 className="text-2xl my-8">Experience</h2>
          <CvEntry title="IT Consultant" employer="ECAM ENGINEERING CONSULT">
            <ul>
              <li>Support internal IT and engineering tools</li>
            </ul>
          </CvEntry>
        </section>
      </div>
    </>
  );
}
