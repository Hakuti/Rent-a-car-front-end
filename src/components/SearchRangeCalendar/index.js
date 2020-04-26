import React, { useState } from "react";
import {
  DayPickerRangeController,
  DayPickerSingleDateController,
} from "react-dates";
import moment from "moment";
// import { ModalProvider, Modal } from "../../GeneralModal";
import { useSelector, useDispatch } from "react-redux";
import {searchCalendarStartDate, searchCalendarEndDate } from "../../Redux/Actions/searchCalendarDate";
// import {openModal} from "../../Redux/Actions/availabilityModal";

export default function SearchRangeCalendar() {
  const SelectedStartDate = moment();
  const SelectedEndDate = moment().add(5, 'days');
  const [startDate, setStartDate] = useState(SelectedStartDate);
  const [endDate, setEndDate] = useState(SelectedEndDate);
  const reduxFocus = useSelector(
    (state) => state.searchCalendar.searchCalendarStartFocus
  );
  const [focusedInput, setFocusInput] = useState(reduxFocus);
  const [focused, setFocused] = useState(reduxFocus);
  const [date, setDate] = useState(moment());
  const dispatch = useDispatch();

  // const isModalOpen = useSelector(state => state.availabilityModal.openModal);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  const content = (props) => {
    let check = props.format("D");
    //
    // console.log(check);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
        onClick={() => {
          //   dispatch(openModal(true))
          console.log("Clicked");
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>{check}</p>
        <p style={{ margin: 0, fontWeight: 100 }}>$33</p>
      </div>
    );
  };
  const onDateChange = ({ startDate, endDate }) => {
    console.log(date);
    console.log(startDate);
    // setDate(date);
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const onFocusChange = (focusedInput) => {
      console.log(focusedInput)
    //Forced the focus states to always be truthy so date is always selectable
    // setFocused(true);
    setFocusInput(focusedInput)
  };

  const focusedInputX = (focusedInput) => {
    console.log(`focusedInput`, focusedInput);
    setFocusInput({focusedInput});
  };

  return (
    <>
      {/* <DayPickerSingleDateController */}
      {/* <DayPickerRangeController
        onDatesChange={onDateChange}
        onFocusChange={onFocusChange}
        focusedInput={focused}
        // date={date}
        // date={startDate}
        startDate={startDate}
        endDate={endDate}
        renderDayContents={content}
        // renderDayContents={content}
        daySize={50}
      /> */}
      <DayPickerRangeController
        //   ref={this.ref}
          startDate={startDate}
          endDate={endDate}
          onDatesChange={({ startDate, endDate }) => {
            // console.log(startDate);
            // console.log(endDate);
            if(endDate != null){
              dispatch(searchCalendarEndDate(endDate));
            }
            setStartDate(startDate); 
            setEndDate(endDate);
            dispatch(searchCalendarStartDate(startDate));
            // dispatch(searchCalendarEndDate(endDate));
          }}
          focusedInput={focused}
          onFocusChange={focusedInput => {
            console.log("react-dates, !!!!");
            console.log(focusedInput);
            setFocused(focusedInput || "startDate");
            // this.setState({ focusedInput: focusedInput || "startDate" });
          }}
          onBlur={() => console.log("esc")}
          numberOfMonths={2}
        />
      {/* {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          style={{
            width: 600,
            textAlign: "center",
            zIndex: 1000,
          }}
        ></Modal>
      )} */}
    </>
  );
}
