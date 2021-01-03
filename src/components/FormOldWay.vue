<template>
  <section>
    <div class="form-group">
      <div>
        <input
          v-model="$v.name.$model"
          type="text"
          :class="{invalid: $v.name.$dirty && $v.name.$invalid}"
          placeholder="Full name"
        >
      </div>
      <template v-if="$v.name.$dirty && $v.name.$invalid">
        <span v-if="!$v.name.alpha" class="error">Alphanumeric characters only.</span>
        <span
          v-if="!$v.name.minLength"
          class="error"
        >Must have a length no less than {{$v.name.$params.minLength.min}}.</span>
        <span v-if="!$v.name.required" class="error">Required field.</span>
      </template>
    </div>
    
    <div class="form-group">
      <div>
        <input
          v-model="$v.email.$model"
          type="email"
          :class="{invalid: $v.email.$dirty && $v.email.$invalid}"
          placeholder="Email"
        >
      </div>
      <template v-if="$v.email.$dirty && $v.email.$invalid">
        <span v-if="!$v.email.email" class="error">Must be a valid email address.</span>
        <span v-if="!$v.email.required" class="error">Required field.</span>
      </template>
    </div>
  </section>
</template>

<script>
import { email, helpers, required, minLength } from "vuelidate/lib/validators";

const alpha = helpers.regex("alpha", /^[a-zA-Z\s]*$/);

export default {
  data() {
    return {
      email: "",
      name: ""
    };
  },

  validations: {
    email: {
      email,
      required
    },
    name: {
      alpha,
      minLength: minLength(10),
      required
    }
  }
};
</script>
