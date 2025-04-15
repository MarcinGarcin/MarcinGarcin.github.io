console.log("Loading pages initialized");

const urls = [
    "https://tapthatball.onrender.com/",
    "https://learningcenter.onrender.com/",
    "https://mathtrainer.onrender.com/"
];

urls.forEach(url => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    document.body.appendChild(iframe);
});
