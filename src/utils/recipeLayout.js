export const recipeLayout = {
    uuid: Math.floor(Math.random() * 1000),
    title: "",
    description: "",
    servings: "",
    prepTime: "",
    cookTime: "",
    postDate: "",
    editDate: "",
    ingredients: [
        {
            uuid: Math.floor(Math.random() * 1000),
            amount: {
                int: "",
                frac: ""
            },
            measurement: "",
            name: ""
        },
    ],
    directions: [
        {
            instructions: "",
            optional: false
        }
    ]
}

export const ingredientLayout = {
    uuid: "",
    amount: {
        int: "",
        frac: ""
    },
    measurement: "",
    name: ""
}

export const stepLayout = {
    uuid: "",
    instructions: "",
    optional: false
}