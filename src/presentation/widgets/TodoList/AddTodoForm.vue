<script setup lang="ts">
import { reactive, defineProps, type FormHTMLAttributes } from 'vue';
import { useForm } from 'vee-validate';
import * as Validator from "../../../validator";


export type AddTodoFormProps = {
  onSubmit: (data: { title: string }) => void;
};

const props = defineProps<AddTodoFormProps>();

const methods = useForm<Validator.AddTodoForm>({
  validationSchema: Validator.AddTodoForm,
  initialValues: reactive<Validator.AddTodoForm>({
    title: "",
  })
});



const formProps: FormHTMLAttributes = {
  onSubmit: () => {
    methods.handleSubmit((fields) => {
      props.onSubmit(fields);
      methods.resetForm();
    })

  }
};
</script>

<template>
  <form v-bind="formProps">
    <input name="title" v-model="methods.values.title" />
    <button type="submit">Add Todo</button>
  </form>
</template>
