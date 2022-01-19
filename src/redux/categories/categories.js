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
  ],
};

export default function categoriesReducer(state = initialState) {
  return state;
}
