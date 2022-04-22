<template>
  <section>
    <div
      class="photo-upload"
      v-if="previewImage != null"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="$refs.fileInput.click()"
    ></div>
    <div v-else class="photo-upload" @click="$refs.fileInput.click()">
      <img v-if="contact.photo" :src="require(contact.photo)" />
      <img v-else :src="require('../assets/img/avatar-user.jpg')" />
    </div>

    <input
      ref="fileInput"
      type="file"
      @input="pickFile"
      style="display: none"
      accept="image/png"
    />

    <b-field :label="contact.name ? 'Name' : ''" label-position="on-border">
      <b-input v-model="contact.name" placeholder="Name" />
    </b-field>
    <b-field
      :label="contact.cellphone ? 'Contact' : ''"
      label-position="on-border"
    >
      <b-input v-model="contact.cellphone" placeholder="Contact" />
    </b-field>
    <b-field :label="contact.email ? 'E-mail' : ''" label-position="on-border">
      <b-input v-model="contact.email" placeholder="E-mail" />
    </b-field>
    <b-button v-if="!editForm" type="is-success" outlined @click="addContact"
      >Add contact</b-button
    >
    <b-button v-else type="is-success" outlined @click="contactEdit"
      >Save editions</b-button
    >
    <b-button type="is-danger" outlined tag="router-link" to="/"
      >Cancel</b-button
    >
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  props: ["editContact"],
  data() {
    return {
      contact: {
        id: "",
        photo: null,
        name: "",
        cellphone: "",
        email: "",
      },
      previewImage: null,
      file: null,
      editForm: false,
    };
  },
  methods: {
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.file = file[0];
      }
    },
    addContact() {
      this.uploadPhoto();
      this.$store.dispatch("addContact", this.contact).then(() => {
        this.$buefy.dialog.alert({
          title: "Contact Added",
          message: "The contact was successfully added",
          onConfirm: () => {
            this.$router.push("/");
          },
        });
      });
    },
    contactEdit() {
      this.uploadPhoto();
      this.$store.dispatch("editContact", this.contact).then(() => {
        this.$buefy.dialog.alert({
          title: "Saved Changes",
          message: "Changes have been saved successfully",
          onConfirm: () => {
            this.$router.push("/");
          },
        });
      });
    },
    uploadPhoto() {
      if (this.file != null) {
        let reader = new FileReader();
        reader.readAsDataURL(this.file);
        reader.onloadend = () => {
          this.contact.photo = reader.result;
        };
      }
    },
    findContact(id) {
      this.contact = this.$store.state.contacts.find(
        (element) => element.id == id
      );
      this.previewImage = this.contact.photo;
    },
  },
  mounted() {
    if (this.$route.query.id) {
      this.findContact(this.$route.query.id);
      this.editForm = true;
    }
  },
};
</script>

<style scoped>
section {
  max-width: 20rem;
  margin: auto;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
}
.photo-upload {
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  border: solid rgb(190, 190, 190) 1px;
  margin: auto;
  margin-bottom: 1rem;
  background-size: cover;
  background-position: center center;
}
.photo-upload:hover {
  filter: opacity(80%);
  cursor: pointer;
}
.photo-upload img {
  border-radius: 100%;
  filter: opacity(50%);
}
.photo-upload img:hover {
  filter: opacity(80%);
  cursor: pointer;
}
.button {
  margin: 0.5rem;
}
</style>