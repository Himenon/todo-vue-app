<script setup lang="ts">
import {
  reactive,
  defineProps,
  type FormHTMLAttributes,
  type InputHTMLAttributes,
} from "vue";
import { useForm } from "vee-validate";
import * as Validator from "../../../validator";
import { toTypedSchema } from "@vee-validate/zod";

export type AddTodoFormProps = {
  onSubmit: (data: { title: string }) => void;
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
  placeholder: "What needs to be done?",
};

const [title, titleProps] = methods.defineField("title");
const addTodoInputProps: InputHTMLAttributes = {
  ...titleProps,
  class: "new-todo",
  name: "title",
  autofocus: true,
  onKeyup: (payload) => {
    console.log(`key = ${payload.key}`);
    // if (payload.key === "enter") {
    //   methods.handleSubmit((fields) => {
    //     props.onSubmit(fields);
    //     methods.resetForm();
    //   })();
    // }
  },
};
</script>

<template>
    <input class="new-todo" v-model="title" v-bind="addTodoInputProps" />
</template>
