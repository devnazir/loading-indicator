Loading Indicator HOC for my personal react project.

# loading-indicator HOC
What is Loading Indicator? Actually, this project very simple, a HOC that is show loading at the top window. every time you scroll a window (vertically), the width of the loading indicator width will be increase  

### install
```
npm i @devnazir/top-indicator
```

### Example Usage
App.js
```
import WithLoadingIndicator from "@devnazir/top-indicator"

function App() {
  ...
}

export default WithLoadingIndicator(App)
```

index.js
```
<App colorIndicator="blue"/>
```

colorIndicator
1. blue
2. red
3. gold
4. chocolate
5. green
6. yellow

