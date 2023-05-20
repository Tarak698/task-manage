<template>
  <div>
    <md-app>
      <md-app-toolbar style="display: flex; justify-content: space-between;">
        <div style="display: flex;">
          <div style="padding-right: 30px;">
            <md-button class="md-raised" @click="showDialog = true"
           
              style="background-color: rgba(33, 158, 188, 1); color: white; margin-left: 15px; margin-right: 15px; padding: 0px 25px; border-radius: 30px;">
              <b style="font-size: x-large;">+ </b> Create Task
            </md-button>
          </div>
          <div style="padding-left: 30px; border-left:1px solid black ;">
            <md-input placeholder="Search Your Query" style="width: 250px;" type="text"></md-input>
            <md-icon
              style="padding: 17px; border-radius: 0px 3px 3px 0px; padding-right: 25px; padding-left: 20px; font-size: xx-small; margin: 5px; margin-left: -10px; color: white; background: rgba(33, 158, 188, 1);">
              search</md-icon>
          </div>
        </div>



        <div style="float: right;">

          <span style="background-color: white; padding: 3px 8px; border-radius: 10px; margin-right: -10px;">
            Ranjith Rajak | Senior Developer
          </span>
          <md-avatar>
            <img src="../../public/man.png" alt="Avatar">
          </md-avatar>


          <md-icon  @click="showDialog1 = true"
            style="padding: -5px; font-size: xx-small; padding: 2px; margin: 5px; color: white; background: rgba(33, 158, 188, 1);">
            expand_more</md-icon>

        </div>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full" style="width: 80px; background-color:black;">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img src="../../public/logo-bird.png" width="50" />
        </md-toolbar>


        <div style="margin: 10px;">
          <div style="border:2px solid white; width: 50px; height: 50px; border-radius: 50px;"></div>
          <div style="color: white; text-align: center; margin-left: -8px;">HOME</div>
        </div>

        <div style="margin: 10px;">
          <div style="border:2px solid white; width: 50px; height: 50px; border-radius: 50px;"></div>
          <div style="color: white; text-align: center; margin-left: -8px;">HOME</div>
        </div>

        <div style="margin: 10px;">
          <div style="border:2px solid white; width: 50px; height: 50px; border-radius: 50px;"></div>
          <div style="color: white; text-align: center; margin-left: -8px;">HOME</div>
        </div>

        <div style="margin: 10px;">
          <div style="border:2px solid white; width: 50px; height: 50px; border-radius: 50px;"></div>
          <div style="color: white; text-align: center; margin-left: -8px;">HOME</div>
        </div>

      </md-app-drawer>

      <md-app-content>
        <div style="display: flex;">
          <div style="padding-right: 50px; border-right: 1px solid black ;">
            <img src="../../public/loo.png" />
          </div>
          <div style="padding-left: 50px; margin-top: 25px; font-size: xx-large;">
            Website Development Tracker
          </div>
        </div>

        <div class="md-layout" style="margin-top: 50px;">
          <div class="md-layout-item">
            <md-card>
              <md-card-header>
                <div class="md-title">Tasks to do</div>
                <hr>
              </md-card-header>
             
              <md-card-content>
                <div v-for="li,i,j in list" @click="d=i;  showDialog1=true; details=li.details; date=li.date; type=li.type" :key="i" v-show="li.type=='to do'">
                 <div :class="[j%2==0?'ev':'od']">
                   <span>
                     {{li.details}}
                   </span>
                   <br/>
                   <br/>
                   <b>Due Date- </b>{{li.date}}
                 </div>
                </div>
              </md-card-content>
            </md-card>
          </div>
          <div class="md-layout-item">
            <md-card>
              <md-card-header>
                <div class="md-title">In progress</div>
                <hr>
              </md-card-header>
             
              <md-card-content>
                <div v-for="li,i,j in list" @click="d=i;  showDialog1=true; details=li.details; date=li.date; type=li.type" :key="i" v-show="li.type=='in prog'">
                  <div :class="[j%2==0?'ev':'od']">
                    <span>
                      {{li.details}}
                    </span>
                    <br/>
                    <br/>
                    <b>Due Date- </b>{{li.date}}
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </div>
          <div class="md-layout-item">
            <md-card>
              <md-card-header>
                <div class="md-title">Tasks done</div>
                <hr>
              </md-card-header>
              <md-card-content>
                <div v-for="li,i,j in list" @click="d=i;  showDialog1=true; details=li.details; date=li.date; type=li.type" :key="i" v-show="li.type=='done'">
                  <div :class="[j%2==0?'ev':'od']">
                    <span>
                      {{li.details}}
                    </span>
                    <br/>
                    <br/>
                    <b>Due Date- </b>{{li.date}}
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </md-app-content>
      
    </md-app>

    <div>
      <md-dialog :md-active.sync="showDialog">
        <div style="width: 500px; padding: 15px; border-radius: 50px;">
          <md-dialog-title>Create a Task for the team</md-dialog-title>

          <hr/>
          <div style="padding: 25px;">
            <h3>Add task description*</h3>


            <md-textarea
              style="background-color: gainsboro; border: none; border-radius: 10px; width: 100%; height: 100px;"
              placeholder="feed the task guidelines and information" v-model="details" md-counter="80"></md-textarea>

            <h3>Select Task Status*</h3>
            <div>
              <md-radio v-model="type" value="to do">To do</md-radio>
              <md-radio v-model="type" value="in prog">In progress</md-radio>
              <md-radio v-model="type" value="done">Tasks done</md-radio>
            </div>

            <h3>Due date*</h3>
           
              <md-input v-model="date" placeholder="dd/mm/yyyy"  style="background-color: gainsboro; border: none; border-radius: 10px; width: 33%; height: 40px;"></md-input>
              <md-icon>event</md-icon>
           
          </div>

          <md-button class="md-raised" @click="create()"
              style="background-color: rgba(33, 158, 188, 1); color: white; margin-left: 15px; margin-right: 15px; padding: 0px 25px; border-radius: 5px;">
              Create Task
            </md-button>

         
        </div>
      </md-dialog>


    </div>

    <div>
      <md-dialog :md-active.sync="showDialog1">
        <div style="width: 500px; padding: 15px; border-radius: 50px;">
          <md-dialog-title>Edit the Task for the team</md-dialog-title>

          <hr/>
          <div style="padding: 25px;">
            <h3>Add task description*</h3>


            <md-textarea
              style="background-color: gainsboro; border: none; border-radius: 10px; width: 100%; height: 100px;"
              placeholder="feed the task guidelines and information" v-model="details" md-counter="80"></md-textarea>

            <h3>Select Task Status*</h3>
            <div>
              <md-radio v-model="type" value="to do">To do</md-radio>
              <md-radio v-model="type" value="in prog">In progress</md-radio>
              <md-radio v-model="type" value="done">Tasks done</md-radio>
            </div>

            <h3>Due date*</h3>
           
              <md-input v-model="date" placeholder="dd/mm/yyyy"  style="background-color: gainsboro; border: none; border-radius: 10px; width: 33%; height: 40px;"></md-input>
              <md-icon>event</md-icon>
           
          </div>


          <md-button class="md-raised" @click="dlt(d)"
              style="background-color: rgb(224, 61, 32); color: white; margin-left: 15px; margin-right: 15px; padding: 0px 25px; border-radius: 5px;">
              delete Task
            </md-button>

          <md-button class="md-raised" @click="update(d)"
              style="background-color: rgba(33, 158, 188, 1); color: white; margin-left: 15px; margin-right: 15px; padding: 0px 25px; border-radius: 5px;">
              update Task
            </md-button>

         
        </div>
      </md-dialog>


    </div>
  </div>



</template>

<style lang="scss" scoped>
  .md-app {
    height: 1000px;

  }

  .ev{
    background-color: orangered;
    margin: 5px;
    padding: 10px;
    border-radius: 4px;
  }

  .od{
    background-color: rgb(255, 179, 0);
    margin: 5px;
    padding: 10px;
    border-radius: 4px;
  }
  
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
  export default {
    name: 'Normal',
    data(){
      return{
      showDialog: false,
      showDialog1: false,
      details:'',
      type:'done',
      date:'',
      d:'',
      list:this.$store.state.list
      }
    },
    methods:{
      dlt(d){
        delete this.list[d]
        this.$store.commit('list',this.list)
        this.showDialog1 = false
      },

      update(d){
        const t={}
        this.list[d]={};
       t['details']= this.details
        t['date'] = this.date
        t['type'] = this.type
        this.list[d.toString()] = t
        console.log(this.list);
        this.$store.commit('list',this.list)
        this.showDialog1 = false
      },

      create(){
        const d = new Date();
        const t={}
        this.list[d]={};
       t['details']= this.details
        t['date'] = this.date
        t['type'] = this.type
        this.list[d.toString()] = t
        console.log(this.list);
        this.$store.commit('list',this.list)
        this.showDialog = false
      },

    }

  }
</script>