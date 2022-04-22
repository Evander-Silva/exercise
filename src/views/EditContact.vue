<template>
  <section>
    Edit Contact
    <contact-form />
  </section>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
export default {
  components: { ContactForm },
  name: 'EditContact',
  // data(){
  //   return{
  //     contact: {}
  //   }
  // },
  // methods:{
  //   findContact(id){
  //     this.contact = this.$store.state.contacts.find(element => element.id == id);
  //   }
  // },
  // mounted(){
  //   this.findContact(this.$route.query.id);
  // }
}
</script>

<style scoped>

</style>