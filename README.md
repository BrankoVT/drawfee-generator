# 1ITF Sass-Bootstrap5 Project (2022-2023)

## Team 10

| Pages    | Name                                  | Class   | GitHub Username                 |
|:---------|:--------------------------------------| :------ | :------------------------------ |
| student1 | Branko Van Tendeloo (mailto:r0949489@student.thomasmore.be) | 1ACS 02 | BrankoVT (https://github.com/BrankoVT) |
| student2 | Pauline Valgaeren (mailto:r0781850@student.thomasmore.be) | 1ACS 02 | pvalgaeren (https://github.com/pvalgaeren) |
| student3 | Fatma (mailto:) | 1ACS 02 | Coban (https://github.com/Coban) |

- **GitHub Repo**: https://github.com/itfactory-tm/WebAdv-23-team-620
- **Netlify Hosting**: https://lilysbouquet.netlify.app

## Setup Netlify Hosting
- [x] Create a new folder on your computer and name it e.g. `netlify`
- [x] Create a simple `index.html` file in the `netlify` folder
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Netlify Test</title>
    </head>
    <body>
        <h1>Netlify Test</h1>
    </body>
    </html>
    ```
- [x] Go to [Netlify](https://www.netlify.com/) and login with your GitHub account
- [x] Go to the **Sites** tab and click on the **Add new site** dropdown and select **Deploy manually**
- [x] Drag and drop the **netlify folder** (not the `index.html` page) into the Netlify window
    Your new website should be visible at [https://subdomain.netlify.app](https://subdomain.netlify.app) where `subdomain` is a random name Netlify has generated for you
- [x] Open your site settings and rename the subdomain to something more meaningful
  - Click on the **Domain settings** button
  - Click on the **Options** dropdown and select **Edit site name**
  - Enter a new name and click on the **Save** (E.g. `1ITF-2023-Team-xxx` where `xxx` is your team number)
- [x] Get your **site ID** (you will need this for GitHub Actions
  - Click on the **Site settings** link at the top of the page
  - Copy the **Site ID** value
- [x] Get your **Personal Access Token** (you will need this for GitHub Actions)
  - Go to [https://app.netlify.com/user/applications/personal](https://app.netlify.com/user/applications/personal)
  - Enter a description for your token (e.g. `Netlify Deploy from GitHub Actions`)
  - Click on the **Generate Token** button
  - Copy the new token value and save it somewhere safe (you will not be able to see it again!)

## Complete GitHub Actions setup
- [x] Add your Netlify credentials to your GitHub repo
  - Go to your GitHub repository and click on the **Settings** tab
  - Click on the **Secrets and variables** -> **Actions** link on the left
  - Click on the **New repository secret** button
    - Enter `NETLIFY_SITE_ID` as the **Name** and paste your **site ID** as the **Value**
    - Click on the **Add secret** button
  - Click on the **New repository secret** button
    - Enter `NETLIFY_AUTH_TOKEN` as the **Name** and paste your **Personal Access Token** as the **Value**
    - Click on the **Add secret** button
    
## Congratulations!
You have now completed the setup of your GitHub repo and Netlify hosting.  
You can now start working on your project!  

- Don't forget to update the first part of the `README.md` file with your team members, the GitHub repo URL and the Netlify hosting URL
- Update the checklist in the `README.md` file as you complete the tasks (replace the `[ ]` with `[x]`)
