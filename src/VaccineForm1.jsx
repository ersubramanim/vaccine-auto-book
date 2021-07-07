import React from "react";
import moment from "moment";
import ReactDOM from "react-dom";
class VaccineForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pcode: "" };
    this.state = { vadate1: "" };
    this.handlePinCode = this.handlePinCode.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlePinCode(event) {
    if (event.target.value.length <= 6) {
      this.setState({ pcode: event.target.value });
      //console.log("Pincode" + event.target.value);
    } else {
      console.log("Enter correct pin code");
    }
  }
  handleDate(event) {
    this.setState({ vadate1: moment(event.target.value).format("DD-MM-YYYY") });
    console.log("Date:" + event.target.value);
  }

  handleSubmit = async () => {
    ReactDOM.render("", document.getElementById("result"));
    ReactDOM.render("", document.getElementById("result2"));
    ReactDOM.render("", document.getElementById("vCenter"));
    const { pcode } = this.state;
    console.log(this.state.vadate1);
    const data1 = await fetch(
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=" +
        pcode +
        "&date=" +
        this.state.vadate1
    );
    const res = await data1.json();
    console.log("Data ===> ", res);
    let len = res.centers.length;
    console.log("Length:", len);
    let ca = 0;
    let cna = 0;
    if (len !== 0) {
      console.log(len, " Center Found");
      const myelement = <h1>{len} Center Found</h1>;

      ReactDOM.render(myelement, document.getElementById("vCenter"));

      for (let i = 0; i <= len - 1; i++) {
        console.log("Value of i:", i);
        //const cen = res.centers[i].sessions[i];
        //const ses = cen.sessions[i];
        const aval = res.centers[i].sessions[0].available_capacity;

        if (aval !== 0) {
          ca = ca + 1;
          console.log("Availabilty Found", ca);
          const myelement = <h1>Availabilty Found in {ca} centers</h1>;

          ReactDOM.render(myelement, document.getElementById("result"));
        } else {
          cna += 1;
          const myelement = <h1>Availabilty Not Found {cna} centers</h1>;

          ReactDOM.render(myelement, document.getElementById("result2")); //console.log("Not Found");
        }
      }
    } else {
      console.log("No Center Found");
      const myelement = <h1>No Center Found</h1>;

      ReactDOM.render(myelement, document.getElementById("vCenter"));
    }
    const data2 = await fetch(
      `/api/v2/appointment/sessions/public/calendarByPin?pincode=560048&date=05-07-2021`
    );
    const res1 = await data2.json();
    console.log("Test Data:", res1);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="pcode"
          type="number"
          required
          size="6"
          placeholder="Enter The Pin Code"
          value={this.state.value}
          onChange={this.handlePinCode}
          minLength="6"
          maxLength="6"
        />
        <br />
        <input
          id="vDate1"
          type="date"
          name="vadate1"
          value={this.state.value}
          onChange={this.handleDate}
        />
        <br />
        <input type="button" value="Book Now" onClick={this.handleSubmit} />
      </form>
    );
  }
}
export default VaccineForm1;
