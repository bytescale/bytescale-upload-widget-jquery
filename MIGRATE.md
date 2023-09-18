# Migration Guide

## From jQuery Uploader (`@upload-io/jquery-uploader`)

Steps:

1. Install `@bytescale/upload-widget-jquery`
2. Uninstall `@upload-io/jquery-uploader` and `uploader`
3. Replace `"@upload-io/jquery-uploader"` with `"@bytescale/upload-widget-jquery"` in your `import` statements.
4. Replace `uploader` with `upload-widget` in all CSS class name overrides (if you have any).
5. Replace `onUpdate: (files) => {}` with `onUpdate: ({uploadedFiles}) => {}`.
6. Remove `uploader` (from imports and props)
7. Remove `$.uploader.init(...)`
8. Replace `.uploader({...})` with `.bytescaleUploadWidget({...})`
9. Add `apiKey` as a field to the object passed to the `bytescaleUploadWidget` method (add it if you don't have one).

### Before

```html
<template>
  <button @click="uploadFile">Upload a file...</button>
</template>

<script lang="ts">
  import { Uploader } from "uploader";
  import { openUploadModal } from "@upload-io/jquery-uploader";
  import type { UploadWidgetConfig, UploadWidgetResult } from "uploader";
  import type { PreventableEvent } from "@upload-io/jquery-uploader";

  // Create one instance per app. (Get API keys from Bytescale)
  const uploader = Uploader({
    apiKey: "free"
  });

  // See "customization" below.
  const options: UploadWidgetConfig = {
    multi: true
  };

  export default {
    name: "App",
    methods: {
      uploadFile(event: PreventableEvent) {
        openUploadModal({
          event,
          uploader,
          options,
          onComplete: (files: UploadWidgetResult[]) => {
            if (files.length === 0) {
              alert("No files selected.");
            } else {
              alert(files.map(f => f.fileUrl).join("\n"));
            }
          }
        })
      }
    }
  };
</script>
```

### After

```html
<template>
  <button @click="uploadFile">Upload a file...</button>
</template>

<script lang="ts">
  import { openUploadModal } from "@bytescale/upload-widget-jquery";
  import type { UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";
  import type { PreventableEvent } from "@bytescale/upload-widget-jquery";

  // Full Configuration:
  // https://www.bytescale.com/docs/upload-widget#configuration
  const options: UploadWidgetConfig = {
    apiKey: "free", // Get API keys from: www.bytescale.com
    maxFileCount: 10
  };

  export default {
    name: "App",
    methods: {
      uploadFile(event: PreventableEvent) {
        openUploadModal({
          event,
          options,
          onComplete: (files: UploadWidgetResult[]) => {
            if (files.length === 0) {
              alert("No files selected.");
            } else {
              alert(files.map(f => f.fileUrl).join("\n"));
            }
          }
        })
      }
    }
  };
</script>
```

## See also

Bytescale migration guides listed below:

- [Migrating from `upload-js` to `@bytescale/sdk`](https://github.com/bytescale/bytescale-javascript-sdk/blob/main/MIGRATE.md)
- [Migrating from `uploader` to `@bytescale/upload-widget`](https://github.com/bytescale/bytescale-upload-widget/blob/main/MIGRATE.md)
- [Migrating from `jquery-uploader` to `@bytescale/upload-widget-jquery`](https://github.com/bytescale/bytescale-upload-widget-jquery/blob/main/MIGRATE.md)
- [Migrating from `angular-uploader` to `@bytescale/upload-widget-angular`](https://github.com/bytescale/bytescale-upload-widget-angular/blob/main/MIGRATE.md)
- [Migrating from `@upload-io/vue-uploader` to `@bytescale/upload-widget-vue`](https://github.com/bytescale/bytescale-upload-widget-vue/blob/main/MIGRATE.md)
- [Migrating from `@upload-io/jquery-uploader` to `@bytescale/upload-widget-jquery`](https://github.com/bytescale/bytescale-upload-widget-jquery/blob/main/MIGRATE.md)
