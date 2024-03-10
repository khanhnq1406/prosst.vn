import Industry from "../components/industry";
import Overview from "../components/overview";
import Strategy from "../components/strategy";
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
        <section className="strategy">
          <Strategy />
        </section>
      </div>
    </>
  );
}
