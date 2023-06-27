import classes from './home.module.css';
import data from '../../assets/dogs.json' 
import Card from '../card/Card';
const Home = () => {

 
console.log(data);

  return (
    <>
      <div className={classes.circle}>
        <div className={classes.mainPage}>
          <h2 className={classes.hometitle}>עזרו לי למצוא בית</h2>
          <div className={classes.sorting}>סינון</div>

          <div className={classes.dogsContainer}>
          {
              data.dogs.map((card) => {
                  return <Card data={card} key={card.id} />;
                })
                }
                </div>


        </div>
      </div>
    </>
  );
};

export default Home;
