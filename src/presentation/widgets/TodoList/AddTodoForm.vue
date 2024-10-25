<script setup lang="ts">
import { reactive } from 'vue';
import { z } from 'zod';
import { useForm } from 'vee-validate';

// Zodバリデーションスキーマ
const AddTodoFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
});

// Propsの定義
export type AddTodoFormProps = {
  onSubmit: (data: { title: string }) => void;
};

// Propsの受け取り
const props = defineProps<AddTodoFormProps>();

// フォームの初期化
const formData = reactive({ title: '' });
const { handleSubmit, resetForm } = useForm({
  validationSchema: AddTodoFormSchema,
  initialValues: formData,
});

// フォーム送信処理
const submitHandler = (values: { title: string }) => {
  props.onSubmit(values);
  resetForm(); // フォームのリセット
};
</script>

<template>
  <form @submit="handleSubmit">
    <input v-model="formData.title" />
    <button type="submit">Add Todo</button>
  </form>
</template>
