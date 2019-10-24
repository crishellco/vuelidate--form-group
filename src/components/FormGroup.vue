<script>
import _ from "lodash";

// curly brace syntax
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

// this would most likely be in a language file
const TEMPLATES_MAP = {
  alpha: "Alphanumeric characters only.",
  minLength: "Must have a length no less than {{min}}.",
  required: "Required field."
};

export default {
  props: {
    validations: {
      required: true,
      type: Object
    }
  },

  computed: {
    errors() {
      if (!this.invalid) {
        return [];
      }

      return Object.keys(this.validations.$params).reduce(
        (errors, validator) => {
          if (!this.validations[validator]) {
            const compiled = _.template(TEMPLATES_MAP[validator]);

            errors.push(compiled(this.validations.$params[validator]));
          }

          return errors;
        },
        []
      );
    },

    invalid() {
      return this.validations.$dirty && this.validations.$invalid;
    }
  },

  render() {
    return this.$scopedSlots.default({
      errors: this.errors,
      invalid: this.invalid
    });
  }
};
</script>