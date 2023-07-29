export interface ITask{
    id:number
    category: ICategory
    name: string
    isDone: boolean
    addTime: Date
};

export interface ICategory{
    id:number,
    name:string,
}
