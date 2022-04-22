<template>
  <section>
    <b-button class="add-button" tag="router-link" to="/add-contact"
      >Add Contact</b-button
    >
    <div class="schedule" v-if="contacts.length > 0">
      <contact-card
        v-for="(contact, i) in contacts"
        :key="i"
        :contact="contact"
      />
    </div>
    <div v-else>No contacts.</div>
  </section>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
export default {
  name: "ContactPanel",
  components: {
    ContactCard,
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
};
</script>

<style scoped>
.schedule {
  display: grid;
  grid-template-columns: 20rem 20rem 20rem;
  gap: 1rem;
  width: fit-content;
  max-width: 64rem;
  margin: auto;
}
.add-button {
  margin: 1rem auto 1rem auto;
}

@media (max-width: 1020px) {
  .schedule {
    grid-template-columns: 20rem 20rem;
  }
}

@media (max-width: 690px) {
  .schedule {
    grid-template-columns: auto;
  }
}
</style>