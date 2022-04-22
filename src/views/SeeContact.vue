<template>
  <section>
    <b-button tag="router-link" to="/">Return</b-button>
    <div class="contact-card">
      <div class="frame" />
      <div class="info">
        <img :src="contact.photo" class="photo" />
        <div class="name">Name: {{ contact.name }}</div>
        <div>Contact: {{ contact.cellphone }}</div>
        <div>E-mail: {{ contact.email }}</div>
        <div>ID: {{ contact.id }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SeeContact",
  data() {
    return {
      contact: {},
    };
  },
  methods: {
    findContact(id) {
      this.contact = this.$store.state.contacts.find(
        (element) => element.id == id
      );
    },
  },
  mounted() {
    if (this.$route.query.id) {
      this.findContact(this.$route.query.id);
    }
  },
};
</script>

<style scoped>
.contact-card {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  width: 20rem;
  height: fit-content;
  padding-top: 0.2rem;
  padding-bottom: 1rem;
  display: block;
  margin: auto;
}
.frame {
  background-color: rgb(209, 209, 209);
  height: 5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  margin: 0.1rem;
  display: block;
}
.info {
  line-height: 1.5rem;
  margin-bottom: 1rem;
}
img {
  display: block;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 100%;
  border: solid 0.4rem white;
  margin-left: auto;
  margin-right: auto;
  margin-top: -3rem;
}
.button{

}
</style>