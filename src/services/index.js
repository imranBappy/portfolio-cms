export async function createPage(data) {
  try {
    const res = await fetch(`/api/page`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getPages() {
  try {
    const res = await fetch(`http://localhost:3000/api/page`);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
