import imgMobile from './assets/mobile.jpg';
import imgDesktop from './assets/desktop.jpg';

const Card = () => {
  const data1 = [
    {
      id: 0,
      rating: '10k+',
      achievement: 'companies',
    },
  ];
  const data2 = [
    {
      id: 0,
      rating: '314',
      achievement: 'templates',
    },
  ];
  const data3 = [
    {
      id: 0,
      rating: '12m+',
      achievement: 'queries',
    },
  ];
  const dataOne = data1.map((statsOne) => (
    <div key={statsOne.id} className="stats-wrapper">
      <h1 className="stats-header">{statsOne.rating}</h1>
      <p className="stats-text">{statsOne.achievement}</p>
    </div>
  ));
  const dataTwo = data2.map((statsTwo) => (
    <div key={statsTwo.id} className="stats-wrapper">
      <h1 className="stats-header">{statsTwo.rating}</h1>
      <p className="stats-text">{statsTwo.achievement}</p>
    </div>
  ));
  const dataThree = data3.map((statsThree) => (
    <div key={statsThree.id} className="stats-wrapper">
      <h1 className="stats-header">{statsThree.rating}</h1>
      <p className="stats-text">{statsThree.achievement}</p>
    </div>
  ));
  return (
    <div className="card-wrapper">
      <img className="mobile_img" src={imgMobile} alt="Company-Logo" />
      <article className="article-wrapper">
        {' '}
        <h1 className="header">
          Get <span>insights</span> that help your business grow.
        </h1>
        <p className="header-text">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <article className="flex-items">
          <div>{dataOne}</div>
          <div>{dataTwo}</div>
          <div>{dataThree}</div>
        </article>
      </article>
      <img className="des_img" src={imgDesktop} alt="Company-Logo" />
    </div>
  );
};
export default Card;
