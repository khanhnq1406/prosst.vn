import Industry from "../components/industry";
import Overview from "../components/overview";
export default function Root() {
  return (
    <>
      <div className="home">
        <section className="overview">
          <Overview />
        </section>
        <section className="industry">
          <Industry />
        </section>
      </div>
    </>
  );
}
