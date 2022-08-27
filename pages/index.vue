<script setup>
import { ref, reactive, watchEffect } from 'vue'
// get posts from api
const { data: posts, pending, refresh, error  } = await useFetch('/api/posts');

// reactive form data properties
const form = reactive({
  id: '',
  content: '',
  error: false
});

const update = ref(false);

watchEffect(() => {
  if (form.content.length > 0) {
    form.error = false;
  } else {
    form.id = '';
    update.value = false;
  }
  if(form.id != '') {
    update.value = true
  }
});

async function post(event) {
  event.preventDefault();

  // validate form data
  form.error = false;
  if (!form.content.trim()) {
    form.error = true;
    return;
  }

  // post form data to api
  await $fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify(form)
  });
  refresh();
  // reset form data
  form.id = '';
  form.content = '';
}
// Select for update
async function select({id, title, content}) {
  form.id = id;
  form.content = title +' || '+content;
}

// Delete post
async function deletePost(id) {
  await $fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });
  refresh();
}





useHead(() => {
  return {
    title: 'Hello World',
    meta: [
      {
        name: 'description',
        content: 'This is a crud.'
      }
    ]
  }
})
</script>

<template>
  <div class="container row justify-content-center">
    <div class="my-5 col-12 col-md-8 border border-light rounded px-0">
      <div class="border-bottom border-light mb-4">
        <!--single line form-->
        <form @submit="post" class="row">
          <div class="form-group col">
            <input
              type="text"
              name="content"
              v-model.trim="form.content"
              class="form-control" :class="form.error ? 'is-invalid ' : ''"
              placeholder="Title || Content"
            />
          </div>
          <div class="col-2 mr-0">
            <button type="submit" class="btn btn-primary w-100">{{ update ? "Update" : "Add" }}</button>
          </div>
        </form>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <th scope="row" class="align-middle">{{ post.id }}</th>
            <td class="align-middle">{{ post.title }}</td>
            <td class="align-middle">{{ post.content }}</td>
            <td>
              <button class="btn btn-primary" @click="select(post)">Edit</button>
              <button class="btn btn-danger ms-3" @click="deletePost(post.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>