import Achievement from "../components/achievement";
import Customer from "../components/customer";
import Footer from "../../../prosst-react/src/components/footer";
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
        <section className="achievement">
          <Achievement />
        </section>
        <section className="customer">
          <Customer />
        </section>
        <section className="footer-custom">
          <Footer />
        </section>
      </div>
    </>
  );
}
