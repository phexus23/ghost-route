var url = "data:text/html;charset=utf-8,%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%3Ctitle%3Egames%3C%2Ftitle%3E%0A%20%20%3Cstyle%3E%0A%20%20%20%20body%20%7B%0A%20%20%20%20%20%20font-family%3A%20Arial%2C%20sans-serif%3B%0A%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20flex-direction%3A%20column%3B%0A%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20%20%20height%3A%20100vh%3B%0A%20%20%20%20%20%20background-color%3A%20%23f0f0f0%3B%0A%20%20%20%20%7D%0A%20%20%20%20input%20%7B%0A%20%20%20%20%20%20padding%3A%2010px%3B%0A%20%20%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20%20%20margin-bottom%3A%2010px%3B%0A%20%20%20%20%7D%0A%20%20%20%20button%20%7B%0A%20%20%20%20%20%20padding%3A%2010px%2020px%3B%0A%20%20%20%20%20%20font-size%3A%2016px%3B%0A%20%20%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20%20%20border%3A%20none%3B%0A%20%20%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20%20%20background-color%3A%20%234CAF50%3B%0A%20%20%20%20%20%20color%3A%20white%3B%0A%20%20%20%20%20%20transition%3A%20background%200.3s%3B%0A%20%20%20%20%7D%0A%20%20%20%20button%3Ahover%20%7B%0A%20%20%20%20%20%20background-color%3A%20%2345a049%3B%0A%20%20%20%20%7D%0A%20%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%0A%20%20%3Ch1%3EOver%20here%3C%2Fh1%3E%0A%20%20%3Cinput%20id%3D%22urlInput%22%20placeholder%3D%22Enter%20full%20URL%20(e.g.%2C%20https%3A%2F%2Fexample.com)%22%3E%0A%20%20%3Cbutton%20onclick%3D%22openGame()%22%3EOpen%3C%2Fbutton%3E%0A%0A%20%20%3Cscript%3E%0A%20%20%20%20function%20openGame()%20%7B%0A%20%20%20%20%20%20const%20url%20%3D%20document.getElementById('urlInput').value.trim()%3B%0A%20%20%20%20%20%20if%20(!url)%20%7B%0A%20%20%20%20%20%20%20%20alert('%E2%9A%A0%EF%B8%8F%20Please%20enter%20a%20URL.')%3B%0A%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%2F%2F%20Ensure%20URL%20starts%20with%20http%3A%2F%2F%20or%20https%3A%2F%2F%0A%20%20%20%20%20%20const%20fullUrl%20%3D%20url.match(%2F%5Ehttps%3F%3A%5C%2F%5C%2F%2F)%20%3F%20url%20%3A%20'https%3A%2F%2F'%20%2B%20url%3B%0A%0A%20%20%20%20%20%20const%20win%20%3D%20window.open(''%2C%20'_blank')%3B%0A%20%20%20%20%20%20win.document.body.style.margin%20%3D%20%220%22%3B%0A%20%20%20%20%20%20const%20iframe%20%3D%20win.document.createElement('iframe')%3B%0A%20%20%20%20%20%20iframe.src%20%3D%20fullUrl%3B%0A%20%20%20%20%20%20iframe.style.width%20%3D%20%22100%25%22%3B%0A%20%20%20%20%20%20iframe.style.height%20%3D%20%22100vh%22%3B%0A%20%20%20%20%20%20iframe.style.border%20%3D%20%22none%22%3B%0A%20%20%20%20%20%20win.document.body.appendChild(iframe)%3B%0A%20%20%20%20%7D%0A%20%20%3C%2Fscript%3E%0A%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E%0A"

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Games HAHA LANSCHOOL</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }
        iframe {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <iframe src="${url}"></iframe>
</body>
</html>
`;

const blob = new Blob([html], { type: 'text/html' });
const blobUrl = URL.createObjectURL(blob);
window.open(blobUrl);
