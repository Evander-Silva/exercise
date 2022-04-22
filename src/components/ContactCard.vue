<template>
  <section>
    <div class="frame" />
    <div class="info">
      <img :src="contact.photo" class="photo">
      <div class="name">{{contact.name}}</div>
      <div class="cellphone">
        {{contact.cellphone}}
      </div>
      <div class="email">{{contact.email}}</div>
    </div>
    <b-button outlined type="is-warning" tag="router-link" :to="'/edit-contact?id='+contact.id">Edit</b-button>
    <b-button outlined type="is-danger" @click="deleteContact">Delete</b-button>
  </section>
</template>

<script>
export default {
  name: 'ContactCard',
  props: ['contact'],
  methods: {
    deleteContact(){
      this.$buefy.dialog.confirm({
        title: 'Delete '+this.contact.name+"?",
        message: 'Do you want to delete this contact?',
        confirmText: 'Delete contact',
        type: 'is-danger',
        onConfirm: () => {
          this.$store.dispatch('deleteContact', this.contact).then(() => {
            this.$buefy.toast.open({
              message: 'Contact successfully deleted',
              type: 'is-success'
            })
          })
        }
      })
    }
  }
}
</script>

<style scoped>
section{
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: .5rem;
  width: 20rem;
  height: fit-content;
  padding-top: .2rem;
  display: block;
}
.frame{
  background-color: rgb(209, 209, 209);
  height: 5rem;
  border-radius: .5rem .5rem 0 0;
  margin: .1rem;
  display: block;
}
.info{
  line-height: 1.5rem;
  margin-bottom: 1rem;
}
img{
  display: block;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 100%;
  border: solid .4rem white;
  margin-left: auto;
  margin-right: auto;
  margin-top: -3rem;
}
.name{
  font-weight: bold;
}
.button{
  margin: .5rem;
  margin-bottom: 1rem;
}
</style>