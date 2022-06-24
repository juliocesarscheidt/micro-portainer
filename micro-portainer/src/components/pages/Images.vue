<template>
  <section class="flex flex-column flex-align-center pt-5 pb-5">
    <article class="flex flex-column flex-justify-center flex-align-center">
      <h1 style="text-align: center; margin-bottom: 25px;">
        Images
      </h1>
      <table class="table-data">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tags</th>
            <th>Size</th>
            <th>Created</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="image in images" v-bind:key="image.Id">
            <td>{{ image.Id }}</td>
            <td>{{ image.Tags }}</td>
            <td>{{ image.Size }}</td>
            <td>{{ image.Created }}</td>
            <td>
              <b-button variant="outline-danger" @click="remove(image.Id)">
                Remove
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { fetchImages, removeImage } from '../../services/images';

export default {
  data() {
    return {
      images: [],
    }
  },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const images = await fetchImages();
      this.images = images.map(image => ({
        Id: image.Id,
        Tags: (image.RepoTags || []).join(', '),
        Size: `${(image.Size / 1024 / 1024).toFixed(2)} MB`,
        Created: new Date(Date(image.Created)).toISOString(),
      }));
    },
    async remove(id) {
      try {
        await removeImage(id);
      } catch (exception) {
        console.error(exception);
      } finally {
        await this.fetch();
      }
    },
  },
}
</script>

<style scoped>
section {
  min-height: calc(100vh - 42px);
  width: auto;
}

section > article {
  height: auto;
  padding: 20px;
}

.table-data {
  border: 1px solid rgba(0, 0, 0, .25);
  min-width: 600px;
}

.table-data > tbody > tr:nth-child(odd) {
  background-color: #f2f2f2;
}

.table-data td {
  padding: 5px;
}

.table-data > thead, .table-data > tbody {
  text-align: center;
}

@media only screen and (max-width: 991px) {
}
</style>