const initialState = {
  categories: [
    {
      id: 1,
      name: 'Programming',
    },
    {
      id: 2,
      name: 'Design',
    },
    {
      id: 3,
      name: 'Business',
    },
    {
      id: 4,
      name: 'Marketing',
    },
    {
      id: 5,
      name: 'Fiction',
    },
    {
      id: 6,
      name: 'Non-Fiction',
    },
    {
      id: 7,
      name: 'Cooking',
    },
  ],
};

export default function categoriesReducer(state = initialState) {
  return state;
}
