<template>
  <section class="flex flex-column flex-align-center pt-5 pb-5">
    <article class="flex flex-column flex-justify-center flex-align-center">
      <h1 style="text-align: center; margin-bottom: 25px;">
        Nginx Proxy for Docker API
      </h1>
      <table class="table-containers">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>State</th>
            <th>Status</th>
            <th>Image</th>
            <th>Command</th>
            <th>Created</th>
            <th>Pause</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="container in containers" v-bind:key="container.Id">
            <td>{{ container.Id }}</td>
            <td>{{ container.Name }}</td>
            <td>{{ container.State }}</td>
            <td>{{ container.Status }}</td>
            <td>{{ container.Image }}</td>
            <td>{{ container.Command }}</td>
            <td>{{ container.Created }}</td>
            <td>
              <button class="btn" @click="pauseUnpause(container.Id, container.State)">
                {{ container.State === 'paused' ? 'Unpause' : 'Pause' }}
              </button>
            </td>
            <td>
              <button class="btn" @click="remove(container.Id)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import { fetchContainers, pauseUnpauseContainer, removeContainer } from '../../services/containers';

export default {
  components: {
  },
  directives: {
  },
  filters: {
  },
  mixins: [
  ],
  props: {
  },
  data() {
    return {
      containers: [],
    }
  },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  watch: {
  },
  beforeMount() {
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const containers = await fetchContainers();
      this.containers = containers.map(container => ({
        Id: container.Id.toString().substring(0, 12),
        Name: container.Names[0].toString().replace(/^\//, ''),
        State: container.State,
        Status: container.Status,
        Image: container.Image,
        Command: container.Command,
        Created: new Date(Date(container.Created)).toISOString(),
      }));
      console.log('this.containers', this.containers);
    },
    async pauseUnpause(id, state) {
      let op = 'pause';
      if (state === 'paused') op = 'unpause';
      try {
        await pauseUnpauseContainer(id, op);
      } catch (exception) {
        console.error(exception);
      } finally {
        await this.fetch();
      }
    },
    async remove(id) {
      try {
        await removeContainer(id);
      } catch (exception) {
        console.error(exception);
      } finally {
        await this.fetch();
      }
    },
  },
  beforeDestroy() {
  },
  destroyed() {
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

.table-containers {
  border: 1px solid rgba(0, 0, 0, .25);
}

.table-containers > tbody > tr:nth-child(odd) {
  background-color: #f2f2f2;
}

.table-containers > thead, .table-containers > tbody {
  text-align: center;
}

.btn {
  outline: none;
  border: none;
  padding: 10px;
  min-width: 60px;
  background-color: #444;
  color: #fff;
  cursor: pointer;
  border-radius: 0.3em;
}

@media only screen and (max-width: 991px) {
}
</style>