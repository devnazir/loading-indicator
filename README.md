Loading Indicator HOC for my personal react project.

# loading-indicator HOC
What is Loading Indicator? Actually, this project very simple, the HOC will show a loading at the top window. every time you scroll a window (vertically), the width of the loading indicator will be increase  

see the codesandbox: https://codesandbox.io/s/loading-indicator-oo4o4

### Install
```
npm i @devnazir/top-indicator
```

### Example Usage
App.js
```
import WithLoadingIndicator from "@devnazir/top-indicator";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default WithLoadingIndicator(App);
```

index.js
```
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App colorIndicator="blue"/>
  </StrictMode>,
  rootElement
);
```

#### Props
| colorIndicator |
| --------------- |
| blue   |
| red |
| gold |
| chocolate |
| green |
| yellow |

if you want change the color, you can override css the id of the element loading indicator like this:
```
#loading-indicator {
  background-color: color !important
}
```

Enjoy 👌
