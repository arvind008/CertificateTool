import React, { Component } from "react";
import { Table } from "reactstrap";
import NewManagerModal from "./NewManagerModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ManagerList extends Component {
  render() {
    const managers = this.props.managers;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>No. of Spot Awards</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!managers || managers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            managers.map(manager => (
              <tr key={manager.pk}>
                <td>{manager.name}</td>
                <td>{manager.email}</td>
                <td>{manager.phone}</td>
                <td>{manager.no_of_spot_awards}</td>
                <td align="center">
                  <NewManagerModal
                    create={false}
                    manager={manager}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={manager.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ManagerList;
