<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <Form/>
  </div>
</template>

<script>
import Form from "./components/Form";

export default {
  name: "App",
  components: {
    Form
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

::-webkit-input-placeholder {
  color: #ccc;
}

.error {
  font-size: 0.75rem;
  color: red;
}

.error + .error {
  margin-left: 0.5rem;
}

input {
  appearance: none;
  background: #f2f2f2;
  border: 2px solid transparent;
  border-radius: 0.2rem;
  font-size: 1rem;
  padding: 0.5rem;
  width: 20rem;
}

input:focus {
  outline: none;
  border-color: #41b883;
}

input.invalid {
  background: rgba(255, 0, 0, 0.1);
  border-color: red;
}
</style>
