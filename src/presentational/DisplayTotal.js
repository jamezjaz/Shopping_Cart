import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DisplayTotal = (props) => {
  const { total, addShipping, subtractShipping } = props;
  const handleChecked = (e) => {
    if (e.target.checked) {
      addShipping();
    } else {
      subtractShipping();
    }
  };

  const shipping = React.createRef();
  useEffect(() => {
    if (shipping.checked) {
      subtractShipping();
    }
  });

  return (
    <div>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" id="checkbox" ref={shipping} onChange={handleChecked} />
          <span>Shipping(+$5)</span>
        </label>
        <h4>
          Total:
          $
          {total}
        </h4>
      </div>
      <div>
        <Button variant="contained" color="primary">Checkout</Button>
      </div>
    </div>
  );
};

DisplayTotal.propTypes = {
  total: PropTypes.number.isRequired,
  addShipping: PropTypes.func.isRequired,
  subtractShipping: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  total: state.total,
});

const mapDispatchToProps = (dispatch) => ({
  addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }); },
  subtractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTotal);
