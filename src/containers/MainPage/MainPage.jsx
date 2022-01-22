import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__title">
        <div className="main-page__title__lineOne">Pokemon</div>
        <div className="main-page__title__lineTwo">Battle Game!</div>
      </div>
      <div className="main-page__loading">..Loading..</div>
    </div>
  );
};

export default MainPage;
