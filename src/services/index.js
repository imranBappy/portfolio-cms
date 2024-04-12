export async function createPage(data) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/page`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/page`);
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getPage(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/page/${id}`
    );
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updatePage(data) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/page`, {
      method: "PUT",
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

// upload image to cloudinary
export async function uploadImages(files) {
  const urls = [];
  try {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      if (!file?.file && !file.url) {
        continue;
      }
      if (!file?.file && file?.url && file?._id) {
        urls.push({
          url: file.url,
          _id: file?._id,
        });
        continue;
      }
      if (file?.file && file?._id) {
        formData.append("file", file?.file);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/uploads`,
          {
            method: "POST",
            body: formData,
          }
        );
        const result = await res.json();
        urls.push({
          url: result.url,
          _id: file?._id,
        });
        continue;
      }

      formData.append("file", file?.file);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/uploads`,
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await res.json();
      urls.push({ url: result.url });
    }
    return urls;
  } catch (error) {
    console.error(error);
    return null;
  }
}
