import { useState } from "react";
import { ICategory } from "../models";

interface CategoryProps{
    category:ICategory
}

export function Category({category}:CategoryProps, currentCategory:ICategory){
    const[isSelected, setSelectedCategory] = useState(false)
    if(currentCategory.id == category.id){
        setSelectedCategory(true);
    }
    return (
    <li className={`text-[${isSelected ? "#EA5959" : "#5A5A5A"}] text-xl font-medium min-w-[50%] text-left list-none`}>{category.name}</li>
    )
}