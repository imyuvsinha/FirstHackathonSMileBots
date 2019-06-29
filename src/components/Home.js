import React, { Component } from "react";

const styles = {
  row: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    border: "2px solid black",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleRow1 = event => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <div
          id="main"
          style={{
            marginLeft: 50,
            marginTop: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={styles.row}
            id={0}
            onClick={e => {
              e.preventDefault();
              this.handleRow1();
            }}
          >
            <div>1</div>
          </div>
          <div
            style={styles.row}
            id={1}
            onClick={e => {
              e.preventDefault();
              this.handleRow2();
            }}
          >
            1
          </div>
          <div
            style={styles.row}
            id={2}
            onClick={e => {
              e.preventDefault();
              this.handleRow3();
            }}
          >
            1
          </div>
          <div
            style={styles.row}
            id={3}
            onClick={e => {
              e.preventDefault();
              this.handleRow4();
            }}
          >
            1
          </div>
        </div>
        <div
          id="main"
          style={{ marginLeft: 50, display: "flex", justifyContent: "center" }}
        >
          <div
            style={styles.row}
            id={4}
            onClick={e => {
              e.preventDefault();
              this.handleRow5();
            }}
          >
            2
          </div>
          <div
            style={styles.row}
            id={5}
            onClick={e => {
              e.preventDefault();
              this.handleRow6();
            }}
          >
            2
          </div>
          <div
            style={styles.row}
            id={6}
            onClick={e => {
              e.preventDefault();
              this.handleRow7();
            }}
          >
            2
          </div>
          <div
            style={styles.row}
            id={7}
            onClick={e => {
              e.preventDefault();
              this.handleRow8();
            }}
          >
            2
          </div>
        </div>
        <div
          id="main"
          style={{ marginLeft: 50, display: "flex", justifyContent: "center" }}
        >
          <div
            style={styles.row}
            id={8}
            onClick={e => {
              e.preventDefault();
              this.handleRow9();
            }}
          >
            3
          </div>
          <div
            style={styles.row}
            id={9}
            onClick={e => {
              e.preventDefault();
              this.handleRow10();
            }}
          >
            3
          </div>
          <div
            style={styles.row}
            id={10}
            onClick={e => {
              e.preventDefault();
              this.handleRow11();
            }}
          >
            3
          </div>
          <div
            style={styles.row}
            id={11}
            onClick={e => {
              e.preventDefault();
              this.handleRow12();
            }}
          >
            3
          </div>
        </div>
        <div
          id="main"
          style={{ marginLeft: 50, display: "flex", justifyContent: "center" }}
        >
          <div
            style={styles.row}
            id={12}
            onClick={e => {
              e.preventDefault();
              this.handleRow13();
            }}
          >
            4
          </div>
          <div
            style={styles.row}
            id={13}
            onClick={e => {
              e.preventDefault();
              this.handleRow14();
            }}
          >
            4
          </div>
          <div
            style={styles.row}
            id={14}
            onClick={e => {
              e.preventDefault();
              this.handleRow15();
            }}
          >
            4
          </div>
          <div
            style={styles.row}
            id={15}
            onClick={e => {
              e.preventDefault();
              this.handleRow16();
            }}
          >
            4
          </div>
        </div>
      </div>
    );
  }
}
