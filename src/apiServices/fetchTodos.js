export const fetchTodos = async () => {
  try {
    const response = await fetch('http://localhost:3001/todos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error task fetch:', error);
    throw error;
  }
};
