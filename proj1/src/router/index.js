import Vue from 'vue'

import Router from 'vue-router'

//import QUEs3 from '../components/task1'
 //import emit1 from './home/agile/Krishna/proj1/src/components/emitparent .vue'
//import Task2 from '/home/agile/Krishna/proj1/src/components/task2.vue'
//import Task3 from '/home/agile/Krishna/proj1/src/components/task3.vue'
//import form from '/home/agile/Krishna/proj1/src/components/form.vue'
//import form2 from'/home/agile/Krishna/proj1/src/components/form2.vue'
//import form3 from '/home/agile/Krishna/proj1/src/components/18/04/form3.vue'
//import fetchapi from'/home/agile/Krishna/proj1/src/components/fetchapi.vue'
//import fetchapi from'/home/agile/Krishna/proj1/src/components/18/04/fetchapi.vue'
//import axios from '/home/agile/Krishna/proj1/src/components/axios.vue'
import axios from '/home/agile/Krishna/proj1/src/components/axios.vue'
//import callback from '/home/agile/Krishna/proj1/src/components/callback.vue'
//import parentprop from '/home/agile/Krishna/proj1/src/components/parentprop.vue'
//import Callback from '/home/agile/Krishna/proj1/src/components/callback.vue'
//import axios2 from '/home/agile/Krishna/proj1/src/components/axios2.vue'
//import Que1 from'/home/agile/Krishna/proj1/src/components/20/20/04 Assgn/Que1.vue'
//import Que4 from '/home/agile/Krishna/proj1/src/components/20/20/04 Assgn/Que4.vue'
//import Que9 from '/home/agile/Krishna/proj1/src/components/20/20/04 Assgn/Que9.vue'
// import Que7 from '../components/assignment child/Que7.vue'
//import Que3 from '../components/assignment child/Que3.vue'
//import Que10 from '../components/assignment child/Que10.vue'
//import form2 from '/home/agile/Krishna/proj1/src/components/18/04/form2.vue'
//import test from '../components/assignment child/test.vue'
//import class from '../home/agile/Krishna/proj1/src/components/assignment child/class.vue'
//import Que8 from '../components/assign2/Que8.vue'
//import Que8 from '../components/assgn2/Que8.vue'
//import que10 from '../components/assgn2/que10.vue'
//import Que7 from '../components/assgn2/Que7.vue'
//import Promises from'../home/agile/Krishna/proj1/src/components/assgn2/Promises.vue'
//import Promises from '../components/assgn2/Promises.vue'
//import Promises from '../home/agile/Krishna/proj1/src/components/assgn2/Promises.vue'
//import promise1 from '../components/assgn2/promises1.vue'
import promises2 from '../components/promises2.vue'
//import Qn8 from '../components/Assgn4/Qn8.vue'
//import quen10 from '../components/Assgn4/quen10.vue'
//import que7 from '../components/Assgn4/que7.vue'
//import Que5p from '../components/Assgn4/Que5p.vue'
//import Que1 from '../components/Assgn4/Que1.vue'
//import Que2 from '../components/Assgn4/Que2.vue'
//import Que6 from '../components/Assgn4/Que6.vue'
//import Que4p from '../components/Assgn4/Que4p.vue'
//import Que9 from '../components/Assgn4/Que9.vue'
import que1 from '../components/Assgn26/que1.vue'
import que2 from '../components/Assgn26/que2.vue'
import que4 from '../components/Assgn26/que4.vue'
import que5 from '../components/Assgn26/que5.vue'
//import Que3 from '../components/Assgn26/Que3.vue'
import Que6 from '../components/Assgn26/Que6.vue'
//import Case from '../components/27-04/Case.vue'
//import task from '../components/27-04/task.vue'
import task1 from '../components/27-04/task1.vue'
import task2 from '../components/27-04/task2'
import task3 from '../components/27-04/task3'
import task4 from '../components/27-04/task4'
import promise3 from '../components/promise3.vue'
import Que1 from '../components/assgn28-04/Que1.vue'
import Que2 from '../components/assgn28-04/Que2.vue'

Vue.use(Router)



const routes = [
    
    

// {
//     path: '/fetchapi',
//    name:"fetchapi",
//     component:fetchapi
// },
// {
//     path: '/cal',
//    name:"calback",
//     component:callback
// },
//   {
//       path: '/props',
//      name:"Parentprop",
//       component:parentprop
//   },

//{
    //path: '/callback',
   //name:"Callback",
    //component:Callback
//},
 {
    path: '/axios',
    name:"axios",
     component:axios
 },
//{
    //path: '/Que1',
  // name:"Que1",
    //component:Que1
//},
//{
  //  path: '/Que4',
   //name:"Que4",
    //component:Que4
//},
// {
//     path: '/Que9',
//    name:"Que9",
//     component:Que9
// },
// 
// {
//   path:'/Q3',
//   name:"Que3",
//   component:Que3
// },
// {
//   path:'/Q10',
//   name:"Que10",
//   component:Que10
// }
// {
//   path:'/form2',
//   name:"form2",
//   component:form2
// },
// {
//   path:'/test',
//   name:"test",
//   component:test
// },{
  //   path:'/Que6',
  //   name:"Que6",
  //   component:Que6
  // },
// {
//   path:'/Que8',
//   name:"Que8",
//   component:Que8
// },
// {
//   path:'/Que10',
//   name:"Que10",
//   component:que10
// },
// {
//   path:'/Que7',
//   name:"Que7",
//   component:Que7
// },
// {
//   path:'/prom1',
//   name:"Promises1",
//   component:promise1
// },
 {
   path:'/prom2',
   name:"Promises2",
   component:promises2
 },
//  {
//      path:'/Que6',
//      name:"Que6",
//      component:Que6
//    },
//    {
//       path:'/qn8',
//       name:"qn8",
//       component:Qn8
//     },
//    {
//     path:'/quen10',
//     name:"quen10",
//     component:quen10
//   },
//   {
//     path:'/que7',
//     name:"que7",
//     component:que7
//   },
//   {
//     path:"/que5",
//     name:"Que5",
//     component:Que5p
//   },
//   {
//     path:'/Que1',
//     name:"Que1",
//     component:Que1
//   },
//   {
//     path:'/Que2',
//     name:"Que2",
//     component:Que2
//   },
//     {
//       path:'/Que4p',
//      name:"QuE4p",
//      component:Que4p
//     },
//    {
//     path:'/Que9',
//    name:"QuE9",
//    component:Que9
//   },
   {
     path:'/que1',
   name:"QuE1",
    component:que1
   },
  {
    path:'/que2',
   name:"QuE2",
   component:que2
  },
  {
    path:'/que4',
   name:"QuE4",
   component:que4
  },
  {
    path:'/que5',
   name:"QuE5",
   component:que5
  },
//    {
//      path:'/que3',
//    name:"QuE3",
//     component:Que3
//  },
 {
  path:'/que6',
name:"QuE6",
 component:Que6
},
// {
//   path:'/case1',
//   name:"CasE",
//  component:Case
// },
// {
//   path:'/axios2',
// name:"Axios2",
//  component:axios2
// },
 {
   path:'/task1',
 name:"task1",
  component:task1
 },
 {
  path:'/task2',
name:"task2",
 component:task2
},
{
  path:'/task3',
name:"task3",
 component:task3
},
{
  path:'/task4',
name:"task4",
 component:task4
},
{
  path:'/prom3',
name:"promse3",
 component:promise3
},
{
  path:'/Q1',
name:"Que1",
 component:Que1
},
{
  path:'/Q2',
name:"Que2",
 component:Que2
},
]


let router = new Router({ routes })


export default router