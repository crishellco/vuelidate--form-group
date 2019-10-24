<template>
  <section>
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
  </section>
</template>

<script>
import { helpers, required, minLength } from "vuelidate/lib/validators";

const alpha = helpers.regex("alpha", /^[a-zA-Z\s]*$/);

export default {
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
