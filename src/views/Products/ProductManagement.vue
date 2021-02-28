<template>
<v-app>
  <v-card
    class="mx-auto"
    width="95%"
  >
    <v-card-text>
    <div><h2>Management Product</h2></div>
    <v-col cols="12">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-width="400"
  src="https://picsum.photos/id/11/500/300"
></v-img>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name Product"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
    </v-col>
    </v-card-text>
   

    <v-expand-transition>
    
    </v-expand-transition>
  </v-card>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        // v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],

      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>