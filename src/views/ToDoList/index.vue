<template>
  <div class="container">
    <h2 class="text-center mt-5">To Do App</h2>
  </div>

  <div class="d-flex">
    <input v-model="task" type="text" placeholder="Masukkan Task" class="form-control">
    {{task}}
    <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
  </div>

  <table class="table table-bordered mt-5">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col" class="text-center">#</th>
      <th scope="col" class="text-center">#</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task, index) in tasks" :key="index">
      <td>{{task.name}}</td>
      <td>
        <div class="text-center" @click="editTask(index)">
          <span class="fa fa-pen"></span>
        </div>
      </td>
      <td>
        <div class="text-center" @click="deleteTask(index)">
          <span class="fa fa-trash"></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return {
      task: '',
      editTask: null,

      tasks: [
        {
          name: 'Membaca beberapa diary.',
        },
        {
          name: 'Mendengarkan beberapa lagu.'
        }
      ]
    }
  },

  methods: {
    submitTask(){
      if(this.task.length === 0) return;

        this.tasks.push({
          name: this.task,
        });

      this.task = '';
    },

    deleteTask(index){
      this.tasks.splice(index, 1);
    },

    editTask(index){
      this.task = this.tasks[index].name;
      this.editTask = index;
    }
  }
};
</script>

<style scoped>
</style>
