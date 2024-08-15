import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { NextApiResponse } from 'next';
import { uploadBytes, getDownloadURL, ref , listAll} from "firebase/storage";
import { storage } from "@/Config/firebase.config";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
};

export default async function handler(req: any, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { html, css, slug, metaTags } = req.body;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${metaTags}
        <link rel="stylesheet" href="https://web.vodafone.com.eg/theme-assets/hometheme/css/styles.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <style>${css}</style>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </head>
        ${html}
      </html>
  `;

  try {
    const htmlFilePath = `pages/${slug}/index.html`;
    const cssFilePath = `pages/${slug}/styles.css`;

    const htmlRef = ref(storage, htmlFilePath);
    await uploadBytes(htmlRef, Buffer.from(htmlContent, 'utf-8'), { contentType: 'text/html' });


    const cssRef = ref(storage, cssFilePath);
    await uploadBytes(cssRef, Buffer.from(css, 'utf-8'), { contentType: 'text/css' });

    const htmlUrl = await getDownloadURL(htmlRef);

    // Return the URL to access the page
    res.status(200).json({ url: htmlUrl });
  } catch (error) {
    console.error('Error uploading to Firebase Storage:', error);
    res.status(500).json({ error: 'Failed to upload files' });
  }


  // // if (req.method !== 'POST') {
  // //   return res.status(405).json({ error: 'Method not allowed' });
  // // }

  // const { html, css, slug , metaTags} = req.body;

  // const publicDir = path.join(process.cwd(), 'public', 'pages', slug);

  // // Ensure the directory exists
  // if (!fs.existsSync(publicDir)) {
  //   fs.mkdirSync(publicDir, { recursive: true });
  // }

  // fs.writeFileSync(path.join(publicDir, 'index.html'), `
  //   <!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     ${metaTags}
  //     <link rel="stylesheet" href="https://web.vodafone.com.eg/theme-assets/hometheme/css/styles.css" />
  //     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
  //     <style>${css}</style>
  //     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  //   </head>
  //     ${html}
  //   </html>
  // `);

  // fs.writeFileSync(path.join(publicDir, 'styles.css'), css);

  // exec('firebase deploy --only hosting', (err, stdout, stderr) => {
  //   if (err) {
  //     console.error('Deployment failed:', err);
  //     return res.status(500).json({ error: 'Failed to deploy' });
  //   }

  //   const cleanStdout = stdout.replace(/\x1B\[[0-9;]*[JKmsu]/g, '');
  //   const urlMatch = cleanStdout.match(/Hosting URL:\s*(\S+)/);

  //   if (urlMatch && urlMatch[1]) {
  //     const url = urlMatch[1]; // Extract the URL and trim any whitespace
  //     return res.status(200).json({ url: `${url}/pages/${slug}` }); // Send successful response with URL
  //   } else {
  //     res.status(500).json({ error: 'Failed to get URL' });
  //   }
  // });
}
