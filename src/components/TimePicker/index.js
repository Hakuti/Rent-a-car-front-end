import styled from "styled-components";
import TimePicker from "./TimePicker";

const StyledTimePicker = styled(TimePicker)`
  & .rc-time-picker-panel-select-option-selected {
    background-color: #edeffe;
    font-weight: normal;
  }

  & .rc-time-picker-clear,
  & .rc-time-picker-clear-icon:after {
    font-size: 15px;
  }
  & .rc-time-picker-panel {
      position: absolute;
      top: 1000px;

  }
  & .rc-time-picker-panel-select,
  & .rc-time-picker-input,
  & .rc-time-picker-panel-input {
    font-family: "Consolas", sans-serif;
    font-size: 16px;
    cursor: pointer;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;

export default StyledTimePicker;
