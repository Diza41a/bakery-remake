import Button from "../../../components/Button";
import S, { classes } from './styles';
import HeroImg from '../../../assets/images/hero_img.png';
import HeroTopLeftCornerImg from '../../../assets/images/hero_top-left_corner.svg';
import HeroBottomRightCornerImg from '../../../assets/images/hero_bottom-right_corner.svg';

const HeroSection = (): JSX.Element => (
  <S.HeroSection className={classes.heroContainer}>
    <div className={classes.heroTextContainer}>
      <h1 className={classes.heroTitleText}>Welcome to Lorem Ips, and Coffee Espresso!</h1>
      <p className={classes.heroBodyText}>
        The suppliers and producers we work with are at the top of their game.
        It’s our role to carry the magic from their hands to your table.
      </p>
      <Button>
        VIEW MENU
      </Button>
    </div>
    <div className={classes.heroImageContainer}>
      <img src={HeroImg} draggable={false} />
    </div>

    <div className={classes.heroTopLeftCornerImageContainer}>
      <img src={HeroTopLeftCornerImg} draggable={false} />
    </div>
    <div className={classes.heroBottomRightCornerImageContainer}>
      <img src={HeroBottomRightCornerImg} draggable={false} />
    </div>
  </S.HeroSection>
);

export default HeroSection;
