# styled-adapt
Dead simple media queries for styled-components

## Examples:

### Mobile-first approach

```jsx
import styled from 'styled-components'
import { from } from 'styled-adapt'

const Text = styled('p')`
	font-size: 14px;

	${from(640)`
		font-size: 16px;
	`}
`
```

will produce css

```css
p.uniqueClassName {
	font-size: 14px;
}

@media print, screen and (min-width: 600px) {
	p.uniqueClassName {
		font-size: 16px;
	}
}
```

### Desktop-first approach

```jsx
import styled from 'styled-components'
import { till } from 'styled-adapt'

const Text = styled('p')`
	font-size: 16px;

	${till(640)`
		font-size: 14px;
	`}
`
```

will produce css

```css
p.uniqueClassName {
	font-size: 16px;
}

@media print, screen and (max-width: 600px) {
	p.uniqueClassName {
		font-size: 14px;
	}
}
```
