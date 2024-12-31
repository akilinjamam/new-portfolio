

export const updloadCloudinaryImage = (imgFile, setImgHolder, setUploading) => {

    const data = new FormData();
    data.append("file", imgFile);
    data.append("upload_preset", "smipgehv");
    data.append("cloud_name", "dw57lx7qa");

    console.log('hello');

    setUploading(true)

    fetch("https://api.cloudinary.com/v1_1/dw57lx7qa/image/upload", {
        method: "post",
        body: data
    })
        .then(res => res.json())
        .then(res => {
            setImgHolder(res?.url)
            setUploading(false)
            alert('image successfully added')

        }).catch(err => {
            alert(err)
            console.log(err);
            setUploading(false)
        })
        .catch((error) => console.log(error));
}