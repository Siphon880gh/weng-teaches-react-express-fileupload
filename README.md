# Weng Teaches File Upload with Express-FileUpload

![Last Commit](https://img.shields.io/github/last-commit/Siphon880gh/weng-teaches-react-express-fileupload/main)
<a target="_blank" href="https://github.com/Siphon880gh" rel="nofollow"><img src="https://img.shields.io/badge/GitHub--blue?style=social&logo=GitHub" alt="Github" data-canonical-src="https://img.shields.io/badge/GitHub--blue?style=social&logo=GitHub" style="max-width:10ch;"></a>
<a target="_blank" href="https://www.linkedin.com/in/weng-fung/" rel="nofollow"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue" alt="Linked-In" data-canonical-src="https://img.shields.io/badge/LinkedIn-blue?style=flat&amp;logo=linkedin&amp;labelColor=blue" style="max-width:10ch;"></a>
<a target="_blank" href="https://www.youtube.com/@WayneTeachesCode/" rel="nofollow"><img src="https://img.shields.io/badge/Youtube-red?style=flat&logo=youtube&labelColor=red" alt="Youtube" data-canonical-src="https://img.shields.io/badge/Youtube-red?style=flat&amp;logo=youtube&amp;labelColor=red" style="max-width:10ch;"></a>

:page_facing_up: Description:
---
By Weng Fei Fung. This is a lesson made to help students. Learn how to upload files on React with the Express-FileUpload middleware. Files are stored in your file structure. Please note in order to persist rendering of the files (for example, image library that you come back to), you may want to use localStorage or a database to store the uploaded-to file paths. If using Heroku, keep in mind they have an ephemeral file structure that resets your changes when the Dyno restarts - in which case, I recommend checking out my lesson on [Amazon's AWS S3 File Upload](weng-teaches-react-aws-s3-file-upload) as an alternate to Express-FileUpload.

Don't forget that the client's npm build script should have `&& cd build && mkdir uploads` in order to make sure an uploads/ folder exists inside your static path build/. Otherwise, the server does not have a valid folder path to save to.
