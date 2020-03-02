import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
      currentPrevPage: null
    };
  }
  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = values => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  findPrevPage = itemToFind => {
    console.log(itemToFind);
    return function(element) {
      console.log(element);
      return element.page == itemToFind;
    };
    // console.log(element);
    // console.log(this);
    // return element.page === this
  };
  findCurrentPage = page => {
    console.log(page);
    let currentPage = page;
    // let prevPage = page - 1
    // return (item) => {
    // console.log(currentPage);
    // if(currentPage > 0){
    //     let prevPage = page - 1
    //     console.log(item.page === prevPage);
    //     return item.page === prevPage
    // }else {
    //     console.log('here');
    //     return null
    // }
    //     return item.page === page
    // };
    return item => item.page === page;
  };

  returnValues = (values, currentPage) => {
    let page = currentPage;
    let prevPage = currentPage - 1;
    //Find current page
    let result = values.find(this.findCurrentPage(page));
    //Find previous page
    let result2 = values.filter(this.findPrevPage(prevPage));
    result2 = result2[0];
    let combinedResult = { prevPage: result2, currentPage: result };
    console.log(result2);
    console.log(result);
    console.log(combinedResult);
    return combinedResult;
    // return result ? result.title: null;
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    const pageDefined = [
      { title: "Details", page: 0 },
      { title: "Shipper", page: 1 }
    ];
    const { prevPage, currentPage } = this.returnValues(pageDefined, page);
    console.log(prevPage);
    console.log(currentPage);
    /**
     * In order to make this work
     */
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div>{prevPage ? prevPage.title : null}</div>
            <div style={{ ...styles.wizardHeaderTitle }}>Add Car Details</div>
            <div style={{ ...styles.currentPage }}>
              Step {page} of 6 - {currentPage.title}
            </div>
            <div className="buttons">
              {this.returnValues}
              {page > 0 && (
                <div
                  style={{
                    fontSize: 26,
                    marginLeft: 10,
                    color: "white",
                    ...styles.prevButton
                  }}
                  onClick={this.previous}
                >
                  <div style={{display: "flex"}}>
                    <i class="fas fa-chevron-left"></i>
                    <div
                      style={{ display: "inline", marginLeft: 5, fontSize: 16, fontFamily: 'Roboto-Italic', alignSelf: "center" }}
                    >
                      {"  "}
                      All Cars
                    </div>
                  </div>
                </div>
                // <button
                //   type="button"
                //   style={{ ...styles.prevButton }}
                //   onClick={this.previous}
                // >
                //   « Previous
                // </button>
              )}
              {!isLastPage && <button type="submit">Next »</button>}
              {isLastPage && (
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
              )}
            </div>
            {/* <pre>{this.returnValues}</pre> */}
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    );
  }
}

const styles = {
  prevButton: {
    position: "absolute",
    top: 10,
    left: 0,
    zIndex: 100
  },
  currentPage: {
    position: "absolute",
    top: 60,
    zIndex: 100,
    marginLeft: 20,
    fontFamily: "Roboto-Italic",
    color: "white",
    fontSize: 14
  },
  header: {
    position: "fixed",
    top: 0,
    height: 60,
    background: "rgb(255, 69, 0)",
    left: 0
  },
  backButton: {},
  wizardHeaderTitle: {
    position: "absolute",
    marginLeft: 20,
    fontSize: 20,
    fontFamily: "Roboto-Medium",
    color: "white",
    top: 35,
    zIndex: 100
  }
};
