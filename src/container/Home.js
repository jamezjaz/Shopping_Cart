import React from 'react';
import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import homeStyles from '../styles/homeStyles.module.css';
import { addToCart } from '../actions/cartActon';

const Home = (props) => {
  const { items } = props;

  const handleClick = (id) => {
    addToCart(id);
    console.log('Added to cart');
  };

  return (
    <div className={homeStyles.container}>
      {items.map((item) => (
        <Card className={homeStyles.root} key={item.id}>
          <CardActionArea>
            <CardMedia className={homeStyles.media}>
              <img src={item.img} className={homeStyles.img} alt={item.title} />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <span className="card-title">{item.title}</span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.desc}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>
                  Price:
                  $
                  {item.price}
                </b>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" color="secondary" onClick={() => { handleClick(item.id); }}>
              <Link to="/cart">
                <AddIcon />
              </Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

Home.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(
  )).isRequired,
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => { dispatch(addToCart(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
