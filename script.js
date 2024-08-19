document.getElementById('color-input').addEventListener('input', function() {
    const color = this.value;
    document.getElementById('color-display').style.backgroundColor = color;
    document.getElementById('hex-input').value = color;
    document.getElementById('rgb-input').value = hexToRgb(color);
});

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

function copyToClipboard(elementId) {
    const input = document.getElementById(elementId);
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert(`${input.value} copied to clipboard!`);
}
