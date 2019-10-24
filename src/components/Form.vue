<template>
  <section>
    <form-group :validations="$v.name">
      <div slot-scope="{ errors, invalid }">
        <div>
          <input v-model="$v.name.$model" type="text" :class="{invalid}" placeholder="Full name">
        </div>
        <span v-for="error in errors" class="error">{{ error }}</span>
      </div>
    </form-group>
  </section>
</template>

<script>
import { helpers, required, minLength } from "vuelidate/lib/validators";

import FormGroup from "./FormGroup";

const alpha = helpers.regex('alpha', /^[a-zA-Z\s]*$/);

export default {
  components: {
    FormGroup
  },

  data() {
    return {
      name: ""
    };
  },

  validations: {
    name: {
      alpha,
      minLength: minLength(10),
      required
    }
  }
};
</script>
