import Introduction from "../components/introduction";
import Overview from "../components/overview";
import Product from "../components/product";

export default function Root() {
  return (
    <>
      <div className="home">
        <section className="overview">
          <Overview />
        </section>
        <section className="introduction">
          <Introduction />
        </section>
        <section className="product">
          <Product />
        </section>
      </div>
    </>
  );
}
