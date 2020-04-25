import React, { useState } from "react";
import {
  DayPickerRangeController,
  DayPickerSingleDateController
} from "react-dates";
import moment from "moment";
import { ModalProvider, Modal } from "../../GeneralModal";
import { useSelector, useDispatch } from "react-redux";
import {openModal} from "../../Redux/Actions/availabilityModal";


export default function AvailabilityCalendar() {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [focusedInput, setFocusInput] = useState(null);
  const [focused, setFocused] = useState(null);
  const [date, setDate] = useState(moment());
  const dispatch = useDispatch();

  // const isModalOpen = useSelector(state => state.availabilityModal.openModal);

  
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const content = props => {
    let check = props.format("D");
    //
    // console.log(check);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
        onClick={() => {
          dispatch(openModal(true))
          console.log("Clicked");
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>{check}</p>
        <p style={{ margin: 0, fontWeight: 100 }}>$33</p>
      </div>
    );
  };
  const onDateChange = date => {
    console.log(date);
    setDate(date);
  };
  const onFocusChange = () => {
    //Forced the focus states to always be truthy so date is always selectable
    setFocused(true);
  };

  const focusedInputX = focusedInput => {
    console.log(`focusedInput`, focusedInput);
    setFocusInput(focusedInput);
  };

  return (
    <>
      <DayPickerSingleDateController
        onDateChange={onDateChange}
        onFocusChange={onFocusChange}
        focused={focused}
        date={date}
        renderDayContents={content}
        // renderDayContents={content}
        daySize={50}
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
