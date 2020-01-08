export default `:host {
  background-color: var(--form-action-bar-background, #fff);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  height: var(--form-action-bar-height, 64px);
  position: fixed;
  bottom: 0px;
  left: 0;
  box-shadow: none;
  transition: var(--box-shadow-transition);
}

:host ::slotted(*) {
  margin-left: 12px;
}

:host([elevation="1"]) {
  box-shadow: var(--box-shadow-2dp);
}

:host([elevation="2"]) {
  box-shadow: var(--box-shadow-3dp);
}

:host([elevation="3"]) {
  box-shadow: var(--box-shadow-4dp);
}

:host([elevation="4"]) {
  box-shadow: var(--box-shadow-6dp);
}

:host([elevation="5"]) {
  box-shadow: var(--box-shadow-8dp);
}

:host([elevation="6"]) {
  box-shadow: var(--box-shadow-12dp);
}

:host([elevation="7"]) {
  box-shadow: var(--box-shadow-16dp);
}

:host([elevation="8"]) {
  box-shadow: var(--box-shadow-24dp);
}

.content {
  display: flex;
  flex: 1;
  flex-basis: 0.000000001px;
  justify-content: flex-end;
  flex-direction: row;
}`;
