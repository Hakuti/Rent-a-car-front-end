import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

const DeliTimePicker = ({ className, onChange, value, ...rest }) => (
  <TimePicker
    {...rest}
    className={className}
    popupClassName={className}
    showSecond={false}
    onChange={onChange}
    hideDisabledOptions
    minuteStep={15}
    value={value}
    use12Hours
    allowEmpty={false}
  />
);

DeliTimePicker.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(moment)
};

export default DeliTimePicker;
