<script lang="ts">

</script>

<template>
<section id="overview" class="mx-auto w-4/5 mb-16 mt-4">
  <h1 class="text-4xl font-semibold my-8">
    CONTACT ME
  </h1>
  <p>
    Want to reach out and connect with me?
  </p>
  <p>
    Fill out the quick form below, or contact me directly at melodiej@umich.edu
  </p>
</section>

<section id="contact-form" class="mx-auto w-4/5 mb-16 mt-4 grid">
  <!-- <form action="/action_page.php">
    <div class="form-item">
      <label for="name">Your name:</label>
      <input type="text" id="name" name="name"/>
    </div>

    <div class="form-item">
      <label for="email">Your email address:</label>
      <input type="text" id="email" name="email"/>
    </div>

    <div class="form-item">
      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject"/>
    </div>

    <div class="form-item">
      <label for="message">Message:</label>
      <input type="text" id="message" name="message"/>
    </div>

    <input type="submit" value="Submit">
  </form> -->


  <form class="w-full max-w-lg">
    <div class="flex flex-wrap">
      <div class="w-full">
        <label class="text-sm mb-2" for="contact-name">
          Your name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="contact-name" type="text" placeholder="Your name here">
        <!-- <p class="text-red-500 text-xs italic">
          Please fill out this field.
        </p> -->
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full">
        <label class="text-sm mb-2" for="contact-email">
          Your email address
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="contact-email" type="text" placeholder="name@example.com">
        <!-- <p class="text-red-500 text-xs italic">
          Please fill out this field.
        </p> -->
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full">
        <label class="text-sm mb-2" for="contact-subject">
          Subject
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="contact-subject" type="text" placeholder="Your password here">
        <!-- <p class="text-gray-600 text-xs italic">
          Make it as long and as crazy as you'd like
        </p> -->
      </div>
      <div class="w-full">
        <label class="text-sm mb-2" for="contact-subject">
          Message
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="contact-message" type="text">
        <!-- <p class="text-gray-600 text-xs italic">
          Make it as long and as crazy as you'd like
        </p> -->
      </div>
    </div>
  </form>
</section>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-item {
  display: flex;
  flex-direction: column;
  /* font-size: 1.25rem; */
}
.form-item > input {
  padding: 0.5rem;
  /* border-radius: 0.25rem; */
  outline: none;
  /* border: none; */
}

</style>