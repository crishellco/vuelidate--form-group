<template>
  <section>
    <form-group :validations="$v.name" class="form-group">
      <div slot-scope="{ errors, invalid }">
        <div>
          <input
            v-model="$v.name.$model"
            type="text"
            :class="{ invalid }"
            placeholder="Full name"
          />
        </div>
        <span v-for="error in errors" class="error">{{ error }}</span>
      </div>
    </form-group>
    <form-group :validations="$v.email" class="form-group">
      <div slot-scope="{ errors, invalid }">
        <div>
          <input
            v-model="$v.email.$model"
            type="email"
            :class="{ invalid }"
            placeholder="Email"
          />
        </div>
        <span v-for="error in errors" class="error">{{ error }}</span>
      </div>
    </form-group>
  </section>
</template>

<script>
import { email, helpers, required, minLength } from "vuelidate/lib/validators";

import FormGroup from "./FormGroup";

const alpha = helpers.regex("alpha", /^[a-zA-Z\s]*$/);

export default {
  components: {
    FormGroup,
  },

  data() {
    return {
      email: "",
      name: "",
    };
  },

  validations: {
    email: {
      email,
      required,
    },
    name: {
      alpha,
      minLength: minLength(10),
      required,
    }
  },
};
</script>
