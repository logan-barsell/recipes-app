export const recipeLayout = {
    uuid: String(Math.floor(Math.random() * 1000)),
    title: "",
    description: "",
    images: {
        "full": "/img/placeholder.jpg",
        "medium": "/img/placeholder.jpg",
        "small": "/img/placeholder.jpg"
    },
    servings: "",
    prepTime: "",
    cookTime: "",
    postDate: "",
    editDate: "",
    ingredients: [
        {
            uuid: String(Math.floor(Math.random() * 1000)),
            int: 0,
            frac: 0,
            amount: "",
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
    int: 0,
    frac: 0,
    amount: "",
    measurement: "",
    name: ""
}

export const stepLayout = {
    uuid: "",
    instructions: "",
    optional: false
}