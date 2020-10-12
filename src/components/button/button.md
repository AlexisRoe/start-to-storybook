# Beware of use buttons

default button css-classes so a-link, the regular button and form buttons look the same

```
.button {
  border: 0;
  border-radius: 0.25rem;
  background: #1E88E5;
  color: white;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
}

.button:hover,
.button:focus {
    background: #0053ba;
}

.button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

.button:active {
    transform: scale(0.99);
}

```
