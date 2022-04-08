<h1 align="center">
  <a href="https://upload.io/uploader">
    <img alt="Uploader" width="276" height="80" src="https://raw.githubusercontent.com/upload-io/assets/master/logo-uploader.svg">
  </a>
</h1>

<p align="center"><b>jQuery File Upload Plugin</b><br/> (jQuery Wrapper for <a href="https://upload.io/uploader">Uploader</a>)</p>

<br/>
<p align="center">
  <a href="https://github.com/upload-io/jquery-uploader/">
    <img src="https://img.shields.io/badge/gzipped-29%20kb-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/@upload-io/jquery-uploader">
    <img src="https://img.shields.io/badge/@upload--io/jquery--uploader-npm-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/jquery-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/badge/build-passing-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/@upload-io/jquery-uploader">
    <img src="https://img.shields.io/npm/dt/jquery-uploader?color=%234ba0f6" />
  </a>
  <br/>

  <a href="https://www.npmjs.com/package/@upload-io/jquery-uploader">
    <img src="https://img.shields.io/badge/TypeScript-included-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/jquery-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/npms-io/maintenance-score/jquery-uploader?color=4ba0f6" />
  </a>

  <a target="_blank" href="https://twitter.com/intent/tweet?text=I%20just%20found%20Uploader%20%26%20Upload.io%20%E2%80%94%20they%20make%20it%20super%20easy%20to%20upload%20files%20%E2%80%94%20installs%20with%207%20lines%20of%20code%20https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader&hashtags=javascript,opensource,js,webdev,developers&via=UploadJS">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader%2F" />
  </a>

</p>

<h1 align="center">
  Quick Start — <a href="https://codepen.io/upload-js/pen/yLpvYew?editors=1010">Try on CodePen</a>
</h1>

<p align="center">To create a file upload button:</p>

```html
<!-- Install jQuery & jQuery Uploader -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://js.upload.io/jquery-uploader/v1"></script>

<script>
  // Call once at the start of your app.
  $.uploader.init({
    apiKey: "free"
  });

  // Displays the upload widget on all 'button' element clicks.
  // (You should narrow the selector down before using!)
  $("button").uploader({
    onComplete: files => {
      if (files.length === 0) {
        console.log('No files selected.')
      } else {
        console.log('Files uploaded:');
        console.log(files.map(f => f.fileUrl));
      }
    }
  });
</script>
```

# Installation

Install via NPM:

```shell
npm install jquery @upload-io/jquery-uploader
```

Or via YARN:

```shell
yarn add jquery @upload-io/jquery-uploader
```

Or via a `<script>` tag:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://js.upload.io/jquery-uploader/v1"></script>
```

## Usage

### Step 1) Initialize the `uploader` plugin

Call this once only — at the start of your app — before calling `$(x).uploader()`.

```javascript
// Get production-ready API keys from Upload.io
$.uploader.init({
  apiKey: "free"
});
```

### Step 2) Display the Upload Widget

To display a **file upload dialog** on click:

```javascript
$("button").uploader({
  onComplete: files => {
    if (files.length === 0) {
      console.log('No files selected.')
    } else {
      console.log('Files uploaded:');
      console.log(files.map(f => f.fileUrl));
    }
  }
});
```

To display a **file upload dropzone** inline on the page:

```javascript
$("div").uploader({
  dropzone: {
    width: "600px",
    height: "375px"
  },
  onUpdate: files => {
    if (files.length === 0) {
      console.log('No files selected.')
    } else {
      console.log('Files uploaded:');
      console.log(files.map(f => f.fileUrl));
    }
  }
});
```

## The Result

All callbacks receive an `Array<UploaderResult>`:

```javascript
{
  fileUrl: "https://upcdn.io/FW25...",          // The URL to use when serving this file.

  editedFile: undefined,                        // The edited file (if present). Same as below.

  originalFile: {
    accountId: "FW251aX",                       // The Upload.io account that owns the file.
    file: { ... },                              // DOM file object (from the <input> element).
    fileId: "FW251aXa9ku...",                   // The uploaded file ID.
    fileUrl: "https://upcdn.io/FW25...",        // The uploaded file URL.
    fileSize: 12345,                            // File size in bytes.
    mime: "image/jpeg",                         // File MIME type.
    suggestedOptimization: {
      transformationUrl: "https://upcdn.io/..", // The suggested URL for serving this file.
      transformationSlug: "thumbnail"           // Append to 'fileUrl' to produce the above URL.
    },
    tags: [                                     // Tags manually & auto-assigned to this file.
      { name: "tag1", searchable: true },
      { name: "tag2", searchable: true },
      ...
    ]
  }
}
```

## Full Documentation

`@upload-io/jquery-uploader` is a jQuery wrapper for `uploader`.

Please see: **[Uploader Docs](https://github.com/upload-io/uploader#%EF%B8%8F-configuration)**.

## Contribute

If you would like to contribute to Uploader:

1. Add a [GitHub Star](https://github.com/upload-io/jquery-uploader/stargazers) to the project (if you're feeling generous!).
2. Determine whether you're raising a bug, feature request or question.
3. Raise your issue or PR.

## License

[MIT](LICENSE)
