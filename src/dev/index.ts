import { UploadWidgetResult } from "uploader";
import "@upload-io/jquery-uploader";

($ as any).uploader.init({
  apiKey: "free"
});

($("button") as any).uploader({
  onComplete: (files: UploadWidgetResult[]) => {
    if (files.length === 0) {
      console.log("No files selected.");
    } else {
      console.log("Files uploaded:");
      console.log(files.map(f => f.fileUrl));
    }
  }
});

($("#dropzone") as any).uploader({
  dropzone: {
    width: "600px",
    height: "375px"
  },
  onUpdate: (files: UploadWidgetResult[]) => {
    if (files.length === 0) {
      console.log("No files selected in dropzone.");
    } else {
      console.log("Files uploaded in dropzone:");
      console.log(files.map(f => f.fileUrl));
    }
  }
});
