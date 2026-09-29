async function handleDownload() {
    const button = document.getElementById("downlaod");

    const fileUrl = './DVLDApp.zip'; 
    const fileName = 'DVLDApp.zip';

    button.disabled = true;
    button.style.cursor = 'not-allowed';
    button.style.opacity = '0.7';
    const originalText = button.innerText;
    button.innerText = 'Dwonload...';

    try {
    const response = await fetch(fileUrl);

    if (!response.ok) {
        throw new Error("Error: Can't Download This File");
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(downloadUrl);

    } catch (error) {
        console.error(error);
        alert('Error: Try Again Later');
    } finally {
        button.disabled = false;
        button.style.cursor = 'pointer';
        button.style.opacity = '1';
        button.innerText = originalText;
    }
}