<template>
  <div
    class="app-field"
    :class="{
      primary: color === 'primary',
      contrast: color === 'contrast',
      disabled,
      error,
      textarea,
    }"
  >
    <div class="app-field__inner">
      <textarea
        v-if="textarea"
        :id="id"
        class="app-field__input"
        :value="value"
        v-bind="$attrs"
        @input="updateInput"
        @focus="focused = true"
        @blur="focused = false"
      />

      <imask-input
        v-else
        :id="id"
        :mask="mask"
        radix="."
        :unmask="true"
        class="app-field__input"
        :value="value"
        type="text"
        v-bind="$attrs"
        @input="updateInput"
        @focus="focused = true"
        @blur="focused = false"
      />

      <label
        v-if="label"
        class="app-field__label"
        :class="{
          'is-contain': isContain,
        }"
        :for="id"
      >{{ label }}
      </label>
    </div>

    <div
      v-if="details"
      class="app-field__details"
      :class="{
        visible: focused || error,
      }"
    >
      {{ details }}
    </div>
  </div>
</template>

<script>
import { uniqueId } from 'lodash'
import { IMaskComponent } from 'vue-imask'

export default {
  name: 'AppField',
  components: {
    'imask-input': IMaskComponent,
  },
  inheritAttrs: false,

  props: {
    value: {
      type: String,
      default: '',
    },

    mask: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * @type {('primary'|'contrast')}
     */
    color: {
      type: String,
      default: 'primary',
    },

    error: {
      type: Boolean,
      default: false,
    },

    details: {
      type: String,
      default: '',
    },

    textarea: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      id: uniqueId('input-'),
      focused: false,
    }
  },

  computed: {
    isContain() {
      return this.value.length !== 0
    },
  },

  methods: {
    updateInput(e) {
      const value = e?.target?.value ?? e

      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.app-field {
  position: relative;
  padding-bottom: 2.4rem;

  &__inner {
    position: relative;
    z-index: 2;
  }

  &__details {
    @include text-btn-sm;

    position: absolute;
    bottom: 4px;
    left: 1.2rem;
    z-index: -1;
    transform: translateY(-3rem);
    transition: transform 0.3s ease, color 0.3s ease, z-index 0.3s ease;
    pointer-events: none;
    will-change: transform;

    &.visible {
      z-index: 3;
      transform: translateY(0);
    }
  }

  &__input {
    position: relative;
    width: 100%;
    border: 1px solid;
    border-radius: 0.8rem;
    color: var(--text-color);
    background-color: var(--element-background);
    transition: border-color 0.3s ease, background-color 0.3s ease,
    padding 0.3s ease;
    resize: none;
  }

  &__label {
    @include text;

    position: absolute;
    top: 50%;
    left: 1.2rem;
    padding: 2px;
    border-radius: 5px;
    color: var(--text-lighten-color);
    transform: translateY(-50%);
    transition: top 0.3s ease, background-color 0.3s ease, font-size 0.3s ease,
    left 0.3s ease, color 0.3s ease;
    pointer-events: none;
    will-change: transform;

    &::before {
      position: absolute;
    }
  }

  &.primary {
    &.error {
      .app-field {
        &__details {
          color: var(--primary-darken-color);
        }

        &__input {
          border-color: var(--input-error-border-color);
        }

        &__label {
          color: var(--primary-darken-color);
        }
      }
    }

    &.disabled {
      .app-field {
        &__details {
          color: var(--input-disabled-color);
        }

        &__input {
          color: var(--input-disabled-color);
          background-color: var(--input-disabled-background-2);
          pointer-events: none;
        }

        &__label {
          color: var(--input-disabled-color);
        }
      }
    }

    .app-field {
      &__details {
        color: var(--text-lighten-color);
      }

      &__input {
        padding: 1.7rem 1.2rem;
        border-color: var(--border-color);

        @include --tablet {
          padding: 1.2rem;
        }

        &:focus {
          border-color: var(--text-lighten-color);

          + label {
            @include text-btn-sm;

            top: 0;
            left: 1rem;
            background-color: var(--element-background);
          }
        }

        @include hover {
          border-color: var(--text-lighten-color);
        }
      }

      &__label {
        &.is-contain {
          @include text-btn-sm;

          top: 0;
          left: 1rem;
          background-color: var(--element-background);
        }
      }
    }
  }

  &.contrast {
    &.error {
      .app-field {
        &__label {
          color: var(--primary-darken-color);
        }
      }
    }

    &.disabled {
      .app-field {
        &__input {
          color: var(--divider-color);
          background-color: var(--input-disabled-background);
          pointer-events: none;
        }

        &__label {
          color: var(--divider-color);
        }
      }
    }

    .app-field {
      &__details {
        color: var(--text-contrast-color);
      }

      &__input {
        padding: 2.5rem 1.2rem 0.9rem;
        border-color: transparent;

        @include --tablet {
          padding: 1.9rem 1.2rem 0.5rem;
        }

        &:focus {
          border-color: var(--input-contrast-hover-border);

          + label {
            @include text-btn-sm;

            top: 1.5rem;
            left: 1rem;

            @include --tablet {
              top: 1.2rem;
            }
          }
        }

        @include hover {
          border-color: var(--input-contrast-hover-border);
        }
      }

      &__label {
        &.is-contain {
          @include text-btn-sm;

          top: 1.5rem;
          left: 1rem;

          @include --tablet {
            top: 1.2rem;
          }
        }
      }
    }
  }

  &.textarea {
    .app-field {
      &__input {
        display: block;
      }

      &__label {
        top: 2.5rem;

        @include --tablet {
          top: 2rem;
        }
      }

      &__details {
        margin-top: 2px;
      }
    }
  }
}
</style>
