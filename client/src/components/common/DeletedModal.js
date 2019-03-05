import React, { Component } from "react";
import { Confirm } from "semantic-ui-react";

class DeleteAcct extends Component {
  constructor(props) {
    super(props);
    this.state = { isDelete: false };
  }

  render() {
    return (
      <div>
        <Confirm
          header="Delete Account"
          onCancel={this.setState({ isDelete: false })}
          onConfirm={this.setState({ isDelete: true })}
        />
      </div>
    );
  }
}

export default DeleteAcct;
