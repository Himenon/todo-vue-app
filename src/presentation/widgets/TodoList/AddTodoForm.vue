<script setup lang="ts">
import { reactive, defineProps, type FormHTMLAttributes } from "vue";
import { useForm } from "vee-validate";
import * as Validator from "../../../validator";
import { toTypedSchema } from "@vee-validate/zod";

export type AddTodoFormProps = {
  onSubmit: (data: Validator.AddTodoForm) => void;
};

const props = defineProps<AddTodoFormProps>();

const methods = useForm<Validator.AddTodoForm>({
  validationSchema: toTypedSchema(Validator.AddTodoForm),
  initialValues: reactive<Validator.AddTodoForm>({
    title: "",
  }),
  keepValuesOnUnmount: false,
});

const formProps: FormHTMLAttributes = {
  onSubmit: methods.handleSubmit((fields) => {
    props.onSubmit(fields);
    methods.resetForm();
  }),
};

const [title, titleProps] = methods.defineField("title");
</script>

<template>
  <form v-bind="formProps">
    <input name="title" v-model="title" v-bind="titleProps" />
    <button type="submit">Add Todo</button>
  </form>
</template>
