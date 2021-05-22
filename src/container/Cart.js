import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { addQuantity, removeItem, subtractQuantity } from '../actions/cartActon';

// eslint-disable-next-line react/prefer-stateless-function
class Cart extends Component {
  // to remove the item completely
  handleRemove = (id) => {
    const { removeItem } = this.props;
    removeItem(id);
  };

  // to add the quantity
  handleAddQuantity = (id) => {
    const { addQuantity } = this.props;
    addQuantity(id);
  };

  // to substruct from the quantity
  handleSubtractQuantity = (id) => {
    const { subtractQuantity } = this.props;
    subtractQuantity(id);
  };

  render() {
    const { addedItems } = this.props;
    console.log(addedItems);
    return (
      <div>
        {/* <h3>Cart</h3> */}
        {addedItems.length
          ? (
            addedItems.map((item) => (
              <>
                <div key={item.id}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div>
                  <span>{item.title}</span>
                  <p>{item.desc}</p>
                  <p>
                    <b>
                      Price:
                      $
                      {item.price}
                    </b>
                  </p>
                  <p>
                    <b>
                      Quantity:
                      {item.quantity}
                    </b>
                  </p>
                </div>
                <div>
                  <Link to="/cart"><ArrowDropUpIcon onClick={() => { this.handleAddQuantity(item.id); }} /></Link>
                  <Link to="/cart"><ArrowDropDownIcon onClick={() => { this.handleSubtractQuantity(item.id); }} /></Link>
                </div>
                <Button variant="contained" color="secondary" onClick={() => { this.handleRemove(item.id); }}>
                  Remove
                </Button>
              </>
            ))
          )
          : (
            <p>Nothing!</p>
          )}
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">
            {addedItems}
          </ul>
        </div>
      </div>
    );
    // return (
    //   <div className="container">
    //     <div className="cart">
    //       <h5>You have ordered:</h5>
    //       <ul className="collection">
    //         {addedItems}
    //       </ul>
    //     </div>
    //   </div>
    // );
  }
}

Cart.propTypes = {
  addedItems: PropTypes.instanceOf(Array).isRequired,
  removeItem: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subtractQuantity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  addedItems: state.addedItems,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => { dispatch(removeItem(id)); },
  addQuantity: (id) => { dispatch(addQuantity(id)); },
  subtractQuantity: (id) => { dispatch(subtractQuantity(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
