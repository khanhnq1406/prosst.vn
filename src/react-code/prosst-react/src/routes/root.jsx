import Branding from "../components/branding";
import Footer from "../components/footer";
import Introduction from "../components/introduction";
import Outstanding from "../components/outstanding";
import Overview from "../components/overview";
import Product from "../components/product";

export default function Root() {
  return (
    <>
      <div className="home">
        <section className="overview">
          <Overview />
        </section>
        {/* <section className="introduction">
          <Introduction />
        </section> */}
        <section className="outstanding">
          <Outstanding />
        </section>
        <section className="product">
          <Product />
        </section>
        <section className="branding">
          <Branding />
        </section>
        <section className="footer-custom">
          <Footer />
        </section>
      </div>
    </>
  );
}
