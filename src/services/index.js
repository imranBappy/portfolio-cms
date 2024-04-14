import { fileToBase64 } from "@/utils";

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
// Example code to show how to upload images using an unsigned preset
// and a form.

// Note, for security reasons, the upload preset used in this example
// sets the access control mode of the uploaded assets to restricted,
// so the URLs returned in the response will return 404 errors.

// const url = "https://api.cloudinary.com/v1_1/do5erbtee/image/upload";
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const files = document.querySelector("[type=file]").files;
//   const formData = new FormData();

//   for (let i = 0; i < files.length; i++) {
//     let file = files[i];
//     formData.append("file", file);
//     formData.append("upload_preset", "portfolio-cms");

//     fetch(url, {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => {
//         return response.text();
//       })
//       .then((data) => {});
//   }
// });

// upload image to cloudinary
export async function uploadImages(files) {
  console.log(files);
  const urls = [];
  const url = "https://api.cloudinary.com/v1_1/do5erbtee/image/upload";
  try {
    for (let i = 0; i < files.length; i++) {
      const item = files[i];
      if (!item?.file && !item.url) {
        continue;
      }
      if (!item?.file && item?.url && item?._id) {
        urls.push({
          url: item.url,
          _id: item?._id,
        });
        continue;
      }
      if (item?.file && item?._id) {
        const base64 = await fileToBase64(item?.file);
        const res = await fetch(`${url}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file: base64,
            upload_preset: "portfolio-cms",
          }),
        });
        const result = await res.json();
        urls.push({ url: result.url });
        continue;
      }
      const base64 = await fileToBase64(item?.file);
      const res = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file: base64,
          upload_preset: "portfolio-cms",
        }),
      });
      const result = await res.json();
      urls.push({ url: result.url });
    }
    return urls;
  } catch (error) {
    console.error(error);
    return null;
  }
}
