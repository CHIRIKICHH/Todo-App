import { ITask } from '../models'

export const tasks: ITask[] = [{
    id: 1,
    category: {
        id: 1, 
        name:"Uncategorized",
    },
    name: "Get a new helmet",
    isDone: false,
    addTime: new Date("2023, 07, 26, 17,36,22,10")
},
{
    id: 2,
    category: {
        id:2,
        name:"Groceries"
    },
    name: "Purchase Milk and Corn Flakes",
    isDone: false,
    addTime: new Date("2023, 07, 26, 17,36,22,10")
},
{
    id: 3,
    category:{
        id:3,
        name: "Payments"
    },
    name: "Pay mortgage",
    isDone: false,
    addTime: new Date("2023, 07, 26, 17,36,22,10")
},
{
    id: 4,
    category: {
        id: 4,
        name:"College"
    },
    name: "Complete Assignments",
    isDone: false,
    addTime: new Date("2023, 07, 26, 17,36,22,10")
},
{
    id: 5,
    category: {
        id:1,
    name: "Uncategorized"
    },
    name: "Replace laptop's screen",
    isDone: true,
    addTime: new Date("2023, 07, 26, 17,36,22,10")
}]