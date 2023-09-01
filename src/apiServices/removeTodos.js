export const removeTodo = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Delete error');
    }
  } catch (error) {
    console.error('Error task delete:', error);
    throw error;
  }
};
