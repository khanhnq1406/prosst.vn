const Description = (props) => {
  const content = props.product.content.rendered;
  const startDescription = content.search("description") + "description".length;
  const endDescription = content.search("/description");
  const description = content
    .slice(startDescription, endDescription)
    .split("<br>");
  description.pop();
  description.shift();
  const descriptionItems = description.map((des) => <p>{des}</p>);
  return (
    <div className="container">
      <div className="product-description">
        <div className="title-description">Thông số</div>
        <div className="content-description">{descriptionItems}</div>
      </div>
    </div>
  );
};

export default Description;