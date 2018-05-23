import React from "react";

class Footer extends React.Component {
  render() {
    let { company } = this.props;
    return (
      <footer>
        <p>All rights reserved, copyrights {company}</p>
      </footer>
    );
  }
}

export default Footer;
