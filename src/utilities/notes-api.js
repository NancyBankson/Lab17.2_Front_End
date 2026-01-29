export async function getNotes() {
  try { 
    console.log(`${import.meta.env.VITE_API_URL}/api`)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/notes`);
    if (!response.ok) throw new Error("API Error! Response was not ok.");
    console.log(response.json);
    const data = await response.json();
    console.log(await data);
    return data;
  } catch(error) {
    console.error(error);
  }
}

export async function createNote(formData) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (!response.ok) throw new Error("API Error! Response was not ok.");
    const data = await response.json();
    console.log(data);
    return data;
  } catch(error) {
    console.error(error);
  }
}