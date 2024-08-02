const Button = (props) => {
  const { name, btnClass } = props;
  return <button className={btnClass}>{name}</button>;
};

const element = (
  <div className="home">
    <h1 className="heading">Social Buttons</h1>
    <div className="btn-container">
      <Button name="Like" btnClass="like-btn" />
      <Button name="Share" btnClass="share-btn" />
      <Button name="Comment" btnClass="comment-btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
