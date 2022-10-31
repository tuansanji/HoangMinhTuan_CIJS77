// import { useState } from "react";

// export default function Increase() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>increase</button>
//     </div>
//   );
// }

import React from "react";

class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increase}>increase</button>
      </div>
    );
  }
}

export default CounterClass;
