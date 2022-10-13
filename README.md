# Getting Started

```
npm install
```

```
npm start
```

# Adding routes

config/routes.js

# Adding state

config/store.js

# Adding global app data

config/content.js

# Displaying popups

```
import { withPopup } from "providers/PopupProvider";

function Component({ currentPopup, showPopup }) {
    ...
}

export default withPopup(Component);