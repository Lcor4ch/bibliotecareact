import React from "react";

class PersonaListItem extends React.Component {
  state = [];

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this)
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default PersonaListItem;
